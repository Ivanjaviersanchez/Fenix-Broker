import { useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import "./Cotiza.css";

function Cotiza() {
  
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    direccion: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
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
          onSubmit={console.log}
          initialValues={{
            firstName: 'Mark',
            lastName: 'Otto',
            direccion: 'Av SinNombre 1234',
            city: '',
            state: '',
            zip: '',
            file: null,
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik101"
                  className="position-relative"
                >
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
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik102"
                  className="position-relative"
                >
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
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormik102"
                  className="position-relative"
                >
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
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationFormik104"
                  className="position-relative"
                >
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationFormik105"
                  className="position-relative"
                >
                  <Form.Label>CP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
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
                    />
                    <Form.Check
                      type="radio"
                      label="E-mail"
                      name="contactMethod"
                      id="contactEmail"
                    />
                  </div>
                </Form.Group>
              </fieldset>


              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>

      </div>
    

    </div>
  )
}

export default Cotiza;