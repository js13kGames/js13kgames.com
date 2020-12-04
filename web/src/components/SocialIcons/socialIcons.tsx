import {
  faFacebookF,
  faInstagram,
  faSlack,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./socialIcons.module.scss";

const icons = [
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
];

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      {icons.map(({url, title, iconName}) => (
        <li className={styles.iconWrapper} key={title}>
          <Link href={url}>
            <a title={title}>
              <FontAwesomeIcon className={styles.icon} icon={iconName} />{" "}
            </a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default SocialIcons;
