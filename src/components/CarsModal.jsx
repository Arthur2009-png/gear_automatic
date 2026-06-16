import "./CarsModal.css";
import { X } from "lucide-react";

export function CarModal({ Cars, onClose, setActiveTab }) {
  if (!Cars) return null;

  const handleFinanceClick = () => {
    setActiveTab("financiar");
    onClose();
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
