import homeimg from '../assets/images/homeimg.png'
const About = () => {
  return (
    <section className="about" id="about">
    <div className="about-img">
        <img src={homeimg} alt="" />
    </div>
    <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer!</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ratione modi earum consequuntur numquam dicta doloribus repudiandae laboriosam. Fuga tenetur non exercitationem blanditiis suscipit recusandae? Dolore veniam commodi magni veritatis, iure laudantium eligendi unde a officiis vero, ipsa aperiam eaque itaque corporis, delectus voluptas excepturi voluptatibus.recusandae? Dolore veniam commodi magni veritatis, iure laudantium eligendi </p>
        <a href="" className="btn">Read More</a>
    </div>
</section>
  );
};

export default About;
