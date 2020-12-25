import Head from "next/head";
import {Accordion} from "../components";
import {AccordionNav, Header, WinnersGold} from "../layouts";
import styles from "../styles/winners.module.scss";
import {useAccordionToggle} from "../utils/useAccordionToggle";

const headerData = {
  primaryText: "meet 2019's edition winners",
  navigation: [
    {
      title: "overall",
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

const winnersData = {
  overoll: [
    {
      place: "first place",
      name: "first place game",
      category: "category",
      gameImg: "https://picsum.photos/600/300",
      author: "author name",
      authorUrl: "/author",
      gameUrl: "/game",
    },
    {
      place: "second place",
      name: "second place game",
      category: "category",
      gameImg: "https://picsum.photos/600/300",
      author: "author name",
      authorUrl: "/author",
      gameUrl: "/game",
    },
    {
      place: "third place",
      name: "third place game",
      author: "author name",
      authorUrl: "/author",
      gameUrl: "/game",
    },
    {
      place: "third place",
      name: "third place game",
      author: "author name",
      authorUrl: "/author",
      gameUrl: "/game",
    },
  ],
};

const accordion_content = {
  overall: (
    <>
      {winnersData.overoll.map((props, id) => (
        <WinnersGold {...props} key={id} />
      ))}
    </>
  ),
  mobile: <p>rap</p>,
  server: <p>techno</p>,
  webxr: <p>hiphop</p>,
  "web monetization": <p>pop</p>,
};
const Winners = () => {
  const [isOpen, onAccordionToggle] = useAccordionToggle({
    title1: false,
    title2: false,
    title3: false,
  });

  console.log({isOpen});
  return (
    <>
      <Head>
        <title>Winners</title>
      </Head>
      <Header primaryText={headerData.primaryText} />
      <div className={styles.mainContainer}>
        <AccordionNav
          isActive={isOpen}
          onClick={onAccordionToggle}
          headerData={headerData.navigation}
          yearOptions={headerData.years}
          // allOnClick={() => onAllAccordionToggle(true)}
        />
        <div className={styles.middleWrapper}>
          {headerData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              isOpen={isOpen}
              category="winners">
              {accordion_content[title]}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Winners;
