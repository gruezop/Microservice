# Price-Microservice - CS 361 

Communication Contract 

1. How To Request Data
 
 * npm install axios
 * import React {useState, useEffect} from 'react;
 * import axios from 'axios;

<img width="371" alt="Screen Shot 2022-10-24 at 8 11 37 PM" src="https://user-images.githubusercontent.com/91290756/197673494-1b90d18d-b063-422c-a264-bcd25e8afd0e.png">


2. How To Receive Data

  The microservice will return a json response ({id; country; price}...) which we can filter.

  ex. The example below shows how to filter data based on user search. Using Object.values, we'll get the value from the object item, convert it to string and then we'll check if it includes the string that is typed by the user in the search bar. 

<img width="748" alt="Screen Shot 2022-10-26 at 8 26 33 PM" src="https://user-images.githubusercontent.com/91290756/198184153-98848ff0-1e0c-471f-8e11-c585d8b5241b.png">

  We'll preserve the json object in a variable called filteredData. Then map through the filteredData to return the price, for example: 

<img width="514" alt="Screen Shot 2022-10-27 at 8 06 52 PM" src="https://user-images.githubusercontent.com/91290756/198489691-9d4c042b-08a0-44a1-b543-106fd48ac68e.png">

  Sample: https://github.com/gruezop/Sample-UI

<img width="829" alt="Screen Shot 2022-10-27 at 7 41 01 PM" src="https://user-images.githubusercontent.com/91290756/198475415-d4df370e-7e6f-4ecd-b4bd-af517ac85ac9.png">


