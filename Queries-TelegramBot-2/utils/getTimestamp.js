function getTimestamp(dateString) {
  // Verificar que la fecha tenga el formato YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    throw new Error('Error: The date format is incorrect. The format should be YYYY-MM-DD.');
  }

  // Convertir la fecha a objeto Date
  const date = new Date(dateString);
  // Establecer la hora a las 00:00:00
  date.setHours(0, 0, 0, 0);
  // Devolver el valor timestamp
  return date.getTime().toString().slice(0, 10);
}
module.exports = getTimestamp;