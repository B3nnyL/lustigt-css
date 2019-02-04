import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../src/badge.scss";
storiesOf("Badges", module)
  .add("badge red", () => {
    const badge = document.createElement("div");
    badge.className = "badge-red";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge neutral", () => {
    const badge = document.createElement("div");
    badge.className = "badge-neutral";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge blue", () => {
    const badge = document.createElement("div");
    badge.className = "badge-blue";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge purple", () => {
    const badge = document.createElement("div");
    badge.className = "badge-purple";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge yellow", () => {
    const badge = document.createElement("div");
    badge.className = "badge-yellow";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge aoi", () => {
    const badge = document.createElement("div");
    badge.className = "badge-aoi";
    badge.innerText = "Hello Badge";
    return badge;
  })
  .add("badge green", () => {
    const badge = document.createElement("div");
    badge.className = "badge-green";
    badge.innerText = "Hello Badge";
    return badge;
  });
