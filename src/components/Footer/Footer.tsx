import { MapPin, Phone, Link2 } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  type PhoneInfo = {
    description: string;
    phoneNumber: string;
    displayNumber: string;
  };

  const phoneNumbers: PhoneInfo[] = [
    {
      description: "Діагностика автомобілів",
      phoneNumber: "+380662666163",
      displayNumber: "38(066) 26-66-163",
    },
    {
      description: "Навчання з ОП, професій",
      phoneNumber: "+380508581006",
      displayNumber: "38(050) 85-81-006",
    },
    {
      description: "Газова майстерня",
      phoneNumber: "+380679800988",
      displayNumber: "38(067) 98-00-988",
    },
  ];

  return (
    <footer className="footer-container" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-section-title">
            <MapPin size={20} />
            <span>Адреса</span>
          </div>
          <address>
            вул. Київське шосе, 33
            <br />
            м. Полтава, Україна, 36008
          </address>
        </div>

        <div className="footer-section">
          <div className="footer-section-title">
            <Phone size={20} />
            <span>Телефон</span>
          </div>
          <div className="phone-links">
            <a href="tel:+380532633077" className="phone-link">
              (0532) 63-30-77
            </a>
            <a href="tel:+380508581006" className="phone-link">
              38(050) 85-81-006
            </a>
          </div>
        </div>

        <div className="footer-section footer-section-wide">
          <div className="footer-section-title">
            <Phone size={20} />
            <span>Детальніше про</span>
          </div>
          <div className="service-phones">
            {phoneNumbers.map((phoneInfo) => (
              <a
                key={phoneInfo.phoneNumber}
                href={`tel:${phoneInfo.phoneNumber}`}
                className="service-phone-link"
              >
                <span className="service-name">{phoneInfo.description}</span>
                <span className="service-number">{phoneInfo.displayNumber}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-title">
            <Link2 size={20} />
            <span>Співпрацюємо з</span>
          </div>
          <a
            className="partner-link"
            href="https://nupp.edu.ua/"
            aria-label="Полтавська політехніка"
            rel="noopener noreferrer"
            target="_blank"
          >
            Національний університет
            <br />
            Полтавська політехніка
          </a>
        </div>
      </div>
    </footer>
  );
}
