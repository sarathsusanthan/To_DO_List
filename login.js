var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}

registerButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}
// callback
function validate(callback){
    var str=/admin/;
    var pas=/12345/;
        var user=document.getElementById("user");
        var pw=document.getElementById("pw");
        var nouser=document.getElementById("nouser");
        var nopw=document.getElementById("nopw");
        
        var c=0;
        var x;
        var y;
        if(user.value.trim()==""){
            nouser.innerHTML="Username can not be empty";
            nouser.style.color="red";
             x=0;
        } if(pw.value.trim()==""){
            nopw.innerHTML="Password can not be empty";
            nopw.style.color="red";
             y=0;
        }
        if(user.value.trim()!=""){
           
            if(user.value.length<6){
                if(str.test(user.value)){
                    x=1;
                    nouser.innerHTML="";
                }else{
                    x=0;
                    nouser.style.color="red";
                nouser.innerHTML="Invalid user name";
                }
                
            }
            else{
                x=0;
                nouser.style.color="red";
                nouser.innerHTML="Invalid user name";
                console.log(user.value.length);
            }
        }
        if(pw.value.trim()!=""){
            console.log(pw.value.length);
            if(pw.value.length<6){
                if(pas.test(pw.value)){
                    y=1;
                    
                    nopw.innerHTML="";
                }else{
                    nopw.style.color="red";
                    nopw.innerHTML="Invalid password";
                    y=0;
                }
               
                
            }else{
                y=0;
                nopw.style.color="red";
                nopw.innerHTML="Invalid password";
            }
        }
        if(x==1&&y==1){
               var z=callback();
               if(z==true){
                   return true;
               }
        }
        else{
            return false;
        }
}
function checker(){
    return true;
}