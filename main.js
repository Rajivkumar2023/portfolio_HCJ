// ========================  toggle icon button =============
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ========================scroll section active link  ==========================

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id + ']').classList.add('active');
            });
        };
    });
    // // =============================== Sticky navbar ====================
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // // ========================= romove toggle icon and navbar ======================
    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
};

////======================== scroll reveal ================
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p .about-content', { origin: 'right'});


// //===================  typed js =========================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Full-Stack Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDeley:1000,
    loop:true,
})


// ===================   Dark mode  ========///
var icon = document.getElementById("darkmode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    }
}