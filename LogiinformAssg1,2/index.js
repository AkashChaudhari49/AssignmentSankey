      
function validForm(){
    var email = document.forms['myform']['femail'].value;
    
    var password = document.forms['myform']['fpassword'].value;

    if ( email == "sankey901@solutions.com" && password == "mindset") {
         window.location ="welcome.html";
        return false;

    }else if(email !== "sankey901@solutions.com" ){
        document.getElementById('errEmail').style.display= "block";
        // console.log("passwad is wrong")
        return false;
    }
    else if(password !== "mindset" ){
       
        document.getElementById('errPswd').style.display= "block";
        //console.log("passwad is wrong")
        return false;
    }


};


