function findMatching(drivers,name){
 return drivers.filter(driver =>{
    return driver.toLowerCase() === name.toLowerCase();
  })

}

function fuzzyMatch(drivers,name){
  return drivers.filter(driver =>  driver.slice(0,name.length)===name)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name == name);
}
