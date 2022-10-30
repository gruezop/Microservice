# Price-Microservice - CS 361 

Communication Contract 

1. How To Request Data
 
 * npm install axios
 * import React {useState} from 'react;
 * import axios from 'axios;

<img width="532" alt="Screen Shot 2022-10-28 at 10 02 19 PM" src="https://user-images.githubusercontent.com/91290756/198814846-81910854-5467-4200-bcc5-b61307ae042b.png">

2. How To Receive Data

  The microservice will return a json object {id; country; price} which we can filter.

  We'll preserve the json object in a variable called data. Then map through the data variable to return the price, for example: 

<img width="617" alt="Screen Shot 2022-10-28 at 10 04 12 PM" src="https://user-images.githubusercontent.com/91290756/198814888-4bb0a51d-ad60-4540-954f-78c6426840be.png">

  Sample: https://github.com/gruezop/Test-UI

<img width="852" alt="Screen Shot 2022-10-29 at 10 32 04 PM" src="https://user-images.githubusercontent.com/91290756/198864107-637d25e5-eb7d-43a6-8244-5b03c7b95c9e.png">
