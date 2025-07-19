import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <>

    <div className='container-location1'>
    <div style={{padding:"20px"}}>
        <img src='/images/location2.jpg' width={"400px"} >
        </img>

    </div>
        <div className='location-content'>

  <h2>📍 Our Location</h2>
  <p>We are conveniently located in the heart of the city, easily accessible by all major transportation routes. Whether you're visiting with friends, family, or colleagues, reaching us is hassle-free.</p>

  <p><strong>Address:</strong> 123 Foodie Lane, Near Central Park, Sehore, MP 466001</p>
  <p><strong>Opening Hours:</strong> Monday to Sunday — 11:00 AM to 11:00 PM</p>

  <p>Come experience delicious meals and a cozy atmosphere!</p>

      <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2841928545374!2d75.88377681498102!3d23.807835184568756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c44837b77f1ed%3A0xb9d9b09d5c8cfc9b!2sSehore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1616562747787!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>

    </div>
    </>
  );
}

export default BasicExample;