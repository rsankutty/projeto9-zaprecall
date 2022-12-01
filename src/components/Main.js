import logo from "../assets/img/logo.png";
import styled from "styled-components";
import cards from "./Cards";

import QuestionCard from "./QuestionCard";
import OpenCard from "./OpenCard";

export default function Main() {
  return (
    <ScreenContainer>

      <LogoContainer>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </LogoContainer>

      {cards.map((item,index) => (
        <QuestionCard key={index + 1} questionIndex={index + 1} />
      ))}

      {cards.map((item, index) => (
        <OpenCard key={index + 1} question={item.question} />
      ))}

      <PerguntaAberta>
        um monte de bosta
        <ContainerBotoes>
          <button>teste</button>
          <button>merda</button>
          <button>bosta fadfa </button>
        </ContainerBotoes>
      </PerguntaAberta>
      <FooterConcluidos>um monte de bosta</FooterConcluidos>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
  }
`;
