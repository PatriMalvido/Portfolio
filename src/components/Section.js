import '../styles/layout/Section.scss';
import imgPatri from '../images/imgPatri.jpeg';

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={imgPatri} alt="" />
        </div>

        <div className="section__content">
          <h1>Who is Patri</h1>
          <p>Después de 14 años dedicándome al comercio y a la decoración/planificación de eventos, decidí darle un giro a mi trayectoria profesional.
          </p>
          <p>Fue entonces cuando retomé mis estudios y me encontré con el fantástico mundo frontend.</p>
          <p>Mi reto: aprender todos los días algo nuevo</p>
          <p> Junior fronted and backend developer</p>
          <p>JavaSript developer</p>
          <p>React js Developer</p>
          <p>Node js, Express js and SQLite developer</p>
        </div>
      </div>
    </div>
  );
};
export default Section;
