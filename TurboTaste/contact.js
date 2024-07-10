document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill out all fields in the form.');
      return;
    }

     
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Message:', messageInput.value);

     
  });
});
