import React, { Suspense, useState } from "react";
import { useResource } from "rest-hooks";
import humanizeDuration from "humanize-duration";
import { Route, useLocation, useHistory } from "react-router-dom";

// Components
import Card from "components/styles/Card";
import StackedData from "components/shared/StackedData";
import Modal from "components/Modal";

// Resources
import StatusResource from "resources/StatusResource";

// Util
import { sciNotation, formatLargeNumber } from "utils/util";

function ConnectHelp(props) {
  return (
    <Modal show={props.showModal} closeFunction={props.toggleModal}>
      <h1>How to connect to this node</h1>
      <p>This node's IP and identity key are: </p>
      <p>There are 2 supported methods of connecting to this node.</p>
      <p>1. Through the RPC </p>
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
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Node Status</Card.HeaderTitle>
        </Card.Header>
        <div className="card-content">
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <StackedData
                  cell
                  label="Key @ Host : Port"
                  value={`${status.key}@${status.host}:${status.port}`}
                />
                {/* <Link to={url + "#connect"}> Modal </Link> */}
                <button onClick={toggleModal} />
              </tr>
              <tr>
                <StackedData cell label="Network" value={status.network} />
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Chain Progress"
                  value={status.progress}
                />
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Version"
                  value={`${status.version} (${status.agent})`}
                />
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Connections"
                  value={status.connections}
                />
              </tr>
              <tr>
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
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Uptime"
                  value={humanizeDuration(status.uptime * 1000)}
                />
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Total Downloaded"
                  value={
                    totalDownloaded[0] + " " + totalDownloaded[1].name + "bytes"
                  }
                />
              </tr>
              <tr>
                <StackedData
                  cell
                  label="Total Uploaded"
                  value={
                    totalUploaded[0] + " " + totalUploaded[1].name + "bytes"
                  }
                />
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      {/* Pass in IP + Key. */}
      <ConnectHelp showModal={showModal} toggleModal={toggleModal} />
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
