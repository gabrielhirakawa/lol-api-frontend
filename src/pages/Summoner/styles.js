import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const ReturnHome = styled.div`
  cursor: pointer;
  float: left;
  margin-top: 20px;
  span{
    size: 24px;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    font-size: 32px;
  }
  padding-bottom: 20px;
  border-bottom: 2px solid #fff;

  @media(max-width: 414px){
      h2 {
        font-size: 18px;
      }

      h3{
        font-size: 14px;
      }
      img{
        width: 70px;
        height: 70px;
      }
    }

    
`;

export const IconSummoner = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  margin-right: 20px;

`;

export const EloSummoner = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 20px;
`;

export const SummonerInfo = styled.div`
  color: #fff;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 32px;
      label {
        color: #fff;
      }
    }
  }
`;

export const CircleDiv = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  label {
    font-size: 14px;
  }
  label strong {
    font-size: 20px;
  }
`;

export const WinsLabel = styled.span`
  color: #edc988;
`;

export const LossesLabel = styled.span`
  color: #d7385e;
`;
