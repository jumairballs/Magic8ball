// JavaScript Code


document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked(){
    let i = document.getElementById("in").value.toLowerCase();
    let ou = document.getElementById("o");

    if( i == "" || i == " "|| i== "  "){
ou.innerHTML = " Please ask a question...";
    } else if( i == "Does a magic 8 ball actually work?") {
ou.innerHTML = "How dare you doubt me!";
    } else if( i == "Is JavaScript awesome?"){
        ou.innerHTML = "Of Course!";
    } else {
        let r = Math.random();

        if ( r < 0.21){
            ou.innerHTML = " Without a Doubt.";
        } else if ( r < 0.41){
            ou.innerHTML = " As I see it, yes.";
        } else if ( r < 0.61){
            ou.innerHTML = " Concentrate and ask again";
        } else if ( r < 0.81) {
            ou.innerHTML = " Don't count on it.";
        } else {
            ou.innerHTML = " Outlook not so good.";
        }
    }
}