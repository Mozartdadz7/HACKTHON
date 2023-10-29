// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// typing Effect

let typed = new Typed('.auto-input',{
    strings:[' está na sua porta!'],
    typeSpeed:100,
    backspeed:100,
    backDelay:2000,
    loop: true,
})