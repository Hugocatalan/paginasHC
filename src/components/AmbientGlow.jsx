import React from "react";

/**
 * Componente AmbientGlow:
 * - Luces ambientales decorativas con efecto desenfocado (Glow/Blur)
 * - Proporcionan la profundidad característica del diseño Dark Premium.
 * - Con pointer-events: none para no interferir con la interacción del usuario.
 */
export function AmbientGlow() {
  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
    </>
  );
}
