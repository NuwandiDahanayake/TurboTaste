document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
    }
  });
});




  //AOM library
   document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000,    
      easing: 'ease-in-out',    
      offset: 50,    
      delay: 0,    
      once: false,    
    });
  
     
  });
  
  

   



 
