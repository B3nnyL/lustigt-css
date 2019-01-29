import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../src/input.scss";
storiesOf("inputs", module)
  .add("input", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <input type="text" placeholder="23333"/>
  </div>`;
    return inputGroup;
  })
  .add("input disabled", () => {
    const inputGroup = `<div class="input-group">
    <label class="label disabled">Label</label>
    <input type="text" placeholder="23333" disabled/>
  </div>`;
    return inputGroup;
  })
  .add("input error in block", () => {
    const inputGroup = `<div class="input-group">
    <label class="label block">Label</label>
    <input type="text" class="error block" placeholder="23333"/>
     <span class="error block">Lol, here's an error</span>
  </div>`;
    return inputGroup;
  })
  .add("input success", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <input type="text" class="success" placeholder="23333"/>
    <span class="success">All good</span>
  </div>`;
    return inputGroup;
  })
  .add("textarea", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <textarea type="text" placeholder="23333"></textarea>
    </div>`;
    return inputGroup;
  })
  .add("textarea disabled", () => {
    const inputGroup = `<div class="input-group">
    <label class="label disabled">Label</label>
    <textarea type="text" placeholder="23333" disabled></textarea>
    </div>`;
    return inputGroup;
  })
  .add("radio button", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <label class="container">One
      <input type="radio" name="foo">
      <span class="radio"></span>
    </label>
    <label class="container">Two
      <input type="radio" name="foo">
      <span class="radio"></span>
    </label>
    <label class="container disabled">Three
      <input type="radio" name="foo" disabled>
      <span class="radio disabled"></span>
    </label>
    </div>`;
    return inputGroup;
  })
  .add("checkbox button", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <label class="container">One
      <input type="checkbox" name="foo">
      <span class="checkmark"></span>
    </label>
    <label class="container">Two
      <input type="checkbox" name="foo">
      <span class="checkmark"></span>
    </label>
     <label class="container disabled">Three
      <input type="checkbox" name="foo" disabled>
      <span class="checkmark disabled"></span>
    </label>
    </div>`;
    return inputGroup;
  })
  .add("interminate checkbox", () => {
    const inputGroup = `<div class="input-group">
    <ul>
    <label class="container">One
      <input type="checkbox" name="foo">
      <span class="checkmark"></span>
    </label>
      <li>
        <label class="container">Sub One
          <input type="checkbox" name="foo">
          <span class="checkmark"></span>
        </label>
      </li>
      <li>
        <label class="container"> Sub Two
          <input type="checkbox" name="foo">
          <span class="checkmark indeterminate"></span>
        </label>
      </li>
    </ul>
    </div>`;
    return inputGroup;
  })
  .add("switch button", () => {
    const inputGroup = `<div class="input-group">
    <label class="label">Label</label>
    <label class="switch-group">One
      <input type="checkbox" name="foo">
      <span class="switch"></span>
    </label>
    <label class="switch-group disabled">Two
      <input type="checkbox" name="two" disabled>
      <span class="switch disabled"></span>
    </label>
    </div>`;
    return inputGroup;
  });
