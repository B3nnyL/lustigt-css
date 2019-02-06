import { storiesOf } from "@storybook/html";
import "../src/button.scss";
import "../src/card.scss";
import "../src/text.scss";
storiesOf("Card", module)
  .add("text card", () => {
    const card = `
  <div class="card">
    <div class="card__header">
      <h3>A cool card</h3>
    </div>
    <div class="card__body">
    <p>
    Ipsum Ipsum Ipsum Ipsum Ipsum
Ipsum Ipsum Ipsum Ipsum Ipsum
Ipsum Ipsum Ipsum Ipsum Ipsum
</p>
    </div>
    <div class="card__footer">
      <button class="link-yellow-sm"> Link</button>
    </div>
  </div>
  `;
    return card;
  })
  .add("image card", () => {
    const card = `
  <div class="card">
  <div class="card__image">
    <image src="https://images.unsplash.com/photo-1549369707-d011e0269c27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
  </div>
    <div class="card__header">
      <h3>A cool card</h3>
    </div>
    <div class="card__body">
    <p>
    Ipsum Ipsum Ipsum Ipsum Ipsum
Ipsum Ipsum Ipsum Ipsum Ipsum
Ipsum Ipsum Ipsum Ipsum Ipsum
</p>
    </div>
    <div class="card__footer">
      <button class="link-yellow-sm"> Link</button>
    </div>
  </div>
  `;
    return card;
  });
