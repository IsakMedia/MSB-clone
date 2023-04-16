
const openEl = document.querySelector("#menuOpen")
const closeEl = document.querySelector("#menuClose")

// OPEN NAVBAR
openEl!.addEventListener('click', () => {

    document.querySelector("#menuOpen")?.classList.add("hide");

    document.querySelector("#menuClose")?.classList.remove("hide");
});

// CLOSE NAVBAR
closeEl!.addEventListener('click', () => {

    document.querySelector("#menuClose")?.classList.add("hide");

    document.querySelector("#menuOpen")?.classList.remove("hide");
});