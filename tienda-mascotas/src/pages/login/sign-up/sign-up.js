import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";
import { Seo } from "@/components/Shared";

export default function signUpPage() {
  return (
    <>  
        <Seo title="Crear cuenta" />
        <JoinLayout>
            <div className = {styles.signIn}>
                <h3>Crear Cuenta</h3>
                <RegisterForm />

                <div className = {styles.actions}>
                  <Link href="/login/sign-in">Atras</Link>
                </div>
             </div>
         </JoinLayout>
    </>
  )
}
