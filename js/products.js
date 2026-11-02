/**
 * ZEPEDA'S HATS - Products Data
 * ==============================
 * Estructura de productos con SKU, precios y categorías
 * 
 * Para agregar nuevas imágenes:
 * 1. Coloca las imágenes en la carpeta correspondiente dentro de /images/products/
 * 2. Agrega el producto a este archivo con la ruta correcta
 * 
 * Carpetas de imágenes:
 * - /images/products/dandy/      - Gorras Dandy Hats
 * - /images/products/31hats/     - Gorras 31 Hats
 * - /images/products/barbas/     - Gorras Barbas Hats
 * - /images/products/otros/      - Otras marcas/modelos
 * - /images/hero/                - Imágenes del carrusel principal
 * - /images/videos/thumbnails/   - Miniaturas de videos
 * 
 * Carpetas de videos:
 * - /videos/                     - Archivos de video .mp4
 */

const PRODUCTS = [
    // DANDY HATS
    {
        id: 1,
        sku: "Lacoste",
        name: "Lacoste Roja",
        description: "lacoste Roja",
        price: 300,
        originalPrice: 450,
        image: "images/lverde.jpg ",
        category: "Lacoste",
        isOffer: true,
        isNew: true,
        isSold: false
    },
    {
        id: 2,
        sku: "Lacoste",
        name: "Lacoste Tinta'",
        description: "Diseño casual ",
        price: 300,
        originalPrice: 450,
        image: "images/ltinta.jpg",
        category: "Lacoste",
        isOffer: true,
        isNew: false,
        isSold: false
    },
    {
        id: 3,
        sku: "Lacoste",
        name: "Lacoste Azul claro",
        description: "Camisa Tipo Polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/lazulbajitoclaro.jpg",
        category: "Lacoste",
        isOffer: true,
        isNew: false,
        isSold: false
    },
    {
        id: 4,
        sku: "Lacoste",
        name: "Lacoste 'Azul Marino'",
        description: "Camisa Tipo polo casual",
        price: 300,
        originalPrice: 450,
        image: "images/lazulmarino.jpg",
        category: "Lacoste",
        isOffer: true,
        isNew: false,
        isSold: false
    },
    {
        id: 5,
        sku: "Lacoste",
        name: "Lacoste Azul ",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/lazulverde.jpg",
        category: "Lacoste",
        isOffer: true,
        isNew: true,
        isSold: false
    },
    {
        id: 6,
        sku: "Lacoste",
        name: "Lacoste 'Negra'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/lnegra.jpg",
        category: "Lacoste",
        isOffer: false,
        isNew: false,
        isSold: false
    },
    {
        id: 7,
        sku: "Lacoste",
        name: "Lacoste 'roja'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/lroja.jpg",
        category: "Lacoste",
        isOffer: false,
        isNew: true,
        isSold: false
    },

    // 31 HATS
    {
        id: 8,
        sku: "Burberry",
        name: "Burberry 'gris'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/bverde.jpg",
        category: "Burberry",
        isOffer: true,
        isNew: false,
        isSold: false
    },
    {
        id: 9,
        sku: "Nautica",
        name: "Nautica 'azul marino'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 459,
        image: "images/nazulm.jpg",
        category: "Nautica",
        isOffer: true,
        isNew: false,
        isSold: false
    },
    {
        id: 10,
        sku: "Pcito-bunny",
        name: "Bunny 'Azul Marino'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/pazul.jpg",
        category: "Pcito-bunny",
        isOffer: true,
        isNew: true,
        isSold: false
    },
    {
        id: 11,
        sku: "Nautica",
        name: "RUDE 'NY'",
        description: "Camisa Tipo polo Casual",
        price: 300,
        originalPrice: 450,
        image: "images/ntinta.jpg",
        category: "Nautica",
        isOffer: false,
        isNew: true,
        isSold: false
    },


];

const VIDEOS = [
    { id:1, title:"Unboxing Colección Sad Boyz", thumbnail:"images/video-1.jpg", video:"videos/video-1.mp4"},
    { id:2, title:"Review Dandy Hats 2024", thumbnail:"images/video-2.jpg", video:"videos/video-2.mp4"},
    { id:3, title:"Nuevos Modelos 31 Hats", thumbnail:"images/video-3.jpg", video:"videos/video-3.mp4"},
    { id:4, title:"Colección Barbas Hats", thumbnail:"images/video-4.jpg", video:"videos/video-4.mp4"},
    { id:5, title:"Proceso de Personalización", thumbnail:"images/video-5.jpg", video:"videos/video-5.mp4"},
    { id:6, title:"Ediciones Limitadas", thumbnail:"images/video-6.jpg", video:"videos/video-6.mp4"}
];

const RECENT_MODELS = [
    { id:1, image:"images/recent-1.jpg", title:"Sad Forever Black"},
    { id:2, image:"images/recent-2.jpg", title:"LA Clouds Edition"},
    { id:3, image:"images/recent-3.jpg", title:"Dandy Houston"},
    { id:4, image:"images/recent-4.jpg", title:"Chrome Black Out"},
    { id:5, image:"images/recent-5.jpg", title:"Junior H Collab"},
    { id:6, image:"images/recent-6.jpg", title:"Psicodélica Special"}
];


const WHATSAPP_NUMBER = "523322373159";
// EXPORTAR (CLAVE)
window.PRODUCTS = PRODUCTS;
window.VIDEOS = VIDEOS;
window.RECENT_MODELS = RECENT_MODELS;
window.WHATSAPP_NUMBER = WHATSAPP_NUMBER;

const STORE_INFO = {
    name: "ZEPEDA'S HATS",
    phone: "33 2237 3159",
    whatsapp: WHATSAPP_NUMBER,
    instagram: "https://www.instagram.com/zepeda_hats.mx",
    facebook: "https://www.facebook.com/",
    location: "Jalisco, México"
};