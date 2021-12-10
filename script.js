/* Exo 1 GarçonFille
Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes :

si le nombre est divisible par 3 : on affiche Garçon
si le nombre est divisible par 5 : on affiche Fille
si le nombre est divisible par 3 et par 5 : on affiche GarçonFille
sinon : on affiche le nombre n */

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
  
/* Exo date 
  Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste :

la date qui correspond au dernier jour du mois précédant
la date avec les heures et minutes mises à 0
la date au format DD/MM/YYYY hh:mm
le nombre de la semaine dans l’année */

  let someDate = new Date();

  const timeMachine = (date) => {
    //    => last day of previous month ++ hours and minutes reset
    const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(),0,0);

    //    => reset hours & mins
    const resetTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0)

    //    => date DD/MM/YYYY hh:mm
    const formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    //    => nb weeks in year
    const getWeekNum = (date) => {
        const lastDayOfYear = new Date(date.getFullYear(), 11, 31)
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
        const msInADay = (24 * 60 * 60 * 1000)
        return Math.ceil((Math.floor(lastDayOfYear - firstDayOfYear) / msInADay) / 7)
      }
    
    return {lastDayOfPrevMonth, resetTime, formatDate, weekNum: getWeekNum(date)}
  }

console.log('time machine', timeMachine(someDate))