import { Form } from "semantic-ui-react";
import { validationSchema } from "./AddressForm.form";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function AddressForm(props) {

    const { onClose, onReload, addressId } = props;
    const { user } = useAuth();

    const newAddress = async (event) => {
        event.preventDefault();
        let formData = {
          title: event.target[0].value,
          name: event.target[1].value,
          address: event.target[2].value,
          state: event.target[3].value,
          city: event.target[4].value,
          postal_code: event.target[5].value,
          phone: event.target[6].value,
          
        };
        const isValid= await validationSchema().isValid(formData);
        if (isValid) {
          try {
            if(addressId) {
                await addressCtrl.update(formData, addressId);   //Si la validacion es correcta, y nuestra address ya existe, manda los datos como edicion
            } else {
                await addressCtrl.create(formData, user.id);
            }
            
            document.getElementById("newAddressForm").reset(); 
            onReload();
            onClose();
          } catch (error) {
            console.error(error);
          }
          
        }
      
      }

  return (
    <Form id={"newAddressForm"} onSubmit={newAddress}>
      <Form.Input name="title" placeholder="Titulo de la direccion" />

      <Form.Group widths="equal">
        <Form.Input name="name" placeholder="Nombre y apellidos" />
        <Form.Input name="address" placeholder="Direccion" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="state" placeholder="Provincia" />
        <Form.Input name="city" placeholder="Ciudad" />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input name="postal_code" placeholder="Codigo postal" />
        <Form.Input name="phone" placeholder="Telefono" />
      </Form.Group>

      <Form.Button type="submit" fluid>
        Enviar
      </Form.Button>
    </Form>
  )
}
