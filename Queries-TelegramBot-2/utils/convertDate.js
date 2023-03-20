function convertDate(dateString) {
  // separar la fecha por día, mes y año
  var parts = dateString.split("-");
  // crear un nuevo objeto de fecha en formato YYYY-MM-DD
  var newDate = new Date(parts[2], parts[1] - 1, parts[0]);
  // obtener la fecha en formato YYYY-MM-DD
  var convertedDate = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
  // devolver la fecha en formato YYYY-MM-DD
  return convertedDate;
}
module.exports = convertDate;