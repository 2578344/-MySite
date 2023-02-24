var check = document.getElementById("first").classList.add('vanish');
var isformOpen = false;
var pressed = 0;
function change(){
    document.getElementById("first").classList.remove('vanish');
    document.getElementById("second").innerHTML = "Send";
    isformOpen = true;
    pressed += 1;
    if (isformOpen == true && pressed % 2 ==0){
        document.getElementById("email-form").submit();
        isformOpen = false;
    }
}

function exit() {
    document.getElementById("first").classList.add('vanish');
    document.getElementById("second").innerHTML = "Contact Me";
    pressed = 0;
}