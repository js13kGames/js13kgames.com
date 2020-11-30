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

  const bioData = [
    {
      title: "bio",
      img: "https://picsum.photos/id/400/200/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
      contentBtn: "cta button",
      path: "#"
    },
    {
      title: "social",
      img: "https://picsum.photos/id/401/200/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
      contentBtn: "cta button",
      path: "#"
    },
    {
      title: "support us",
      img: "https://picsum.photos/id/402/200/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mi, faucibus vel ligula a, varius iaculis leo. Fusce vehicula ac orci eleifend tempus. Proin aliquet fringilla lacus sit amet varius.",
      contentBtn: "cta button",
      path: "#"
    },
  ]
  


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
     </section>
<section className={styles.bioWrapper}>

  {bioData.map(({title, img, description, path, contentBtn}) => (
    
<div className={styles.item}>
  <h1>{title}</h1>
  <img src={img} alt="image" />
  <p>{description}</p>
  <Button href={path} buttonClass="bioBtn">{contentBtn}</Button>
</div>

  ))}
 


 
</section>
     
</div>
  )
}
