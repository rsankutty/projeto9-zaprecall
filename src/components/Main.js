import logo from "../assets/img/logo.png";
import styled from "styled-components";
import cards from "./Cards";

import QuestionCard from "./QuestionCard";
import OpenCard from "./OpenCard";
import FlippedCard from "./FlippedCard";
import Footer from "./Footer";

export default function Main() {
  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </LogoContainer>

      {cards.map((item, index) => (
        <QuestionCard key={index + 1} questionIndex={index + 1} />
      ))}

      {cards.map((item, index) => (
        <OpenCard key={index + 1} question={item.question} />
      ))}

      {cards.map((item, index) => (
        <FlippedCard key={index + 1} answer={item.answer} />
      ))}

      <Footer />
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


