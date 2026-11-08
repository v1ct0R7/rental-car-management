import "./App.css";
import carPlaceholder from "./assets/car-placeholder.svg";

// Lista e makinave. Për të shtuar një makinë, shto një rresht këtu.
const cars = [
  { name: "Toyota Yaris", price: 35 },
  { name: "VW Golf", price: 45 },
  { name: "BMW 3 Series", price: 85 },
  { name: "Audi A4", price: 90 },
  { name: "Mercedes C-Class", price: 95 },
  { name: "Range Rover", price: 140 },
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
      <a className="logo" href="#home">Rental Car Management</a>
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
      <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
      <h1>Find the right car for your next trip</h1>
      <p>Browse our fleet and choose a car that fits your plans.</p>
    </section>
  );
}

function CarCard({ car }) {
  return (
    <div className="card">
      <img src={carPlaceholder} alt={`${car.name} rental car`} />
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
