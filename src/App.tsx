import { FunctionComponent } from 'react';
import styles from './CardA.module.css';


const CardA:FunctionComponent = () => {
  	return (
    		<div className={styles.carda}>
      			<div className={styles.card0}>
        				<div className={styles.div}>A</div>
        				<div className={styles.div1}>A</div>
      			</div>
      			<div className={styles.div2}>◯</div>
    		</div>);
};

export default CardA;
