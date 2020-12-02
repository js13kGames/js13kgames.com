import {
  faFacebookF,
  faInstagram,
  faSlack,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button/button";
import styles from "../styles/Home.module.scss";

const heroData = {
  primaryText: "lead sentence here",
  secondaryText: "compo ends in:",
  countdownDate: "xx days xx:xx:xx",
  callToAction: {
    text: "sumbit the game",
    url: "http://google.com",
  },
  socialLinks: [
    {
      title: "twitter",
      iconName: faTwitter,
      url: "https://twitter.com/js13kGames",
    },
    {
      title: "facebook",
      iconName: faFacebookF,
      url: "https://www.facebook.com/js13kGames/",
    },
    {
      title: "slack",
      iconName: faSlack,
      url: "https://js13kgames.slack.com/",
    },
    {
      title: "instagram",
      iconName: faInstagram,
      url: "https://www.instagram.com/js13kgames/",
    },
  ],
};

const partnersData = {
  title: "our partners",
  partners: {
    gold: [
      {
        name: "gold sponsor",
        img: "https://picsum.photos/id/121/350/200",
        url: "http://google.com",
      },
    ],

    silver: [
      {
        name: "silver sponsor 1",
        img: "https://picsum.photos/id/122/350/200",
        url: "http://google.com",
      },
      {
        name: "silver sponsor 2",
        img: "https://picsum.photos/id/123/350/200",
        url: "http://google.com",
      },
    ],
    brown: [
      {
        name: "brown sponsor 1",
        img: "https://picsum.photos/id/133/350/200",
        url: "http://google.com",
      },
      {
        name: "brown sponsor 2",
        img: "https://picsum.photos/id/142/350/200",
        url: "http://google.com",
      },
      {
        name: "brown sponsor 3",
        img: "https://picsum.photos/id/215/350/200",
        url: "http://google.com",
      },
      {
        name: "brown sponsor 4",
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

const winnersData = [
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
];

const categoriesData = [
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
];

// export const getStaticProps = async () => {
//   const buffer = await fetch("/homeTestApi")
//   const data = await buffer.json();

//   return {
//     props: {
//       heroData: data,
//     }
//   }
// }

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>js13kGames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.heroContainer}>
        <div className={styles.socialIcons}>
          {heroData.socialLinks.map(({url, title, iconName}) => (
            <li className={styles.iconWrapper} key={title}>
              <Link href={url}>
                <a title={title}>
                  <FontAwesomeIcon className={styles.icon} icon={iconName} />{" "}
                </a>
              </Link>
            </li>
          ))}
        </div>
        <div className={styles.middleContainer}>
          <p>{heroData.primaryText}</p>
          <p>
            {heroData.secondaryText}: {heroData.countdownDate}
          </p>
        </div>
        <Button href={heroData.callToAction.url} buttonClass="heroBtn">
          {heroData.callToAction.text}
        </Button>
      </section>
      <section className={styles.bioWrapper}>
        {bioData.map(({title, img, description, path, contentBtn}) => (
          <div className={styles.item} key={title}>
            <h3>{title}</h3>
            <img src={img} alt="image" />
            <p>{description}</p>
            <Button href={path} buttonClass="bioBtn">
              {contentBtn}
            </Button>
          </div>
        ))}
      </section>
      <section className={styles.winnersContainer}>
        <h1>winners</h1>
        <div className={styles.winCategoriesContainer}>
          {winnersData.map(({title, img, description}) => (
            <div className={styles.winCategoryBox} key={title}>
              <h3>{title}</h3>
              <img src={img} />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.currentCategoriesWrapper}>
        <h1>this year's categories</h1>
        <div className={styles.currentCategories}>
          {categoriesData.map(({title, img}) => (
            <div
              key={title}
              className={styles.currentCategoriesItem}
              style={{backgroundImage: `url('${img}')`}}>
              <p>{title}</p>
            </div>
          ))}
        </div>

        <Button href="/#" buttonClass="categoryBtn">
          submit the game
        </Button>
      </section>
      <div className={styles.banner}>
        <p>banner</p>
      </div>
      <section className={styles.partnersContainer}>
        <h1>{partnersData.title}</h1>
        <div className={styles.sponsorsWrapper}>
          <div className={styles.goldPartner}>
            {partnersData.partners.gold.map(({img, url, name}) => (
              <Link href={url}>
                <img src={img} alt={name} title={name} />
              </Link>
            ))}
          </div>
          <div className={styles.silverPartners}>
            {partnersData.partners.silver.map(({url, name, img}) => (
              <Link href={url}>
                <img src={img} alt={name} title={name} />
              </Link>
            ))}
          </div>
          <div className={styles.brownPartners}>
            {partnersData.partners.brown.map(({img, name, url}) => (
              <Link href={url}>
                <img src={img} alt={name} title={name} />
              </Link>
            ))}
          </div>
        </div>
        <Button href={partnersData.callToAction.url} buttonClass="partnersBtn">
          {partnersData.callToAction.text}
        </Button>
      </section>
    </div>
  );
}
