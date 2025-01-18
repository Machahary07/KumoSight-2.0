import React from 'react';
import { format } from 'date-fns';
import { ForecastData } from '../types/weather';

interface ForecastProps {
  data: ForecastData;
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  // Get one forecast per day (at noon)
  const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 7);

  return (
    <div className="w-full max-w-4xl p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6">7-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        {dailyForecasts.map((forecast) => (
          <div
            key={forecast.dt}
            className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <p className="text-white/80 text-sm">
              {format(new Date(forecast.dt * 1000), 'EEE')}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
              className="w-12 h-12"
            />
            <p className="text-white font-bold">{Math.round(forecast.main.temp)}°C</p>
            <p className="text-white/60 text-xs capitalize">
              {forecast.weather[0].main}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};