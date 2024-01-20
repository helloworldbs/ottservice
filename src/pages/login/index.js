import React from 'react'
import styled from 'styled-components'

function LoginPage() {
  return (
    <Container>
      < Content>
        <Center>
          <Logo src='/images/cplogowhite.svg'/>
          < SignLink >첫 달 무료로 시작하기</SignLink>
          < Description >최신 영화, TV시리즈,스포츠 중계를 모두 한 곳에서</Description>
        </Center>
      </Content>
    </Container>
  )
}

export default LoginPage

const Container = styled.section`
  overflow: hidden;
  display : flex;
  flex-direction: row;
  height: 100vh;
  text-align: center;
  `;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  postionL relative;
  min-height: 100vh;
  display : flex;
  justify-content: center;
  align-items: center;
  `;

const Center = styled.div`
  max-width: 650px;`;

const Logo = styled.img`

`;

const SignLink = styled.a`
  font-weight: bold;
  color : white;
  background-color : #0063e5;
  margin-bottom: 12px;
  padding : 8px;
  width : 100%;`;

const Description = styled.p`
`;