import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function AboutPage() {

  return (
    <div className="App">
      <Header />

      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to Hire A Painter, where we transform your vision into vibrant
          reality. We are a forward-thinking painting company, proudly founded
          by Lerato, Kelvin, Anesu, and Ayanda. With a shared passion for
          quality craftsmanship and customer satisfaction, we've embarked on a
          journey to redefine the way you experience painting services.
        </p>

        <p>
          At Hire A Painter, our vision is to be the leading force in
          transforming spaces into vibrant works of art. We aim to set new
          industry standards by delivering unmatched painting services that
          inspire, captivate, and create lasting impressions. Our commitment is
          to empower our customers with a world of colors, providing not just a
          fresh coat of paint, but a canvas for their imagination.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
