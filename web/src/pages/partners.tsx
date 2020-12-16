import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header} from "../layouts";
import styles from "../styles/winners.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const partnersData = {
  primaryText: "our partners",
  navigation: [
    {
      title: "platinium",
    },
    {
      title: "gold",
    },
    {
      title: "silver",
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
};

const Partners = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Partners</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={partnersData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={partnersData.navigation}
          yearOptions={partnersData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {partnersData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              // category="winners"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
