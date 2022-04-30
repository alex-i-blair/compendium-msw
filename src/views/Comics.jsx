import React from 'react';
import { useState, useEffect } from 'react';
import ComicList from '../components/ComicList';

export default function Comics() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    async function getComics() {
      const res = await fetch('/.netlify/functions/getXKCD');
      const result = await res.json();
      setComics(result);
    }
    getComics();
  }, []);

  return (
    <>
      <section className="page-top">
        <header>
          Past 7 days of XKCK <span className="start-date"></span> to{' '}
          <span className="end-date"></span>
        </header>
        <div className="filter">
          <input placeholder="Filter" />
        </div>
      </section>
      <section className="list-container">
        <ComicList comics={comics} />
      </section>
    </>
  );
}
