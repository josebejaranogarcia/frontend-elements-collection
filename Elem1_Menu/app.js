const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toogle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        // Animando links
        navLinks.forEach((link, index)=>{   
            // Cuidado no son comillas normales aquí debajo!! 
            if (link.style.animation){
                link.style.animation ='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                // console.log(index / 9 + 3);
            }  
        });
        // Animación de la hamburguesa
        burger.classList.toggle('toggle');
    });
}
navSlide();

