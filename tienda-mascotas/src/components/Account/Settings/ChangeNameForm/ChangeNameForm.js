import { Form } from "semantic-ui-react";
import styles from "./ChangeNameForm.module.scss";
import { validationSchema } from "./ChangeNameForm.form";
import { useAuth } from "@/hooks";
import { User } from "@/api";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  const changeName = async (event) => {
    event.preventDefault();
    let formData = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
    };
    const isValid= await validationSchema().isValid(formData);

    if (isValid) {
      try {
        await userCtrl.updateMe(user.id, formData);
      } catch (error) {
        console.error(error);
      }
      
    }
  
  }

  
  
  return (
    <Form onSubmit={changeName}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <Form.Input name="firstname" placeholder="Nombre" />
        <Form.Input name="lastname" placeholder="Apellido" />
        <Form.Button type="submit">Enviar</Form.Button>
      </div>
    </Form>
  )
}
