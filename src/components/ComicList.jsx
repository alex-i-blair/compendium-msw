import React from 'react';
import Comic from './Comic';

export default function ComicList({ comics }) {
  return (
    <div className="comic">
      {comics.map((comic, index) => {
        return <Comic key={comic.num} index={index} comic={comic} />;
      })}
    </div>
  );
}
