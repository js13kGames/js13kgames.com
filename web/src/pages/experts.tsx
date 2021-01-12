import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, ExpertsItem, Header} from "../layouts";
import styles from "../styles/experts.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const expertsData = {
  primaryText: "check out 2019's edition experts",
  navigation: [
    {
      title: "desktop, mobile, server",
    },
    {
      title: "webxr",
    },
    {
      title: "web monetization",
    },
  ],
  years: [
    {
      year: "2019",
    },
    {
      year: "2018",
    },
    {
      year: "2017",
    },
    {
      year: "2016",
    },
    {
      year: "2015",
    },
    {
      year: "2014",
    },
    {
      year: "2013",
    },
  ],
  "desktop, mobile, server": [
    {
      name: "Elon Musk",
      img: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    },
    {
      name: "Elon Musk",
      img: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    },
    {
      name: "Elon Musk",
      img: "https://picsum.photos/600/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ],
  webxr: [
    {
      name: "Elon Musk",
      img: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    },
  ],
  "web monetization": [
    {
      name: "Elon Musk",
      img: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    },
  ],
};

const accordion_content = {
  "desktop, mobile, server": [
    <>
      {expertsData["desktop, mobile, server"].map((props) => (
        <ExpertsItem {...props} />
      ))}
    </>,
  ],
  webxr: [
    <>
      {expertsData.webxr.map((props) => (
        <ExpertsItem {...props} />
      ))}
    </>,
  ],
  "web monetization": [
    <>
      {expertsData["web monetization"].map((props) => (
        <ExpertsItem {...props} />
      ))}
    </>,
  ],
};

const Experts = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Experts</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={expertsData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={expertsData.navigation}
          yearOptions={expertsData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {expertsData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              variant="grid"
              category="experts">
              {accordion_content[title]}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experts;
