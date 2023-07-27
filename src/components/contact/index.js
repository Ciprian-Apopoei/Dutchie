import Styles from "./Contact.module.css";
import Title from "../title";
import ContactForm from "./contact-form";
import FaqSearch from "./faq-search";

export default function Contact() {
  return (
    <section className={Styles.contact}>
      <div className="container">
        <Title level="h2">Any questions? Just ask.</Title>
        <Title level="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Title>
        <div className={Styles.container_inner}>
          <ContactForm message="We usually respond within 1 working day 😉" />
          <FaqSearch />
        </div>
      </div>
    </section>
  );
}
