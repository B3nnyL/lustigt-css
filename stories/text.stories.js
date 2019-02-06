import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../src/text.scss";
storiesOf("Text", module)
  .add("typography", () => {
    const list = `
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <p>paragraph</p>
    <p>paragraph</p>
    <span>span</span>
    <label>label</label>
    `;
    return list;
  })
  .add("un-ordered list", () => {
    const list = `<ul>
    <li>Color</li>
    <li>Color</li>
    <ul><li>Color</li>
    <li>Color</li> </ul>
    </ul>`;
    return list;
  })
  .add("ordered list", () => {
    const list = `<ol>
    <li>Color</li>
    <li>Color</li>
    <ol><li>Color</li>
    <li>Color</li> </ol>
    </ol>`;
    return list;
  });
