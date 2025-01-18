import React from 'react';
import { Cloud, Droplets, Eye, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface CurrentWeatherProps {
  data: WeatherData;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-2">{data.name}</h2>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              className="w-20 h-20"
            />
            <div>
              <p className="text-5xl font-bold text-white">
                {Math.round(data.main.temp)}°C
              </p>
              <p className="text-xl text-white/80 capitalize">
                {data.weather[0].description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <Droplets className="w-5 h-5" />
            <div>
              <p className="text-sm">Humidity</p>
              <p className="text-lg font-semibold">{data.main.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Wind className="w-5 h-5" />
            <div>
              <p className="text-sm">Wind Speed</p>
              <p className="text-lg font-semibold">{data.wind.speed} m/s</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Eye className="w-5 h-5" />
            <div>
              <p className="text-sm">Visibility</p>
              <p className="text-lg font-semibold">{data.visibility / 1000} km</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Cloud className="w-5 h-5" />
            <div>
              <p className="text-sm">Feels Like</p>
              <p className="text-lg font-semibold">
                {Math.round(data.main.feels_like)}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};