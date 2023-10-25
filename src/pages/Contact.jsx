import Header from "../components/Header";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../syles/AdminPage.css'


function ContactPage() {

  return (
    <div className="App">
      <Header />
      
<div className="contactBox">
      <main class="row">
        {/* <!--  *******   Left Section (Column) Starts   *******  --> */}

        <section class="col left">
          {/* <!--  *******   Title Starts   *******  --> */}

          <div class="contactTitle">
            <h2>Get In Touch With Us</h2>
            <p>
              Feel free to send us a message, we will get back to you as soon as
              possible.
            </p>
          </div>

          {/* <!--  *******   Title Ends   *******  --> */}

          {/* <!--  *******   Contact Info Starts   *******  --> */}

          <div class="contactInfo">
            <div class="iconGroup">
              <div class="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="details">
                <span>Phone</span>
                <span>+27 65 643 921</span>
              </div>
            </div>

            <div class="iconGroup">
              <div class="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="details">
                <span>Email</span>
                <span>hireapainter@gmail.com</span>
              </div>
            </div>

            <div class="iconGroup">
              <div class="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="details">
                <span>Location</span>
                <span>12 Smith Street, Belville, CapeTown</span>
              </div>
            </div>
          </div>

          {/* <!--  *******   Contact Info Ends   *******  --> */}

          {/* <!--  *******   Social Media Starts   *******  --> */}

          <div class="socialMedia">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>

          {/* <!--  *******   Social Media Ends   *******  --> */}
        </section>

        {/* <!--  *******   Left Section (Column) Ends   *******  --> */}

        {/* <!--  *******   Right Section (Column) Starts   *******  --> */}

        <section class="col right">
          {/* <!--  *******   Form Starts   *******  --> */}

          <form class="messageForm">
            <div class="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Your Name</label>
            </div>

            <div class="inputGroup halfWidth">
              <input type="email" name="" required="required" />
              <label>Email</label>
            </div>

            <div class="inputGroup fullWidth">
              <input type="text" name="" required="required" />
              <label>Subject</label>
            </div>

            <div class="inputGroup fullWidth">
              <textarea required="required"></textarea>
              <label>Say Something</label>
            </div>

            <div class="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>

          {/* <!--  *******   Form Ends   *******  --> */}
        </section>

        {/* <!--  *******   Right Section (Column) Ends   *******  --> */}
      </main>



    </div>
    <Footer />
    </div>
  );
}

export default ContactPage;