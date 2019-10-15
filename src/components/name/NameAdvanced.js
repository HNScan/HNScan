import React from "react";

// Components
import Card from "../styles/Card";
import StackedData from "../Stacked/StackedComponent";

// Util
import { hnsValues } from "../../util/util";

export default function NameSummary({ name }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Advanced</Card.HeaderTitle>
      </Card.Header>
      {/* @todo remove all these class names. */}
      {/* @todo need links in here */}
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <div className="card-content">
        <div className="columns">
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData label="Name Hash" value={name.hash} />
                </tr>
                <tr>
                  <StackedData label="Height" value={name.height} />
                </tr>
                <tr>
                  <StackedData label="Renewal" value={name.renewal} />
                </tr>
                <tr>
                  <StackedData label="Value" value={hnsValues(name.value)} />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData
                    label="Highest"
                    value={hnsValues(name.highest)}
                  />
                </tr>
                <tr>
                  <StackedData label="Weak" value={name.weak.toString()} />
                </tr>
                <tr>
                  <StackedData label="Transfer" value={name.transfer} />
                </tr>
                <tr>
                  <StackedData label="Revoked" value={name.revoked} />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
}
