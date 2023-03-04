var settingsMenu = document.querySelector(".settings-menu")
function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-heights")
}


var darkBtn = document.getElementById("dark-btn")
darkBtn.onclick = function(){
    darkBtn.classList.toggle("darkbtnon")

    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark")
    }
    else{
        localStorage.setItem("theme","light")
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("darkbtnon")
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("darkbtnon")
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem("theme","light")
}