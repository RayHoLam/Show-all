const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.getElementById("magnifier"); // Using ID selector

magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
