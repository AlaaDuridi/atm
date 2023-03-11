// Constants
const PIN_LENGTH = 4;
const CORRECT_PIN = "1234";
const CORRECT_PASS ="123456789" ;
var  MAX_WITHDRAWAL = 500;

let enteredPin ="" ;
let enteredPassword="" ; 
var  enteredAmount  ; 

var x =1 ;

function enterPin() { 
enteredPin = document.getElementById('pin').value ; 
enteredPassword = document.getElementById('pass').value ; 
if(!enteredPin || !enteredPassword) { 

    alert('password and pin are required ') ;return  ; 

}

if(enteredPin != CORRECT_PIN || enteredPassword != CORRECT_PASS ) {

    alert('pin or password are notcorrect '); 
}
else  { 

    document.getElementById('entry').style.display ="none" ; 
    document.getElementById('favLanguageRadioButton').style.display="block" ; 
    document.getElementById('options').style.display="block" ; 
    // document.getElementById('neededMoney').style.display="none" ; 
    // document.getElementById('submit').style.display="none" ; 

}
}

function showw() {
    document.getElementById('neededMoney').style.display="block" ; 
    document.getElementById('submit').style.display="block" ;
    document.getElementById('neededMoney').value ="" ; 

}
function withdraw() { 
    x=1 ; 
    showw() ;
}
function withdrawgo() { 
    enteredAmount =  document.getElementById('neededMoney').value;

    if(x==1) {
    if(!enteredAmount) {

    alert('no money needed') ;return ; 
    }
    if(enteredAmount > MAX_WITHDRAWAL)
    {
        alert('you entered invalid amount of money ! this is too much -_-') ; return ; 
    
    }
        MAX_WITHDRAWAL = Number(MAX_WITHDRAWAL) - Number(enteredAmount) ;  
}
else { 
    if(!enteredAmount) {
        alert('no money entered ') ;return ;} 
        
        MAX_WITHDRAWAL = Number(enteredAmount) + Number(MAX_WITHDRAWAL) ; 

}
alert('the process succeeded , your current balance is ' + MAX_WITHDRAWAL) ; 

}

function diposit() { 
    x=0 ;
    showw() ;
}
function balance() { 
    alert('Your current balance is ' + MAX_WITHDRAWAL) ;
    document.getElementById('neededMoney').style.display="none" ; 
    document.getElementById('submit').style.display="none" ; 
}
    