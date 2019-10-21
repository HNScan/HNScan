import React from "react";
import raw from "raw.macro";
import Markdown from "markdown-to-jsx";

const changelog = raw("../../../CHANGELOG.md");

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
  return <Markdown>{changelog}</Markdown>;
}
