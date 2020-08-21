function findMatching(drivers,name){
 return drivers.filter(driver =>{
    return driver.toLowerCase() === name.toLowerCase();
  });

}
