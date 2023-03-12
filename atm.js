var arr = [
    { "pin":"1234", "pass":"1020", "balance":"1000",},
    { "pin":"5678", "pass":"1020", "balance":"500", },
    { "pin":"9123", "pass":"1020", "balance":"700", },
];
let enteredPin = "";
let enteredPassword = "";
let  position =-1; 
var enteredAmount;
var x = 1;
/* variable x is because the submit button , can be used for two operations */ 
function enterPin() {
    enteredPin = document.getElementById('pin').value;
    enteredPassword = document.getElementById('pass').value;
    var flag =false ;
    if (!enteredPin || !enteredPassword) {
        alert('password and pin are required '); return;
    }

    for(var i =0 ;i<arr.length ;i++) { 
        if(enteredPin == arr[i].pin){
            position =i ;flag =true ;
        }
    }
    if(!flag) {
        alert('Invalid card number!') ; return ;
    }
    if( enteredPassword != arr[position].pass){
        alert('Wrong Password!') ;return ;
    }
        document.getElementById('entry').style.display = "none";
        document.getElementById('favLanguageRadioButton').style.display = "block";
}
function showw() {
    document.getElementById('neededMoney').value = "";
    document.getElementById('neededMoney').style.display = "block";
    document.getElementById('submit').style.display = "block";
}
function withdraw() {
    x = 1;
    showw();
}
function dosth() {
    enteredAmount =Number(document.getElementById('neededMoney').value );
    if(!enteredAmount || enteredAmount<=0 ){
        alert('Invalid Amount Of Money!') ; return ; 
    }
    if (x == 1) {
        if (enteredAmount > arr[position].balance) {
            alert('Invalid Amount Of Money!') ; return ; 
        }
        arr[position].balance = Number(arr[position].balance) - Number(enteredAmount);
    }
    else {
        arr[position].balance = Number(arr[position].balance) + Number(enteredAmount);
    }
    alert('Transaction Succeeded, your current balance is ' + arr[position].balance);
}
function diposit() {
    showw();
    x=0 ;
}
function balance() {
    alert('Your current balance is ' +arr[position].balance);
    document.getElementById('neededMoney').style.display = "none";
    document.getElementById('submit').style.display = "none";
}
