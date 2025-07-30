import { useParams, useNavigate } from "react-router-dom";
import "./DetalleSeguro.css";

const segurosData = {
  autos: {
    title: "Seguros para Autos",
    description: "Coberturas completas para proteger tu auto ante cualquier imprevisto. Garantiza que vos y tu vehículo estén siempre protegidos frente a todo tipo de riesgos, ofreciéndote tranquilidad y seguridad.",
    items: [
      {
        nombre: "Responsabilidad Civil",
        beneficios: ["Daños a terceros", "Asistencia Jurídica Integral"]
      },
      {
        nombre: "Terceros Completo",
        beneficios: [
          "Responsabilidad Civil",
          "Incendio parcial y total",
          "Robo o hurto parcial y total",
          "Accidente total",
          "Granizo, terremoto e inundación",
          "Cristales y cerraduras",
          "Reposición a 0km",
          "Lock out o tumulto popular"
        ]
      },
      {
        nombre: "Todo Riesgo",
        beneficios: [
          "Responsabilidad Civil",
          "Terceros Completo",
          "Accidente Parcial con cobertura de reparación",
          "Franquicia o deducible ajustable"
        ]
      }
    ],
    incluyen: [
      "Inspección previa 100 % online",
      "Cobertura por reclamos por daños causados por el vehículo a bienes de terceros o personas",
      "Extensión de coberturas a países limítrofes",
      "Sistema CLEAS: agiliza la gestión de siniestros entre compañías adheridas",
      "Descuentos exclusivos en neumáticos",
      "Consultorio Médico Virtual: disponible 24/7"
    ], 
  },
  motos: {
    title: "Seguros para Motos",
    description: "Protegé tu moto con planes adaptados a tu uso diario, con las principales coberturas para que vos y tu moto estén siempre protegidos.",
    items: [
      {
        nombre: "Seguro Moto Base",
        beneficios: ["Daños a terceros", "Asistencia Legal"]
      },
      {
        nombre: "Seguro Moto Plus",
        beneficios: ["Daños a terceros", "Robo total", "Incendio total", "Asistencia mecánica"]
      },
      {
        nombre: "Seguro Moto Premium",
        beneficios: [
          "Robo parcial y total",
          "Incendio parcial y total",
          "Asistencia completa",
          "Cobertura contra accidentes"
        ]
      }
    ],
    incluyen: [
      "Responsabilidad Civil",
      "Accidentes Personales",
      "Extensión de coberturas a países limítrofes"
    ], 
  },
  hogar: {
    title: "Seguros para el Hogar",
    description: "Protegé tu casa y tus pertenencias con coberturas a medida orientadas a brindar seguridad y respaldo ante los imprevistos que sufra tu propiedad.",
    items: [
      {
        nombre: "Seguro Hogar Premium",
        beneficios: [
          "Incendio edificio y contenido",
          "Robo contenido",
          "Daños por agua",
          "Granizo",
          "Cristales",
          "Electrodomésticos",
          "Asistencia domiciliaria"
        ]
      },
      {
        nombre: "Seguro de Caución",
        beneficios: [
          "Cumplimiento de obligaciones contractuales",
          "Garantías legales para alquiler",
          "Garantía judicial"
        ]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  movilidad: {
    title: "Seguros de Movilidad",
    description: "Planes diseñados para proteger tu bicicleta o monopatín.",
    items: [
      {
        nombre: "Bicicletas",
        beneficios: [
          "Robo parcial y total",
          "Daños accidentales",
          "Cobertura en vía pública",
          "Responsabilidad civil"
        ]
      },
      {
        nombre: "Monopatines",
        beneficios: [
          "Robo",
          "Cobertura de daños",
          "Asistencia mecánica",
          "Cobertura en tránsito urbano"
        ]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Traslado por averias",
      "Contratación 100% online"
    ], 
  },
  objetos: {
    title: "Objetos Personales",
    description: "Protegé tus dispositivos y objetos personales estés donde estés.",
    items: [
      {
        nombre: "Seguro de Bolso",
        beneficios: ["Robo del bolso", "Documentación", "Llaves", "Celulares y billetera"]
      },
      {
        nombre: "Seguro de Celulares",
        beneficios: ["Robo", "Daño accidental", "Reposición inmediata", "Cobertura internacional"]
      },
      {
        nombre: "Seguro de Notebooks",
        beneficios: [
          "Robo dentro y fuera del hogar",
          "Daños por líquidos",
          "Rotura de pantalla",
          "Cobertura de accesorios"
        ]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  retiro: {
    title: "Seguros de Retiro",
    description: "Planificá tu futuro con nuestros seguros de retiro.",
    items: [
      {
        nombre: "Plan de Retiro Básico",
        beneficios: ["Ahorro programado", "Rendimiento garantizado", "Cobertura por fallecimiento"]
      },
      {
        nombre: "Plan de Retiro Plus",
        beneficios: [
          "Flexibilidad de aportes",
          "Inversión en fondos personalizados",
          "Cobertura por invalidez y fallecimiento"
        ]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  vida: {
    title: "Seguros de Vida",
    description: "Cuidá a los que más querés con nuestras coberturas de vida que ofrecen protección y tranquilidad a quienes más querés, ante cualquier eventualidad.",
    items: [
      {
        nombre: "Vida Individual",
        beneficios: ["Fallecimiento", "Invalidez total y permanente", "Adelanto por enfermedad"]
      },
      {
        nombre: "Vida Colectivo",
        beneficios: [
          "Cobertura para grupos de empleados",
          "Fallecimiento por cualquier causa",
          "Cobertura extendida"
        ]
      }
    ],
    incluyen: [
      "Muerte cualquier causa",
      "Indemnizaciones parciales",
      "Invalidez total o permanente"
    ], 
  },
  comercios: {
    title: "Seguros para Comercios",
    description: "Protegé tu comercio de riesgos operativos y pérdidas económicas.",
    items: [
      {
        nombre: "Todo Riesgo Operativo",
        beneficios: [
          "Incendio",
          "Robo de mercadería",
          "Daños por agua",
          "Responsabilidad civil",
          "Paralización de actividades"
        ]
      },
      {
        nombre: "Seguro para Incendio",
        beneficios: ["Daños por fuego", "Explosión", "Protección del inmueble y contenido"]
      },
      {
        nombre: "Seguro para Robo",
        beneficios: ["Robo de mercadería", "Caja fuerte", "Electrodomésticos"]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  consorcios: {
    title: "Seguros para Consorcios",
    description: "Coberturas específicas para edificios y propiedades en consorcio.",
    items: [
      {
        nombre: "Responsabilidad Civil",
        beneficios: ["Daños a terceros en áreas comunes", "Personal del edificio"]
      },
      {
        nombre: "Daños por incendio",
        beneficios: ["Cobertura total del edificio", "Daños a instalaciones"]
      },
      {
        nombre: "Cobertura integral",
        beneficios: [
          "Incendio",
          "Robo",
          "Cristales",
          "Daños por agua",
          "RC profesional del administrador"
        ]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  respcivil: {
    title: "Responsabilidad Civil para Empresas",
    description: "Protección ante reclamos de terceros por daños causados por tu empresa.",
    items: [
      {
        nombre: "Responsabilidad Civil General",
        beneficios: ["Daños materiales y personales", "Cobertura a clientes y terceros"]
      },
      {
        nombre: "Responsabilidad Profesional",
        beneficios: ["Errores y omisiones", "Negligencia profesional", "Cobertura judicial"]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  buques: {
    title: "Seguros de Buques",
    description: "Coberturas especializadas para embarcaciones comerciales o recreativas.",
    items: [
      {
        nombre: "Cobertura Total de Buques",
        beneficios: ["Pérdida total", "Daños parciales", "Remolque y salvamento"]
      },
      {
        nombre: "Responsabilidad Marítima",
        beneficios: ["Daños a terceros", "Colisiones", "Contaminación marina"]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  art: {
    title: "Seguros ART",
    description: "Seguros obligatorios para la protección de tus empleados ante accidentes laborales.",
    items: [
      {
        nombre: "Cobertura por accidente",
        beneficios: ["Gastos médicos", "Indemnización", "Rehabilitación"]
      },
      {
        nombre: "Cobertura por enfermedad laboral",
        beneficios: ["Cobertura total", "Diagnóstico y tratamiento", "Prestaciones económicas"]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  },
  caucionempresas: {
    title: "Seguros de Caución para Empresas",
    description: "Garantizá tus compromisos contractuales con seguros de caución.",
    items: [
      {
        nombre: "Caución Contractual",
        beneficios: ["Garantía de cumplimiento de contrato", "Obra pública y privada"]
      },
      {
        nombre: "Caución Judicial",
        beneficios: ["Garantía ante procesos judiciales", "Medidas cautelares"]
      }
    ],
    incluyen: [
      "Cobertura en todo el país",
      "Contratación 100% online"
    ], 
  }
};

function DetalleSeguro() {
  const navigate = useNavigate();
  const { id } = useParams();
  const seguro = segurosData[id];

  const handleCotizar = (tituloSeguro, cobertura) => {
    navigate("/cotiza", {
      state: {
        seguro: tituloSeguro,
        cobertura: cobertura
      }
    });
  };

  if (!seguro) return <div><h2>Seguro no encontrado</h2></div>;

  return (
    <div className="ContainerDetalleSeguro">
      <h3>{seguro.title}</h3>
      <p>{seguro.description}</p>
      <h4>Coberturas disponibles:</h4>

      <div className="DetalleCardsContainer">
        {seguro.items.map((item, index) => (
          <div className="DetalleCard" key={index}>
            <h4>{item.nombre}</h4>
            <h5>Incluye:</h5>
            <ul className="BeneficiosList">
              {item.beneficios.map((beneficio, i) => (
                <li key={i}>✔ {beneficio}</li>
              ))}
            </ul>
            <button className="CotizaButton" onClick={() => handleCotizar(seguro.title, item.nombre)}>
              Cotizá ahora →
            </button>
          </div>
        ))}
      </div>

      {seguro.incluyen && seguro.incluyen.length > 0 && (
        <div className="ContainerIncluyen">
          <h4>Todos los planes incluyen:</h4>
          <div className="IncluyenGrid">
            {seguro.incluyen.map((item, index) => (
              <div className="IncluyenItem" key={index}>
                {/* Podés usar un ícono real aquí más adelante */}
                <div className="IconPlaceholder">✔</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default DetalleSeguro;
