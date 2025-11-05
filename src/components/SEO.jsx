import { Helmet } from "react-helmet-async";

function SEO({
  title = "Organización FENIX | Broker de Seguros",
  description = "Somos FENIX, un broker de seguros que ofrece soluciones personalizadas para personas y empresas. Cotizá tu seguro fácilmente y obtené asesoramiento profesional.",
  keywords = "seguros, organización fenix, broker de seguros, mar del plata, auto, hogar, empresas, cotización, pólizas, siniestros",
  image = "https://www.organizacionfenix.com/assets/LogoFinal.png",
  url = "https://www.organizacionfenix.com/",
}) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : url;

  return (
    <Helmet>
      {/* Idioma y accesibilidad */}
      <html lang="es" />

      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Organización FENIX" />
      <meta name="robots" content="index, follow" />

      {/* Viewport y charset */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Organización FENIX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Color del tema (ajustá al color principal de tu marca) */}
      <meta name="theme-color" content="#b10f0f" />
    </Helmet>
  );
}

export default SEO;
