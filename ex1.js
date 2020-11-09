document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("validate").addEventListener("click", ()=> {
        pwd1 = document.getElementById("pwd").value.toString();
        pwd2 = document.getElementById("pwd2").value.toString();
        if (pwd1 != pwd2) {
            alert("Passwords don't mach!");
        }
        else if (pwd1.length <8 || pwd2.length<8) {
            alert("Password is less than 8 characters!");
        }
        else alert("Good job!");
    });
});