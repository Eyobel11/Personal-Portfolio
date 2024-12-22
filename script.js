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


    // Select columns
const expertiseLeft = document.querySelector('.expertise-left');
const expertiseRight = document.querySelector('.expertise-right');

// Trigger animation when section is in view
window.addEventListener('scroll', () => {
    const section = document.getElementById('expertise');
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
        expertiseLeft.classList.add('active');
        expertiseRight.classList.add('active');
    }
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


// Animate Progress Bars on Scroll
const progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBars() {
    progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-progress');
        bar.style.width = `${targetWidth}%`;
    });
}

// Trigger animation when section is in view
window.addEventListener('scroll', () => {
  const section = document.getElementById('expertise');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
      progressBars.forEach((bar) => {
          const targetWidth = bar.getAttribute('data-progress');
          bar.style.width = `${targetWidth}%`;
      });
  }
});




// Project data
const projects = [
  {
    id: 1,
    title: "Freelance Marketing App",
    image: "fma.png",
    description: "A dynamic platform built with MongoDB, Express, React, and Node.js, designed to connect freelancers with clients. It allows clients to post jobs, freelancers to place bids, and facilitates real-time messaging. Features include job management,  and user profiles, all aimed at streamlining freelance work and collaboration.",
    tech: [
      { name: "MongoDB", icon: "bx bxl-mongodb", color: "#47A248" },
      { name: "Express.js", icon: "bx bxl-nodejs" , color: "#000000" },
      { name: "React.js", icon: "bx bxl-react", color: "#61DBFB" },
      { name: "Node.js", icon: "bx bxl-nodejs", color: "#8CC84B" }
  ],  
    link: "https://freelanceapp-frontend.onrender.com/"
},
{
  id: 2,
  title: "Inventory Managment System",
  image: "ims.png",
  description: "A robust inventory management system developed with Django and PostgreSQL to help businesses efficiently track and manage stock, material requests, and orders. It includes role-based access for admins, managers, and staff, allowing for actions such as approving material requests, issuing materials, and handling returns and transfers.",
  tech: [
    { name: "Django", icon: "bx bxl-django", color: "#092E20" },
    { name: "PostgreSQL", icon: "bx bxl-postgresql", color: "#336791" },
    { name: "Python", icon: "bx bxl-python", color: "#306998" },
    { name: "Bootstrap", icon: "bx bxl-bootstrap", color: "#563D7C" }
]
,
  link: "https://ims-orpin.vercel.app/"
},

  {
      id: 3,
      title: "Quiz App",
      image: "quiz.png",
      description: "A fun, interactive quiz application built with React, allowing users to take quizzes on various topics. The app includes a variety of questions, multiple-choice answers, and a score-tracking system that updates in real-time as the user progresses through the quiz, providing instant feedback and an engaging experience.",
      tech: [
          { name: "React.js", icon: "bx bxl-react", color: "#61DBFB" },
          { name: "JavaScript", icon: "bx bxl-javascript", color: "#F7DF1E" },
          { name: "CSS", icon: "bx bxl-css3", color: "#1572B6" }
      ],
      link: "https://eyobel11.github.io/Quiz-App/"
  },
  // Add more project objects as needed
];

// Modal elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('project-title');
const modalImage = document.getElementById('project-image');
const modalDescription = document.getElementById('project-description');
const modalTech = document.getElementById('project-tech');
const modalLink = document.getElementById('project-link');
const closeModal = document.querySelector('.close');

// Open modal function
function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (project) {
      modalTitle.textContent = project.title;
      modalImage.src = project.image;
      modalDescription.textContent = project.description;
      modalTech.innerHTML = project.tech
          .map(
              (t) =>
                  `<i class="${t.icon}" style="color: ${t.color};" title="${t.name}"></i>`
          )
          .join('');
      modalLink.href = project.link;
      modal.style.display = 'flex';
  }
}

// Close modal function
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

// Add click event listeners to projects
document.querySelectorAll('.portfolio-box').forEach((box) => {
  box.addEventListener('click', () => {
      const projectId = parseInt(box.dataset.project, 10);
      openModal(projectId);
  });
});
