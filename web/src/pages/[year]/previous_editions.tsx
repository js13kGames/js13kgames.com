import Head from "next/head";
import {PrevEditionWrapper} from "../../layouts";
import {Hero} from "../../sections";

export function getServerSideProps({params}) {
  return {
    props: {
      year: params?.year,
    },
  };
}

const heroData = {
  primaryText: "previous edition",
  secondaryText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. ",
  prev: [
    {
      year: "2020",
      img: "https://picsum.photos/600/600",
      description:
        "2020Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2019",
      img: "https://picsum.photos/600/600",
      description:
        "2019Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2018",
      img: "https://picsum.photos/600/600",
      description:
        "2018Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2017",
      img: "https://picsum.photos/600/600",
      description:
        "2017Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2016",
      img: "https://picsum.photos/600/600",
      description:
        "2016Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2015",
      img: "https://picsum.photos/600/600",
      description:
        "2015Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
    {
      year: "2014",
      img: "https://picsum.photos/600/600",
      description:
        "2014Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in        consequat mauris semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac euismod sem. Ut id nulla a mi varius rutrum in condimentum quam. Cras eget orci justo. Fusce condimentum imperdiet neque, in consequat mauris semper ac.",
    },
  ],
};

const PriviousEditions = ({year}) => {
  return (
    <>
      <Head>
        <title>Previous Editions</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero
        primaryText={heroData.primaryText}
        secondaryText={heroData.secondaryText}
        prevEdition="prevEditionWrapper"
      />
      {heroData.prev.map(({description, img}) => (
        <PrevEditionWrapper year={year} description={description} img={img} />
      ))}
    </>
  );
};

export default PriviousEditions;
