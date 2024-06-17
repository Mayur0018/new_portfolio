const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ex
            natus ab vitae repudiandae ratione dolorum, voluptatem ducimus sequi
            pariatur nisi cupiditate magni esse deleniti culpa iste voluptas.
            Labore, aspernatur?
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ex
            natus ab vitae repudiandae ratione dolorum, voluptatem ducimus sequi
            pariatur nisi cupiditate magni esse deleniti culpa iste voluptas.
            Labore, aspernatur?
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ex
            natus ab vitae repudiandae ratione dolorum, voluptatem ducimus sequi
            pariatur nisi cupiditate magni esse deleniti culpa iste voluptas.
            Labore, aspernatur?
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        {/* Repeat the services-box components as needed */}
      </div>
    </div>
  );
};

export default Services;
