import {JoinLayout} from "@/layouts";
import styles from "./sign-in.module.scss";

export default function signInPage() {
  return (
    <>
     <JoinLayout>
        <div className={styles.signIn}>
            <h3>Inicio sesion</h3>
        </div>
      
    </JoinLayout>
    </>
  )
}
