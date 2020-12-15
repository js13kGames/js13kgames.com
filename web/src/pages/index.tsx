import {GetStaticProps} from "next";
import Head from "next/head";
import {Bio, Categories, Hero, Partners, Winners} from "../sections";
import styles from "../styles/Home.module.scss";

const partnersData = {
  title: "our partners",
  partners: {
    platinum: [
      {
        name: "platinum sponsor",
        img: "https://picsum.photos/id/121/350/200",
        url: "http://google.com",
      },
    ],

    gold: [
      {
        name: "gold sponsor 1",
        img: "https://picsum.photos/id/122/350/200",
        url: "http://google.com",
      },
      {
        name: "gold sponsor 2",
        img: "https://picsum.photos/id/123/350/200",
        url: "http://google.com",
      },
    ],
    silver: [
      {
        name: "silver sponsor 1",
        img: "https://picsum.photos/id/133/350/200",
        url: "http://google.com",
      },
      {
        name: "silver sponsor 2",
        img: "https://picsum.photos/id/142/350/200",
        url: "http://google.com",
      },
      {
        name: "silver sponsor 3",
        img: "https://picsum.photos/id/215/350/200",
        url: "http://google.com",
      },
      {
        name: "silver sponsor 4",
        img: "https://picsum.photos/id/176/350/200",
        url: "http://google.com",
      },
    ],
  },
  callToAction: {
    text: "became a partner",
    url: "http://google.com",
  },
};

const bioData = [
  {
    title: "bio",
    img: "https://picsum.photos/id/400/200/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    contentBtn: "cta button",
    path: "/#",
  },
  {
    title: "social",
    img: "https://picsum.photos/id/401/200/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    contentBtn: "cta button",
    path: "/#",
  },
  {
    title: "support us",
    img: "https://picsum.photos/id/402/200/200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
    contentBtn: "cta button",
    path: "/#",
  },
];

const winnersData = {
  title: "winners",
  categories: [
    {
      title: "overall",
      img: "https://picsum.photos/id/302/200/200",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nisi, lacinia et justo in, porttitor scelerisque augue.",
    },
    {
      title: "mobile",
      img: "https://picsum.photos/id/345/200/200",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nisi, lacinia et justo in, porttitor scelerisque augue.",
    },
    {
      title: "server",
      img: "https://picsum.photos/id/304/200/200",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nisi, lacinia et justo in, porttitor scelerisque augue.",
    },
    {
      title: "webvr",
      img: "https://picsum.photos/id/301/200/200",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nisi, lacinia et justo in, porttitor scelerisque augue.",
    },
    {
      title: "web monetization",
      img: "https://picsum.photos/id/307/200/200",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nisi, lacinia et justo in, porttitor scelerisque augue.",
    },
  ],
};

const categoriesData = {
  title: "this year's categories",
  categories: [
    {
      title: "category 1",
      img: "https://picsum.photos/id/256/350/200",
    },
    {
      title: "category 2",
      img: "https://picsum.photos/id/252/350/200",
    },
    {
      title: "category 3",
      img: "https://picsum.photos/id/251/350/200",
    },
    {
      title: "category 4",
      img: "https://picsum.photos/id/211/350/200",
    },
    {
      title: "category 5",
      img: "https://picsum.photos/id/212/350/200",
    },
  ],
  callToAction: {
    text: "submit the game",
    url: "http://google.com",
  },
};

export const getStaticProps: GetStaticProps = async () => {
  const buffer = await fetch("http://localhost:3000/api/hero_data");
  const data = await buffer.json();

  return {
    props: {
      heroData: data,
    },
  };
};

export interface HomeProps {
  heroData: {
    primaryText: string;
    secondaryText?: string;
    countdownDate?: string;
    backgroundImage?: string;
    callToAction: {
      text: string;
      url: string;
    };
    socialLinks: Array<{
      title: string;
      url: string;
      id: string;
    }>;
  };
}

export default function Home({heroData}: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>js13kGames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        primaryText={heroData.primaryText}
        secondaryText={heroData.secondaryText}
        countdownDate={heroData.countdownDate}
        backgroundImage={heroData.backgroundImage}
        btnUrl={heroData.callToAction.url}
        btnText={heroData.callToAction.text}
        countdown
        heroButton
      />
      <Bio data={bioData} />
      <Winners categories={winnersData.categories} title={winnersData.title} />
      <Categories
        title={categoriesData.title}
        categories={categoriesData.categories}
        btnText={categoriesData.callToAction.text}
        btnUrl={categoriesData.callToAction.url}
      />

      <div className={styles.banner}>
        <p>banner</p>
      </div>
      <Partners
        title={partnersData.title}
        platinum={partnersData.partners.platinum}
        gold={partnersData.partners.gold}
        silver={partnersData.partners.silver}
        btnUrl={partnersData.callToAction.url}
        btnText={partnersData.callToAction.text}
      />
    </div>
  );
}
