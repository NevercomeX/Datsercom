# Datsercom Landing Page

**Sitio web profesional para servicios técnicos de computadoras**

> Data • Servicio • Computadora

## 🚀 Tecnologías Utilizadas

- **Next.js 15.5.9** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Node.js**

## 📁 Estructura del Proyecto

```
Datsercom/
├── src/
│   ├── app/                      # App Router (Next.js 15)
│   │   ├── layout.tsx           # Layout raíz con metadata
│   │   └── page.tsx            # Página principal
│   ├── components/
│   │   └── datsercom/          # Componentes modulares
│   │       ├── index.ts        # Exportaciones
│   │       ├── Logo.tsx        # Logo SVG de Datsercom
│   │       ├── Navbar.tsx      # Barra de navegación
│   │       ├── Hero.tsx        # Sección principal
│   │       ├── Services.tsx    # Grid de servicios
│   │       ├── WhyChooseUs.tsx # Ventajas competitivas
│   │       ├── Testimonials.tsx # Reseñas de clientes
│   │       ├── Contact.tsx     # Formulario de contacto
│   │       └── Footer.tsx      # Pie de página
│   └── styles/
│       └── global.css          # Estilos globales + Tailwind
├── public/                      # Recursos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## ✨ Características

### Diseño Moderno

- ✅ **100% Responsive** - Móvil, tablet y desktop
- ✅ **Tailwind CSS** - Diseño basado en utilidades
- ✅ **Animaciones suaves** - Transiciones y efectos hover
- ✅ **Gradientes modernos** - Azul a morado
- ✅ **Glassmorphism** - Efectos de vidrio esmerilado
- ✅ **Dark Mode** - Tema oscuro elegante

### Componentes Modulares

- 🧩 **Arquitectura limpia** - Componentes independientes y reutilizables
- 📦 **Fácil mantenimiento** - Código organizado y escalable
- 🔄 **Reutilizable** - Componentes que pueden usarse en múltiples páginas

### SEO Optimizado

- 🔍 **Metadata completa** - Títulos, descripciones y keywords
- 📱 **Open Graph** - Optimizado para redes sociales
- 🐦 **Twitter Cards** - Preview en Twitter
- ⚡ **Performance** - Carga rápida y optimizada

### Secciones

1. **Hero** - Presentación con estadísticas y CTAs
2. **Servicios** - 6 servicios principales con descripción
3. **¿Por qué elegirnos?** - Ventajas con métricas de rendimiento
4. **Testimonios** - Reseñas de clientes satisfechos
5. **Contacto** - Formulario e información de contacto
6. **Footer** - Enlaces, redes sociales y legal

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ o superior
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd Datsercom

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar linter
npm run format       # Formatear código
```

## 📝 Información de Contacto (Datsercom)

- **Teléfono:** +1 (809) 480-5488
- **Email:** datsercom@claro.net.do
- **Ubicación:** República Dominicana
- **Horario:** Lun-Vie 8:00-20:00, Sáb 9:00-14:00

## 🎨 Guía de Estilos

### Colores Principales

- **Primary:** `#3b82f6` (Blue 500)
- **Secondary:** `#8b5cf6` (Purple 600)
- **Accent:** `#06b6d4` (Cyan 500)
- **Dark:** `#0f172a` (Slate 900)
- **Text:** `#ffffff` (White)

### Tipografía

- **Fuente:** Inter (Google Fonts)
- **Títulos:** Font weight 700-900
- **Texto:** Font weight 400-600

## 🔄 Migración a Next.js 15

Este proyecto ha sido migrado de **Pages Router** a **App Router** (Next.js 15).

### Cambios Principales:

- ✅ Actualizado de Next.js 14.2 → 15.5.9
- ✅ Actualizado de React 18 → 19
- ✅ Migrado de `src/pages/` → `src/app/`
- ✅ `_app.tsx` y `_document.tsx` → `layout.tsx`
- ✅ Componentes cliente con directiva `'use client'`
- ✅ Metadata en `layout.tsx` (App Router)

## 📦 Componentes Personalizados

### Logo

```tsx
import { Logo } from "@/components/datsercom";

<Logo showText={true} className="custom-class" />;
```

### Navbar

```tsx
import { Navbar } from "@/components/datsercom";

<Navbar isScrolled={isScrolled} />;
```

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
npm run build
npm run start
```

## 📄 Licencia

Todos los derechos reservados © 2026 Datsercom

---

**Desarrollado con ❤️ para Datsercom**  
_Data • Servicio • Computadora_
