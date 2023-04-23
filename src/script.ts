
const openEl = document.querySelector("#menuOpen")
const closeEl = document.querySelector("#menuClose")
const menuOutEl = document.querySelector("#menuOut")
const memeBtnEl = document.querySelector("#memeBtn")
const memeBoxEl = document.querySelector('#memeBox')
const dismissBtnEl = document.querySelector('#dismissBtn')

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



memeBtnEl!.addEventListener('click', () => {


        memeBoxEl!.classList.remove('hide')
        memeBoxEl!.classList.add('show')

    })
    


dismissBtnEl!.addEventListener('click', () => {
    memeBoxEl!.classList.add('hide');
    memeBoxEl!.classList.add('show')

})


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      memeBoxEl!.classList.add('show');
    }, 1000);
  });


