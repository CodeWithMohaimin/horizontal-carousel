const spaceHolder = document.querySelectorAll('.space-holder');
const horizontal = document.querySelectorAll('.horizontal');
const container = document.querySelectorAll('.container');
const sticky = document.querySelectorAll('.sticky');

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150;
}

container.forEach(function (current, i) {
    spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;
    window.addEventListener('scroll', () => {
        horizontal[i].style.transform = `translateX(-${sticky[i].offsetTop}px)`;
    });
    window.addEventListener('resize', () => {
        spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;
    });
});