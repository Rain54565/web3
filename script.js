const slider = document.querySelector('.slider');
const pickupButton = document.querySelector('.pickup-button');

let currentIndex = 0;

function pickup() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  const slideWidth = slider.children[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

pickupButton.addEventListener('click', pickup);







<body>


  
<div class="full"></div>
  <nav class="navbar">
      <div class="container">
        <div class="logo">
          <a href="#">TRavia</a>
        </div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
  </ul></div></nav>



      <section id="tours">
          <div class="tour-packages">
            <h2>Our Tours</h2>
            <div class="tour-card">
              <img src="tour1.jpg" alt="Tour 1">
              <h3>Tropical Paradise Retreat</h3>
              <p>Escape to breathtaking beaches and enjoy the sun...</p>
              <a href="#" class="cta-button">Learn More</a>
            </div>
            <div class="booking-table">
              <h3>Book a Tour</h3>
              <table>
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Journey Date</th>
                    <th>Availability</th>
                    <th>Book Now</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tropical Paradise</td>
                    <td>2023-09-15</td>
                    <td>5 seats</td>
                    <td><a href="#" class="cta-button">Book</a></td>
                  </tr>
                  <!-- Repeat for other tour packages -->
                </tbody>
              </table>
            </div>
          </div>
        </section>