# Tiny-Bem Project

Este es un proyecto web de ejemplo que simula una página de "Tiny House", desarrollado como parte de un entregable para demostrar la evolución en la organización de los estilos CSS, pasando de CSS plano a una arquitectura avanzada con Sass y la metodología 7-1.

## Características Principales

* **Metodología BEM (Block, Element, Modifier):** La estructura HTML y las clases CSS siguen rigurosamente los principios de BEM para asegurar modularidad, reusabilidad y mantenibilidad del código.
* **Arquitectura CSS con Sass (Metodología 7-1):**
    * **Transición de CSS plano a Sass:** Todos los estilos han sido refactorizados y migrados a Sass para aprovechar sus potentes características (variables, anidamiento, mixins, etc.).
    * **Organización 7-1:** El código Sass está estructurado siguiendo la metodología 7-1, dividiendo los estilos en 7 directorios lógicos y un archivo principal `style.scss` para su importación, lo que mejora la escalabilidad y la gestión del proyecto:
        * `abstracts/`: Para variables, funciones y mixins.
        * `base/`: Para estilos base, tipografía y resets.
        * `layout/`: Para la estructura principal de la página (header, footer, navegación).
        * `components/`: Para elementos reutilizables (botones, tarjetas, modales).
        * `pages/`: Para estilos específicos de páginas (vacío por ahora).
        * `themes/`: Para temas de color o diseño (vacío por ahora).
        * `vendors/`: Para estilos de librerías externas (vacío por ahora).
* **Diseño Minimalista:** Estilos CSS limpios y modernos, ahora gestionados eficientemente con variables de Sass para una gestión de temas y colores centralizada.
* **Responsividad Adaptativa:** Adaptación del diseño para diferentes tamaños de pantalla implementada de forma modular con Sass, asegurando una experiencia de usuario consistente en dispositivos móviles y de escritorio.
* **Interactividad JavaScript:**
    * **Menú Hamburguesa:** Navegación adaptable para dispositivos móviles.
    * **Galería Modal:** Una galería de imágenes interactiva que se abre en un modal para una visualización ampliada.
* **Fuentes Personalizadas:** Uso de fuentes de Google Fonts para mejorar la tipografía del sitio.

## Estructura del Proyecto
```Tiny-Bem/
├── assets/
│   ├── css/
│   │   ├── style.css         # CSS compilado de Sass
│   │   └── style.css.map     # Mapa de fuentes para depuración (generado por Sass)
│   ├── img/
│   │   └── (Imágenes de la galería, logo, etc.)
│   ├── js/
│   │   └── main.js
│   └── scss/                 # Directorio raíz de los archivos Sass
│       ├── abstracts/        # Variables, mixins, funciones (ej: _variables.scss)
│       ├── base/             # Estilos base, reset, tipografía, contenedores (ej: _base.scss, _responsive.scss)
│       ├── components/       # Estilos de componentes (botones, tarjetas, modales)
│       ├── layout/           # Estructura del layout (header, footer, nav)
│       ├── pages/            # Estilos específicos de páginas
│       ├── themes/           # Temas de diseño
│       ├── vendors/          # Estilos de librerías de terceros
│       └── style.scss        # Archivo principal de Sass que importa todos los parciales
├── index.html
└── README.md
```

## Cómo Ver el Proyecto

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Ardana98/Tiny-Bem.git](https://github.com/Ardana98/Tiny-Bem.git)
    ```
    (Asegúrate de reemplazar `Ardana98` con tu nombre de usuario de GitHub si es diferente).
2.  **Navega al directorio del proyecto:**
    ```bash
    cd Tiny-Bem
    ```
3.  **Instala Sass (si no lo tienes):**
    Si deseas trabajar con los archivos `.scss` o recompilar, necesitarás Sass.
    ```bash
    npm install -g sass
    ```
    (O la forma preferida de instalación de Sass).
4.  **Inicia el observador de Sass:**
    Para compilar automáticamente los cambios de Sass a CSS mientras trabajas:
    ```bash
    sass --watch assets/scss/style.scss:assets/css/style.css
    ```
5.  **Abre el archivo `index.html` en tu navegador web.**

---