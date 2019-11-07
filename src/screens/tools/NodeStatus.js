import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import humanizeDuration from "humanize-duration";
import { Card, Table } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";

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
    <Card title="Node Status">
      <Table>
        <Table.Body>
          <Table.Tr>
            <StackedData
              cell
              label="Key @ Host : Port"
              value={`${status.key}@${status.host}:${status.port}`}
            />
          </Table.Tr>
          <Table.Tr>
            <StackedData cell label="Network" value={status.network} />
          </Table.Tr>
          <Table.Tr>
            <StackedData cell label="Chain Progress" value={status.progress} />
          </Table.Tr>
          <Table.Tr>
            <StackedData
              cell
              label="Version"
              value={`${status.version} (${status.agent})`}
            />
          </Table.Tr>
          <Table.Tr>
            <StackedData cell label="Connections" value={status.connections} />
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
