import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import styles from './Home.module.css'
import { Link, animateScroll as scroll } from 'react-scroll';

function Home() {

    const id1 = '1'
    const id2 = '2'

    return (
        <div className={styles.homeContainer}>
            <Header id1={id1} id2={id2}/>
            <Content id1={id1} id2={id2}/>
        </div>
    );
}

export default Home;