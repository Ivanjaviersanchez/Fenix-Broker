import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import "./Cotiza.css";

function Cotiza() {
  const { Formik } = formik;
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      .required("El teléfono es obligatorio"),
    email: yup
      .string()
      .email("Debe ser un email válido")
      .required("El email es obligatorio"),
    contactMethod: yup
      .string()
      .required("Debes seleccionar un método de contacto"),
    producto: yup.string().required("Este campo es obligatorio"),
    terms: yup.bool().required().oneOf([true], 'Debes aceptar los términos'),
  });

  const location = useLocation();
  const { seguro, cobertura } = location.state || {};

  return (
    <div>
      <div className='ContainerTitulosCotizacion'>
        <h3>Solicitud de Cotizacion</h3>
        <p>Procesaremos tu solicitud con nuestros acesores para ofrecerte la mejor opcion ajustada a tu necesidad</p>

        {seguro && cobertura && (
          <div className="CotizacionResumen">
            <p>ESTAS SOLICITANDO UNA COTIZACION PARA {">>>"} <strong>{seguro}</strong></p>
            <p>COBERTURA SELECCIONADA {">>>"} <strong>{cobertura}</strong></p>
          </div>
        )}
      </div>

      <div className="ContainerFormCotizacion">

        <Formik
          validationSchema={schema}

          onSubmit={(values, actions) => {
            setFormSubmitted(true);

            // 👉 Número de WhatsApp de la empresa (formato internacional sin + ni 0)
            const phoneNumber = "5492235380741"; // <-- reemplazalo con tu número real

            // 📩 Armamos el mensaje con los datos del formulario
            const message = `
              📋 *Nueva Solicitud de Cotización*

              👤 Nombre: ${values.firstName} ${values.lastName}
              🏠 Dirección: ${values.direccion}, ${values.city}, ${values.state}, CP ${values.zip}
              📞 Teléfono: ${values.telefono}
              📧 Email: ${values.email}
              🛡️ Producto: ${values.producto}
              📍 Método de contacto: ${values.contactMethod.toUpperCase()}

              ✅ Aceptó Términos y Condiciones
            `;

            setTimeout(() => {
              // 👉 Si eligen WhatsApp, abrir chat con mensaje después de 7s
              if (values.contactMethod === "whatsapp") {
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(url, "_blank"); // abre en nueva pestaña
              }

              // Resetear formulario y ocultar cartel
              actions.resetForm();
              setFormSubmitted(false); 
            }, 7000);
          }}

          initialValues={{
            firstName: 'Mark',
            lastName: 'Otto',
            direccion: 'Av SinNombre 1234',
            city: '',
            state: '',
            zip: '',
            telefono: '',
            email: '',
            contactMethod: '',
            producto: '',
            file: null,
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationFormik103" className="position-relative">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      name="direccion"
                      value={values.direccion}
                      onChange={handleChange}
                      isValid={touched.direccion && !errors.direccion}
                    />
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik104" className="position-relative">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationFormik106" className="position-relative">
                    <Form.Label>CP</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik107" className="position-relative">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      name="telefono"
                      value={values.telefono}
                      onChange={handleChange}
                      isInvalid={touched.telefono && !!errors.telefono}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.telefono}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationFormik108" className="position-relative">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik109" className="position-relative">
                    <Form.Label>¿Qué producto te interesa asegurar?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="producto"
                      value={values.producto}
                      onChange={handleChange}
                      isInvalid={touched.producto && !!errors.producto}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
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
                        id="contactWhatsApp"
                        value="whatsapp"
                        onChange={handleChange}
                        checked={values.contactMethod === "whatsapp"}
                        isInvalid={touched.contactMethod && !!errors.contactMethod}
                      />
                      <Form.Check
                        type="radio"
                        label="E-mail"
                        name="contactMethod"
                        id="contactEmail"
                        value="email"
                        onChange={handleChange}
                        checked={values.contactMethod === "email"}
                        isInvalid={touched.contactMethod && !!errors.contactMethod}
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
                    isInvalid={touched.terms && !!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"

                  />
                </Form.Group>

                <Button type="submit" className="cotiza-btn">Solicitá tu Cotización</Button>
              </Form>
            </>
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