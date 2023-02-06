let username = "kayttajatunnus";
let password = "salasana";
let insert1;
let insert2;

function checkUserAndPas () {
    insert1 = document.getElementById("kayttaja").value;
    insert2 = document.getElementById("salasana").value;
    if (insert1==username & insert2==password) {
        window.location.href='Menu.html';
    } else {
        document.getElementById("väärä").innerHTML="Käyttäjätunnus tai salasana on väärin";
    }
}