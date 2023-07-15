var button = document.getElementById("button");
var dark_theme = true;

function change_background(){
    if(dark_theme == false){
        dark_theme = true
        document.body.style.background = "#fff";
        button.style.background = "#3b3b3b"
        button.style.color = "#fff"
    }else{
        dark_theme = false
        document.body.style.background = "#3b3b3b";
        
        button.style.background = "#fff"
        button.style.color = "#3b3b3b"
    }
}

