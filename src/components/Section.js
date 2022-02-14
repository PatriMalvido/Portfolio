import '../styles/layout/Section.scss';
import imgCode from '../images/imgcode.jpg';

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={imgCode} alt="" />
        </div>

        <div className="section__content">
          <h1>Who is Patri</h1>
          <p>
            Después de 14 años dedicándome al comercio y a la
            decoración/planificación de eventos,
          </p>
          <p>decidí darle un giro a mi trayectoria profesional.</p>

          <p>
            Fue entonces cuando retomé mis estudios y me encontré con el
            fantástico mundo frontend.
          </p>
          <p>Mi reto: aprender todos los días algo nuevo</p>

          <div className="section__icons">
            <ion-icon name="logo-html5"></ion-icon>
            <ion-icon name="logo-css3"></ion-icon>
            <ion-icon name="logo-sass"></ion-icon>
            <ion-icon name="logo-react"></ion-icon>
            <ion-icon name="logo-javascript"></ion-icon>
            <ion-icon name="logo-nodejs"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
