import React from 'react'
import Banner from "./Banner/Banner.jsx";
import Contact from './Contact/Contact';
import Header from './Header/Header';
import { ThemeContext } from '../Context/Theme';
import About from './About/About.jsx';
import Categories from './Categories/Categories.jsx';
import Products from './Products/Products.jsx';
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';

const Home = () => {
    const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
        <div id="" className={`${themename} app`}>
        <Banner />
      <main>
        <section id="#about">
          <About />
        </section>
        <section id="#categories">
          <Categories />
        </section>
        <section id="#products">
          <Products />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      <ScrollToTop />
      </main>
    </div>
    </>
  )
}

export default Home