const travelerForm = document.getElementById('travelerForm');

travelerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const ticketNumber = document.getElementById('Phone number').value;

  // Here you can perform actions like sending data to a server or storing in a database
  console.log('Traveler Information:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone number:', Phone number);

  // Clear the form
  travelerForm.reset();
});
