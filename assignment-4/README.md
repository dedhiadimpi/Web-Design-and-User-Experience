------------------------------------------------------------------------------------------------------------------------------------------
About the Application
------------------------------------------------------------------------------------------------------------------------------------------
The application is about three algorithms:
1) Reverse a String
2) Binary Search
3) Quick Sort
The algorithms are written in JavaScript and are documented using Esdoc documentation

------------------------------------------------------------------------------------------------------------------------------------------
Installation of Esdoc 
------------------------------------------------------------------------------------------------------------------------------------------
1) Run below command on Terminal: 
   npm install esdoc esdoc-standard-plugin
  
2) Add below script in configuration file (esdoc.json):
   {
    "source": "./src",
    "destination": "./docs",
    "plugins": [{"name": "esdoc-standard-plugin"}]
   }
  
3) Add srcipt (execute command) in Package.json:
   "esdoc": "node_modules/.bin/esdoc -c esdoc.json"
  
4) Run below command on terminal to run esdoc:
   npm run esdoc
  
------------------------------------------------------------------------------------------------------------------------------------------
How to run the Application
------------------------------------------------------------------------------------------------------------------------------------------
Copy the code in any online editor like repl.it and run the code on it
  
  



