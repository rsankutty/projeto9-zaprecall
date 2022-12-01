import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import icone_certo from "../assets/img/icone_certo.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_quase from "../assets/img/icone_quase.png";

import React from "react";

export default function QuestionCard({
  questionIndex,
  question,
  answer,
  contadorTarefas,
  setContadorTarefas,
}) {
  const [hideCard, setHideCard] = React.useState("flex");
  const [showCard, setShowCard] = React.useState("None");
  const [flipCard, setFlipCard] = React.useState("None");
  const [textDecoration, setTextDecoration] = React.useState("");
  const [textColor, setTextColor] = React.useState("#333333");
  const [disable, setDisable] = React.useState(false);
  const [icone, setIcone] = React.useState(seta_play);
  const [dataTestIcon, setDataTestIcon] = React.useState("play-btn");

  function empty() { }

  function abrirCartao() {
    setHideCard("None");
    setShowCard("flex");
  }

  function fliparCartao() {
    setShowCard("None");
    setFlipCard("flex");
  }

  function buttonClick() {
    let num = contadorTarefas;
    num += 1;
    setContadorTarefas(num);
    setFlipCard("None");
    setHideCard("flex");
    setTextDecoration("line-through");
    setDisable(true);
  }

  return (
    <div data-test="flashcard" className="container-flashcard">
      <PerguntaFechada
        hideCard={hideCard}
        textDecoration={textDecoration}
        textColor={textColor}
      >
        <p data-test="flashcard-text">Pergunta {questionIndex}</p>
        <img
          data-test={dataTestIcon}
          onClick={disable ? empty() : () => abrirCartao()}
          src={icone}
          alt="seta-virar"
        ></img>
      </PerguntaFechada>
      <PerguntaAberta showCard={showCard}>
        <p data-test="flashcard-text">{question}</p>
        <img
          data-test="turn-btn"
          onClick={() => fliparCartao()}
          src={seta_virar}
          alt="seta-virar"
        ></img>
      </PerguntaAberta>
      <PerguntaFlipada flipCard={flipCard}>
        <p data-test="flashcard-text">{answer}</p>
        <ContainerBotoes>
          <button
            data-test="no-btn"
            onClick={() => {
              buttonClick();
              setIcone(icone_erro);
              setTextColor("#FF3030");
              setDataTestIcon("no-icon");
            }}
          >
            Não lembrei
          </button>
          <button
            data-test="partial-btn"
            onClick={() => {
              buttonClick();
              setIcone(icone_quase);
              setTextColor("#FF922E");
              setDataTestIcon("partial-icon");
            }}
          >
            Quase não lembrei
          </button>
          <button
            data-test="zap-btn"
            onClick={() => {
              buttonClick();
              setIcone(icone_certo);
              setTextColor("#2FBE34");
              setDataTestIcon("zap-icon");
            }}
          >
            Zap!
          </button>
        </ContainerBotoes>
      </PerguntaFlipada>
    </div>
  );
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => props.hideCard};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.textColor};
    text-decoration-line: ${(props) => props.textDecoration};
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
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  position: relative;
  display: ${(props) => props.showCard};
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
  display: ${(props) => props.flipCard};
  flex-direction: column;
  justify-content: space-between;
`;

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
    border-radius: 5px;
    border: none;
    padding: 5px;

    &:nth-child(1) {
      background: #ff3030;
    }
    &:nth-child(2) {
      background: #ff922e;
    }
    &:nth-child(3) {
      background: #2fbe34;
    }
  }
`;
