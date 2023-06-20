import Link from "next/link";
import {Icon, Image} from "semantic-ui-react";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
    const {children} = props; 

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
            <Image src="/images/logo.png" alt="Mascota"/> 
        </Link>

        <Link href="/">
            <Icon name="close" />
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>

      <div className={styles.blockRight} />
    </div>
  )
}


//In line 12, we call our page's logo. To change it, you need to go to the images directory, and replace the logo.png
