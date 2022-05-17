"use strict";

//HTML Element Einkommen
const zveInput = document.getElementById('zvE_input');
const zveInputEhegatte = document.getElementById('zvE_input_ehegatte');
const labelEhegatte = document.getElementById('label_Ehegatte');
const zveEhegatteHTML = document.getElementById('ehegatte');

// Radio Buttons Veranlagung
const radioEinzel = document.getElementById('radio_einzel');
const radioZusammen = document.getElementById('radio_zusammen');

//Radio Buttons Veranlagungsjahr
const radio2021 = document.getElementById('radio_jahr_2021');
const radio2020 = document.getElementById('radio_jahr_2020');
const radio2019 = document.getElementById('radio_jahr_2019');

//Result HTML
const resultHTML = document.getElementById('result_tag');

const veranlagung = () => {
    if(radioEinzel.checked) {
        zveEhegatteHTML.classList.add('hidden');
        // labelEhegatte.style.display = "none";
        // zveInputEhegatte.style.display = "none";
    } else {
        zveEhegatteHTML.classList.remove('hidden');
    }
} 

const calculateTax = () => {
    // Schritt 1.
    //zvE Value
    let zve;
    // Veranlagung?
    if(radioEinzel.checked) {
        zve = zveInput.value;
    } else {
        zve = (Number(zveInput.value)+Number(zveInputEhegatte.value))/2;
        console.log(zve);
    }
    
    // Schritt 2. Ver
    // Variable zur Speicherung des folgenden ESt Ergebnis
    let eSt;

    if (radio2021.checked) {
        console.log("2021 gechecked");
    } else if (radio2020.checked) {
        console.log("2020 gechecked");
    } else if (radio2019.checked) {
        console.log("2019 checked");
    }


    // IF ELSE JAHR 2021
    if (radio2021.checked) {
        if (zve <= 9744) {
            eSt = 0;
            console.log('Fall 1');
        } 
        else if (9744 <= zve && zve <= 14753) {
            let y = (zve - 9744) / 10000;
            eSt = (995.21 * y + 1400) * y;
            console.log('Fall 2');
        }
        else if (14754 <= zve && zve <= 57918) {
            let z = (zve - 14753) / 10000;
            eSt = (208.85 * z + 2397) * z + 950.96;
            console.log('Fall 3');
        }
        else if (57919 <= zve && zve <= 274612) {
            eSt = 0.42 * zve - 9136.63;
            console.log('Fall 4');
        }
        else if (274613 <= zve) {
            eSt = 0.45 * zve - 17374.99;
            console.log('Fall 5');
        }
    }


    // Jahr 2020
    else if (radio2020.checked) {
        if (zve <= 9408) {
            eSt = 0;
            console.log('Fall 1');
        } 
        else if (9409 <= zve && zve <= 14532) {
            let y = (zve - 9408) / 10000;
            eSt = (972.87 * y + 1400) * y;
            console.log('Fall 2');
        }
        else if (14533 <= zve && zve <= 57051) {
            let z = (zve - 14532) / 10000;
            eSt = (212.02 * z + 2397) * z + 972.79;
            console.log('Fall 3');
        }
        else if (57052 <= zve && zve <= 270500) {
            eSt = 0.42 * zve - 8963.74;
            console.log('Fall 4');
        }
        else if (270501 <= zve) {
            eSt = 0.45 * zve - 17078.74;
            console.log('Fall 5');
        }
    }

    // Jahr 2019
    else if (radio2019.checked) {
        if (zve <= 9168) {
            eSt = 0;
            console.log('Fall 1');
        } 
        else if (9169 <= zve && zve <= 14254) {
            let y = (zve - 9168) / 10000;
            eSt = (980.14 * y + 1400) * y;
            console.log('Fall 2');
        }
        else if (14255 <= zve && zve <= 55960) {
            let z = (zve - 14254) / 10000;
            eSt = (216.16 * z + 2397) * z + 965.58;
            console.log('Fall 3');
        }
        else if (55961 <= zve && zve <= 265326) {
            eSt = 0.42 * zve - 8780.90;
            console.log('Fall 4');
        }
        else if (265327 <= zve) {
            eSt = 0.45 * zve - 16740.68;
            console.log('Fall 5');
        }
    }
    

    // Schritt 3.
    if(radioEinzel.checked) {
        eSt = eSt;
    } else {
        eSt = eSt * 2;
    }
    resultHTML.innerHTML = eSt.toFixed(2).replace(".",",") + " €";
}


// Schritt 1.
// checken, ob einzel oder zusammenveranlagung per if // else
// Berechnung des zu versteuerndes Einkommens zvE
// 
// 
// 
// 
// Schritt 2.
// Prüfen welcher Berechnungsfall zutrifft
//
// < 9744 € {
//  ESt = 0      //Einkommenssteuer
// }
//
//
//
//
// Schritt 3.
// Prüfung, ob Einzel- oder Zusammenveranlagung,
// Berechnung mit ESt aus Schritt 2
// 
//
//
//
// Neue Ideen: 
// Abfrage für 2 Personen, 2 verschiedene Einkommen
// Je nach Auswahl, ob zusammen oder einzeln wird ein zusätzliches Eingabefeld eingeblendet
// 
// Sobald man die Radio Buttons anklickt, soll ein Feld hinzukommen oder verschwinden
// Problem Nr. 1 Wie kann man Javascript dazu bringen was zu machen, sobald man die Radiobuttons betätigt
// Problem Nr. 2 Wie kann man ein HTML Element ausblenden/einblenden

