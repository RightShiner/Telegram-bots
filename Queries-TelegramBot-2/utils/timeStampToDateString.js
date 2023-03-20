function timestampToDateString(timestamp) {
  const date = new Date(typeof timestamp === 'string' ? parseFloat(timestamp) * 1000 : timestamp * 1000);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}


module.exports = timestampToDateString;