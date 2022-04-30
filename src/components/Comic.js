import React from 'react';
import { getDateByIndex } from '../utils/getDateByIndex';
export default function Comic({ comic, index }) {
  const date = getDateByIndex(index);
  return (
    <div>
      <p>{date}</p>
      <h4>{comic.title}</h4>
      <img src={comic.img} alt={comic.alt} />
    </div>
  );
}
