import React, { Suspense, useState } from "react";
import { useResource } from "rest-hooks";
import humanizeDuration from "humanize-duration";
import { useLocation, useHistory } from "react-router-dom";
import { Card, Table, Modal, Header, Text, Code } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";

// Resources
import StatusResource from "resources/StatusResource";

// Util
import { sciNotation, formatLargeNumber } from "utils/util";

function ConnectHelp(props) {
  return (
    <Modal
      show={props.showModal}
      closeFunction={props.toggleModal}
      title={"Connecting to this node"}
    >
      <p>
        This node's IP is <Code>{props.ip}</Code> and identity key is:{" "}
        <Code>{props.idkey}</Code>
      </p>
      <p>There are 2 supported methods of connecting to this node.</p>
      <Header medium>Through the RPC</Header>
      <Text>
        If you have an HSD node running, as well as hs-client installed, then
        run.{" "}
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
  let [difficulty, exponent] = sciNotation(status.difficulty, 5);
  let totalDownloaded = formatLargeNumber(status.totalBytesRecv, 2);
  let totalUploaded = formatLargeNumber(status.totalBytesSent, 2);

  return (
    <>
      <Card title="Node Status">
        <Table>
          <Table.Body>
            <Table.Tr>
              <StackedData
                cell
                label="Key @ Host : Port"
                value={`${status.key}@${status.host}:${status.port}`}
              />
              <button onClick={toggleModal} />
            </Table.Tr>
            <Table.Tr>
              <StackedData cell label="Network" value={status.network} />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="Chain Progress"
                value={status.progress}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="Version"
                value={`${status.version} (${status.agent})`}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="Connections"
                value={status.connections}
              />
            </Table.Tr>
            <Table.Tr>
              {/* todo allow stacked component to accept this */}
              <StackedData
                cell
                label="Difficulty"
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
                label="Uptime"
                value={humanizeDuration(status.uptime * 1000)}
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="Total Downloaded"
                value={
                  totalDownloaded[0] + " " + totalDownloaded[1].name + "bytes"
                }
              />
            </Table.Tr>
            <Table.Tr>
              <StackedData
                cell
                label="Total Uploaded"
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
