let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Cipher () {
    let text=document.getElementById("entext").value;
    let newtext="";
    let shift=Number(document.getElementById("enchar").value);
    
        for (let i=0;i<text.length;i++){
            let pos=alphabet.indexOf(text[i].toUpperCase());
            let newpos=(pos+shift) %26;
            newtext+=alphabet.charAt(newpos);
        }

    document.getElementById("result").innerHTML=newtext;
}

function Decipher () {
    let text=document.getElementById("detext").value;
    let newtext="";
    let shift=Number(document.getElementById("dechar").value);
    
        for (let i=0;i<text.length;i++){
            let pos=alphabet.indexOf(text[i].toUpperCase());
            let newpos=(pos-shift) %26;

            if (newpos<0) {
                newpos=newpos+26;
            }
            
            newtext+=alphabet.charAt(newpos);
        }

    document.getElementById("result").innerHTML=newtext;
}