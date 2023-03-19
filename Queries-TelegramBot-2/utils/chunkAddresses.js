function chunkAddresses(arr) {
  const chunkSize = 100;
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

module.exports = chunkAddresses
