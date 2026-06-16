import "./Header.css";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/Logo.png";

export function Header({ search, setSearch, activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="vortex-header">
      <div className="Logo" onClick={() => setActiveTab("category")}>
        <img src={Logo} alt="GearAutomatic" />
      </div>

      <nav className="header-nav">
        <div
          className={`nav-item ${activeTab === "category" ? "active" : ""}`}
          onClick={() => setActiveTab("category")}
        >
          Categorias
        </div>

        <div
          className={`nav-item ${activeTab === "financiar" ? "active" : ""}`}
          onClick={() => setActiveTab("financiar")}
        >
          Financiar
        </div>

        <div
          className={`nav-item ${activeTab === "vender" ? "active" : ""}`}
          onClick={() => setActiveTab("vender")}
        >
          Vender
        </div>
      </nav>

      <div className="header-tools">
        <div className="search-container">
          <button
            className="search-btn"
            onClick={() => setOpen(!open)}
            aria-label="Buscar"
          >
            <Search size={18} />
          </button>

          <div className={`search-bar ${open ? "ativo" : ""}`}>
            <input
              type="text"
              placeholder="Buscar Carro..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="header-actions">
          <button className="notification-btn" aria-label="Notificacoes">
            <Bell size={18} />
            <span className="notification-dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
