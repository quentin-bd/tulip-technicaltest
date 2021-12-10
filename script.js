// Exo 1 GarçonFille

const algo = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'GarçonFille'
    } else if (n % 3 === 0 ) {
      return 'Garçon' 
    } else if (n % 5 === 0) {
      return 'Fille'
    } else {
      return n
    }
  }
  
  // Exo date 
  let someDate = new Date();
  
  //    => Return last day of previous month ++ hours and minutes reset
  const getLastDayOfPrevMonth = (date) => new Date(date.getFullYear(), date.getMonth(),0,0);
  
  //    => return date with hours and minute reset
  const resetTime = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0)
  
  //    => date DD/MM/YYYY hh:mm
  const formatDate = (date) => `${someDate.getDate()}/${someDate.getMonth()+1}/${someDate.getFullYear()} ${someDate.getHours()}:${someDate.getMinutes()}`
  
  //    => nb weeks in year
  const getWeekNum = (date) => {
    const lastDayOfYear = new Date(date.getFullYear(), 11, 31)
    const firstDayOfYear = new Date(someDate.getFullYear(), 0, 1)
    const msInADay = (24 * 60 * 60 * 1000)
    return Math.ceil((Math.floor(lastDayOfYear - firstDayOfYear) / msInADay) / 7)
  }
  
  console.log('get last day of previous month', getLastDayOfPrevMonth(someDate))
  console.log('reset', resetTime(someDate))
  console.log('format', formatDate(someDate))
  console.log('week num of year', getWeekNum(someDate))