import React from 'react';

export default function Comic({ comics }) {
  return (
    <div className="comic">
      {comics.map((comic, i) => (
        <Comic key={comic.num + i} comic={comic} />
      ))}
      <img src={comics.img} alt="cage rage" />
    </div>
  );
}