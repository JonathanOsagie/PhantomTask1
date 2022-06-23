function openNav(){
    document.getElementById("items").style.width = "100%";
    document.getElementById("sidebar-close").classList.remove("header-sidebar--invis");
    // document.getElementById("sidebar-close").style.marginRight = "25%";
}

function closeNav(){
    document.getElementById("items").style.width = "0%";
    document.getElementById("sidebar-close").style.marginRight = "0px";

}