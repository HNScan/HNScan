import React, { Suspense } from "react";
import humanizeDuration from "humanize-duration";
import { Card, Table, useQuery } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { sciNotation, formatLargeNumber } from "utils/util";

const NodeStatusContainer = () => {
  const { data: status } = useQuery("/status/");
  const { t } = useTranslation();
  let [difficulty, exponent] = sciNotation(status.difficulty, 5);
  let totalDownloaded = formatLargeNumber(status.totalBytesRecv, 2);
  let totalUploaded = formatLargeNumber(status.totalBytesSent, 2);

  return (
    <Card title={t("node_status.node_status")}>
      <Table>
        <Table.Body>
          <Table.Tr>
            <StackedData
              cell
              label="node_status.host"
              value={`${status.key}@${status.host}:${status.port}`}
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
