import React from 'react';
import Comic from './Comic';

export default function ComicList({ comics }) {
  return (
    <div className="comic">
      {comics.map((comic) => {
        return <Comic key={comic.num} comic={comic} />;
      })}
    </div>
  );
}
