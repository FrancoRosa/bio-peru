import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer p-0">
      <div className="content has-text-centered p-4">
        <a
          href="https://www.facebook.com/groups/395326574787053/about"
          className="ml-4 mr-4"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="http://wa.link/nua7z6" className="ml-4 mr-4">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sbperuanas@gmail.com?subject=Mensage%20desde%web"
          target="_blank"
          className="ml-4 mr-4"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <p>
          <strong>Soluciones Biomedicas Peruanas </strong>
          <br />
          <span>
            Telefonos: 971776607, 984013138; E-mail: sbperuanas@gmail.com,
            sbpserviciotecnico@gmail.com
          </span>
          <br />
          <span>Urb Manuel Prado B-1, Wanchaq, Cusco</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// 971776607 - 984013138 e-mail: sbperuanas@gmail.com sbpserviciotecnico@gmail.com
// 2060610392
// Urb Manuel Prado B-1
