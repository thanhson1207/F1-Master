import styles from "./Header.module.css";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Search from "./Search/Search";

import data from "../../data/data.json";
import { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";

function Header({ id1, id2 }) {
  const [showResult, setShowResult] = useState(false);

  function handleHideResult() {
    setShowResult(false);
  }

  return (
    <div className={styles.wrapperHeader}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <img
            src="https://cdn-2.motorsport.com/images/amp/68ey3q40/s1000/f1-abu-dhabi-gp-2017-f1-logo-6614911.jpg"
            width="80"
            height="80"
          />
        </NavLink>

        <Search />

        <div className={styles.wrapperOption}>
          <Link
            to={id1}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            exact="true"
            activeClass="active"
          >
            <div className={styles.driversMenu}>Driver</div>
          </Link>
          <Link
            to={id2}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            exact="true"
            activeClass="active"
          >
            <div className={styles.teamsMenu}>
              Team
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
