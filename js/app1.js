'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let locations = [];

function Location(name, minCustomer, maxCustomer, aveCookies) {

    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.aveCookies = aveCookies;
    this.cookiesPerHour = [];
    this.total = 0;
    locations.push(this);

}



Location.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPerHour = (Math.floor(random(this.minCustomer, this.maxCustomer) * this.aveCookies));
        this.total += this.cookiesPerHour[i];
    }
}

let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);

Location.prototype.render = function () {

    let parent=document.getElementById('parent');
    let table=document.createElement('table');
    parent.appendChild(table);

    let headerRaw=document.createElement('tr');
    table.appendChild(headerRaw);

    let headerName=document.createElement('th');
    headerRaw.appendChild(headerName);
    headerName.textContent='name'

    for (let i = 0; i < hours.length; i++) {
        let headerHours = document.createElement('th');
        headerRaw.appendChild(headerHours);
        headerHours.textContent = hours[i];
    }


    let headerTotal = document.createElement('th');
    headerRow.appendChild(headerTotal);
    headerTotal.textContent = 'total'

    let dataRaw = document.createElement('tr');
    table.appendChild(dataRaw);

    let dataName = document.createElement('td');
    dataRaw.appendChild(dataName);
    dataName.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let dataEntry = document.createElement('td');
        dataRaw.appendChild(dataEntry);
        dataEntry.textContent = this.cookiesPerHour[i];
    }

    let dataTotal = document.createElement('td');
    dataRaw.appendChild(dataTotal);
    dataTotal.textContent = this.total;

    let footerRaw = document.createElement('tr');
    table.appendChild(footerRaw);

    let footerName = document.createElement('th');
    footerRaw.appendChild(footerName);
    footerName.textContent = 'total'

    let megaTotal = 0
    for (let i = 0; i < hours.length; i++) {
        let totalPerHour = 0;
        for (let j = 0; j < locations.length; j++) {
            totalPerHour += locations[j].cookiesPerHour[i];
            megaTotal += locations[j].cookiesPerHour[i];
        }
    } 

    let footerData = document.createElement('th');
    footerRaw.appendChild(footerData);
    footerData.textContent = totalPerHour;

    let footerLast = document.createElement('th');
    footerRaw.appendChild(footerLast);
    footerLast.textContent = megaTotal;
}

for (let j = 0; j < locations; j++) {
    locations[j].calcCookiesPerHour();
    locations[j].render();
}






// 'use strict';

// const hourList = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const seattle ={
//      locationName: 'seattle',
//      minCustomer:23,
//      maxCustomer:65,
//      aveCookies:6.3,
//      customerPerHour:[],
//      cookiesPerHour:[],
//      total:0,

//     //  calcCustomerPerHour: function(){
//     //    for (let i=0; i < hourList.length;i++){
//     //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
//     //    }
//     //  },
     
//      calcCookiesPerHour: function(){
//       for (let i=0;i<hourList.length;i++){
//         this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
//         this.total+=this.cookiesPerHour[i];
//       }
//     },

//     render: function(){
//       let parent = document.getElementById('parent');
//       let location= document.createElement('h2');
//       parent.appendChild(location);
//       location.textContent = `seattle`;

//       let unorderedList = document.createElement('ul');
//       parent.appendChild(unorderedList);
      
//       for (let i=0; i<hourList.length; i++){
//         let list = document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
//       }
      
//       let total=document.createElement('li');
//       unorderedList.appendChild(total);
//       total.textContent= this.total;

//     }


// }

// // seattle.calcCustomerPerHour();   
// seattle.calcCookiesPerHour();    
// seattle.render(); 





// const tokyo ={
//      locationName: 'tokyo',
//      minCustomer:3,
//      maxCustomer:24,
//      aveCookies:1.2,
//      customerPerHour:[],
//      cookiesPerHour:[],
//      total:0,

//      //  calcCustomerPerHour: function(){
//     //    for (let i=0; i < hourList.length;i++){
//     //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
//     //    }
//     //  },
     
