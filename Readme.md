# Weather App

A beautiful weather application built with React, TypeScript, and Tailwind CSS that shows current weather and 7-day forecast for any city. Features a glassmorphism UI design and real-time weather updates using the OpenWeather API.

![Weather App Screenshot](/readmess.png)

## Features

- 🌍 Current location weather
- 🔍 City search functionality
- 🌡️ Current weather conditions
- 📅 7-day weather forecast
- ⏰ Real-time clock with date
- 💨 Wind speed, humidity, and visibility info
- 🎨 Glassmorphism UI design
- 📱 Responsive layout

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- npm (comes with Node.js)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This will install:
   - React and React DOM
   - TypeScript
   - Vite
   - Tailwind CSS
   - Axios for API requests
   - date-fns for date formatting
   - Lucide React for icons

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.tsx
│   │   ├── Forecast.tsx
│   │   └── SearchBar.tsx
│   ├── types/
│   │   └── weather.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Dependencies

### Main Dependencies
```json
{
  "axios": "^1.6.7",
  "date-fns": "^3.3.1",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "globals": "^15.9.0",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.3.0",
  "vite": "^5.4.2"
}
```

## Configuration Files

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### TypeScript
TypeScript configuration is split into three files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js-specific configuration

### Vite
Vite configuration in `vite.config.ts` includes React plugin and optimization settings.

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Acknowledgments

- OpenWeather API for weather data
- Unsplash for background images
- Lucide for icons
