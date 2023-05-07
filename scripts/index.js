function close_menu(e){

    let menu = document.getElementById(e)

    let fade_time = 200

    menu.style.transition = "opacity " + fade_time + "ms"
    menu.style.opacity = 0

    setTimeout(() => {
        menu.style.display = "none"
    }, fade_time)

}

function open_menu(e, keep=false){

    if(!keep){

        document.querySelectorAll(".menus").forEach(function(e){
            e.style.display = "none"
        })

    }

    let menu = document.getElementById(e)

    let fade_time = 200

    menu.style.transition = "opacity " + fade_time + "ms"

    menu.style.display = "flex"

    setTimeout(() => {
        menu.style.opacity = 1
    }, 1)

}

function move_to_top(){
    window.scrollTo(0, 0)
}

window.onscroll = function(e){

    if(window.scrollY >= 350){
        document.getElementById("up-arrow").style.display = "block"
    }else{
        document.getElementById("up-arrow").style.display = "none"
    }

}