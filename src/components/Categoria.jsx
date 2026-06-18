import { useEffect } from "react";
import { CarsData } from "../data/cars";
import { CarsCard } from "./CarsCard";
import { CategoryCarrocel } from "./CategoryCarrocel";
import AOS from "aos"; 
import "./Categoria.css";

export function Categoria({
  activeTab,
  search,
  setSelectedCars
}) {
  
  useEffect(() => {
    AOS.refresh();
  }, [activeTab, search]); 

  const filteredCars = CarsData
    .filter((Cars) => activeTab === "category" || Cars.category === activeTab)
    .filter((Cars) =>
      Cars.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="category-page">
      {/* Animando o carrossel do topo */}
      <div data-aos="fade-down" data-aos-duration="800">
        <CategoryCarrocel cars={CarsData} />
      </div>

      {/* ✅ MUDANÇA AQUI: Adicionamos o data-aos direto no container do Grid */}
      <div 
        className="vortex-grid"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {filteredCars.map((c) => (
          <div
            key={c.id}
            className="card-button"
            // ✅ MUDANÇA AQUI: Removemos os atributos individuais e o data-aos-delay
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