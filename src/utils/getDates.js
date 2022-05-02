export function getDateByIndex(index) {
  const pastWeek = [...Array(7).keys()].map(
    (days) => new Date(Date.now() - 86400000 * days)
  );
  for (let i = 0; i < pastWeek.length; i++) {
    if (index === i) {
      return pastWeek[i].toDateString();
    }
  }
}

export function getDateByData(comic) {
  const date = new Date(comic.year, comic.month, comic.day);
  return date.toDateString();
}
