import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title:
    "Datsercom - Data, Servicio y Computadora | Servicios Técnicos Profesionales",
  description:
    "Datsercom: Expertos en soluciones tecnológicas. Reparación, mantenimiento y soporte técnico especializado para computadoras. Data, Servicio y Computadora en República Dominicana.",
  keywords:
    "datsercom, reparación computadoras, soporte técnico, servicio informático, República Dominicana, data, servicio, computadora",
  authors: [{ name: "Datsercom" }],
  openGraph: {
    type: "website",
    title: "Datsercom - Expertos en Soluciones Tecnológicas",
    description:
      "Servicios profesionales de reparación y soporte técnico de computadoras en República Dominicana.",
    siteName: "Datsercom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datsercom - Data, Servicio y Computadora",
    description: "Soluciones tecnológicas profesionales para tu negocio.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
