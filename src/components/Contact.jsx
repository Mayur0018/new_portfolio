
const Contact = () => {
    return (
        <section className="contect" id="contect">
        <h2 className="heading">Contect <span>Me!</span></h2>
        <form action="">
            <div className="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile Number" />
                <input type="email" placeholder="Email Subject" />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
        </form>
    </section>
    );
};

export default Contact;
