import React, { useState, useEffect } from 'react';
import './App.css';
import { Character } from './types';
import { INITIAL_CHARACTERS } from './data/mockCharacters';

export function App(): React.JSX.Element {
  const [characters, setCharacters] = useState<Character[]>(INITIAL_CHARACTERS);
  const [searchName, setSearchName] = useState<string>('');
  const [selectedHouse, setSelectedHouse] = useState<string>('');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data: Character[]) => {
        // Filter characters that have an image or essential data
        const validCharacters = data.filter((item) => item.name);
        if (validCharacters.length > 0) {
          setCharacters(validCharacters);
        }
      })
      .catch((err) => {
        console.warn('Using fallback local characters data:', err);
      });
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const matchesName = char.name.toLowerCase().includes(searchName.trim().toLowerCase());
    const matchesHouse = selectedHouse === '' || char.house.toLowerCase() === selectedHouse.toLowerCase();
    return matchesName && matchesHouse;
  });

  return (
    <div className="page-wrapper">
      <div className="content-container">
        {/* Header */}
        <header className="header-section">
          <h1 className="header-title">Harry Potter</h1>
          <p className="header-subtitle">View all characters from the Harry Potter universe</p>
        </header>

        {/* Filters (Flexbox) */}
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="name-filter" className="filter-label">Name</label>
            <input
              id="name-filter"
              type="text"
              className="filter-input"
              placeholder="Hermione"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="school-filter" className="filter-label">School</label>
            <select
              id="school-filter"
              className="filter-select"
              value={selectedHouse}
              onChange={(e) => setSelectedHouse(e.target.value)}
            >
              <option value="">Choose one</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>
        </div>

        {/* Cards (CSS Grid) */}
        <main className="characters-grid">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((char) => (
              <article key={char.id || char.name} className="character-card">
                <div className="card-image-wrapper">
                  {char.image ? (
                    <img
                      src={char.image}
                      alt={char.name}
                      className="card-image"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'card-image-fallback';
                          fallback.textContent = char.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  ) : (
                    <div className="card-image-fallback">{char.name}</div>
                  )}
                </div>

                <div className="card-body">
                  <h2 className="character-name">{char.name}</h2>

                  <div className="character-info-line">
                    <span className="character-info-label">Actor:</span>
                    <span className="character-info-value">{char.actor || 'Unknown'}</span>
                  </div>

                  <div className="character-info-line">
                    <span className="character-info-label">Gender:</span>
                    <span className="character-info-value">{char.gender || 'Unknown'}</span>
                  </div>

                  <div className="character-info-line">
                    <span className="character-info-label">House:</span>
                    <span className="character-info-value">{char.house || 'None'}</span>
                  </div>

                  <div className="character-info-line">
                    <span className="character-info-label">Wand core:</span>
                    <span className="character-info-value">{char.wand?.core || 'unknown'}</span>
                  </div>

                  <div className="character-info-line">
                    <span className="character-info-label">Alive:</span>
                    <span className="character-info-value">{char.alive ? 'yes' : 'no'}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state">
              No characters found matching the criteria.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
