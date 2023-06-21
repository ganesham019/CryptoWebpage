const wrapper = document.querySelector(".card-container");
const dots = document.querySelectorAll(".dot");
let activeNum = 0;
var cardWidth = document.querySelector('.card').clientWidth;
dots.forEach((dot, index) => {
    dot.setAttribute("data-num", index);
    dot.addEventListener("click", (e) => {
        let currentDotNumber = e.target.dataset.num;
        if (currentDotNumber !== activeNum) {
            const pixels = -(cardWidth + 50) * currentDotNumber;
            wrapper.style.transform = 'translateX(' + pixels + 'px)';
            var listCards = document.querySelector(".active");
            var listdots = document.querySelector(".activedot");
            if (listCards !== null) {
                listCards.classList.remove("active");
            }
            if (listdots !== null) {
                listdots.classList.remove("activedot");
            }
            const activeCard = document.querySelector(`[data-id="${currentDotNumber}"]`)
            const activedot = document.querySelector(`[data-num="${currentDotNumber}"]`)
            activeCard.classList.add("active")
            activedot.classList.add("activedot")
            activeNum = currentDotNumber;
        }
    })
})


const menubar = document.querySelector("#menu_bar");
const menubarIcon = document.querySelector("#menu_bar i");
const menu = document.querySelector("#menu_list");
const header = document.querySelector('.header');
let menuIcon = true;

menubar.addEventListener('click', function navbar() {
    menuIcon = !menuIcon;
    if (menuIcon) {
        menu.classList.remove("active_menu");
        menubarIcon.setAttribute("class", "fa fa-bars")
    } else {
        menu.classList.add("active_menu");
        menubarIcon.setAttribute("class", "fa fa-close")
    }
}
)