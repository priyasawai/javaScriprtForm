function validation()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    var conpass=document.getElementById("conpass").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    if(user=="")
    {
        document.getElementById("username").innerHTML="** Please fill username field";
        return false;
    }
    if((user.length<=2) || (user.length)>20)
    {
        document.getElementById("username").innerHTML=" ** user length must be between 2 and 20";
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById("username").innerHTML="** only character are allowed";
        return false;
    }

    if(pass=="")
    {
        document.getElementById("password").innerHTML="** Please fill password field";
        return false;
    }
    if(pass.length<=2 || pass.length>20)
    {
        document.getElementById("password").innerHTML="** password length must be between 2 and 20 ";
        return false;
    }
    
    if(pass!=conpass){
        document.getElementById("password").innerHTML="** password are not matching";
        return false;
    }
    if(conpass=="")
    {
        document.getElementById("conpassword").innerHTML="** Plaese fill confirm password field";
        return false;
    }

    if(mobile=="")
    {
        document.getElementById("mobileno").innerHTML="** Please fill mobile no field";
        return false;
    }
    if(isNaN(mobile))
    {
        document.getElementById("mobileno").innerHTML="** user must write digits only not character";
        return false;
    }
    if(mobile.length!=10)
    {
        document.getElementById("mobileno").innerHTML="** mobile no atleast should be 10 digit";
        return false;
    }

    if(email=="")
    {
        document.getElementById("email1").innerHTML="** Plaese fill email field ";
        return false;
    }
    if(email.indexOf('@')<=0)
    {
        document.getElementById("email1").innerHTML="** @ Invalid Position ";
        return false;
    }
    if((email.charAt(email.length-4!=".") && email.charAt(email.length-3!=".")))
    {
        document.getElementById("email1").innerHTML="** . Invalid Position";
        return false;
    }
}