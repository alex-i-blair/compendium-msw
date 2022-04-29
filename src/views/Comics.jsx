import React from 'react';
import { useState, useEffect } from 'react';
import Comic from '../components/Comic';

export default function Comics() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    async function getComic() {
      const res = await fetch('/.netlify/functions/getXKCD');

      const result = await res.json();
      console.log(result);
      setComics(result);
    }
    getComic();
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
        <Comic comics={comics} />
      </section>
    </>
  );
}
