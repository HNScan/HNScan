import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

//SVGs
import Logo from "components/svg/Block";

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto 60px auto;
  border-radius: 10px;
  display: flex;
  min-height: 500px;
  text-align: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: $tablet) {
    width: 95%;
  }
`;

const Header = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const Subtext = styled.div`
  font-size: 12px;
`;

const Container404 = styled.div`
  display: flex;
  font-size: 108px;
`;

const HugeBlock = styled.div`
  width: 80px;
  height: auto;
  opacity: 0.7;
  margin-right: 4px;
`;

export default function NotFoundScreen() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Header>
        <span>{t("Oh no!")}</span>
      </Header>
      <Subtext>
        {/* @todo: could probably combine these translations */}
        {t("void_message")}
        <a href="/" rel="noopener noreferrer">
          {t("safety")}
        </a>
      </Subtext>
      <Container404>
        <span>4</span>
        <HugeBlock>
          <Logo />
        </HugeBlock>
        <span>4</span>
      </Container404>
    </Wrapper>
  );
}
