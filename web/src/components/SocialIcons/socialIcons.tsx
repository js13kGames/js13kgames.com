import {
  faFacebookF,
  faInstagram,
  faSlack,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import styles from "./socialIcons.module.scss";

const iconsMap = {
  twitter: faTwitter,
  facebook: faFacebookF,
  slack: faSlack,
  instagram: faInstagram,
};

const SocialIcons = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buffer = await fetch("/api/hero_data");
        const data = await buffer.json();
        setSocialLinks(data.socialLinks);
      } catch (e) {
        new Error("error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.socialIcons}>
      {socialLinks.map(({url, title}) => (
        <li className={styles.iconWrapper} key={title}>
          <Link href={url}>
            <a title={title}>
              <FontAwesomeIcon className={styles.icon} icon={iconsMap[title]} />
            </a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default SocialIcons;
