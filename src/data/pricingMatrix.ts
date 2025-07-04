interface Item {
  name: string;
  price: number;
  quantityPerGondola: number;
}

interface Category {
  categoryName: string;
  items: Item[];
}

const pricingMatrix: Category[] = [
  {
    categoryName: "Hardware (Pago único)",
    items: [
      { name: "Webcam Intel Realsense D455", price: 750, quantityPerGondola: 1 },
      { name: "Consola BrightSign XC2055 / XC4055", price: 1750, quantityPerGondola: 1 },
      { name: "Pantalla cintillos (p1.8 - 90cm x 6cm)", price: 350, quantityPerGondola: 4 },
      { name: "Pantalla superior (p1.9 - 90cm x 24cm)", price: 1500, quantityPerGondola: 1 },
      { name: "Instalación por góndola", price: 500, quantityPerGondola: 1 },
    ],
  },
  {
    categoryName: "Servicios recurrentes",
    items: [
      { name: "Mantenimiento mensual", price: 25, quantityPerGondola: 1 },
      { name: "Licencia Spectrio anual", price: 900, quantityPerGondola: 1 },
      { name: "Gestión programática anual", price: 900, quantityPerGondola: 1 },
    ],
  },
];

export default pricingMatrix;

