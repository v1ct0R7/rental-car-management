import { useState } from "react";
import "./App.css";

// Lista e makinave. Për të shtuar një makinë, shto një rresht këtu.
const cars = [
  { name: "Toyota Yaris", price: 35, category: "Economy", image: "/images/yaris.jpg" },
  { name: "VW Golf", price: 45, category: "Economy", image: "/images/golf.jpg" },
  { name: "BMW 3 Series", price: 85, category: "Luxury", image: "/images/bmw3.jpg" },
  { name: "Audi A4", price: 90, category: "Luxury", image: "/images/audi.jpg" },
  { name: "Mercedes C-Class", price: 95, category: "Luxury", image: "/images/mercedes.jpg" },
  { name: "Range Rover", price: 140, category: "SUV", image: "/images/rangerover.jpg" },
];

function Navbar({ setCategory }) {
  return (
    <header className="navbar">
      <img className="logo" src="/images/logo.png" alt="Rental Car Management logo" />
      <nav>
        <a href="#home" onClick={() => setCategory("All")}>Home</a>
        <a href="#about">About</a>
        <a href="#cars" onClick={() => setCategory("Economy")}>Economy</a>
        <a href="#cars" onClick={() => setCategory("SUV")}>SUV</a>
        <a href="#cars" onClick={() => setCategory("Luxury")}>Luxury</a>
        <a href="#contact">Contact</a>
        <a href="#login">Sign up / Login</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Rental Car Management</h1>
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

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h4>Contact us</h4>
        <p>info@rentalcarmanagement.com</p>
        <p>+355 69 000 0000</p>
      </div>
      <div>
        <h4>Address</h4>
        <p>Rruga: Sulejman Delvina, Tiranë </p>
      </div>
    </footer>
  );
}

export default function App() {
  // "All" do të thotë: shfaq të gjitha makinat
  const [category, setCategory] = useState("All");

  const shownCars =
    category === "All" ? cars : cars.filter((car) => car.category === category);

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Hero />

      <section className="cars" id="cars">
        {shownCars.map((car) => (
          <CarCard key={car.name} car={car} />
        ))}
      </section>

      <div className="show-all">
        <button onClick={() => setCategory("All")}>Show all</button>
      </div>

      <Footer />
    </div>
  );
}