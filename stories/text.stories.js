import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../src/text.scss";
storiesOf("Text", module)
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
