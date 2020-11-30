import {
  faFacebookF,
  faInstagram,
  faSlack,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from 'next/head';
import Link from "next/link";
import Button from "../components/Button/button";
import styles from '../styles/Home.module.scss';


const heroData = 
  {
    primaryText: "lead sentence here",
    secondaryText: "compo ends in:",
    countdownDate: "xx days xx:xx:xx",
    callToAction: {
      text: "sumbit the game",
      url: "http://google.com",
    },
    socialLinks: 
     [ 
       {
        title: "twitter",
        iconName: faTwitter,
        url: "https://twitter.com/js13kGames"
      },
       {
        title: "facebook",
        iconName: faFacebookF,
        url: "https://www.facebook.com/js13kGames/"
      },
       {
        title: "slack",
        iconName: faSlack,
        url: "https://js13kgames.slack.com/"
      },
       {
        title: "instagram",
        iconName: faInstagram,
        url: "https://www.instagram.com/js13kgames/"
      },
     
    ]
  };


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
<>
      <Head>
        <title>js13kGames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
     <div className={styles.heroContainer}>
       <div className={styles.socialIcons}>
         {heroData.socialLinks.map(({url, title, iconName}) => 
(
  <li className={styles.iconWrapper} key={title}>
<Link href={url} >
  <a title={title}><FontAwesomeIcon className={styles.icon} icon={iconName}  /> </a>
</Link>
</li>
)
         )}
       </div>
       <div className={styles.middleContainer}>
         <p>{heroData.primaryText}</p>
         <p>{heroData.secondaryText}: {heroData.countdownDate}</p>
         </div>
       <Button href={heroData.callToAction.url} buttonClass="heroBtn">{heroData.callToAction.text}</Button>
     </div>
</>
  )
}
