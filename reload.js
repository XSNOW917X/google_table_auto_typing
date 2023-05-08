// ==UserScript==
// @name         Google_auto_table_reload
// @namespace    https://your-namespace-here
// @version      1.0
// @description  NMSL
// @match        https://docs.google.com/forms/u/0/d/e/1FAIpQLSchABfHBEv18-RSYHhCHspGb6RFyRze9wDdzBm4nQgea0U2XA/formResponse
// @grant        none
// ==/UserScript==
setTimeout(() => {
    window.location.reload();
    }, 2000);
    
    