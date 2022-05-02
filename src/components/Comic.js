import React from 'react';
import { getDateByData } from '../utils/getDates';
import styles from '../styles/App.css';
export default function Comic({ comic }) {
  const date = getDateByData(comic);
  return (
    <div className={styles.comicCard}>
      <p>{date}</p>
      <h4>{comic.title}</h4>
      <img src={comic.img} alt={comic.alt} />
    </div>
  );
}
