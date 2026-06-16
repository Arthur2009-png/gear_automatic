import { CarsData } from "../data/cars";
import { CarsCard } from "./CarsCard";
import {CategoryCarrocel } from "./CategoryCarrocel";
import "./Categoria.css";

export function Categoria({
  activeTab,
  search,
  setSelectedCars
}) {
  const filteredCars = CarsData
    .filter((Cars) => activeTab === "category" || Cars.category === activeTab)
    .filter((Cars) =>
      Cars.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="category-page">
      <CategoryCarrocel cars={CarsData} />

      <div className="vortex-grid">
        {filteredCars.map((c) => (
          <div
            key={c.id}
            className="card-button"
          >
            <CarsCard
              title={c.title}
              category={c.category}
              banner={c.banner}
              onPlay={() => setSelectedCars(c)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
