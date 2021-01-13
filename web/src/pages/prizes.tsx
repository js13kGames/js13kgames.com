import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header, PrizesList} from "../layouts";
import styles from "../styles/prizes.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const prizesData = {
  primaryText: "check out 2019's edition prizes",
  navigation: [
    {
      title: "desktop",
    },
    {
      title: "mobile",
    },
    {
      title: "server",
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
  desktop: [
    {
      place: "1st",
      name: "złoty sikor",
    },
    {
      place: "2nd-3nd",
      name: "srebrny sikor",
    },
    {
      place: "4th-5th",
      name: "srebrny sikor",
    },
    {
      place: "6th-10th",
      name: "platikowy sikor",
    },
    {
      place: "11th-13th",
      name: "platikowy sikor",
    },
    {
      place: "14th-20th",
      name: "zabawkowy sikor",
    },
    {
      place: "21th-100th",
      name: "papierowy sikor",
    },
  ],
  mobile: [
    {
      place: "1st-3rd",
      name: "lorem ipsum",
    },
    {
      place: "4th",
      name: "lorem ipsum",
    },
    {
      place: "5th",
      name: "lorem ipsum",
    },
    {
      place: "6th-13th",
      name: "lorem ipsum",
    },
    {
      place: "14th-15th",
      name: "lorem ipsum",
    },
  ],
  server: [
    {
      place: "1st-5rd",
      name: "lorem ipsum",
    },
  ],
  webxr: [
    {
      place: "1st-5rd",
      name: "lorem ipsum",
    },
  ],
  "web monetization": [
    {
      place: "1st-5rd",
      name: "lorem ipsum",
    },
  ],
};

const accordion_content = {
  desktop: [<PrizesList prizesData={prizesData.desktop} gamesNumber="100" />],
  mobile: [<PrizesList prizesData={prizesData.mobile} gamesNumber="15" />],
  server: [<PrizesList prizesData={prizesData.server} gamesNumber="5" />],
  webxr: [<PrizesList prizesData={prizesData.webxr} gamesNumber="5" />],
  "web monetization": [
    <PrizesList prizesData={prizesData["web monetization"]} gamesNumber="5" />,
  ],
};

const Prizes = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Prizes</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={prizesData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={prizesData.navigation}
          yearOptions={prizesData.years}
          // allOnClick={() => onAllAccordionToggle()}
        />
        <div className={styles.middleWrapper}>
          {prizesData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              category="prizes">
              {accordion_content[title]}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prizes;
