import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, EntriesItem, Header} from "../layouts";
import styles from "../styles/entries.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const entriesData = {
  primaryText: "check out 2019's edition entries",
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
};

const entriesItemData = {
  desktop: [
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
    {
      name: "games name",
      author: "authors name",
      gameUrl: "/game",
      img: "https://picsum.photos/600/300",
    },
  ],
};

const accordion_content = {
  desktop: [
    <>
      {entriesItemData.desktop.map((props) => (
        <EntriesItem {...props} />
      ))}
    </>,
  ],
};

const Entries = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });
  return (
    <>
      <Head>
        <title>Entries</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header primaryText={entriesData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={entriesData.navigation}
          yearOptions={entriesData.years}
        />
        <div className={styles.middleWrapper}>
          {entriesData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              flex
              category="entries">
              {accordion_content[title]}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Entries;
