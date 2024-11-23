function ratePresentation() {
    const rating = prompt("Califica esta presentación del 1 al 10:");
    if (rating >= 1 && rating <= 10) {
      alert(`Gracias por calificar con un ${rating}. ¡Esperamos que te haya gustado!`);
    } else {
      alert("Por favor, ingresa un número válido entre 1 y 10.");
    }
  }
  