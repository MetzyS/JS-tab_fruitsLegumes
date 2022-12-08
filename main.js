// Declaration tableau prix
let tableauPrix = [
    ["", "Mai", "Juin", "Juillet"],
    ["Abricot", "5.80", "3.37", "3.72"],
    ["Fraise", "10.57", "11.11", "12.84"],
    ["Poireau", "1.66", "2.34", "1.98"]
];

// Fonction afficher prix
function afficherPrix() {
    for (i = 1; i < tableauPrix.length; i++) {
        for (j = 1; j < tableauPrix.length - 1; j++) {
            console.log(tableauPrix[i][0] + " coutait: " + tableauPrix[i][j] + "€ en " + tableauPrix[0][j]);
        }
    }
}
// console.log(tableauPrix);

// Ajout prix T
tableauPrix.push(["Tomates", "4.34", "3.13", "2.77"]);

// fonction tableau HTML
function tableauHTML() {
    document.write("<table border>");
    document.write("<tr>");
    for (x = 0; x < 4; x++) {
        document.write("<th> " + tableauPrix[0][x] + "</th>");
    };
    document.write("</tr> ");
    document.write("<tr>");
    for (x = 0; x < 4; x++) {
        document.write("<td> " + tableauPrix[1][x] + "</td>");
    }
    document.write("</tr>");
    for (x = 0; x < 4; x++) {
        document.write("<td> " + tableauPrix[2][x] + "</td>");
    }
    document.write("</tr>");
    document.write("<tr>");
    for (x = 0; x < 4; x++) {
        document.write("<td> " + tableauPrix[3][x] + "</td>");
    }
    document.write("</tr>");
    document.write("<tr>");
    for (x = 0; x < 4; x++) {
        document.write("<td> " + tableauPrix[4][x] + "</td>");
    }
    document.write("</tr>");
    document.write("</table>");
}

// let icitableau = document.querySelector("#icitableau");
// icitableau.appendChild(document.createTextNode("Hello!!!!!!!!!"));