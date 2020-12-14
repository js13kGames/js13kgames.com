import styles from "./accordian.module.scss";

const Accordian = ({title, isOpen, setIsOpen}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <span onClick={() => setIsOpen(title)}>
          {isOpen === title ? "X" : "|||"}
        </span>
      </div>
      <div
        className={`${isOpen === title ? styles.open : ""} ${styles.content}`}>
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

export default Accordian;