//     calcCookiesPerHour: function(){
//       for (let i=0;i<hourList.length;i++){
//         this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
//         this.total+=this.cookiesPerHour[i];
//       }
//     },

    
//     render: function(){
//       let parent = document.getElementById('parent');
//       let location= document.createElement('h2');
//       parent.appendChild(location);
//       location.textContent = `tokyo`;

//       let unorderedList = document.createElement('ul');
//       parent.appendChild(unorderedList);
      
//       for (let i=0; i<hourList.length; i++){
//         let list = document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
//       } 

//       let total=document.createElement('li');
//       unorderedList.appendChild(total);
//       total.textContent= this.total;

//     }


// }

// // tokyo.calcCustomerPerHour();   
// tokyo.calcCookiesPerHour();    
// tokyo.render(); 



// const dubai ={
//      locationName: 'dubai',
//      minCustomer:11,
//      maxCustomer:38,
//      aveCookies:3.7,
//      customerPerHour:[],
//      cookiesPerHour:[],
//      total:0,

//      //  calcCustomerPerHour: function(){
//     //    for (let i=0; i < hourList.length;i++){
//     //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
//     //    }
//     //  },
     
//      calcCookiesPerHour: function(){
//       for (let i=0;i<hourList.length;i++){
//         this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
//         this.total+=this.cookiesPerHour[i];
//       }
//     },

    
//     render: function(){
//       let parent = document.getElementById('parent');
//       let location= document.createElement('h2');
//       parent.appendChild(location);
//       location.textContent = `dubai`;

//       let unorderedList = document.createElement('ul');
//       parent.appendChild(unorderedList);
      
//       for (let i=0; i<hourList.length; i++){
//         let list = document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
//       }
      
//       let total=document.createElement('li');
//       unorderedList.appendChild(total);
//       total.textContent= this.total;

//     }


// }

// // dubai.calcCustomerPerHour();   
// dubai.calcCookiesPerHour();    
// dubai.render(); 



// const paris ={
//      locationName: 'paris',
//      minCustomer:20,
//      maxCustomer:38,
//      aveCookies:2.3,
//      customerPerHour:[],
//      cookiesPerHour:[],
//      total:0,

//      //  calcCustomerPerHour: function(){
//     //    for (let i=0; i < hourList.length;i++){
//     //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
//     //    }
//     //  },
     
//     calcCookiesPerHour: function(){
//       for (let i=0;i<hourList.length;i++){
//         this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
//         this.total+=this.cookiesPerHour[i];
//       }
//     },

    
//     render: function(){
//       let parent = document.getElementById('parent');
//       let location= document.createElement('h2');
//       parent.appendChild(location);
//       location.textContent = `paris`;

//       let unorderedList = document.createElement('ul');
//       parent.appendChild(unorderedList);
      
//       for (let i=0; i<hourList.length; i++){
//         let list = document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
//       }
      
//       let total=document.createElement('li');
//       unorderedList.appendChild(total);
//       total.textContent= this.total;

//     }


// }

// // paris.calcCustomerPerHour();   
// paris.calcCookiesPerHour();    
// paris.render(); 



// const lima ={
//      locationName: 'lima',
//      minCustomer:2,
//      maxCustomer:16,
//      aveCookies:4.6,
//      customerPerHour:[],
//      cookiesPerHour:[],
//      total:0,

//      //  calcCustomerPerHour: function(){
//     //    for (let i=0; i < hourList.length;i++){
//     //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
//     //    }
//     //  },
     
//     calcCookiesPerHour: function(){
//       for (let i=0;i<hourList.length;i++){
//         this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
//         this.total+=this.cookiesPerHour[i];
//       }
//     },

    
//     render: function(){
//       let parent = document.getElementById('parent');
//       let location= document.createElement('h2');
//       parent.appendChild(location);
//       location.textContent = `lima`;

//       let unorderedList = document.createElement('ul');
//       parent.appendChild(unorderedList);
      
//       for (let i=0; i<hourList.length; i++){
//         let list = document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
//       }
      
//       let total=document.createElement('li');
//       unorderedList.appendChild(total);
//       total.textContent= this.total;

//     }


// }

// // lima.calcCustomerPerHour();   
// lima.calcCookiesPerHour();    
// lima.render(); 

