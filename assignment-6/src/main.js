import './../scss/main.scss';
//Adding RXJS
let rxjs = require('rxjs');
let nextNode = document.getElementById('fetchData');
//Adding observable and event listener
const event$ = rxjs.fromEvent(nextNode, 'click');

//Adding subscription to the observable
let subscription = event$.subscribe(function (x) {
    let input = document.getElementById('stockData').value;
    //Declaring the url from which data needs to be fetched
    let url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=symbolData&api_token=6qXBderGzEul7nfHt3E5RlUx4jwx5iKhT7ko0RUrE7o4PtCBrefqimwyf8fu';
    //Replacing the stock data with user input
    url = url.replace('symbolData',input);
    //Removing any existing nodes from the table except TH node
    while (table.hasChildNodes()) {
        if(table.lastChild.nodeName == 'TH' || table.lastChild.firstChild.nodeName == 'TH'){
            break;
        }else {
            table.removeChild(table.lastChild);
        }
    }
    //Fetch is used to get data from server using Promise
    fetch(url)
        //If promise is resolved then add data to the table from given url
        .then((resp) => resp.json())
        .then(function(data) {
            let stocks = data.data;
            return stocks.map(function(stock) {
                //Creation of tr node
                let tr = createNode('tr');
                //Creation of td nodes for displaying data
                let td1 = createtd(stock["symbol"],tr);
                let td2 = createtd(stock["name"],tr);
                let td3 = createtd(stock["currency"],tr);
                let td4 = createtd(stock["price"],tr);
                let td5 = createtd(stock["price_open"],tr);
                let td6 = createtd(stock["day_high"],tr);
                let td7 = createtd(stock["day_low"],tr);
                let td8 = createtd(stock["52_week_high"],tr);
                let td9 = createtd(stock["52_week_low"],tr);
                let td10 = createtd(stock["day_change"],tr);
                let td11 = createtd(stock["change_pct"],tr);
                let td12 = createtd(stock["close_yesterday"],tr);
                let td13 = createtd(stock["market_cap"],tr);
                let td14 = createtd(stock["volume"],tr);
                let td15 = createtd(stock["volume_avg"],tr);
                let td16 = createtd(stock["shares"],tr);
                let td17 = createtd(stock["stock_exchange_long"],tr);
                let td18 = createtd(stock["stock_exchange_short"],tr);
                let td19 = createtd(stock["timezone"],tr);
                let td20 = createtd(stock["timezone_name"],tr);
                let td21 = createtd(stock["gmt_offset"],tr);
                let td22 = createtd(stock["last_trade_time"],tr);
                let td23 = createtd(stock["pe"],tr);
                let td24 = createtd(stock["eps"],tr);
                append(table,tr);
            })
        })
        //if promise is in rejected state then add a tr saying 'Data Not Found'
        .catch(function(error) {
            //alert('data not found');
            //console.log(error);
            let td = createNode('td')
            let tr = createNode('tr');
            td.innerHTML="Data Not Found";
            td.setAttribute('colspan','24');
            append(tr,td);
            append(table,tr);
        });
});

//Function to add tr node
let createtd = (value, parent) => {
    let td = document.createElement('td');
    td.innerHTML = `${value}`;
    parent.appendChild(td);
    return td;
};

//Function to create a new node
function createNode(element) {
    return document.createElement(element);
}

//Function to append a node to another node
function append(parent, el) {
    return parent.appendChild(el);
}

//Declaring table variable
let table = document.getElementById('stocks');

//Addition of headers to the table
let trHeader = createNode('tr');
trHeader.setAttribute('id','header');
let header1=createNode('th');
let header2=createNode('th');
let header3=createNode('th');
let header4=createNode('th');
let header5=createNode('th');
let header6=createNode('th');
let header7=createNode('th');
let header8=createNode('th');
let header9=createNode('th');
let header10=createNode('th');
let header11=createNode('th');
let header12=createNode('th');
let header13=createNode('th');
let header14=createNode('th');
let header15=createNode('th');
let header16=createNode('th');
let header17=createNode('th');
let header18=createNode('th');
let header19=createNode('th');
let header20=createNode('th');
let header21=createNode('th');
let header22=createNode('th');
let header23=createNode('th');
let header24=createNode('th');

//Adding Table headers values
header1.innerHTML="Symbol";
header2.innerHTML="Name";
header3.innerHTML="Currency";
header4.innerHTML="Price";
header5.innerHTML="Price_open";
header6.innerHTML="Day_high";
header7.innerHTML="Day_low";
header8.innerHTML="52_week_high";
header9.innerHTML="52_week_low";
header10.innerHTML="Day_change";
header11.innerHTML="Change_percent";
header12.innerHTML="Change_yesterday";
header13.innerHTML="Market_cap";
header14.innerHTML="Volume";
header15.innerHTML="Volume_avg";
header16.innerHTML="Shares";
header17.innerHTML="Stock_Exchange_longName";
header18.innerHTML="Stock_Exchange_shortName";
header19.innerHTML="Timezone";
header20.innerHTML="Timezone_name";
header21.innerHTML="Gmt_Offset";
header22.innerHTML="Last_Trade_Time";
header23.innerHTML="PE";
header24.innerHTML="EPS";

//Appending table headers to table
append(trHeader,header1);
append(trHeader,header2);
append(trHeader,header3);
append(trHeader,header4);
append(trHeader,header5);
append(trHeader,header6);
append(trHeader,header7);
append(trHeader,header8);
append(trHeader,header9);
append(trHeader,header10);
append(trHeader,header11);
append(trHeader,header12);
append(trHeader,header13);
append(trHeader,header14);
append(trHeader,header15);
append(trHeader,header16);
append(trHeader,header17);
append(trHeader,header18);
append(trHeader,header19);
append(trHeader,header20);
append(trHeader,header21);
append(trHeader,header22);
append(trHeader,header23);
append(trHeader,header24);
append(table,trHeader);

//Removing subscription on unload
window.onunload = function () {
    subscription.unsubscribe();
}