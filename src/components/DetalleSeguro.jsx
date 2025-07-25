import { useParams, useNavigate } from "react-router-dom";

import "./DetalleSeguro.css";

const segurosData = {
    autos: {
        title: "Seguros para Autos",
        description: "Coberturas completas para proteger tu auto ante cualquier imprevisto.",
        items: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"]
    },
    motos: {
        title: "Seguros para Motos",
        description: "Protegé tu moto con planes adaptados a tu uso diario.",
        items: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"]
    },
    hogar: {
        title: "Seguros para el Hogar",
        description: "Protegé tu casa y tus pertenencias con coberturas a medida.",
        items: ["Seguro Hogar Premium", "Seguro de Caución"]
    },
    movilidad: {
        title: "Seguros de Movilidad",
        description: "Planes diseñados para proteger tu bicicleta o monopatín.",
        items: ["Bicicletas", "Monopatines"]
    },
    objetos: {
        title: "Objetos Personales",
        description: "Protegé tus dispositivos y objetos personales estés donde estés.",
        items: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"]
    },
    retiro: {
        title: "Seguros de Retiro",
        description: "Planificá tu futuro con nuestros seguros de retiro.",
        items: ["Plan de Retiro Básico", "Plan de Retiro Plus"]
    },
    vida: {
        title: "Seguros de Vida",
        description: "Cuidá a los que más querés con nuestras coberturas de vida.",
        items: ["Vida Individual", "Vida Colectivo"]
    },
    comercios: {
        title: "Seguros para Comercios",
        description: "Protegé tu comercio de riesgos operativos y pérdidas económicas.",
        items: ["Todo Riezgo Operativo", "Seguro para Incendio", "Seguro para Robo"]
    },
    consorcios: {
        title: "Seguros para Consorcios",
        description: "Coberturas específicas para edificios y propiedades en consorcio.",
        items: ["Responsabilidad Civil", "Daños por incendio", "Cobertura integral"]
    },
    respcivil: {
        title: "Responsabilidad Civil para Empresas",
        description: "Protección ante reclamos de terceros por daños causados por tu empresa.",
        items: ["Responsabilidad Civil General", "Responsabilidad Profesional"]
    },
    buques: {
        title: "Seguros de Buques",
        description: "Coberturas especializadas para embarcaciones comerciales o recreativas.",
        items: ["Cobertura Total de Buques", "Responsabilidad Marítima"]
    },
    art: {
        title: "Seguros ART",
        description: "Seguros obligatorios para la protección de tus empleados ante accidentes laborales.",
        items: ["Cobertura por accidente", "Cobertura por enfermedad laboral"]
    },
    caucionempresas: {
        title: "Seguros de Caución para Empresas",
        description: "Garantizá tus compromisos contractuales con seguros de caución.",
        items: ["Caución Contractual", "Caución Judicial"]
    }
};

function DetalleSeguro() {
    const navigate = useNavigate();

    const handleCotizar = (tituloSeguro, cobertura) => {
        navigate("/cotiza", {
            state: {
                seguro: tituloSeguro,
                cobertura: cobertura
            }
        });
    };

    const { id } = useParams();
    const seguro = segurosData[id];

    if (!seguro) {
        return <div><h2>Seguro no encontrado</h2></div>;
    }

    return (
        <div className="ContainerDetalleSeguro">
            <h3>{seguro.title}</h3>
            <p>{seguro.description}</p>
            <h4>Coberturas disponibles:</h4>
            <div className="DetalleCardsContainer">
                {seguro.items.map((item, index) => (
                    <div className="DetalleCard" key={index}>
                    <h5>{item}</h5>
                    <button className="CotizaButton" onClick={() => handleCotizar(seguro.title, item)}>
                        Cotizá ahora
                    </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetalleSeguro;