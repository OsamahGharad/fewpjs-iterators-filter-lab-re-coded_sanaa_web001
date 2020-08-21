function findMatching(drivers,name){
 return drivers.filter(driver =>{
    return driver.toLowerCase() === name.toLowerCase();
  });

}
// function fuzzyMatch(drivers,name){
//   return drivers.filter(driver =>{
//     driver.slice(0,name.length)===name
//   })
// }
const fuzzyMatch = (arr, string) => {
  return arr.filter(n => n.slice(0, string.length) === string)
}
