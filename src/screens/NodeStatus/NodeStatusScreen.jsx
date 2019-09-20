import React, { Component } from 'react';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import StackedComponent from '../../components/Stacked/StackedComponent';

export default class NodeStatusScreen extends Component {
  render() {
    return (
      <Home.ContentContainer>
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Node Status</Cards.HeaderTitle>
          </Cards.Header>
          <div className="card-content">
            <table className="table is-fullwidth">
              <tbody>
                {/* TODO: Get Node Status */}
                <tr><StackedComponent label="Key @ Host : Port" value="4"/></tr>
                <tr><StackedComponent label="Chain" value="4"/></tr>
                <tr><StackedComponent label="Chain Progress" value="4"/></tr>
                <tr><StackedComponent label="Version" value="4"/></tr>
                <tr><StackedComponent label="Connections" value="4"/></tr>
                <tr><StackedComponent label="Difficulty" value="4"/></tr>
                <tr><StackedComponent label="Uptime" value="4"/></tr>
                <tr><StackedComponent label="Total Downloaded" value="4"/></tr>
                <tr><StackedComponent label="Total Uploaded" value="4"/></tr>
                <tr><StackedComponent label="Warnings" value="4"/></tr>
              </tbody>
            </table>
          </div>
        </Cards.Card>
      </Home.ContentContainer>
    );
  }
}
