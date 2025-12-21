# Proyecto de Emprendimiento Jujeño - Sistema de Información y Landing Page
![image](https://github.com/koritacrah/Canela-Trekking/assets/80925718/ddbadaa6-06c6-4d88-bf1d-3c54d1517ed3)

## Visión de Negocio
**Canela Trekking** es un emprendimiento de turismo activo en la provincia de Jujuy, Argentina. Este proyecto digital tiene como objetivo principal visibilizar y comercializar las salidas de trekking ofrecidas.

El objetivo principal de este proyecto es proporcionar una landing page atractiva para el emprendimiento "Canela Trekking", que se especializa en turismo activo y receptivo en la provincia de Jujuy.

Actualmente, el producto funciona como una **Landing Page** institucional que presenta la marca, los servicios y la experiencia de los guías. La visión a largo plazo es evolucionar hacia un **Sistema de Información Turística** completo, que permita a los usuarios explorar circuitos detallados, gestionar reservas y consultar reseñas, consolidándose como una plataforma integral para el turismo de aventura en la región.

## Descripción Técnica
Este repositorio contiene el código fuente de una **Single Page Application (SPA)** construida con **Angular**, diseñada para ser escalable, modular y responsive.

### Stack Tecnológico
El proyecto utiliza un stack moderno basado en el ecosistema de JavaScript/TypeScript:

*   **Framework Principal**: [Angular v13](https://angular.io/)
    *   Arquitectura basada en componentes y servicios.
    *   Uso estricto de **TypeScript** para un desarrollo tipado y seguro.
*   **Interfaz de Usuario (UI)**:
    *   **Angular Material v13**: Utilizado para componentes interactivos complejos (modales, tablas, inputs) siguiendo las guías de Material Design.
    *   **Bootstrap v5**: Empleado principalmente para el sistema de grillas (grid system) y utilidades de espaciado/diseño responsive.
    *   **Iconografía**: Combinación de `bootstrap-icons` y `@fortawesome/fontawesome-free`.
*   **Gestión de Estado y Asincronía**: Uso de **RxJS** (Reactive Extensions for JavaScript) para el manejo de flujos de datos asíncronos.

### Arquitectura de Carpetas
El proyecto sigue una estructura de directorios organizada por funcionalidades y responsabilidades (`src/app/`):

*   **`/components`**: Contiene los componentes de vista principales de la aplicación, como la `LandingComponent`, segregando la lógica de presentación.
*   **`/core`**: (Inferido) Destinado a servicios _singleton_ de toda la aplicación, modelos de datos globales y configuraciones esenciales que se cargan al inicio.
*   **`/shared`**: (Inferido) Módulos compartidos que exportan componentes, directivas y pipes reutilizables por otros módulos de la aplicación, evitando la duplicación de código.

## Características Actuales
*   Landing page con información sobre el emprendimiento y sus servicios.
*   Reserva de itinerarios de trekking.
*   Experiencia y capacitación de los guías y prestadores de servicios.
*   Conexión con la comunidad local y su cultura.

## Próximos Pasos
Se planea continuar el desarrollo de este proyecto para convertirlo en un sistema de información completo que incluya:
*   Información detallada sobre los diferentes circuitos de trekking ofrecidos.
*   Galería de imágenes y videos de los lugares turísticos.
*   Comentarios y reseñas de los clientes sobre sus experiencias.
*   Integración con un sistema de pagos para facilitar las reservas.
*   Sección de preguntas frecuentes y atención al cliente.
*   Optimización para dispositivos móviles y otros aspectos de mejora de la experiencia del usuario.

## Instrucciones de Instalación
1.  Clona este repositorio en tu máquina local.
2.  Instala las dependencias del proyecto usando `npm install`.
3.  Ejecuta el proyecto en modo de desarrollo usando `ng serve` o `npm start`.
4.  Abre tu navegador y visita `http://localhost:4200/` para ver la aplicación.

### Scripts de Desarrollo
El `package.json` define los comandos estándar para el ciclo de vida del desarrollo:

*   `npm start` / `ng serve`: Inicia el servidor de desarrollo local en el puerto 4200 con recarga en caliente (HMR).
*   `npm run build` / `ng build`: Genera los archivos estáticos optimizados para producción en la carpeta `dist/`.
*   `npm test` / `ng test`: Ejecuta las pruebas unitarias utilizando **Karma** y **Jasmine**.

## Contacto

Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.

¡Disfruta de tus aventuras en Jujuy con "Canela Trekking"! 🏔️🚶‍♂️🌄
