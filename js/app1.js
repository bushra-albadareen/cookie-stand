'use strict';

const hourList = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle ={
     locationName: 'seattle',
     minCustomer:23,
     maxCustomer:65,
     aveCookies:6.3,
     customerPerHour:[],
     cookiesPerHour:[],
     total:0,

    //  calcCustomerPerHour: function(){
    //    for (let i=0; i < hourList.length;i++){
    //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
    //    }
    //  },
     
     calcCookiesPerHour: function(){
      for (let i=0;i<hourList.length;i++){
        this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
        this.total+=this.cookiesPerHour[i];
      }
    },

    render: function(){
      let parent = document.getElementById('parent');
      let location= document.createElement('h2');
      parent.appendChild(location);
      location.textContent = `seattle`;

      let unorderedList = document.createElement('ul');
      parent.appendChild(unorderedList);
      
      for (let i=0; i<hourList.length; i++){
        let list = document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
      }
      
      let total=document.createElement('li');
      unorderedList.appendChild(total);
      total.textContent= this.total;

    }


}

// seattle.calcCustomerPerHour();   
seattle.calcCookiesPerHour();    
seattle.render(); 





const tokyo ={
     locationName: 'tokyo',
     minCustomer:3,
     maxCustomer:24,
     aveCookies:1.2,
     customerPerHour:[],
     cookiesPerHour:[],
     total:0,

     //  calcCustomerPerHour: function(){
    //    for (let i=0; i < hourList.length;i++){
    //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
    //    }
    //  },
     
    calcCookiesPerHour: function(){
      for (let i=0;i<hourList.length;i++){
        this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
        this.total+=this.cookiesPerHour[i];
      }
    },

    
    render: function(){
      let parent = document.getElementById('parent');
      let location= document.createElement('h2');
      parent.appendChild(location);
      location.textContent = `tokyo`;

      let unorderedList = document.createElement('ul');
      parent.appendChild(unorderedList);
      
      for (let i=0; i<hourList.length; i++){
        let list = document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
      } 

      let total=document.createElement('li');
      unorderedList.appendChild(total);
      total.textContent= this.total;

    }


}

// tokyo.calcCustomerPerHour();   
tokyo.calcCookiesPerHour();    
tokyo.render(); 



const dubai ={
     locationName: 'dubai',
     minCustomer:11,
     maxCustomer:38,
     aveCookies:3.7,
     customerPerHour:[],
     cookiesPerHour:[],
     total:0,

     //  calcCustomerPerHour: function(){
    //    for (let i=0; i < hourList.length;i++){
    //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
    //    }
    //  },
     
     calcCookiesPerHour: function(){
      for (let i=0;i<hourList.length;i++){
        this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
        this.total+=this.cookiesPerHour[i];
      }
    },

    
    render: function(){
      let parent = document.getElementById('parent');
      let location= document.createElement('h2');
      parent.appendChild(location);
      location.textContent = `dubai`;

      let unorderedList = document.createElement('ul');
      parent.appendChild(unorderedList);
      
      for (let i=0; i<hourList.length; i++){
        let list = document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
      }
      
      let total=document.createElement('li');
      unorderedList.appendChild(total);
      total.textContent= this.total;

    }


}

// dubai.calcCustomerPerHour();   
dubai.calcCookiesPerHour();    
dubai.render(); 



const paris ={
     locationName: 'paris',
     minCustomer:20,
     maxCustomer:38,
     aveCookies:2.3,
     customerPerHour:[],
     cookiesPerHour:[],
     total:0,

     //  calcCustomerPerHour: function(){
    //    for (let i=0; i < hourList.length;i++){
    //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
    //    }
    //  },
     
    calcCookiesPerHour: function(){
      for (let i=0;i<hourList.length;i++){
        this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
        this.total+=this.cookiesPerHour[i];
      }
    },

    
    render: function(){
      let parent = document.getElementById('parent');
      let location= document.createElement('h2');
      parent.appendChild(location);
      location.textContent = `paris`;

      let unorderedList = document.createElement('ul');
      parent.appendChild(unorderedList);
      
      for (let i=0; i<hourList.length; i++){
        let list = document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
      }
      
      let total=document.createElement('li');
      unorderedList.appendChild(total);
      total.textContent= this.total;

    }


}

// paris.calcCustomerPerHour();   
paris.calcCookiesPerHour();    
paris.render(); 



const lima ={
     locationName: 'lima',
     minCustomer:2,
     maxCustomer:16,
     aveCookies:4.6,
     customerPerHour:[],
     cookiesPerHour:[],
     total:0,

     //  calcCustomerPerHour: function(){
    //    for (let i=0; i < hourList.length;i++){
    //      this.customerPerHour.push(random(this.minCustomer,this.maxCustomer));
    //    }
    //  },
     
    calcCookiesPerHour: function(){
      for (let i=0;i<hourList.length;i++){
        this.cookiesPerHour.push(Math.floor(random(this.minCustomer,this.maxCustomer)*this.aveCookies));
        this.total+=this.cookiesPerHour[i];
      }
    },

    
    render: function(){
      let parent = document.getElementById('parent');
      let location= document.createElement('h2');
      parent.appendChild(location);
      location.textContent = `lima`;

      let unorderedList = document.createElement('ul');
      parent.appendChild(unorderedList);
      
      for (let i=0; i<hourList.length; i++){
        let list = document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent=`${hourList[i]}: ${this.cookiesPerHour[i]} cookies`
      }
      
      let total=document.createElement('li');
      unorderedList.appendChild(total);
      total.textContent= this.total;

    }


}

// lima.calcCustomerPerHour();   
lima.calcCookiesPerHour();    
lima.render(); 

