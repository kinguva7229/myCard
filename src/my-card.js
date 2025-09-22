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
    this.title = "My card";
    this.heading = "card-title";
    this.image = "Poster Image";
    this.alt = "Movie poster";
    this.para = "information";
    this.poster = "card-image ";
  }

  static get styles() {
    return css`
      :host {
        display: block; 
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

.card.fancy {
  background-color: DeepSkyBlue;
}
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
    <h1 class="${this.heading}">${this.title}</h1>
    <img class="${this.poster}" src="${this.image}" alt="${this.alt} poster">
    <p>${this.para}</p>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      heading: { type: String },
      image: { type: String },
      alt: { type: String },
      para: { type: String },
      poster: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
