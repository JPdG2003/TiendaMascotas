import { Form } from "semantic-ui-react";

import { validationSchema } from "./RegisterForm.form";


export function RegisterForm() {

  {/*TODO: handleChange */}

  
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      username: event.target[1].value,
      name: event.target[2].value,
      password: event.target[3].value,
    };
    const isValid= await validationSchema().isValid(formData);
    console.log(formData);
    console.log(isValid);
    if (isValid) {
      console.log("Enviando");
    }
    
    
  }
  


  return (
    <Form onSubmit={createUser}>
      <Form.Group widths="equal">
        <Form.Input name="email" type="text" placeholder="Correo Electronico" />
        <Form.Input name="username" type="text" placeholder="Nombre de Usuario" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="name" type="text" placeholder="Nombre y Apellido" />
        <Form.Input name="password" type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Button type ="submit" fluid>
        Registrarse
      </Form.Button>

    </Form>
  )
}
