import { Container } from "semantic-ui-react";
import styles from "./Info.module.scss";
import { DateTime } from "luxon";

export function Info(props) {
    const { food } = props;
  return (
    <Container className={styles.info}>
        <div className={styles.summary}>
            <p>{food.summary}</p>
        </div>

        <div className={styles.more}>
            <ul>
                <li>
                    <span>
                        Fecha de publicacion: {""} {DateTime.fromISO(food.publishedAt, { locale: "es"}).toFormat("DDD")} 
                    </span>
                </li>
            </ul>
        </div>
    </Container>
      
  )
}
