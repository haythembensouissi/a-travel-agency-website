function verif(){
    var first=document.getElementById('first').value
var last=document.getElementById('last').value
var tel=document.getElementById('tel').value
var email=document.getElementById('email').value
var password=document.getElementById('password').value

function alpha(str){
    for(i=0;i<str.length;i++){
        if(str.charAt(i).toUpperCase()<"A"||str.charAt(i).toUpperCase()>"Z"){
            return false
        }
        return true
    }

}
function digits(str){
    for(i=0;i<str.length;i++){
        if(str.charAt(i)<"0"||str.charAt(i)>"9"){
            return false
        }
        return true
    }

}
if(alpha(first)==false||first==""){
    alert('check the first name')
}
if(alpha(last)==false||last==""){
    alert('check the last name')
}
if(tel.length!=8||digits(tel==false)){
    alert('check the phone number ')
}
if(password.indexOf(" ")!=-1){
    alert('check the password')
}
if(email.indexOf("@")==-1|| email.indexOf(".")==-1){
    alert('check the email')
}


}

    