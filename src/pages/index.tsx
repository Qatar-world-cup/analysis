import Image from "next/image";
import styled from "@emotion/styled";
import troPic from "@/assets/tro.png";
import arh from "@/assets/arhentina.png";
import france from "@/assets/france.png";
import IconBall from "@/assets/IconBall";

const Layout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 1.25rem 0;
  color: #fff;
`;

const MatchOutcome = styled.section`
  width: 1032px;
  height: 300px;
  margin-bottom: 16px;
  border-radius: 20px;
  background-color: rgba(29, 29, 29, 1);
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 63px;
  border-bottom: 1px solid rgba(51, 51, 51, 1);
`;

const TitleText = styled.p`
  margin-left: 15px;
  font-size: 16px;
  line-height: 18px;
`;

const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 170px;
  padding: 16px 24px 24px;
  border-bottom: 1px solid rgba(51, 51, 51, 1);
`;

const ScoreBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 1fr;
  align-items: center;
  justify-content: center;
  height: 80px;
  gap: 24px;
  margin-bottom: 16px;
`;

const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const TeamName = styled.p`
  font-size: 24px;
`;

const TeamRank = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: rgba(159, 159, 159, 1);
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
`;

const ScoreText = styled.p`
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 8px;
`;

const PenalText = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: rgba(159, 159, 159, 1);
`;

const GoalRecord = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 89px;
`;

const GoalRecordTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  & > p {
    line-height: 1.25;
    font-size: 14px;
    color: rgba(159, 159, 159, 1);
  }
`;

const Maker = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Email = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 14px;
    color: rgba(159, 159, 159, 1);
  }
`;

export default function Home() {
  return (
    <Layout>
      <Title>Qatar WorldCup Final</Title>
      <MatchOutcome>
        <TitleDiv>
          <Image src={troPic} width={20} height={20} alt="" />
          <TitleText>WorldCup 결승</TitleText>
        </TitleDiv>
        <MatchInfo>
          <ScoreBox>
            <TeamWrapper>
              <Team style={{ marginRight: 20 }}>
                <TeamName>아르헨티나</TeamName>
                <TeamRank>FIFA #1</TeamRank>
              </Team>
              <Image src={arh} width={40} height={40} alt="" />
            </TeamWrapper>
            <Score>
              <ScoreText>3 - 3</ScoreText>
              <PenalText>Pen: 4 - 2</PenalText>
            </Score>
            <TeamWrapper>
              <Image src={france} width={40} height={40} alt="" />
              <Team style={{ marginLeft: 20, alignItems: "start" }}>
                <TeamName>프랑스</TeamName>
                <TeamRank>FIFA #2</TeamRank>
              </Team>
            </TeamWrapper>
          </ScoreBox>
          <GoalRecord>
            <GoalRecordTextBox>
              <p>{`Messi 23' (Pen), 108'`}</p>
              <p>{`Di Maria 36'`}</p>
            </GoalRecordTextBox>
            <IconBall />
            <GoalRecordTextBox style={{ alignItems: "start" }}>
              <p>{`Mbappé80' (Pen), 81', 118' (Pen)`}</p>
            </GoalRecordTextBox>
          </GoalRecord>
        </MatchInfo>
        <Maker>
          <Email>
            <p>Frontend: tjwns4122@gmail.com</p>
          </Email>
          <Email>
            <p>DataAnalyzer: kamcim712000@gmail.com</p>
          </Email>
        </Maker>
      </MatchOutcome>
    </Layout>
  );
}
