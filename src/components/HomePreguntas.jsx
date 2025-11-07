import Accordion from 'react-bootstrap/Accordion';
import "./HomePreguntas.css";

function HomePreguntas() {
  return (
    <div>
        
        {/* Preguntas frecuentes */}
        <div className='containerPreguntas'>

            <h2 className='tituloPreguntas'>Preguntas frecuentes {">>>"}</h2>

            <div className='containerAcordion'>
                <div className='acordionLeft'>
                    <h3>¿Que debes saber de tu seguro?</h3>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>¿Que vigencia tiene la póliza del seguro?</Accordion.Header>
                            <Accordion.Body>
                            La vigencia de la póliza depende del seguro que contrates, suele ser anual pero pueden existir otras opciones. <br />
                            Te recomendamos prestar atención a la vigencia, los períodos de facturación y la cantidad de cuotas, ya que son variables que inciden en el costo final del seguro.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>¿Que documentación necesito para circular?</Accordion.Header>
                            <Accordion.Body>
                            Para circular en Argentina necesitás llevar:<br />
                            -El documento de identidad.<br />
                            -La licencia de conducir correspondiente.<br />
                            -La cédula o documento de identificación del vehículo, sea cédula verde o azul.<br />
                            -El comprobante de seguro vigente, segun resolución Nº 34.225 de la SSN.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>¿Qué es la franquicia de un seguro?</Accordion.Header>
                            <Accordion.Body>
                            La franquicia de un seguro es la parte del siniestro que está a cargo del asegurado, superado ese monto, la compañía indemnizará por la diferencia entre la valoración del daño y la franquicia. <br />
                            Por ejemplo, si un seguro tiene una franquicia de $100.000- y el  siniestro es por un monto mayor, la compañía descontará la franquicia (es decir $100.000.-) e indemnizará al asegurado por el saldo restante.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>¿Qué cubre el seguro contra todo riesgo con franquicia?</Accordion.Header>
                            <Accordion.Body>
                            Te cubre ante responsabilidad civil, pérdida total y parcial por incendio, robo y/o hurto y accidente. Es ideal para quienes  quieren reducir el riesgo al valor de la franquicia. <br />
                            Con Fenix, en seguros de automotor los daños parciales se cubren de acuerdo a la franquicia que elijas, puede ser franquicia de 3% o de 6% sobre el valor de 0km.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>¿Qué cubre el seguro contra terceros? ¿Qué cubre el seguro de responsabilidad civil?</Accordion.Header>
                            <Accordion.Body>
                            Para los automóviles y motos que circulan, es  la cobertura de contratación obligatoria para cumplir con las normativas vigentes. <br />
                            Está incluida en todos nuestros planes de seguro de autos y motos. <br />
                            El seguro de Responsabilidad Civil en general, en cualquier seguro, te cubre frente a reclamos como consecuencia de daños personales y materiales que le generes, con el bien asegurado, a terceras personas.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='acordionRight'>
                        <h3>Respuestas para nuestros asegurados</h3>
                        <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Auxilio Mecánico: ¿Cómo solicito la grúa?</Accordion.Header>
                            <Accordion.Body>
                            Deberás llamar a SOS a los siguientes teléfonos dependiendo donde te encuentres: <br />
                            Desde Argentina:   0800.345.1240 <br />
                            Desde otro país    +54 351 4858321 (Cobro revertido) <br />
                            Cobertura en: Argentina, Chile, Brasil (debajo del paralelo 24, Estado de Santa Catarina), Uruguay, Paraguay, Bolivia y Perú.  Río de Janeiro excluido. <br />
                            Tené en cuenta que la asistencia para Perú será a través de reintegro, por lo que deberás solicitar el servicio a SOS y luego efectuar el trámite correspondiente.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>¿Cómo pago mi seguro?</Accordion.Header>
                            <Accordion.Body>
                            Podrás efectuar el pago de la póliza mediante: <br />
                            • Débito automático en cuenta bancaria por CBU o Tarjeta de Crédito (Visa, MasterCard, American Express, Argencard, Naranja y Titanio). <br />
                            • En efectivo (cuponera) <br />
                            Pagos online en Mercado Pago, Pago Mis Cuentas, Provincia NET, RIPSA PAGOS, Pronto Pago. <br />
                            Pagos  presenciales en Pago Fácil, Rapipago, Cobro Express, RIPSA PAGOS, Pronto Pago.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>¿Qué hacer en caso de siniestro?</Accordion.Header>
                            <Accordion.Body>
                            En caso de que hayas tenido un siniestro tenés que saber que hay un plazo de 3 días para hacer la denuncia. <br />
                            Podés realizar la denuncia a través de alguno de nuestros canales: <br />
                            • A través de tu Productor Asesor de Seguros. <br />
                            • APP de Fenix Seguros <br />
                            • Portal de asegurados de Fenix Seguros <br />
                            • Por email a denuncias@-------.com.ar. En el asunto deberás colocar: DNI, nombre y apellido; y denuncia de (tipo de seguro) <br />
                            • Equipo de Atención al Cliente: Llamando al 0810------- de lunes a viernes de 9 a 19 horas.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>¿Cómo accedo a mi póliza?</Accordion.Header>
                            <Accordion.Body>
                            Como asegurado podés visualizar tu seguro en la APP Mi Argentina. <br />
                            Ingresa a Contacto desde la nuestra Web y solicita tu póliza mediante un asesor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Baja del seguro: ¿Querés dar de baja la póliza?</Accordion.Header>
                            <Accordion.Body>
                            En el caso de que decidas anular tu póliza vigente podés hacerlo en cualquier momento. Para eso deberás solicitarlo a: <br />
                            • Tu Productor Asesor de Seguros. <br />
                            • Equipo de Atención al Cliente: De lunes a viernes de 9 a 19 horas al 0810-345-0492 <br />
                            • Portal de asegurados de Fenix Seguros <br />
                            • APP de Fenix Seguros
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            
            </div>
        </div>

    </div>
  )
}

export default HomePreguntas;