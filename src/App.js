import React, { Component } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./section/Services";
import AboutUs from "./section/AboutUs";
import "./styles/app.css";

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Hero />
        <Header />
        <div className='ff'>
          <AboutUs />
        </div>
        <button onClick={this.pdfToHtml}></button>
        <Services />
        <Footer />
      </div>
    );
  }
}

export default App;
