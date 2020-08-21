function findMatching(drivers,name){
 return drivers.filter(driver =>{
    return driver.toLowerCase() === name.toLowerCase();
  });

}
function fuzzyMatch(drivers,name){
  return drivers.fiter(driver =>{
    driver[0].toLowerCase()===name[0].toLowerCase()
  })
}