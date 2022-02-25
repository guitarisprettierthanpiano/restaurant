/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};

setTimeout(() => {
    //left tiki animations on scroll
    const allTikisLeft = document.querySelectorAll('.left')
    const observerL = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('wobbleL', entry.isIntersecting)

            if(entry.isIntersecting) observerL.unobserve(entry.target)
        })
        }
        ,{
            threshold: 0.2,
        }
    )

    for (let i = 0; i < allTikisLeft.length; i++){
        observerL.observe(allTikisLeft[i])
    }

    //right tiki animations on scroll
    const allTikisRight = document.querySelectorAll('.right')
    const observerR = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('wobbleR', entry.isIntersecting)

            if(entry.isIntersecting) observerR.unobserve(entry.target)
        })
        }
        ,{
            threshold: 0.2,
        }
    )
    for (let j = 0; j < allTikisRight.length; j++){
        observerR.observe(allTikisRight[j])
    }
}, 250);

/******/ })()
;
//# sourceMappingURL=observers.js.map