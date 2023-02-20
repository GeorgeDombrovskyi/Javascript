# Javascript

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
