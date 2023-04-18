
const openEl = document.querySelector("#menuOpen")
const closeEl = document.querySelector("#menuClose")
const menuOutEl = document.querySelector("#menuOut")

// OPEN NAVBAR
openEl!.addEventListener('click', () => {

    document.querySelector("#menuOpen")?.classList.add("hide");

    document.querySelector("#menuClose")?.classList.remove("hide");

    menuOutEl?.classList.remove("hide");
});

// CLOSE NAVBAR
closeEl!.addEventListener('click', () => {

    document.querySelector("#menuClose")?.classList.add("hide");

    document.querySelector("#menuOpen")?.classList.remove("hide");

    menuOutEl?.classList.add("hide");
});