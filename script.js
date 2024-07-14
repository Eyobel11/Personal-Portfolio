let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

const form = document.querySelector('form');

const fullname = document.getElementById('full-name');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phone');
const emailsubject = document.getElementById('email-subject')
const textmessage = document.getElementById('text-area');


function sendEmail(){

   const bodyMessage = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Phone Number: ${phonenumber.value} <br> TextMessage: ${textmessage.value}`;

  Email.send({
    SecureToken :"05079027-27cb-4837-ad14-f898d719573c",
    To : 'eyobel1214@gmail.com',
    From : "eyobel1214@gmail.com",
    Subject : emailsubject.value,
    Body : bodyMessage,
}).then(
  
  message => {

    if(message === "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}

function check(){
  const items = document.querySelectorAll(".items");
  for(const item of items){

    if(item.value === ""){
    item.classList.add("error");
    item.parentElement.classList.add("error");
  }

  if(items[1].value !== ""){
      checkEmail();
  }

  items[1].addEventListener("keyup",()=>{
    checkEmail();
  })

  item.addEventListener("keyup", () =>{{
    if(item.value != " "){
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
    else{
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  }})
}
}

function checkEmail(){
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const erroremail = document.querySelector(".error-txt.email")
  if(!email.value.match(regex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if(email.value != ""){
      erroremail.innerText = "Enter a valid email address"
    }else{
      erroremail.innerText = "Email can't be blank"
    }
  }else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  check();

  if(!fullname.classList.contains("error") && 
  !email.classList.contains("error") && 
  !phonenumber.classList.contains("error") &&
   !emailsubject.classList.contains("error") && 
   !textmessage.classList.contains("error")){
    
    sendEmail()
    form.reset()
    return false;
  }
})


menuIcon.onclick=() =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
 

/* SCROLL ACTIVE LINK*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* sticky  */


    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY >80);
 

   /*              */
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');
  };
    



  /*   swiper usage   */ 

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      

/* Dark Light Mode */

let darkModeIcon = document.querySelector('#darkmode');

  darkModeIcon.onclick = () => {

  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');

};

/*  Scroll Reveal*/

ScrollReveal({ 
  reset: true, 
  distance:'80px',
  duration: 2000,
  delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .service-container, .portfolio-box, .testimonial-wrapper,.contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p,.about-content', { origin: 'right' });


