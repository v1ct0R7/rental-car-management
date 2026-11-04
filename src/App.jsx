import "./App.css";

// Lista e makinave. Për të shtuar një makinë, shto një rresht këtu.
const cars = [
  { name: "Toyota Yaris", price: 35, image: "/images/yaris.jpg" },
  { name: "VW Golf", price: 45, image: "/images/golf.jpg" },
  { name: "BMW 3 Series", price: 85, image: "/images/bmw3.jpg" },
  { name: "Audi A4", price: 90, image: "/images/audi.jpg" },
  { name: "Mercedes C-Class", price: 95, image: "/images/mercedes.jpg" },
  { name: "Range Rover", price: 140, image: "/images/rangerover.jpg" },
];

const faqs = [
  { q: "What documents do I need to rent a car?", a: "An ID or passport and a valid driving license." },
  { q: "What is the minimum age?", a: "You must be at least 21 years old." },
  { q: "Do I need to pay a deposit?", a: "Yes, a refundable deposit is taken when you pick up the car." },
  { q: "Can I cancel my booking?", a: "Yes, cancellation is free up to 24 hours before pickup." },
];

function Navbar() {
  return (
    <header className="navbar">
      <img className="logo" src="/images/logo.png" alt="Rental_Car_Management logo" />
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a href="#login">Sign up/Login</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/images/logo.png" alt="Rental_Car_Management" />
      <h1>Rental_Car_Management</h1>
    </section>
  );
}

function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <div className="buttons">
        <button>Price: ${car.price} / day</button>
        <button>Book</button>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section className="faq" id="faq">
      <h2>FAQ</h2>
      {faqs.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h4>Contact us</h4>
        <p>info@rental_car_management.com</p>
        <p>+355 69 000 0000</p>
      </div>
      <div>
        <h4>Address</h4>
        <p>Rruga Sulejman Delvina, Tiranë</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cars">
        {cars.map((car) => (
          <CarCard key={car.name} car={car} />
        ))}
      </section>
      <Faq />
      <Footer />
    </div>
  );
}
