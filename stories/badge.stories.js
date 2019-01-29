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
  .add("badge black", () => {
    const badge = document.createElement("div");
    badge.className = "badge-black";
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
  });
