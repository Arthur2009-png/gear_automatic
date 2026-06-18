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

  // ✅ NOVA FUNÇÃO: Intercepta a mudança de aba para aplicar a transição visual
  const mudarAbaComTransicao = (novaAba) => {
    // Se o navegador não suportar (ex: Safari antigo), muda o estado normalmente
    if (!document.startViewTransition) {
      setActiveTab(novaAba);
      return;
    }

    // Executa a animação nativa de transição de tela
    document.startViewTransition(() => {
      setActiveTab(novaAba);
    });
  };

  // Inicialização estável do AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Reajustado para 1 segundo
      once: true,
      mirror: false,
      easing: "ease-in-out",
    });
  }, []); 

  // ✅ ATUALIZADO: Atualiza as posições do AOS com um micro-atraso
  // Isso evita conflitos visuais enquanto a View Transition está executando
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100); // 100ms é o suficiente para a transição inicializar bem

    return () => clearTimeout(timer);
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
        {/* ✅ Passando a nova função para o Header */}
        <Header
          search={search}
          setSearch={setSearch}
          activeTab={activeTab}
          setActiveTab={mudarAbaComTransicao} 
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

      {/* ✅ Passando a nova função para o Modal */}
      <CarModal
        Cars={selectedCars}
        onClose={() => setSelectedCars(null)}
        setActiveTab={mudarAbaComTransicao}
        setCarroParaFinanciarId={setCarroParaFinanciarId} 
      />
    </div>
  );
}

export default App;