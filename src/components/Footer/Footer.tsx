import "./Footer.css";

export default function Footer() {
  type PhoneInfo = {
    description: string;
    phoneNumber: string;
  };

  const phoneNumbers: PhoneInfo[] = [
    { description: "Діагностику автомобілів", phoneNumber: "38(066)26-66-163" },
    {
      description: "Навчання з  ОП, професіїй",
      phoneNumber: "38(050)85-81-006",
    },
    { description: "Газову майстерню", phoneNumber: "38(067)98-00-988" },
  ];

  return (
    <footer className="footer-container" id="footer">
      <div id="location" className="footer">
        <span>
          АДРЕСА
          <img
            src="./location.webp"
            className="location-icon"
            alt="Іконка місцезнаходження"
          />
        </span>
        <address title="Адреса">
          вул. Київське шосе, 33
          <br />
          м. Полтава, Україна, 36008
        </address>
        <br />
      </div>
      <div id="phone-number" className="footer">
        <span>
          ТЕЛЕФОН{" "}
          <img
            src="./telephone-call.webp"
            className="phone-image-icon"
            alt="Іконка телефону"
          />
        </span>
        <span title="Номер телефону">
          <a href="tel:+380532633077">(0532) 63-30-77</a>
          <br />
          <a href="tel:+380508581006">38(050) 85-81-006</a>
        </span>
        <br />
      </div>
      <div id="phone-number" className="footer">
        <span>Детальніше про:</span>
        <span className="phone-description"></span>
        <ul className="phone-list-container">
          {phoneNumbers.map((phoneNumber) => (
            <li className="phone-list" key={phoneNumber.phoneNumber}>
              <div>{phoneNumber.description}:</div>{" "}
              <span className="phone">
                <a href={`tel:${phoneNumber.phoneNumber}`}>
                  {phoneNumber.phoneNumber}
                </a>{" "}
                <img
                  src="./telephone-call.webp"
                  className="phone-image-icon"
                  alt="Іконка телефону"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div id="phone-number" className="footer">
        <span>Співпрацюємо з</span>
        <span title="Національний університет Полтавська політехніка">
          <a
            className="nupp-link"
            href="https://nupp.edu.ua/"
            aria-label="Полтавська політехніка"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://nupp.edu.ua/
          </a>
        </span>
        <br />
      </div>
    </footer>
  );
}
