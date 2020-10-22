import React, { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';

import {
  Container,
  Content,
  HeaderContent,
  IconSummoner,
  EloSummoner,
  SummonerInfo,
  FooterContent,
  CircleDiv,
  WinsLabel,
  LossesLabel,
  ReturnHome
} from "./styles";
import api from "../../services/backend";

import bronze from "../../assets/Emblem_Bronze.png";
import iron from "../../assets/Emblem_Iron.png";
import silver from "../../assets/Emblem_Silver.png";
import gold from "../../assets/Emblem_Gold.png";
import platinum from "../../assets/Emblem_Platinum.png";
import diamond from "../../assets/Emblem_Diamond.png";
import grandmaster from "../../assets/Emblem_Grandmaster.png";
import master from "../../assets/Emblem_Master.png";
import challenger from "../../assets/Emblem_Challenger.png";

function Summoner({ match, history }) {
  const [summoner, setSummoner] = useState(Object);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    async function loadData() {
      setLoading(1);
      const res = await api
        .get(`/summoner/${match.params.id}`)
        .catch((e) => alert("Houve um erro ao buscar summoner"));

      if (res && res.data) {
        setSummoner(res.data);
      }
      setLoading(0);
    }
    loadData();

    //eslint-disable-next-line
  }, []);

  function validarElo(elo) {
    switch (elo) {
      case "BRONZE":
        return <EloSummoner src={bronze} alt="elo" />;
      case "IRON":
        return <EloSummoner src={iron} alt="elo" />;
      case "SILVER":
        return <EloSummoner src={silver} alt="elo" />;
      case "GOLD":
        return <EloSummoner src={gold} alt="elo" />;
      case "PLATINUM":
        return <EloSummoner src={platinum} alt="elo" />;
      case "DIAMOND":
        return <EloSummoner src={diamond} alt="elo" />;
      case "GRANDMASTER":
        return <EloSummoner src={grandmaster} alt="elo" />;
      case "MASTER":
        return <EloSummoner src={master} alt="elo" />;
      case "CHALLENGER":
        return <EloSummoner src={challenger} alt="elo" />;
      default: break;
    }
  }

  return (
    <Container>
      
      {
        !loading?
        (
          <>
            <Content>
             <HeaderContent>
            <IconSummoner src={summoner.iconUrl} alt="icon" />
            <SummonerInfo>
              <h2>
                <strong>{match.params.id}</strong> #BR1
              </h2>
              <h3>
                Nível {summoner.summonerLevel} - {summoner.tier} {summoner.rank}
              </h3>
            </SummonerInfo>
  
            {validarElo(summoner.tier)}
          </HeaderContent>
          <FooterContent>
            <div>
              <WinsLabel>
                <strong>WINS: </strong>
                <label>{summoner.wins}</label>
              </WinsLabel>
              <LossesLabel>
                <strong>LOSSES: </strong>
                <label>{summoner.losses}</label>
              </LossesLabel>
            </div>
            <CircleDiv>
              <label>
                <strong>{summoner.winRate}%</strong>
              </label>
              <label>WIN RATE</label>
            </CircleDiv>
          </FooterContent>
        </Content>
        <ReturnHome onClick={() => history.push('/')}>
          <FaAngleLeft size={30} color="#FFF" />
          <span>Voltar</span>
       </ReturnHome>
        </>)
        :
        (
          <Spinner animation="border" variant="light" />
        )
      }
    </Container>
  );
}

export default Summoner;
