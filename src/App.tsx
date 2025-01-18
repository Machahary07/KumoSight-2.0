import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { MapPin, Github } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import type { WeatherData, ForecastData } from './types/weather';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1'; // Free OpenWeatherMap API key

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [defaultCity, setDefaultCity] = useState<string>('Loading location...');

  useEffect(() => {
    // Get current location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          setDefaultCity(response.data.name);
          await fetchWeatherByCoords(latitude, longitude);
        } catch (error) {
          console.error('Error getting location weather:', error);
          setDefaultCity('London');
          fetchWeatherByCity('London');
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setDefaultCity('London');
        fetchWeatherByCity('London');
      }
    );

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError(null);
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      ]);
      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      ]);
      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (error: any) {
      if (error.response?.status === 404) {
        setError(`City "${city}" not found. Please check the spelling and try again.`);
      } else {
        setError('Error fetching weather data. Please try again.');
      }
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col"
      style={{
        backgroundImage: `url('/pexels-pixabay-414727.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto space-y-8 flex-grow w-full">
        {/* Current Location & Time */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-white/80 mb-2">
            <MapPin className="w-5 h-5" />
            <span>{defaultCity}</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {format(currentTime, 'EEEE, MMMM d, yyyy')}
          </p>
          <p className="text-xl text-white/80">
            {format(currentTime, 'h:mm:ss a')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col items-center gap-2">
          <SearchBar onSearch={fetchWeatherByCity} />
          {error && (
            <div className="text-red-400 bg-red-900/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              {error}
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center text-white">Loading weather data...</div>
        ) : (
          <>
            {/* Current Weather */}
            {weather && <CurrentWeather data={weather} />}

            {/* Forecast */}
            {forecast && <Forecast data={forecast} />}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center p-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-white/80">
            <p>© {new Date().getFullYear()} KumoSight</p>
            <span>|</span>
            <p>Powered by OpenWeather API</p>
            <span>|</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;