// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    /* ===================================== */
    /* === 1. FUNCIONALIDAD DEL MENÚ DE HAMBURGUESA === */
    /* ===================================== */

    const headerToggle = document.querySelector('.header__toggle');
    const navMenu = document.querySelector('.nav');

    if (headerToggle && navMenu) {
        headerToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav--open');
            // Opcional: Cerrar el menú al hacer clic en un enlace (para móviles)
            // const navLinks = document.querySelectorAll('.nav__link');
            // navLinks.forEach(link => {
            //     link.addEventListener('click', () => {
            //         navMenu.classList.remove('nav--open');
            //     });
            // });
        });

        // Opcional: Cerrar el menú si se hace clic fuera de él (en móviles)
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !headerToggle.contains(event.target) && navMenu.classList.contains('nav--open')) {
                navMenu.classList.remove('nav--open');
            }
        });
    }

    /* ===================================== */
    /* === 2. FUNCIONALIDAD DE LA GALERÍA MODAL === */
    /* ===================================== */

    const galleryButton = document.querySelector('.gallery-section__button');
    const galleryModal = document.getElementById('galleryModal');
    const closeButton = document.querySelector('.gallery-modal__close');
    const modalImage = document.querySelector('.gallery-modal__image');
    const prevButton = document.querySelector('.gallery-modal__prev');
    const nextButton = document.querySelector('.gallery-modal__next');
    const thumbnailsContainer = document.querySelector('.gallery-modal__thumbnail-list');

    // Lista de imágenes de la galería 
    const galleryImages = [
        { src: 'assets/img/t1.jpg', thumb: 'assets/img/t1.jpg', alt: 'Vista principal de Tiny House' },
        { src: 'assets/img/t2.jpg', thumb: 'assets/img/t2.jpg', alt: 'Interior de Tiny House minimalista' },
        { src: 'assets/img/t3.jpg', thumb: 'assets/img/t3.jpg', alt: 'Tiny House con vista al jardín' },
        { src: 'assets/img/t4.jpg', thumb: 'assets/img/t4.jpg', alt: 'Diseño moderno de Tiny House' },
        { src: 'assets/img/t5.jpg', thumb: 'assets/img/t5.jpg', alt: 'Tiny House en paisaje natural' }
    ];

    let currentImageIndex = 0;

    // Función para actualizar la imagen principal del modal
    function updateModalImage(index) {
        if (index >= 0 && index < galleryImages.length) {
            currentImageIndex = index;
            modalImage.src = galleryImages[currentImageIndex].src;
            modalImage.alt = galleryImages[currentImageIndex].alt;

            // Actualizar la clase del thumbnail seleccionado
            document.querySelectorAll('.gallery-modal__thumbnail-img').forEach((thumb, i) => {
                if (i === currentImageIndex) {
                    thumb.classList.add('gallery-modal__thumbnail-img--selected');
                } else {
                    thumb.classList.remove('gallery-modal__thumbnail-img--selected');
                }
            });
        }
    }

    // Función para crear y añadir miniaturas
    function createThumbnails() {
        thumbnailsContainer.innerHTML = ''; // Limpiar miniaturas existentes
        galleryImages.forEach((image, index) => {
            const thumbImg = document.createElement('img');
            thumbImg.src = image.thumb;
            thumbImg.alt = image.alt;
            thumbImg.classList.add('gallery-modal__thumbnail-img');
            if (index === currentImageIndex) {
                thumbImg.classList.add('gallery-modal__thumbnail-img--selected');
            }
            thumbImg.addEventListener('click', () => {
                updateModalImage(index);
            });
            thumbnailsContainer.appendChild(thumbImg);
        });
    }

    // Abrir el modal
    if (galleryButton && galleryModal) {
        galleryButton.addEventListener('click', () => {
            galleryModal.classList.add('gallery-modal--active');
            updateModalImage(0); // Mostrar la primera imagen al abrir
            createThumbnails(); // Generar miniaturas dinámicamente
        });
    }

    // Cerrar el modal
    if (closeButton && galleryModal) {
        closeButton.addEventListener('click', () => {
            galleryModal.classList.remove('gallery-modal--active');
        });
        // También cerrar si se hace clic fuera del contenido del modal
        galleryModal.addEventListener('click', (event) => {
            if (event.target === galleryModal) {
                galleryModal.classList.remove('gallery-modal--active');
            }
        });
    }

    // Navegación con botones de flecha
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) {
                newIndex = galleryImages.length - 1; // Volver a la última si es la primera
            }
            updateModalImage(newIndex);
        });

        nextButton.addEventListener('click', () => {
            let newIndex = currentImageIndex + 1;
            if (newIndex >= galleryImages.length) {
                newIndex = 0; // Volver a la primera si es la última
            }
            updateModalImage(newIndex);
        });
    }

    /* ===================================== */
    /* === 3. NAVEGACIÓN ACTIVA (RESALTAR ENLACE ACTUAL) === */
    /* ===================================== */
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remover la clase activa de todos los enlaces
            navLinks.forEach(item => item.classList.remove('nav__link--active'));
            // Añadir la clase activa al enlace clicado
            this.classList.add('nav__link--active');
            
            // Opcional: Smooth scroll a la sección
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Solo para enlaces ancla
                event.preventDefault(); // Previene el salto instantáneo
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Opcional: Resaltar enlace activo al cargar la página o al hacer scroll
    const sections = document.querySelectorAll('main section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Porcentaje de visibilidad para considerar activa la sección
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}); // Fin de DOMContentLoaded