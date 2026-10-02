# ASSI - Asesoría y Soluciones en Sistemas e Informática

Sitio web corporativo profesional, de alto rendimiento y diseño optimizado, desarrollado para la empresa **ASSI**. El objetivo principal de este proyecto es consolidar la presencia digital de la compañía, exhibir su portafolio de servicios tecnológicos (soporte, redes, servidores, CCTV) y generar confianza con clientes corporativos e institucionales mediante una experiencia de usuario (UX/UI) moderna y fluida.

---

## 🚀 Propósito del Proyecto
- **Credibilidad Corporativa:** Presentar de forma clara y elegante las soluciones informáticas, la trayectoria y la red de aliados y clientes estratégicos.
- **Canal de Conversión Directo:** Facilitar la comunicación inmediata con asesores comerciales a través de un formulario de contacto seguro y un botón flotante de WhatsApp optimizado.
- **Rendimiento Extremo (Core Web Vitals):** Construir una base sólida, ligera y sin dependencias de librerías pesadas para garantizar tiempos de carga instantáneos y un posicionamiento SEO óptimo.

---

## 🛠️ Stack Tecnológico (Fase 1)
El desarrollo se ejecutó utilizando tecnologías nativas y modernas, siguiendo estrictas buenas prácticas de desarrollo front-end:
- **HTML5 Semántico:** Estructura limpia y accesible (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3 Moderno:** 
  - Enfoque *Mobile-First*.
  - Sistema de variables CSS personalizado.
  - Escala de espaciado estricta basada en múltiplos de 8px.
  - Maquetación avanzada con CSS Grid y Flexbox.
- **JavaScript ES6+ (Nativo):**
  - Animaciones fluidas basadas en la API nativa `Intersection Observer`.
  - Carrusel automático (rotador de imágenes) para la sección del fundador mediante temporizadores y gestión de clases dinámicas.
  - Control de eventos interactivos para la ventana emergente (*Modal*) de la Política de Privacidad.

---

## ✨ Características y Funcionalidades Implementadas

1. **Diseño Visual y Arquitectura UI:**
   - Paleta de colores corporativa (Azul principal y acento Cian brillante).
   - Tipografía limpia optimizada con Google Fonts (*Inter*).
   - Favicon corporativo integrado en todas las páginas.

2. **Sección de Clientes (Validación Social):**
   - Cuadrícula en formato de tarjetas blancas unificadas (`height` y `max-height` controladas).
   - Enlaces seguros a sitios web externos (`target="_blank"` con `rel="noopener"`).
   - Microinteracciones de elevación al pasar el cursor y transición de escala en los logotipos.

3. **Sección del Fundador (Humanización de Marca):**
   - Tarjeta ejecutiva con diseño de dos columnas adaptable a dispositivos móviles y escritorio.
   - **Rotador Automático de Fotografías:** Transición suave de fundido cruzado (*cross-fade*) en CSS con control de encuadre personalizado (`object-position`) para evitar recortes indeseados en el rostro.

4. **Sección de Servicios:**
   - Tarjetas informativas con soporte de imágenes superiores optimizadas y efecto de zoom elegante al hacer *hover*.
   - Iconografía vectorial SVG integrada limpiamente.

5. **Canales de Contacto Avanzados:**
   - **Botón Flotante de WhatsApp:** Siempre visible en la esquina inferior derecha con dimensiones adaptadas para una excelente interacción táctil en móviles.
   - **Formulario de Contacto:** Incluye campos para datos corporativos, horario de atención visible y aceptación legal de la **Política de Privacidad**.

6. **Cumplimiento Legal y Accesibilidad:**
   - Modal interactivo de Política de Privacidad accesible mediante clic, con opciones de cierre a través de botón "X", clic en el fondo oscuro o uso de la tecla *Escape*.
   - Etiquetas ARIA y atributos de accesibilidad básicos en elementos interactivos.

---

## 📂 Estructura de Archivos del Proyecto

```text
assi-web/
├── index.html              # Página de inicio
├── servicios.html          # Página de servicios tecnológicos
├── nosotros.html           # Página institucional y sección del fundador
├── contacto.html           # Página de contacto y formularios
├── css/
│   └── styles.css          # Estilos globales y sistemas de diseño
├── js/
│   └── main.js             # Lógica de Intersection Observer, Sliders y Modales
└── assets/
    └── img/                # Repositorio de logotipos y fotografías corporativas