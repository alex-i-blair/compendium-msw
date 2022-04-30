import React from 'react';
import { getDateByIndex } from '../utils/getDateByIndex';
export default function Comic({ comic, index }) {
  const date = getDateByIndex(index);
  return (
    <div>
      <p>{date}</p>
      <img src={comic.img} alt="" />
    </div>
  );
}
