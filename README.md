# Javascript
--------------------------
### Random number from 1 to 100 
 
        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

--------------------------
### Current Date

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

 getFullYear() – Provides current year like 2022 <br>
 getMonth() – Provides current month values 0-11. Where 0 for Jan and 11 for Dec. So added +1 to get the result.<br>
 getDate() – Provides day of the month values 1-31

--------------------------
###  Current Time

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

 getHours() – Provides current hour between 0-23 <br>
 getMinutes() – Provides current minutes between 0-59<br>
 getSeconds() - Provides current seconds between 0-59
 
--------------------------
### SORTING <br>
 for Array
- alphabetically
 
        sort() 
- revers sort 
   
        reverse() 
        
for Numbers
- Ascending

        points.sort(function(a, b){return a - b});
        
- Descending

        points.sort(function(a, b){return b - a});
        
--------------------------
### For Some loop

       for (let i = 0; i < 5; i++) {
         //some action.. .
       }

