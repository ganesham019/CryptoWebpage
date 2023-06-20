const wrapper = document.querySelector(".card-container");
const dots = document.querySelectorAll(".dot");
let activeNum = 0;

dots.forEach((dot, index) => {
    dot.setAttribute("data-num", index);
    dot.addEventListener("click", (e) => {
        let currentDotNumber = e.target.dataset.num;
        if (currentDotNumber !== activeNum) {
            const displayWidth = wrapper.parentElement.clientWidth;
            const pixels = -350 * currentDotNumber;
            console.log(pixels);
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