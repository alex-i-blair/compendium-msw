import React from 'react';
import { useState, useEffect } from 'react';
import ComicList from '../components/ComicList';
import Header from '../components/Header';
import styles from '../styles/App.css';

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
      const res = await fetch(
        'http://localhost:8888/.netlify/functions/getXKCD'
      );
      const result = await res.json();
      setComics(result);
      setLoading(false);
    }
    getComics();
  }, []);

  return (
    <>
      <section className={styles.pageTop}>
        <Header comics={comics} loading={loading} />
        <div className={styles.filter}>
          <input placeholder="Filter" value={search} onChange={handleSearch} />
        </div>
      </section>
      <section className={styles.listContainer}>
        {loading ? <p>Loading...</p> : <ComicList comics={comicsList} />}
      </section>
    </>
  );
}
