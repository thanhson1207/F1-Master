import styles from "./Content.module.css";
import data from "../../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, animateScroll as scroll } from 'react-scroll';

function Content({id1,id2}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className={styles.wrapper}>
      <div id={id1} className={styles.box1}>
        <div className={styles.contentBox1}>Driver</div>

        <Slider className={styles.sliderPicture} {...settings}>
          {data.drivers.map((item) => (
            <div key={item.id} className={styles.pictureBox}>
              <img
                className={styles.picture}
                src={item.Image}
                alt={item.Name}
                width="100%"
                height="300px"
              />
              <div className={styles.nameBox}>
                <div className={styles.name}>{item.Name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.box2}></div>


      <div id={id2} className={styles.box3}>
        <div className={styles.contentBox3}>Team</div>

        <Slider className={styles.sliderPictureTeam} {...settings}>
          {data.teams.map((item) => (
            <div key={item.id} className={styles.pictureBox}>
              <img
                className={styles.picture}
                src={item.Image}
                alt={item.Name}
                width="100%"
                height="300px"
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default Content;
