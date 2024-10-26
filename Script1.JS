function validate(){
    const user = document.getElementById("txtuser").value;
    const pwd = document.getElementById("txtpwd").value;
    var message="";
    var msgbox=document.getElementById("msg");
    if(user==""){
    message="please enter Username";
    msgbox.style.color="red";
    }
    else if(pwd==""){
    message="Please enter a password"
    msgbox.style.color="red"
    }
    else{
        message="sign in Successfull!"
        msgbox.style.color="green"
    }
     msgbox.innerText=message;
}