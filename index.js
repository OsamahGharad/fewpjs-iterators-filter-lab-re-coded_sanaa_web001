function findMatching(drivers,name){
 let result=  drivers.filter(driver =>{
    return driver.toLowerCase ===name.toLowerCase;
  });
return result;
}
