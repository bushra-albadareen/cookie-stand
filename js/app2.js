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

let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);

Location.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPerHour = (Math.floor(random(this.minCustomer, this.maxCustomer) * this.aveCookies));
        this.total += this.cookiesPerHour[i];
    }
}



Location.prototype.render = function () {
    let parent = document.getElementById('parent');
    let table = document.createElement('table');
    parent.appendChild(table);
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let nameElement = document.createElement('th');
    headingRow.appendChild(nameElement);
    nameElement.textContent = 'name'
    for (let i = 0; i < hours.length; i++) {
        let hourElement = document.createElement('th');
        headingRow.appendChild(hourElement);
        hourElement.textContent = hours[i]
    }
    let totalElement = document.createElement('th');
    headingRow.appendChild(totalElement);
    totalElement.textContent = 'total'
    let locationRaw = document.createElement('tr');
    table.appendChild(locationRaw);
    let dataName = document.createElement('td');
    locationRaw.appendChild(dataName);
    dataName.textContent = this.locationName;
    for (let i = 0; i < hours.length; i++) {
        let dataEntry = document.createElement('td');
        locationRaw.appendChild(dataEntry);
        dataEntry.textContent = this.cookiesPerHour;
    }
    let dataTotal = document.createElement('td');
    locationRaw.appendChild(dataTotal);
    total.textContent = this.total;
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
for (let i = 0; i < locations; i++) {
    locations[i].calcCookiesPerHour();
    locations[i].render();
}