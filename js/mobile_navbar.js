class MobileNavBar{
    constructor(){
        this.mobileMenu = document.querySelector(this.mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click",()=> console.log("Heyyy"))
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }

}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavBar.init()