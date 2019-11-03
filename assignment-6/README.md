About the Application
-------------------------------------------------------------------------------------------------------------------------------------------
This application gives the Stock details.
It allows user to input a stock, stock details are fetched from a JSON and displayed in a table.
If there is no detail available for user entered stock it says "Data Not Found".
Fetch API is used to fetch JSON data.
Observable is used to add an event listener to the button element. 
On click of the button, a subscription is made to the observable and data is fetched fom the server and displayed in the table.

Installation of npm
-------------------------------------------------------------------------------------------------------------------------------------------
Since application uses npm, we need to install it using below command
npm install

Installation of RxJS
-------------------------------------------------------------------------------------------------------------------------------------------
Run below command to install RxJS
npm install rxjs

Build npm
-------------------------------------------------------------------------------------------------------------------------------------------
Run below command to build npm
npm run build

How to run the Application
-------------------------------------------------------------------------------------------------------------------------------------------
Run below command to run the application
npm start
