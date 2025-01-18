import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};