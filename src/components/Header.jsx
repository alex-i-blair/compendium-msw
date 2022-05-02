import React from 'react';
import { getDateByData } from '../utils/getDates';

export default function Header({ comics, loading }) {
  return (
    <header>
      Last 7 XKCK <br></br>
      {loading || (
        <span>
          <span className="date-range">
            {getDateByData(comics[6])} to {getDateByData(comics[0])}
          </span>
        </span>
      )}
    </header>
  );
}
