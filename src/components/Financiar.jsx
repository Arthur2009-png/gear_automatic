import { useState } from "react";
import { CarsData } from "../data/cars";
import "./Financiar.css";

export function Financiar() {
  const [idCarroSelecionado, setIdCarroSelecionado] = useState(
    CarsData[0].id
  );

  const [valorEntrada, setValorEntrada] = useState(30000);

  const [quantidadeParcelas, setQuantidadeParcelas] = useState(48);

  const carroSelecionado =
    CarsData.find(
      (carro) => carro.id === Number(idCarroSelecionado)
    ) || CarsData[0];

  const precoCarro = carroSelecionado.fipe;

  const entradaSegura = Math.min(
    Number(valorEntrada) || 0,
    precoCarro
  );

  const valorFinanciado = Math.max(
    precoCarro - entradaSegura,
    0
  );

  const taxaJurosMensal = 0.0129;

  const valorParcela =
    valorFinanciado === 0
      ? 0
      : valorFinanciado *
        (taxaJurosMensal /
          (1 -
            Math.pow(
              1 + taxaJurosMensal,
              -Number(quantidadeParcelas)
            )));

  const valorTotalPago =
    valorParcela * Number(quantidadeParcelas) +
    entradaSegura;

  const formatarMoeda = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });

  return (
    <section className="finance-simulator">
      <div className="finance-form">
        <span className="panel-kicker">Mini simulação</span>

        <h3>Financiamento com valor FIPE estimado</h3>

        <p>
          Selecione um modelo real, informe uma entrada e
          veja uma estimativa básica das parcelas.
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
          Entrada
          <input
            type="number"
            min="0"
            max={precoCarro}
            step="1000"
            value={valorEntrada}
            onChange={(e) =>
              setValorEntrada(e.target.value)
            }
          />
        </label>

        <label>
          Parcelas
          <select
            value={quantidadeParcelas}
            onChange={(e) =>
              setQuantidadeParcelas(
                Number(e.target.value)
              )
            }
          >
            <option value="24">24 meses</option>
            <option value="36">36 meses</option>
            <option value="48">48 meses</option>
            <option value="60">60 meses</option>
          </select>
        </label>
      </div>

      <div className="finance-result">
        <img
          src={carroSelecionado.banner}
          alt={carroSelecionado.title}
        />

        <div className="finance-result-body">
          <span>{carroSelecionado.category}</span>

          <h3>{carroSelecionado.title}</h3>

         <div className="finance-values">
  <p>
    <strong>FIPE estimada</strong>
    {formatarMoeda(precoCarro)}
  </p>

  <p>
    <strong>Valor da entrada</strong>
    {formatarMoeda(entradaSegura)}
  </p>

  <p>
    <strong>Total financiado</strong>
    {formatarMoeda(valorFinanciado)}
  </p>

  <p>
    <strong>Parcela aproximada</strong>
    {formatarMoeda(valorParcela)}
  </p>

  <p>
    <strong>Total pago</strong>
    {formatarMoeda(valorTotalPago)}
  </p>
</div>

          <small>
            Simulação ilustrativa com taxa mensal de
            1,29%. Valores FIPE podem variar por ano,
            versão, estado e data de consulta.
          </small>
        </div>
      </div>
    </section>
  );
}