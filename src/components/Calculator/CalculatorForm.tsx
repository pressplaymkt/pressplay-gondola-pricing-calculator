"use client";

import { useState } from "react";
import pricingMatrix from "@/data/pricingMatrix";

export default function CalculatorForm() {
  const [gondolas, setGondolas] = useState<number | "">("");

  const safeGondolas = typeof gondolas === "number" && gondolas > 0 ? gondolas : 0;

  const calculateTotal = (categoryIndex: number) => {
    const category = pricingMatrix[categoryIndex];
    return category.items.reduce(
      (total, item) => total + item.price * item.quantityPerGondola * safeGondolas,
      0
    );
  };

  return (
    <div className="p-4 max-w-3xl mx-auto text-black">
      {/* TÍTULO Y LOGO */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Calculadora de Góndolas</h1>
        <img
          src="/img/pressplay-logo.png"
          alt="PressPlay Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* INPUT */}
      <label className="block mb-6">
        <span className="text-base font-medium">Cantidad de góndolas:</span>
        <input
          type="number"
          min="1"
          value={gondolas}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setGondolas("");
            } else {
              const parsed = parseInt(value);
              if (!isNaN(parsed) && parsed >= 1) {
                setGondolas(parsed);
              }
            }
          }}
          placeholder="Ej: 3"
          className="ml-2 mt-2 p-2 border border-gray-400 rounded w-32 text-center"
        />
      </label>

      {/* TABLAS */}
      {pricingMatrix.map((category, idx) => (
        <div key={category.categoryName} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{category.categoryName}</h2>

          <table className="w-full border border-gray-300 rounded overflow-hidden shadow-sm">
            <thead className="bg-gray-100 text-sm font-medium">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Ítem</th>
                <th className="border border-gray-300 p-2 text-center">
                  {category.categoryName === "Servicios recurrentes"
                    ? "Precio"
                    : "Precio"}
                </th>
                <th className="border border-gray-300 p-2 text-center">Cantidad por góndola</th>
                <th className="border border-gray-300 p-2 text-center">Subtotal</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {category.items.map((item) => (
                <tr key={item.name} className="border-t border-gray-200">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="p-2 text-center">{item.quantityPerGondola}</td>
                  <td className="p-2 text-center font-semibold">
                    ${(item.price * item.quantityPerGondola * safeGondolas).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-gray-50 font-medium">
              <tr>
                <td colSpan={3} className="p-2 text-right">Total:</td>
                <td className="p-2 text-center">
                  ${calculateTotal(idx).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}

      {/* TOTAL GENERAL */}
      <div className="text-right font-bold text-xl mt-6">
        Total general: $
        {pricingMatrix.reduce((acc, _, idx) => acc + calculateTotal(idx), 0).toFixed(2)}
      </div>
    </div>
  );
}

