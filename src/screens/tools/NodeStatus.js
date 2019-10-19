import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import humanizeDuration from "humanize-duration";

// Components
import Card from "components/styles/Card";
import StackedComponent from "components/Stacked/StackedComponent";

// Resources
import StatusResource from "resources/StatusResource";

// Util
import { sciNotation, formatLargeNumber } from "utils/util";

const NodeStatusContainer = () => {
  const status = useResource(StatusResource.detailShape(), {});
  let [difficulty, exponent] = sciNotation(status.difficulty, 5);
  let totalDownloaded = formatLargeNumber(status.totalBytesRecv, 2);
  let totalUploaded = formatLargeNumber(status.totalBytesSent, 2);

  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Node Status</Card.HeaderTitle>
      </Card.Header>
      <div className="card-content">
        <table className="table is-fullwidth">
          <tbody>
            <tr>
              <StackedComponent
                label="Key @ Host : Port"
                value={`${status.key}@${status.host}:${status.port}`}
              />
            </tr>
            <tr>
              <StackedComponent label="Network" value={status.network} />
            </tr>
            <tr>
              <StackedComponent
                label="Chain Progress"
                value={status.progress}
              />
            </tr>
            <tr>
              <StackedComponent
                label="Version"
                value={`${status.version} (${status.agent})`}
              />
            </tr>
            <tr>
              <StackedComponent
                label="Connections"
                value={status.connections}
              />
            </tr>
            <tr>
              {/* todo allow stacked component to accept this */}
              <StackedComponent
                label="Difficulty"
                value={
                  <span>
                    {difficulty} x 10<sup>{exponent}</sup>
                  </span>
                }
              />
            </tr>
            <tr>
              <StackedComponent
                label="Uptime"
                value={humanizeDuration(status.uptime * 1000)}
              />
            </tr>
            <tr>
              <StackedComponent
                label="Total Downloaded"
                value={
                  totalDownloaded[0] + " " + totalDownloaded[1].name + "bytes"
                }
              />
            </tr>
            <tr>
              <StackedComponent
                label="Total Uploaded"
                value={totalUploaded[0] + " " + totalUploaded[1].name + "bytes"}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};
export default function NodeStatus() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NodeStatusContainer />
      </Suspense>
    </>
  );
}
