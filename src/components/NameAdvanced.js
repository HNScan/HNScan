import React from "react";

// Components
import * as Cards from "./Cards/Cards";
import StackedData from "./Stacked/StackedComponent";

// Util
import { hnsValues } from "../util/util";

export default function NameSummary({ name }) {
  return (
    <Cards.Card>
      <Cards.Header>
        <Cards.HeaderTitle>Advanced</Cards.HeaderTitle>
      </Cards.Header>
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
    </Cards.Card>
  );
}
