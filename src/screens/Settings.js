import React from "react";
import {
  Card,
  Col,
  Header,
  LanguageSwitcher,
  Row,
  Select,
  Text
} from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SmallText = styled(Text)`
  font-size: 0.875rem;
`;

const supportedOptions = [
  { value: "en-US", label: "English" },
  { value: "zh", label: "Chinese (incomplete)" }
];

function SettingsInput({ label, description, children }) {
  return (
    <>
      <Row>
        <Header small bold margin="12px 0 6px">
          {label}
        </Header>
      </Row>
      <Row>
        <Col>
          <SmallText>{description}</SmallText>
        </Col>
        <Col>{children}</Col>
      </Row>
    </>
  );
}

export default function Settings() {
  const { t, i18n } = useTranslation();
  return (
    <Card title={t("settings.title")}>
      <SettingsInput
        label={t("settings.language_title")}
        description={t("settings.language_desc")}
      >
        {/* @todo: we may need to wrap this sucker in a suspense, currently not working */}
        <LanguageSwitcher
          supportedOptions={supportedOptions}
          updateLanguage={value => i18n.changeLanguage(value)}
        />
      </SettingsInput>
      <SettingsInput
        label={t("settings.network_title")}
        description={t("settings.network_desc")}
      >
        <Select />
      </SettingsInput>
      <SettingsInput
        label={t("settings.theme_title")}
        description={t("settings.theme_desc")}
      >
        <Select />
      </SettingsInput>
    </Card>
  );
}
