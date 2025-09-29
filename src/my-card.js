import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.heading = "card-title";
    this.image = "";
    this.alt = "";
    this.para = "information";
    this.fancy = false;
   
    
  }

  static get styles() {
    return css`
      :host {
        display: block; 
      }

      :host([fancy]) .card {
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
    }

      .wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.card {
  max-width: 400px;
  border: 2px solid black;
  padding: 16px;
  text-align: center;
  background-color: white;
}
.card img {
  width: 100%;
  height: auto;
  margin: 16px 0;
}

]
@media (max-width: 500px) {
  .card {
    max-width: 90%;
    padding: 12px;
  }
  .card img {
    width: 100%;
  }
  .card h1 {
    font-size: 1.2rem;
  }
  .card p {
    font-size: 0.9rem;
  }
}
    `;
  }

  render() {
  return html`
    <div class="card">
      <h1 class="card-title">${this.heading}</h1>
      <img src="${this.image}" alt="${this.alt}">
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
    </div>
  `;
}
openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      heading: { type: String },
      image: { type: String },
      alt: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
