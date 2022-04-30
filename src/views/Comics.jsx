import React from 'react';
import { useState, useEffect } from 'react';
import ComicList from '../components/ComicList';
import Header from '../components/Header';

export default function Comics() {
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const isSearching = !!search.length;
  const comicsList = isSearching ? results : comics;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredComics = comics.filter((comic) =>
      comic.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setResults(filteredComics);
  };

  useEffect(() => {
    async function getComics() {
      const res = await fetch('/.netlify/functions/getXKCD');
      const result = await res.json();
      setComics(result);
      setLoading(false);
    }
    getComics();
  }, []);

  return (
    <>
      <section className="page-top">
        <Header />
        <div className="filter">
          <input placeholder="Filter" value={search} onChange={handleSearch} />
        </div>
      </section>
      <section className="list-container">
        {loading ? <p>Loading...</p> : <ComicList comics={comicsList} />}
      </section>
    </>
  );
}
