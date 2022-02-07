import '../styles/layout/Section.scss';
import imgPatri from '../images/imgPatri.jpeg';
// import { ArrowBack } from '@material-ui/icons';
// import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <div className="section">
      {/* <Link to="/">
        <ArrowBack className="arrow" />
      </Link> */}
      <div className="section__container">
        <div className="section__img">
          <img src={imgPatri} alt="" />
        </div>

        <div className="section__content">
          <h1>Who is Patri</h1>
          <p> Junior fronted and backend developer in progress</p>
          <p>JavaSript developer</p>
          <p>React js Developer</p>
          <p>Node js, Express js and SQLite developer</p>
        </div>
      </div>
    </div>
  );
};
export default Section;
