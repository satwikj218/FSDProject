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
   var x =0 ;
   var a =/[a-z]{4,50}/g;
   var m =/[6-9][0-9]{9}/g;
   var e = /[a-zA-Z._0-9-]{2,12}[@][a-z]{3,15}[.][a-z]{2,6}/g;
   var u =/[a-z]{2,12}/g;
   var p = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%^&()*]).{5,12}/g;
   if(name1.value.match(u)){
      x=x+1;  
   }
   else{
      name1.focus();
      name1_error.style.display = "block";
      return false;
   }

    
   var m =/[6-9][0-9]{9}/g;
   if(mobile.value.match(m)){
      x = x+1; 
   }
   else{
      mobile.focus();
      mobile_error.style.display = "block";
      return false;
   }

   var u =/[a-z]{2,12}/g;
   if(user.value.match(u)){
      x = x+1;
   }
   else{
      user.focus();
      user_error.style.display = "block";
      return false;
   }

   var p = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%^&()*]).{5,12}/g;
   if(password.value.match(p)){
      x =x+1;
   }
   else{
      password.focus();
      password_error.style.display = "block";
      return false;
   }

   var e = /[a-zA-Z._0-9-]{2,12}[@][a-z]{3,15}[.][a-z]{2,6}/g;
   if(email.value.match(e)){ 
      x=x+1;
   }
   else{
      email.focus();
      email_error.style.display = "block";
      return false;
   }

   var a =/[a-z]{4,50}/g;
   if(address.value.match(a)){
      x = x+1;
   }
   else{
      address.focus();
      address_error.style.display = "block";
      return false;
   }
   
   if(x == 6){
      var data = {};
      data.name = $('#id1').val(),
      data.mobile = $('#id2').val(),
      data.username = $('#id3').val(),
      data.password = $('#id4').val(),
      data.email = $('#id5').val(),
      data.address = $('#id6').val(),
         
      $.ajax({
         type : "POST" ,
         url:"http://localhost:4002/register",
         data : JSON.stringify(data),
         contentType: "application/json; charset=utf-8",
         dataType : "Json",
         success:function(d) {
            swal({
               title: "Successfully Registered",
               text: "Welcome to our Store",
               icon: "success",
               button: "Ok",
           })
           .then((value) => {
               swal(window.location.href = 'login.html');
            });    
         },
         error:function(tyjuk){
            swal({
               title: "Data not inserted in Database",
               text: "Please Try Again",
               icon: "error",
               button: "Ok",
           });
         }
      });
   }
 }
 

name1.addEventListener('textInput',name1_verify);
function name1_verify(){
   var u =/[a-z]{4,8}/g;
   if(name1.value.match(u)){
      name1_error.style.display = "none";
      return true;
   }
}

mobile.addEventListener('textInput',mobile_verify);
function mobile_verify(){
   var m =/[6-9][0-9]{8}/g;
   if(mobile.value.match(m)){
      mobile_error.style.display = "none";
      return true;
   }
}

user.addEventListener('textInput',user_verify);
function user_verify(){
   var u =/[a-z]{4,8}/g;
   if(user.value.match(u)){
      user_error.style.display = "none";
      return true;
   }
}

password.addEventListener('textInput',password_verify);
function password_verify(){
   var p = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%^&()*]).{5,12}/g;
   if(password.value.match(p)){
      password_error.style.display = "none";
      return true;
   }
}

email.addEventListener('textInput',email_verify);
function email_verify(){
   var e = /[a-zA-Z._0-9-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}/g;
   if(email.value.match(e)){
      email_error.style.display = "none";
      return true;
   }
}


address.addEventListener('textInput',address_verify);
function address_verify(){
   var a =/[a-z]{4,50}/g;
   if(address.value.match(a)){
      address_error.style.display = "none";
      return true;
   }
}