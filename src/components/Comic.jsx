import React from 'react';

export default function Comic({ comics }) {
  console.log(comics);
  return (
    <div className="comic">
      <img src={comics.img} alt="cage rage" />
    </div>
  );
}
