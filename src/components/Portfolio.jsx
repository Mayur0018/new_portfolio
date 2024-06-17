import qrcodegen from "../assets/images/qrcodegen.jpg";
import ecommerce from "../assets/images/ecommerce.jpg";
import currency from "../assets/images/currency.jpg";
import imageSearch from "../assets/images/imagesearch.jpg";
import voiceconverter from "../assets/images/voiceconverter.jpg";
import temp from "../assets/images/temp.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={qrcodegen} alt="QR Code Generator" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="https://Mayur0018.github.io/QrCodeGenrator/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ecommerce} alt="E-commerce" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="https://Mayur0018.github.io/mayurpaushak.github.io/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={currency} alt="Currency Converter" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="https://Mayur0018.github.io/currencyconverter/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={imageSearch} alt="Image Search" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href="https://Mayur0018.github.io/imageengine/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={voiceconverter} alt="Voice Converter" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href=" https://Mayur0018.github.io/textvnconverter/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={temp} alt="Temperature App" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <a href=" https://Mayur0018.github.io/tempratureapp/">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
