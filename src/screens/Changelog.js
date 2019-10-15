import React from "react";
//@todo split each change into Frontend Changes and Plugin changes.
//so 1.0
//Frontend:
//-
//-
//-
//Hnscan Plugin:
//-
//-
//-
export default function Changelog() {
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/">Customers</a>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a href="/">Team Settings</a>
        </li>
        <li>
          <a href="/" className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a href="/">Members</a>
            </li>
            <li>
              <a href="/">Plugins</a>
            </li>
            <li>
              <a href="/">Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Invitations</a>
        </li>
        <li>
          <a href="/">Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a href="/">Authentication</a>
        </li>
      </ul>
      <p className="menu-label">Transactions</p>
      <ul className="menu-list">
        <li>
          <a href="/">Payments</a>
        </li>
        <li>
          <a href="/">Transfers</a>
        </li>
        <li>
          <a href="/">Balance</a>
        </li>
      </ul>
    </aside>
  );
}
