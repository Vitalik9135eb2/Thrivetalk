



const iconMenu = document.querySelector(".header__burger-btn");
const menuBody = document.querySelector(".header__top");
if(iconMenu){
    iconMenu.addEventListener("click" , function(e){
        iconMenu.classList.toggle("active");
        menuBody.classList.toggle("active");
    })
}


const menuLinks = document.querySelectorAll(".header__list-link[data-goto]");

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e)  {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;


            if(iconMenu.classList.contains("active")){
                iconMenu.classList.remove("active");
                menuBody.classList.remove("active");
        
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}