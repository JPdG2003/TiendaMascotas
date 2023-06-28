import * as Yup from "yup";

export function validationSchema() {
    return Yup.object({
      identifier: Yup.string().required(true),
      password: Yup.string().required(true),
    });
  }