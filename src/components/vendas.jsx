import { useState } from "react";
import { CarsData } from "../data/cars";
import "./vendas.css";

export function Vender() {
  const [idCarroSelecionado, setIdCarroSelecionado] = useState(
    CarsData[0].id
  );

  const [valorVenda, setValorVenda] = useState(30000);

  const [anoVeiculo, setAnoVeiculo] = useState(2024);

  const carroSelecionado =
    CarsData.find(
      (carro) => carro.id === Number(idCarroSelecionado)
    ) || CarsData[0];

  const precoCarro = carroSelecionado.fipe;

  const valorVendaSeguro = Number(valorVenda) || 0;

  const diferencaFipe =
    valorVendaSeguro - precoCarro;

  const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });

  return (
    <section className="venda-simulator">
      <div className="venda-form">
        <span className="venda-panel-kicker">
          Simulação de venda
        </span>

        <h3>Venda com valor FIPE estimado</h3>

        <p>
          Selecione um modelo real e informe o valor
          desejado para venda.
        </p>

        <label>
          Modelo
          <select
            value={idCarroSelecionado}
            onChange={(e) =>
              setIdCarroSelecionado(
                Number(e.target.value)
              )
            }
          >
            {CarsData.map((carro) => (
              <option
                key={carro.id}
                value={carro.id}
              >
                {carro.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          Valor de venda
          <input
            type="number"
            min="0"
            step="1000"
            value={valorVenda}
            onChange={(e) =>
              setValorVenda(e.target.value)
            }
          />
        </label>

        <label>
          Ano do veículo
          <select
            value={anoVeiculo}
            onChange={(e) =>
              setAnoVeiculo(
                Number(e.target.value)
              )
            }
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </label>
      </div>

      <div className="venda-result">
        <img
          src={carroSelecionado.banner}
          alt={carroSelecionado.title}
        />

        <div className="venda-result-body">
          <span>{carroSelecionado.category}</span>

          <h3>{carroSelecionado.title}</h3>

          <div className="venda-values">
            <p>
              <strong>FIPE estimada</strong>
              {formatarMoeda(precoCarro)}
            </p>

            <p>
              <strong>Valor de venda</strong>
              {formatarMoeda(valorVendaSeguro)}
            </p>

            <p>
              <strong>Diferença para FIPE</strong>
              {formatarMoeda(diferencaFipe)}
            </p>

            <p>
              <strong>Ano informado</strong>
              {anoVeiculo}
            </p>
          </div>

          <small>
            Estimativa baseada na tabela FIPE.
            O valor real de venda pode variar
            conforme quilometragem, conservação,
            localização e demanda do mercado.
          </small>
        </div>
      </div>
    </section>
  );
}