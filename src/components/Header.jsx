import React from 'react';
import { getDateByIndex } from '../utils/getDateByIndex';

export default function Header() {
  return (
    <header>
      Daily XKCK {'  from '}
      <span className="end-date">{getDateByIndex(6)}</span> to{' '}
      <span className="start-date">{getDateByIndex(0)}</span>
    </header>
  );
}
