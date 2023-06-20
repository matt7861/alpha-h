import desktopHero from "../../assets/images/hero-image-desktop.jpg";
import mobileHero from "../../assets/images/hero-image-mobile.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <picture>
        <source media="(min-width: 64em)" srcSet={mobileHero} />
        <img src={desktopHero} alt="" />
      </picture>

      <div className="hero__text">
        <h3>ON SALE NOW</h3>
        <h1>
          <span>The Super Serum,</span> for <br />
          plump, youthful skin.
        </h1>
        <p>Powered by Retinol, the gentle age-defying serum for everyone.</p>
        <a href="#" className="hero__button">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
