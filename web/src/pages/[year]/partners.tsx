import Head from "next/head";
import {Accordion, Button} from "../../components";
import {AccordionNav, Header, PartnersItem} from "../../layouts";
import styles from "../../styles/partners.module.scss";
import {useAccordionToggle} from "../../utils/useAccordionToggle";

export async function getServerSideProps({params}) {
  return {
    props: {
      year: params?.year,
    },
  };
}

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

const partnersItemData = {
  platinium: [
    {
      img: "https://picsum.photos/600/300",
    },
  ],
  gold: [
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
  ],
  silver: [
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
  ],
  supporters: [
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
    {
      img: "https://picsum.photos/600/300",
    },
  ],
};

const accordion_content = {
  platinium: [
    <>
      {partnersItemData.platinium.map((props) => (
        <PartnersItem {...props} />
      ))}
    </>,
  ],
  gold: [
    <>
      {partnersItemData.gold.map((props) => (
        <PartnersItem {...props} size="gold" />
      ))}
    </>,
  ],
  silver: [
    <>
      {partnersItemData.silver.map((props) => (
        <PartnersItem {...props} size="silver" />
      ))}
    </>,
  ],
};

const Partners = () => {
  const defaultAccordionState = {};
  partnersData.navigation.forEach(
    (data) => (defaultAccordionState[data.title] = false)
  );
  const [isOpen, onAccordionToggle, onAllAccordionToggle] = useAccordionToggle(
    defaultAccordionState
  );
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
          // yearOptions={partnersData.years}
          allOnClick={() =>
            onAllAccordionToggle(!isOpen[Object.keys(isOpen)[0]])
          }
        />
        <div className={styles.middleWrapper}>
          {partnersData.navigation.map(({title}) => (
            <Accordion
              key={title}
              title={title}
              onClick={() => onAccordionToggle(title)}
              variant="center"
              isOpen={isOpen}>
              {accordion_content[title]}
            </Accordion>
          ))}
        </div>
        <div className={styles.bottomWrapper}>
          <Button href="/partners" buttonClass="partnersBtn">
            cta button
          </Button>
          <h1>our supporters</h1>
          <div className={styles.supporters}>
            {partnersItemData.silver.map((props) => (
              <PartnersItem {...props} size="supporters" />
            ))}
          </div>
          <Button href="/partners" buttonClass="partnersBtn">
            cta button
          </Button>
        </div>
      </div>
    </>
  );
};

export default Partners;
