import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { useResource } from "rest-hooks";
import humanizeDuration from "humanize-duration";
import { useLocation, useHistory } from "react-router-dom";
import { Card, Table, Modal, Text, Code, HelpIcon } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Resources
import StatusResource from "resources/StatusResource";

// Util
import { sciNotation, formatLargeNumber } from "utils/util";

const Help = styled(HelpIcon)`
  height: 20px;
  width: 15px;
  margin-left: 20px;
  cursor: pointer;
`;

//@todo move this somewhere else?
function ConnectHelp(props) {
  return (
    <Modal
      show={props.showModal}
      closeFunction={props.toggleModal}
      title={"Connecting to this node"}
    >
      <p>
        This node's IP is{" "}
        <Code copy>
          <p>{props.ip}</p>
        </Code>{" "}
        and identity key is:{" "}
        <Code copy>
          <p>{props.idkey}</p>
        </Code>
      </p>
      <Text>
        To add this node to your outbound connections, run the following:
        <Code copy>
          <p>{`$hsd-cli rpc addnode ${props.idkey}@${props.ip} add`}</p>
        </Code>
        If you do not have hsd-cli installed, follow these{" "}
        <a
          href="https://handshake-org.github.io/guides/mac-install.html#hsd-installation-instructions"
          target="_blank"
          rel="noopener noreferrer"
        >
          instructions
        </a>
        .
      </Text>
    </Modal>
  );
}

const NodeStatusContainer = () => {
  const location = useLocation();
  let history = useHistory();
  let [showModal, setModal] = useState(() => {
    if (location.hash === "#connect") {
      return true;
    }
    return false;
  });
  //Pull this to a custom hook.
  const toggleModal = () =>
    setModal(active => {
      if (location.hash === "#connect") {
        //I don't think it works this way.
        history.push(location.pathname);
      } else {
        history.push(location.pathname + "#connect");
      }

      return !active;
    });

  const status = useResource(StatusResource.detailShape(), {});
  const { t } = useTranslation();
  let [difficulty, exponent] = sciNotation(status.difficulty, 5);
  let totalDownloaded = formatLargeNumber(status.totalBytesRecv, 2);
  let totalUploaded = formatLargeNumber(status.totalBytesSent, 2);

  return (
    <>
      <Card title={t("node_status.node_status")}>
        <Table>
          <Table.Body>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.host"
                value={
                  <>
                    {status.key}@{status.host}:{status.port}
                    <Help circle onClick={toggleModal} />
                  </>
                }
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.network"
                value={status.network}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.chain_progress"
                value={status.progress}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.version"
                value={`${status.version} (${status.agent})`}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.connections"
                value={status.connections}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.difficulty"
                value={
                  <span>
                    {difficulty} x 10<sup>{exponent}</sup>
                  </span>
                }
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.uptime"
                value={humanizeDuration(status.uptime * 1000)}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.total_downloaded"
                value={
                  totalDownloaded[0] + " " + totalDownloaded[1].name + "bytes"
                }
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="node_status.total_uploaded"
                value={totalUploaded[0] + " " + totalUploaded[1].name + "bytes"}
              />
            </Table.Tr>
          </Table.Body>
        </Table>
      </Card>
      <ConnectHelp
        showModal={showModal}
        toggleModal={toggleModal}
        ip={`${status.host}:${status.port}`}
        idkey={status.key}
      />
    </>
  );
};

//Modal here should be it's own screen... Accessible via a Hash Router.
export default function NodeStatus() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NodeStatusContainer />
      </Suspense>
    </>
  );
}
