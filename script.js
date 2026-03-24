emailjs.init('QM_XlswPfONHVuosG'); 

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Check fields aren't empty
  if (!name || !email || !phone) {
    alert('Please fill in all fields!');
    return;
  }

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address!');
    return;
  }

  // Check phone number (at least 7 digits)
  const phoneRegex = /^[+\d\s\-()]{7,15}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number!');
    return;
  }

  // If all good, send email (we'll add this next)
  sendEmail(name, email, phone);
});

function sendEmail(name, email, phone) {
  const templateParams = {
    name: name,
    email: email,
    phone: phone
  };

  emailjs.sendForm('service_9ot8rlb', 'template_3vn7dl5', templateParams)
    .then(function() {
      // Show success message
      document.getElementById('bookingForm').innerHTML = `
        <div style="text-align:center; padding: 20px;">
          <h2 style="color: #4f46e5;">🎉 Booking Confirmed!</h2>
          <p style="color: inherit;">Check your email for confirmation, ${name}!</p>
        </div>
      `;
    }, function(error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    });
}
