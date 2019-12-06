/*eslint-disable */
// 1. Make a function which will return passed date object to passed format. Supported formats:
const date = new Date();
function dateFormat (date, dateFormat) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  switch (dateFormat) {
  case 'dd/mm/yyyy':
    return `${day}/${month}/${year}`;
    break;
  case 'mm/dd/yyyy':
    return `${month}/${day}/${year}`;
    break;
  case 'yyyy/mm/dd':  
    return `${year}/${month}/${day}`;
    break;
  case 'dd-mm-yyyy':  
    return `${day}-${month}-${year}`;
    break;
  case 'mm-dd-yyyy':  
    return `${month}-${day}-${year}`;
    break;
  case 'yyyy-mm-dd':  
    return `${year}-${month}-${day}`;
    break;
  default:    
    return `${dateFormat} date format incorrect`
    break;
    } 
}

console.log(dateFormat(date, 'dd/mm/yyyy')); // - `dd/mm/yyyy`;
console.log(dateFormat(date, 'mm/dd/yyyy')); // - `mm/dd/yyyy`;
console.log(dateFormat(date, 'yyyy/mm/dd')); // - `yyyy/mm/dd`;
console.log(dateFormat(date, 'dd-mm-yyyy')); // - `dd-mm-yyyy`;
console.log(dateFormat(date, 'mm-dd-yyyy')); // - `mm-dd-yyyy`;
console.log(dateFormat(date, 'yyyy-mm-dd')); // - `yyyy-mm-dd`;
console.log(dateFormat(date, 'yyyy mm dd'));

// # Additional

// 1.  Make a function which will translate passed date object to passed timezone.
function timezone(date, timezone) {
  const setTimeZone = new Date(date).toLocaleString('en-US', { timeZone: timezone } );
  return setTimeZone;
}
console.log(timezone(new Date(), 'Europe/Kiev'));
