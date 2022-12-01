import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";

import React from "react";

export default function QuestionCard({ questionIndex, question, answer }) {
  const [hideCard, setHideCard] = React.useState("flex");
  const [showCard, setShowCard] = React.useState("None");
  const [flipCard, setFlipCard] = React.useState("None");

  const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${hideCard};
    align-items: center;
    justify-content: space-between;
    p {
      font-family: "Recursive";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }
  `;

  const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${showCard};
    flex-direction: column;
    justify-content: space-between;
    img {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  `;

  const PerguntaFlipada = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${flipCard};
    flex-direction: column;
    justify-content: space-between;
  `;

  function abrirCartao() {
    setHideCard("None");
    setShowCard("flex");
  }

  function fliparCartao() {
    setShowCard("None");
    setFlipCard("flex");
  }

  return (
    <>
      <PerguntaFechada>
        <p>Pergunta {questionIndex}</p>
        <img
          onClick={() => abrirCartao()}
          src={seta_play}
          alt="seta-virar"
        ></img>
      </PerguntaFechada>
      <PerguntaAberta>
        {question}
        <img
          onClick={() => fliparCartao()}
          src={seta_virar}
          alt="seta-virar"
        ></img>
      </PerguntaAberta>
      <PerguntaFlipada>
        {answer}
        <ContainerBotoes>
          <button>Não lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </ContainerBotoes>
      </PerguntaFlipada>
    </>
  );
}

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
  }
`;
