import "./CarsModal.css";
import { X } from "lucide-react";

// ✅ CORREÇÃO 1: Recebendo a prop 'setCarroParaFinanciarId' vinda do App.jsx
export function CarModal({ Cars, onClose, setActiveTab, setCarroParaFinanciarId }) {
  if (!Cars) return null;

  const handleFinanceClick = () => {
    // ✅ CORREÇÃO 2: Verificando se o objeto Cars existe e salvando o ID correto no App.jsx
    if (Cars && Cars.id) {
      setCarroParaFinanciarId(Cars.id); 
    }
    setActiveTab("financiar"); // Troca para a aba de financiamento
    onClose(); // Fecha o modal
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
      >
        <div
          className="modal-content"
          onClick={(c) => c.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X />
          </button>

          <img
            src={Cars.banner}
            alt={Cars.title}
            className="modal-banner"
          />

          <div className="modal-body">
            <span className="modal-category">
              {Cars.category}
            </span>

            <h2>{Cars.title}</h2>

            <p className="description">
              Encontre aqui o {Cars.title} dos seus sonhos.
            </p>

            <button
              className="start-cars-btn"
              onClick={handleFinanceClick}
            >
              Financiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarModal;