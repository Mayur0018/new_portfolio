import homeimg from '../assets/images/homeimg.png';

const Home = () => {
  // Replace 'cv_url_here' with the actual URL of your CV fil

  return (
    <section className="home" id="home">
      <div className="home-img">
        <img src={homeimg} alt="" />
      </div>  
      <div className="home-content">
        <h3>Hello, It&apos;s ME</h3>
        <h1>Mayur Nishad</h1>
        <h3>And I&apos;m a <span className="multiple-text"></span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla laboriosam psum dolorsit amet consectetur adipisicing Iusto nulla laboriosam dolorsit amet consectetur adipisicing elit. Iusto nulla laboriosam
        </p>

        <div className="social-media">
          <a href="#fb"><i className='bx bxl-facebook'></i></a>
          <a href="insta"><i className='bx bxl-instagram'></i></a>
          <a href="twiter"><i className='bx bxl-twitter'></i></a>
          <a href="ws"><i className='bx bxl-linkedin'></i></a>
        </div>

        {/* Add the onClick handler to trigger the download */}
        <a href="#" className="btn">Download CV</a>
      </div>
    </section>
  );
};

export default Home;
