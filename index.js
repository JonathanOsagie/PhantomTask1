function openNav(){
    document.getElementById("items").style.width = "25%";
    document.getElementById("sidebar-close").classList.remove("header-sidebar__btn--invis");
    document.getElementById("sidebar-close").style.marginRight = "25%";
}

function closeNav(){
    document.getElementById("items").style.width = "0px";
    document.getElementById("sidebar-close").style.marginRight = "0px";

}