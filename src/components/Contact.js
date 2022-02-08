import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../styles/layout/Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
        <form action="https://formspree.io/f/meqvyvyy" method="post" className='form'>
      <Link to="/">
          <ArrowBack className='arrow'/>
      </Link>

      <div className='inputs'>
          <h1>Contact me</h1>
          <input type="text" id="completename" name="completename" placeholder="Name" required/>
          <input type="email" id="email" name="email" placeholder="Email" required
              pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"/>
          <input type="text" className='message' id="message" name="message" placeholder="Message" required/>

          {/* <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Message' className='message'/> */}

          <button type='submit' >Send</button>
      </div>
      </form>
    </div>
  );
};
export default Contact;
