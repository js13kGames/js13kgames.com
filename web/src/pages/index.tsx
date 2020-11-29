import Head from 'next/head';
import Button from '../components/Button/button';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  const buffer = await fetch('https://dd5070fc-6d5b-4660-90bc-f47c62d45223.mock.pstmn.io/hero_data')
  const data = await buffer.json();

  return {
    props: {
      heroData: data,
    }
  }
}

export default function Home({ heroData }) {
  return (
<>
      <Head>
        <title>js13kGames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>   
     <div className={styles.heroContainer}>
       <p className={styles.socialIcons}>{heroData.socialLinks[1].title}</p>
       <div className={styles.middleContainer}>
         <p>{heroData.primaryText}</p>
         <p>{heroData.secondaryText}: {heroData.countdownDate}</p>
         </div>
       <Button href={heroData.callToAction.url} buttonClass="heroBtn">{heroData.callToAction.text}</Button>
     </div>
</>
  )
}
