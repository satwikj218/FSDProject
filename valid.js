var name1 = document.forms['form']['name1'];
var mobile = document.forms['form']['mobile'];
var email = document.forms['form']['email'];
var  user = document.forms['form']['user'];
var  password= document.forms['form']['password'];
var address = document.forms['form']['address'];

var name1_error = document.getElementById('name1_error');
var mobile_error = document.getElementById('mobile_error');
 var email_error = document.getElementById('email_error');
 var user_error = document.getElementById('user_error');
 var password_error = document.getElementById('password_error');
 var address_error = document.getElementById('address_error');

name1.addEventListener('textInput',name1_verify);
mobile.addEventListener('textInput',mobile_verify);
email.addEventListener('textInput',email_verify);
user.addEventListener('textInput',user_verify);
password.addEventListener('textInput',password_verify);
address.addEventListener('textInput',address_verify);

 function validated(){
    var a =/[a-z]{4,50}/g;
    var m =/[6-9][0-9]{9}/g;
    var e = /[a-zA-Z._0-9-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}/g;
    var u =/[a-z]{4,8}/g;
    var p = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%^&()*]).{5,12}/g;
     
    if(name1.value.match(u))
    {  
    }
    else{
      name1.focus();
      name1_error.style.display = "block";
      return false;

    }

    if(mobile.value.match(m))
    {
       
    }
    else{
      mobile.focus();
      mobile_error.style.display = "block";
      return false;

    }
  
    if(user.value.match(u))
    {
       
    }
    else{

      user.focus();
      user_error.style.display = "block";
      return false;

    }
    if(password.value.match(p))
    {
     
    }
    else{
      password.focus();
      password_error.style.display = "block";
      return false;
    }
    if(email.value.match(e))
    {
       
    }
    else{
      email.focus();
      email_error.style.display = "block";
      return false;

    }
    if(address.value.match(a))
    {
       
    }
    else{
      address.focus();
      address_error.style.display = "block";
      return false;

    }
 }
 //verify functions
 function name1_verify(){
   var u =/[a-z]{4,8}/g;
   if(name1.value.match(u)){
      name1_error.style.display = "none";
      return true;

   }
}
function mobile_verify(){
   var m =/[6-9][0-9]{8}/g;
   if(mobile.value.match(m)){
      mobile_error.style.display = "none";
      return true;

   }
}
function user_verify(){
   var u =/[a-z]{4,8}/g;
   if(user.value.match(u)){
      user_error.style.display = "none";
      return true;

   }
}
function password_verify(){
   var p = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%^&()*]).{5,12}/g;
   if(password.value.match(p)){
      password_error.style.display = "none";
      return true;

   }
}
function email_verify(){
   var e = /[a-zA-Z._0-9-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}/g;
   if(email.value.match(e)){
      email_error.style.display = "none";
      return true;

   }
}
function address_verify(){
   var a =/[a-z]{4,50}/g;
   if(address.value.match(a)){
      address_error.style.display = "none";
      return true;

   }
}