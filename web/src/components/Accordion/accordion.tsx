import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
  category?: string;
}

const Accordion = ({title, onClick, isOpen, category}: AccordionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          {category} {title}
        </h3>
        <span onClick={onClick}>
          <FontAwesomeIcon icon={isOpen[title] ? faMinus : faPlus} />
        </span>
      </div>
      <div className={`${isOpen[title] ? styles.open : ""} ${styles.content}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          ultricies nunc, vel laoreet enim. Quisque mattis lacus id dictum
          venenatis. Donec accumsan hendrerit ante, eget gravida nunc fringilla
          sed. Praesent ligula tortor, maximus quis vulputate a, pharetra et
          odio. Cras accumsan tincidunt dui, quis fermentum arcu aliquet a.
          Aliquam congue posuere augue, nec iaculis ex placerat nec. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Cras sed fringilla lorem. Maecenas interdum mollis
          velit ac sagittis. Donec vel nibh sodales, dignissim nisl ut, accumsan
          libero. Etiam finibus ex a justo ullamcorper accumsan. Nullam eleifend
          massa at justo posuere, vitae interdum diam vestibulum.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
