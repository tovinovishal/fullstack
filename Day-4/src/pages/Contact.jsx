import '../assets/css/Contact.css';
import emailjs from '@emailjs/browser';
import CustomNavbar from '../components/CustomNavbar';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmkubz8', 'template_7yxksxo', e.target, '4SjQhP0r6XkGdBebo')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email.');
        }
      );

    e.target.reset();
  };

  return (
    <div className="backk">
      <CustomNavbar />
      <div className="contact">
            <form onSubmit={sendEmail}>
              <div className="input">
                <h1>ContactUs</h1>
                <input
                  type="text"
                  name='name_1'
                  placeholder="Username"
                  required
                />
                <input
                  type="text"
                  name='contact_1'
                  placeholder="Contact Number"
                  required
                />
                <input
                  type="email"
                  name='mail_1'
                  placeholder="Email"
                  required
                />
                <textarea
                  name='textarea'
                  placeholder="Enter your comments"
                  rows={6}
                />
                <div className='butn'>
                <button className="btn" type="submit">
                  Submit
                </button>
                </div>
              </div>
            </form>
      </div>
    </div>
  )
};

export default Contact;
