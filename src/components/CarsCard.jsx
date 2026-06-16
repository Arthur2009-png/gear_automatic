import "./CarsCard.css";
import { Play } from "lucide-react";

export function CarsCard({ title, category, banner, onPlay }) {
  const handleCardClick = () => {
    if (onPlay) onPlay();
  };

  return (
    <div className="vortex-card" onClick={handleCardClick}>
      <img src={banner} alt={title} className="card-img" />

      <div className="card-info">
        <span>{category}</span>
        <h4>{title}</h4>
      </div>

      <button
        className="play-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
      >
        <Play size={14} fill="white" /> Saber Mais
      </button>
    </div>
  );
}
