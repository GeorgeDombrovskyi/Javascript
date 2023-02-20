# Javascript
--------------------------
// Ranadom number from 1 to 100 

        function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

--------------------------
// Current Date

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// getFullYear() – Provides current year like 2022.
// getMonth() – Provides current month values 0-11. Where 0 for Jan and 11 for Dec. So added +1 to get the result.
// getDate() – Provides day of the month values 1-31.

--------------------------
//  Current Time

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// getHours() – Provides current hour between 0-23.
// getMinutes() – Provides current minutes between 0-59.
// getSeconds() – Provides current seconds between 0-59.
--------------------------
// SORTING
// for Array
        sort() - alphabetically
        reverse() - revers sort (exactly
