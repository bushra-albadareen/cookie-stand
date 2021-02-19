'use strict';

const hourList = ['','6am','7am','8am','9am','10am','11am','12pm',
'1pm','2pm','3pm','4pm','5pm','6pm','7pm', ''];

const locationName = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
 
function random (min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
} 


function Location (name, minCustomer, maxCustomer, aveCookies){

    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.aveCookies = aveCookies;
    this.cookiesPerHour = this.calcCookiesPerHour();
    
  }
  
  Location.prototype.calcCookiesPerHour= function(){
    for (let i=0;i<hourList.length;i++){
      this.cookiesPerHour =(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
      this.total+=this.cookiesPerHour[i];
    }
  }
  
  let seattle = new Location('seattle', 23, 65, 6.3);
  let tokyo = new Location('tokyo', 3, 24, 1.2);
  let dubai = new Location('dubai', 11, 38, 3.7);
  let paris = new Location('paris', 20, 38, 2.3);
  let lima = new Location('lima', 2, 16, 4.6);
  
  
  
  seattle.calcCookiesPerHour();
  tokyo.calcCookiesPerHour();
  dubai.calcCookiesPerHour();
  paris.calcCookiesPerHour();
  lima.calcCookiesPerHour();
  
  Location.prototype.render= function(){
    let parent = document.getElementById('parent');
    let table = document.createElement('table');
    parent.appendChild(table);
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
  
    let nameElement = document.createElement('th');
    headingRow.appendChild(nameElement);
    nameElement.textContent='name'
  
  
    for (let i=0; i<hourList.length; i++){
      let hourElement = document.createElement('th');
      headingRow.appendChild(hourElement);
      hourElement.textContent= hourList[i]
    }
    
    let totalElement = document.createElement('th');
    headingRow.appendChild(totalElement);
    totalElement.textContent='total'
  
    for (let i=0; i<locationName.length; i++){
      let locationRaw = document.createElement('tr');
      table.appendChild(locationRaw);
  
  
      let dataName = document.createElement('td');
      locationRaw.appendChild(dataName);
      dataName.textContent= locationName[i];
  
      for (let i=0; i<hourList.length; i++){
        let dataEntry = document.createElement('td');
        locationRaw.appendChild(dataEntry);
        dataEntry.textContent= this.cookiesPerHour;
      }
    }
  
  
  
    
    
    
  }
  
  seattle.calcCookiesPerHour();
  tokyo.calcCookiesPerHour();
  dubai.calcCookiesPerHour();
  paris.calcCookiesPerHour();
  lima.calcCookiesPerHour();    
  seattle.render();     
  tokyo.render();   
  dubai.render();  
  paris.render();    
  lima.render(); 
  
  