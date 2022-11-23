

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
      
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ========================SWIPER====================== */

var swiperProject = new Swiper(".projects__container", {
    loop:true,
    spaceBetween:25,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },

      },
  });


  /* ========================EMAIL JS====================== */

  const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactConfirmation = document.getElementById('contact-confirm');


    const  sendEmail = async (e) =>{

        try{
            e.preventDefault();
            if(contactName.value === '' | contactEmail.value === '' || contactMessage.value === ''){
                contactConfirmation.classList.remove('color-blue');
                contactConfirmation.classList.add('color-red');
    
    
                contactConfirmation.textContent = 'Write All the input fields ';
            }else{
               let emailresolve = await emailjs.sendForm('service_3hkk3q8','template_udel2re','#contact-form','HIORaJHechUmLC1v_')
              
                    contactConfirmation.classList.add('color-blue');
                    contactConfirmation.textContent = 'Message Sent 👍'
    
                    
    
    
                    setTimeout(()=>{
                        contactConfirmation.textContent=''
                    },5000);



                    contactName.value = '';
                    contactEmail.value= '';
                    contactMessage.value = '';
               
            }
        }catch(error){
            alert('OOPS! Something went wrong',error);
            console.log(error.message);
        }

        

    }

    contactForm.addEventListener('submit',sendEmail);
