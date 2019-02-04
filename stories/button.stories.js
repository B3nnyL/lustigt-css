import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../src/button.scss";
storiesOf("buttons and links", module)
  .add("button filled red", () => {
    const button = document.createElement("div");
    button.className = "button-red--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled neutral", () => {
    const button = document.createElement("div");
    button.className = "button-neutral--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled blue", () => {
    const button = document.createElement("div");
    button.className = "button-blue--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled purple", () => {
    const button = document.createElement("div");
    button.className = "button-purple--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled yellow", () => {
    const button = document.createElement("div");
    button.className = "button-yellow--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled aoi", () => {
    const button = document.createElement("div");
    button.className = "button-aoi--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled green", () => {
    const button = document.createElement("div");
    button.className = "button-green--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button red", () => {
    const button = document.createElement("div");
    button.className = "button-red";
    button.innerText = "Hello button";
    return button;
  })
  .add("button neutral", () => {
    const button = document.createElement("div");
    button.className = "button-neutral";
    button.innerText = "Hello button";
    return button;
  })
  .add("button blue", () => {
    const button = document.createElement("div");
    button.className = "button-blue";
    button.innerText = "Hello button";
    return button;
  })
  .add("button purple", () => {
    const button = document.createElement("div");
    button.className = "button-purple";
    button.innerText = "Hello button";
    return button;
  })
  .add("button yellow", () => {
    const button = document.createElement("div");
    button.className = "button-yellow";
    button.innerText = "Hello button";
    return button;
  })
  .add("button aoi", () => {
    const button = document.createElement("div");
    button.className = "button-aoi";
    button.innerText = "Hello button";
    return button;
  })
  .add("button green", () => {
    const button = document.createElement("div");
    button.className = "button-green";
    button.innerText = "Hello button";
    return button;
  })
  .add("link red", () => {
    const button = document.createElement("div");
    button.className = "link-red";
    button.innerText = "Hello button";
    return button;
  })
  .add("link neutral", () => {
    const button = document.createElement("div");
    button.className = "link-neutral";
    button.innerText = "Hello button";
    return button;
  })
  .add("link blue", () => {
    const button = document.createElement("div");
    button.className = "link-blue";
    button.innerText = "Hello button";
    return button;
  })
  .add("link purple", () => {
    const button = document.createElement("div");
    button.className = "link-purple";
    button.innerText = "Hello button";
    return button;
  })
  .add("link yellow", () => {
    const button = document.createElement("div");
    button.className = "link-yellow";
    button.innerText = "Hello button";
    return button;
  })
  .add("link aoi", () => {
    const button = document.createElement("div");
    button.className = "=link-aoi";
    button.innerText = "Hello button";
    return button;
  })
  .add("link green", () => {
    const button = document.createElement("div");
    button.className = "link-green";
    button.innerText = "Hello button";
    return button;
  })
  .add("disabled", () => {
    const button = `<button disabled class="button-green">btn</button>`;
    return button;
  });

storiesOf("small buttons and links", module)
  .add("small button filled red", () => {
    const button = document.createElement("div");
    button.className = "button-red-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("small button filled neutral", () => {
    const button = document.createElement("div");
    button.className = "button-neutral-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("small button filled blue", () => {
    const button = document.createElement("div");
    button.className = "button-blue-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small filled purple", () => {
    const button = document.createElement("div");
    button.className = "button-purple-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small filled yellow", () => {
    const button = document.createElement("div");
    button.className = "button-yellow-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small filled aoi", () => {
    const button = document.createElement("div");
    button.className = "button-aoi-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button filled green", () => {
    const button = document.createElement("div");
    button.className = "button-green-sm--filled";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small red", () => {
    const button = document.createElement("div");
    button.className = "button-red-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small neutral", () => {
    const button = document.createElement("div");
    button.className = "button-neutral-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small blue", () => {
    const button = document.createElement("div");
    button.className = "button-blue-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small purple", () => {
    const button = document.createElement("div");
    button.className = "button-purple-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small yellow", () => {
    const button = document.createElement("div");
    button.className = "button-yellow-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small aoi", () => {
    const button = document.createElement("div");
    button.className = "button-aoi-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("button small green", () => {
    const button = document.createElement("div");
    button.className = "button-green-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small red", () => {
    const button = document.createElement("div");
    button.className = "link-red-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small neutral", () => {
    const button = document.createElement("div");
    button.className = "link-neutral-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small blue", () => {
    const button = document.createElement("div");
    button.className = "link-blue-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small purple", () => {
    const button = document.createElement("div");
    button.className = "link-purple-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small yellow", () => {
    const button = document.createElement("div");
    button.className = "link-yellow-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small aoi", () => {
    const button = document.createElement("div");
    button.className = "link-aoi-sm";
    button.innerText = "Hello button";
    return button;
  })
  .add("link small green", () => {
    const button = document.createElement("div");
    button.className = "link-green-sm";
    button.innerText = "Hello button";
    return button;
  });
