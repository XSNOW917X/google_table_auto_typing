// ==UserScript==
// @name         Google_auto_table
// @namespace    https://your-namespace-here
// @version      1.0
// @description  NMSL
// @match        https://docs.google.com/forms/d/e/1FAIpQLSchABfHBEv18-RSYHhCHspGb6RFyRze9wDdzBm4nQgea0U2XA/viewform*
// @grant        none
// ==/UserScript==


//document.querySelector("#i8").click();
setTimeout(() => {
    const selectors = [
        '#i5', '#i8', '#i11', '#i15',
        '#i21', '#i24', '#i27'
    ];

    const randomIndex1 = Math.floor(Math.random() * 4);
    document.querySelector(selectors[randomIndex1]).click();

    const randomIndex2 = Math.floor(Math.random() * 3) + 4;
    document.querySelector(selectors[randomIndex2]).click();
}, 2500);

setTimeout(() => {
    document.forms[0].submit();
},3000);

