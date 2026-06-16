import { useState } from "react";
import { Header } from "./components/Header";
import { Categoria } from "./components/Categoria";
import { CarModal } from "./components/CarsModal";
import { Financiar } from "./components/Financiar";
import { Vender } from "./components/vendas";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("category");
  const [selectedCars, setSelectedCars] = useState(null);

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
      return <Financiar />;
    }

    if (activeTab === "vender") {
      return <Vender />
    }
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
      />
    </div>
  );
}

export default App;
