import { Form } from "semantic-ui-react";
import styles from "./ChangePasswordForm.module.scss";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { validationSchema } from "./ChangePasswordForm.form";

const userCtrl = new User();

export function ChangePasswordForm() {

    const { user, logout } = useAuth();

    const changePassword = async (event) => {
        
        event.preventDefault();
        let formData = {
          password: event.target[0].value,
          repeatPassword: event.target[1].value,
        };
        const isValid= await validationSchema().isValid(formData);
        if (isValid) {
          try {
            await userCtrl.updateMe(user.id, { password: formData.password });
            logout();
          } catch (error) {
            console.error(error);
          }
          
        }
      
      }

  return (
    <Form onSubmit={changePassword} className={styles.form}>
        <label>Cambiar contraseña</label>
        <Form.Input type="password" name="password" placeholder="Nueva contraseña"/>
        <Form.Input type="password" name="repeatPassword" placeholder="Repetir contraseña"/>

        <Form.Button type="submit">
            Enviar
        </Form.Button>
    </Form>
  );
}
