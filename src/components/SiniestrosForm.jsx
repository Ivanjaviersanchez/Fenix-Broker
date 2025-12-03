import { useState } from "react";
import * as formik from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import "./SiniestrosForm.css";

function SiniestrosForm() {
  const { Formik } = formik;
  const [submitted, setSubmitted] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("Ingresá tu nombre"),
    lastName: yup.string().required("Ingresá tu apellido"),
    dni: yup.string().required("Ingresá tu DNI"),
    telefono: yup
      .string()
      .matches(/^\d+$/, "Solo debe contener números")
      .required("Ingresá un número de teléfono"),
    email: yup.string().email("Email inválido").required("Ingresá tu email"),
    producto: yup.string().required("Seleccioná un producto"),
    tipoSiniestro: yup.string().required("Seleccioná el tipo de siniestro"),
  });

  const sendEmail = (values) => {
    const templateParams = {
      from_name: `${values.firstName} ${values.lastName}`,
      dni: values.dni,
      telefono: values.telefono,
      email: values.email,
      producto: values.producto,
      tipoSiniestro: values.tipoSiniestro,
    };

    emailjs.send(
        "service_siniestros",        // 🔧 tu SERVICE ID
        "template_50kaamg", // 🔧 tu TEMPLATE ID
        templateParams,
        "RVMaHQ_u9uEMK3kWF"       // 🔧 tu PUBLIC KEY
      )
      .then(() => {
        alert("Tu denuncia fue enviada correctamente.");
      })
      .catch((err) => {
        console.error("Error enviando siniestro:", err);
        alert("Hubo un error. Intentá nuevamente.");
      });
  };

  return (
    <div className="siniestros-form-container">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          dni: "",
          telefono: "",
          email: "",
          producto: "",
          tipoSiniestro: "",
        }}
        onSubmit={(values, actions) => {
          sendEmail(values);
          setSubmitted(true);
          actions.resetForm();
          setTimeout(() => setSubmitted(false), 4000);
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* Campos */}
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="text"
                  name="dni"
                  value={values.dni}
                  onChange={handleChange}
                  isInvalid={!!errors.dni}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dni}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono"
                  value={values.telefono}
                  onChange={handleChange}
                  isInvalid={!!errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.telefono}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Producto</Form.Label>
                <Form.Select
                  name="producto"
                  value={values.producto}
                  onChange={handleChange}
                  isInvalid={!!errors.producto}
                >
                  <option value="">Seleccionar...</option>
                  <option>Automotores y Motovehículos</option>
                  <option>Hogar</option>
                  <option>Comercio</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.producto}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Tipo de siniestro</Form.Label>
                <Form.Select
                  name="tipoSiniestro"
                  value={values.tipoSiniestro}
                  onChange={handleChange}
                  isInvalid={!!errors.tipoSiniestro}
                >
                  <option value="">Seleccionar...</option>
                  <option>Responsabilidad Civil por Daños a Terceros</option>
                  <option>Robo o Hurto</option>
                  <option>Incendio</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.tipoSiniestro}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" className="siniestros-btn">
              Enviar Información
            </Button>

            {submitted && (
              <div className="alert alert-success text-center mt-3">
                ✅ Información enviada correctamente
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SiniestrosForm;



