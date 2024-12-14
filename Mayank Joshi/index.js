const toggle = document.getElementById("navBar-toggle");
const Navbar = document.getElementById("mob-navbar")

toggle.addEventListener('click',()=>{
    const Visiblity = toggle.dataset.shown
    if(Visiblity === "true"){
        toggle.setAttribute("data-shown","false")
        Navbar.setAttribute("data-visible","false")
    }else{
        toggle.setAttribute("data-shown","true")
        Navbar.setAttribute("data-visible","true")
    }
    console.log(Visiblity)
})