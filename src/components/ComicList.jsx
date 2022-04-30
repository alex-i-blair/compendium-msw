import React from 'react';
import Comic from './Comic';

export default function ComicList({ comics }) {
  return (
    <div className="comic">
      {comics.map((comic, i) => (
        <Comic key={comic.num + i} comic={comic} />
      ))}
    </div>
  );
}
