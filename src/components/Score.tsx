import React from 'react'
import {
  InnerContainer,
  MainContainer,
  ScoreContainer,
  ScoreHeading,
  ScoresOpted,
  ThanksContainer,
  Thanksheading,
  ThanksImage,
  ThanksSubHeading,
} from 'styles/components/Score'
import ok from 'assets/images/ok.png'

const Score = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <ThanksContainer>
          <ThanksImage src={ok} />
          <Thanksheading>Thank you</Thanksheading>
          <ThanksSubHeading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia veritatis maxime est dolore
            voluptas aliquam fuga, debitis mollitia odio reiciendis hic quasi totam, ullam possimus fugit,
          </ThanksSubHeading>
        </ThanksContainer>
        <ScoreContainer>
          <ScoreHeading>Total Score </ScoreHeading>
          <ScoresOpted>50</ScoresOpted>
        </ScoreContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Score
