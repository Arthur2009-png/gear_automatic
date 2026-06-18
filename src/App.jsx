import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Categoria } from "./components/Categoria";
import { CarModal } from "./components/CarsModal";
import { Financiar } from "./components/Financiar";
import { Vender } from "./components/vendas";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("category");
  const [selectedCars, setSelectedCars] = useState(null);
  const [carroParaFinanciarId, setCarroParaFinanciarId] = useState(null);

  // Inicialização estável do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // ✅ Reajustado para 1 segundo (igual à foto do projeto)
      once: true,
      mirror: false,
      easing: "ease-in-out",
    });
  }, []); 

  // ✅ NOVO: Atualiza as posições do AOS toda vez que o usuário alterna entre abas
  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  function renderContent() {
    if (activeTab === "category") {
      return (
        <Categoria
          activeTab={activeTab}
          search={search}
          setSelectedCars={setSelectedCars}
        />
      );
    }

    if (activeTab === "financiar") {
      return <Financiar idCarroInicial={carroParaFinanciarId} />;
    }

    if (activeTab === "vender") {
      return <Vender />;
    }

    return null; 
  }

  return (
    <div className="vortex-app">
      <main className="vortex-main">
        <Header
          search={search}
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <h2 className="section-title">
          {activeTab === "category" && "Categorias"}
          {activeTab === "financiar" && "Financiar"}
          {activeTab === "vender" && "Vender"}
        </h2>

        <div className="vortex-content">
          {renderContent()}
        </div>

        <Footer />
      </main>

      <CarModal
        Cars={selectedCars}
        onClose={() => setSelectedCars(null)}
        setActiveTab={setActiveTab}
        setCarroParaFinanciarId={setCarroParaFinanciarId} 
      />
    </div>
  );
}

export default App;