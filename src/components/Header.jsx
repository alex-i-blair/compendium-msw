import React from 'react';
import { getDateByData } from '../utils/getDates';

export default function Header({ comics, loading }) {
  return (
    <header>
      Last 7 XKCK <br></br>
      {loading || (
        <span>
          <span className="end-date">{getDateByData(comics[6])}</span> to{' '}
          <span className="start-date">{getDateByData(comics[0])}</span>
        </span>
      )}
    </header>
  );
}
