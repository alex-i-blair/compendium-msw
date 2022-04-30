import React from 'react';

export default function Comic({ comic }) {
  return (
    <div>
      <img src={comic.img} alt="" />
    </div>
  );
}
