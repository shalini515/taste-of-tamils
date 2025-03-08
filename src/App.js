import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Taste of Tamils 🍛</h1>
        <button className="cta">Order Now</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Authentic Tamil Cuisine</h1>
          <p>Experience the rich flavors of Tamil Nadu, crafted with tradition and love.</p>
          <button className="cta">View Menu</button>
        </div>
      </header>

      {/* Special Dishes Section */}
      <section className="menu">
        <h2>🍽️ Our Special Dishes</h2>
        <div className="menu-items">
          <div className="dish">
            <img src="https://th.bing.com/th/id/OIP.Njn122afXDRsVjb-rKENqQHaE9?w=934&h=625&rs=1&pid=ImgDetMain" alt="Tamil Veg Meal"/>
            <p>🥗 Traditional Tamil Veg Meal</p>
          </div>
          <div className="dish">
            <img src="https://images.slurrp.com/prod/recipe_images/transcribe/breakfast/Ghee-Roast-Dosa.webp" alt="Kari Dosa"/>
            <p>🍛 Kari Dosai (Dosa with Mutton Curry)</p>
          </div>
          <div className="dish">
            <img src="https://th.bing.com/th/id/OIP.dBPJOdShcqfIGFKCksPEUAHaNB?rs=1&pid=ImgDetMain" alt="Jigarthanda"/>
            <p>🥤 Madurai Jigarthanda</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>📍 Visit Us</h2>
        <p>📌 123 Tamil Nadu Street, Chennai</p>
        <p>📞 Call us: <strong>+91 98765 43210</strong></p>
      </section>

{/* Footer */}
<footer>
  <p>© 2025 Taste of Tamils. All rights reserved.</p>
</footer>
</div>
);
};

export default App;