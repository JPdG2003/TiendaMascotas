import { Form } from "semantic-ui-react";
import { validationSchema } from "./LoginForm.form";
import { useRouter } from "next/router";
import { Auth } from "@/api"
import { useAuth } from "@/hooks";

const authCtrl = new Auth();

export function LoginForm() {

    const router = useRouter();

    const {login} =useAuth();

    const loginUser = async (event) => {
        event.preventDefault();
        let formData = {
          identifier: event.target[0].value,
          password: event.target[1].value,
        };
        const isValid= await validationSchema().isValid(formData);

        if (isValid) {

            try {
                const response = await authCtrl.login(formData);
                login(response.jwt);
                router.push("/");
            } catch (error) {
                console.error(error);
            }
        }
    }





  return (
    <Form onSubmit={loginUser}>
        <Form.Input name="identifier" type="text" placeholder="Correo electronico o nombre de usuario" />
        <Form.Input name="password" type="password" placeholder="Contraseña" />

        <Form.Button type="submit" fluid>
            Entrar
        </Form.Button>
    </Form>
  );
}
