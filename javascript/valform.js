const valform = () => {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mobileNumber = document.getElementById('phno').value;
    var emails = document.getElementById('email').value;
    var female = document.getElementById("fradio")
    var male = document.getElementById("maleradio")
    var others = document.getElementById("othersradio")
    var state = document.getElementById("dropdown").value
    var dob = document.getElementById("dob").value


    if(fname == ""){
        document.getElementById('firstname').innerHTML =" ** Please provide your first name";
        return false;
    }
    if((fname.length <= 2) || (fname.length > 20)) {
        document.getElementById('firstname').innerHTML =" ** Lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(fname)){
        document.getElementById('firstname').innerHTML =" ** Only characters are allowed";
        return false;
    }



    if(lname == ""){
        document.getElementById('lastname').innerHTML =" ** Please provide your last name";
        return false;
    }
    if((lname.length <= 2) || (lname.length > 20)) {
        document.getElementById('lastname').innerHTML =" ** Lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(lname)){
        document.getElementById('lastname').innerHTML =" ** Only characters are allowed";
        return false;
    }

    
    if(emails == ""){
        document.getElementById('emailids').innerHTML =" ** Please provide your email address";
        return false;
    }



    if(mobileNumber == ""){
        document.getElementById('mobileno').innerHTML =" ** Please provide your mobile number";
        return false;
    }
    if(isNaN(mobileNumber)){
        document.getElementById('mobileno').innerHTML =" ** Characters not allowed, only Number";
        return false;
    }
    if(mobileNumber.length!=10){
        document.getElementById('mobileno').innerHTML =" ** Mobile Number must be 10 digits only";
        return false;
    }



    if(dob == "" ){
        document.getElementById("dateofb").innerHTML = " ** Please provide your date of birth"
        return false
    }

    if(female.checked === false && male.checked === false && others.checked === false){
        document.getElementById("gender").innerHTML = " ** Please provide your gender"
        return false
    }


    if(state == "select"){
        document.getElementById("selectstate").innerHTML = " ** Please provide your state"
        return false
    }


alert("Thank You " + fname + " " + lname + " for buying the tickets. Enjoy Your Show")

}


const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})














































    // if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
    //     document.getElementById('emailids').innerHTML =" ** . Invalid Position";
    //     return false;
    // }

    
    // if(emails.lastIndexOf(".") < emails.indexOf("@") + 2 || emails.lastIndexOf(".") + 2 >= emails.length){
    //     document.getElementById('emailids').innerHTML =" ** . Invalid Position";
    //     return false;
    // }


    //     if(emails.indexOf('@') < 0 ){
    //     document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
    //     return false;
    // }