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
            decoración/planificación de eventos, decidí darle un giro a mi trayectoria profesional.
          </p>
          
          <p>Fue entonces cuando retomé mis estudios y me encontré con el
            fantástico mundo frontend.
          </p>
          <p>Me encantaría poder entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos y, al mismo tiempo, que me permita desarrollarme profesionalmente.
          </p>
          <p>Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar en equipo y fomentar valores como los del compañerismo.

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
