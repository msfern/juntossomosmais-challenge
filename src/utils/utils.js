export function formatString(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getOnlyDayMonthYearFromDate(date) {
  const dateInstance = new Date(date);
  const day = dateInstance.getDate() < 10 ? `0${dateInstance.getDate()}` : dateInstance.getDate();
  const month = dateInstance.getMonth() < 10 ? `0${dateInstance.getMonth()}` : dateInstance.getMonth();
  const year = dateInstance.getFullYear();
  
  return `${day}/${month}/${year}`;
}

