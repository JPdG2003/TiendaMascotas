import { Form } from "semantic-ui-react";
import styles from "./ChangeEmailForm.module.scss";
import { validationSchema } from "./ChangeEmailForm.form"
import { User } from "@/api";
import { useAuth } from "@/hooks";

const userCtrl = new User();

export function ChangeEmailForm() {

    const { user, updateUser } = useAuth();

    const changeEmail = async (event) => {
        event.preventDefault();
        let formData = {
          email: event.target[0].value,
          repeatEmail: event.target[1].value,
        };
        const isValid= await validationSchema().isValid(formData);
        if (isValid) {
          try {
            await userCtrl.updateMe(user.id, { email: formData.email });
            updateUser("email", formData.email);
            document.getElementById("changeMailForm").reset();
          } catch (error) {
            console.error(error);
          }
          
        }
      
      }


  return (
    <Form id={"changeMailForm"} onSubmit={changeEmail} className={styles.form}>
        <label>Cambiar correo electronico</label>

        <Form.Input name="email" placeholder="Nuevo correo electronico" />
        <Form.Input name="repeatEmail" placeholder="Repetir correo electronico" />
        <Form.Button type="submit">
            Enviar
        </Form.Button>
    </Form>
  );
}
