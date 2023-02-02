function valids(){
    let n = document.getElementById('name').value;
    let e = document.getElementById('email').value;
    let p = document.getElementById('pnumber').value;
    let pass = document.getElementById('password').value;
    let repass = document.getElementById('password2').value;


    let npat = /^[a-zA-Z]+$/;
    let ppat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let passpat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    

    //name
    if (n == "") {
        document.getElementById("nerr").innerHTML = "Enter the name";
    }
    else if (npat.test(n)) {
        document.getElementById("nerr").innerHTML = "Enter the valid name";
    } else {
        document.getElementById("nerr").innerHTML = "";
    }

    //email

    if (e == "") {
        document.getElementById('nerr1').innerHTML = "Enter your email";
    } else if (!mail.test(e)) {
        document.getElementById('nerr1').innerHTML = "Enter the valid email";
    }
    else {
        document.getElementById('nerr1').innerHTML = "";
    }

    //phone number

    if (p == "") {
        document.getElementById('nerr2').innerHTML = "Enter the phone number";
    } else if (!ppat.test(p)) {
        document.getElementById('nerr2').innerHTML = "Enter the valid phone number";
    } else {
        document.getElementById('nerr2').innerHTML = "";
    }

    // password

    if (pass == "") {
        document.getElementById('nerr3').innerHTML = "Enter the password";
    } else if (!passpat.test(pass)) {
        document.getElementById('nerr3').innerHTML = "Enter the valid password";
    } else {
        document.getElementById('nerr3').innerHTML = "";
    }

    //conform password

    if (repass == "") {
        document.getElementById('nerr4').innerHTML = "Re-Type the password";
    } else if (repass != pass) {
        document.getElementById('nerr4').innerHTML = "Enter the valid password";
    } else {
        document.getElementById('nerr4').innerHTML = "";
    }

    //gender

    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let others = document.getElementById("others").checked

    if(male || female || others){
        document.getElementById("err5").innerHTML = ""
    }else{
        document.getElementById("err5").innerHTML = "Please enter the radio"
    }

    //checkbox

    let myCheck = document.getElementById("check").checked;
    console.log(myCheck);

    if (myCheck) {
        document.getElementById("err6").innerHTML = ""
    } else {
        document.getElementById("err6").innerHTML = "Check box required";
    }

    //dropdown 

    let drop = document.getElementById("course").value

    if (drop === "please") {
        document.getElementById("err7").innerHTML = "Please select the course";
    }
     else {
        document.getElementById("err7").innerHTML =""
    }

}