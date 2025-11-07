import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";
import "./Cotiza.css";
import SEO from "./SEO";

function Cotiza() {
  const { Formik } = formik;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { seguro, cobertura } = location.state || {};

  // Valores iniciales
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    direccion: '',
    city: '',
    state: '',
    zip: '',
    telefono: '',
    email: '',
    contactMethod: '',
    producto: '',
    terms: false,
    seguro: seguro || '',
    cobertura: cobertura || ''
  });

  // Limpia el state
  useEffect(() => {
    if (seguro || cobertura) {
      navigate(location.pathname, { replace: true });
    }
  }, [seguro, cobertura, navigate, location.pathname]);

  // Validación
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    direccion: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    telefono: yup
      .string()
      .matches(/^\d+$/, "El teléfono solo debe contener números")
      .required("Completa el número de teléfono"),
    email: yup
      .string()
      .email("Debe ser un email válido")
      .required("Completa el E-mail"),
    contactMethod: yup.string().required("Selecciona un método de contacto"),
    producto: yup.string().required("Completa con un producto"),
    terms: yup.bool().required().oneOf([true], 'Debes aceptar los términos'),
  });

  // Función para enviar correo
  const sendEmail = (values) => {
    const templateParams = {
      from_name: `${values.firstName} ${values.lastName}`,
      from_email: values.email,
      telefono: values.telefono || "No especificado",
      direccion: values.direccion || "No especificada",
      city: values.city || "No especificada",
      state: values.state || "No especificada",
      zip: values.zip || "N/A",
      producto: values.producto || "No especificado",
      contactMethod: values.contactMethod || "No especificado",
      seguro: values.seguro || "No especificado",
      cobertura: values.cobertura || "No especificada",
    };

    emailjs
      .send("service_zpbnedd", "template_pjcy7ut", templateParams, "kaDszLJVswMaI_-WI") // PUBLIC KEY de EmailJS
      .then(
        (response) => {
          console.log("✅ CORREO ENVIADO", response.status, response.text);
          alert("Tu solicitud fue enviada con éxito. Te contactaremos pronto.");
        },
        (error) => {
          console.error("❌ ERROR AL ENVIAR CORREO:", error);
          alert("Hubo un problema al enviar el correo. Intenta nuevamente.");
        }
      );
  };

  return (
    <div>

      <SEO
        title="Cotizá tu Seguro | Organización FENIX"
        description="Completá el formulario y recibí una cotización personalizada para tu seguro de auto, moto, hogar o empresa. Rápido, simple y sin compromiso."
        keywords="cotizar seguro, cotización online, seguro auto, seguro hogar, fenix, mar del plata"
        url="https://www.organizacionfenix.com/cotiza"
      />


      <div className='ContainerTitulosCotizacion'>
        <h3>Solicitud de Cotización</h3>
        <p>Procesaremos tu solicitud con nuestros asesores para ofrecerte la mejor opción ajustada a tu necesidad.</p>

        {initialValues.seguro && initialValues.cobertura && (
          <div className="CotizacionResumen">
            <p>ESTÁS SOLICITANDO UNA COTIZACIÓN PARA {">>>"} <strong>{initialValues.seguro}</strong></p>
            <p>COBERTURA SELECCIONADA {">>>"} <strong>{initialValues.cobertura}</strong></p>
          </div>
        )}
      </div>

      <div className="ContainerFormCotizacion">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values, actions) => {
            setFormSubmitted(true);

            const phoneNumber = "5492233420530";

            const message = `
              📋 *Nueva Solicitud de Cotización*

              👤 Nombre: ${values.firstName} ${values.lastName}
              🏠 Dirección: ${values.direccion}, ${values.city}, ${values.state}, CP ${values.zip}
              📞 Teléfono: ${values.telefono}
              📧 Email: ${values.email}
              🛡️ Producto: ${values.producto}
              📍 Método de contacto: ${values.contactMethod.toUpperCase()}

              ${values.seguro ? `🚘 Seguro seleccionado: ${values.seguro}` : ""}
              ${values.cobertura ? `📌 Cobertura elegida: ${values.cobertura}` : ""}

              ✅ Aceptó Términos y Condiciones
            `;

            // Si eligió E-mail → enviar con EmailJS
            if (values.contactMethod === "email") {
              sendEmail(values);
            }

            // Si eligió WhatsApp → abrir chat
            if (values.contactMethod === "whatsapp") {
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }

            // Reset
            actions.resetForm();
            setTimeout(() => setFormSubmitted(false), 5000);
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4">
                  <Form.Label>Nombres</Form.Label>
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
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    isInvalid={!!errors.direccion}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.direccion}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3">
                  <Form.Label>CP</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
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
                  <Form.Label>E-mail</Form.Label>
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
                <Form.Group as={Col} md="12">
                  <Form.Label>¿Qué producto te interesa asegurar?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="producto"
                    value={values.producto}
                    onChange={handleChange}
                    isInvalid={!!errors.producto}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.producto}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <fieldset>
                <Form.Group as={Col} className="mb-4 d-flex flex-column align-items-center">
                  <Form.Label as="legend" className="mb-3 text-center">
                    ¿Cómo preferís que nos contactemos?
                  </Form.Label>
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="WhatsApp"
                      name="contactMethod"
                      value="whatsapp"
                      onChange={handleChange}
                      checked={values.contactMethod === "whatsapp"}
                    />
                    <Form.Check
                      type="radio"
                      label="E-mail"
                      name="contactMethod"
                      value="email"
                      onChange={handleChange}
                      checked={values.contactMethod === "email"}
                    />
                  </div>
                  {touched.contactMethod && errors.contactMethod && (
                    <div className="invalid-feedback d-block">{errors.contactMethod}</div>
                  )}
                </Form.Group>
              </fieldset>

              <Form.Group className="mb-3 d-flex justify-content-center align-items-center ">
                <Form.Check
                  required
                  name="terms"
                  label="Acepto los términos y condiciones"
                  onChange={handleChange}
                  checked={values.terms}
                  isInvalid={!!errors.terms}
                />
              </Form.Group>

              <Button type="submit" className="cotiza-btn">Solicitá tu Cotización</Button>
            </Form>
          )}
        </Formik>

        {formSubmitted && (
          <div className="alert alert-success text-center p-3 m-2" role="alert">
            ✅ ¡Tu solicitud fue enviada con éxito! Nos contactaremos a la brevedad.
          </div>
        )}
      </div>
    </div>
  );
}

export default Cotiza;

