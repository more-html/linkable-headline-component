const template = document.createElement('template');
template.innerHTML = `
  <style>
    a.linkable {
      position: absolute;
      display: none;
      background-color: white;
      color: red;
    }
  </style>
  <a class="linkable">#</a>
  <slot></slot>
`;

class MoreHtmlHeading extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const linkEl = this.shadowRoot.querySelector('.linkable');
    const linkableUrl = new URL(window.location);
    linkableUrl.hash = this.getAttribute('slug');
    linkEl.setAttribute('href', linkableUrl.toString());
    
    const showLinkable = () => this.shadowRoot.querySelector('.linkable').style.display = 'inline';
    const hideLinkable = () => this.shadowRoot.querySelector('.linkable').style.display = 'none';
    this.shadowRoot.addEventListener('pointerover', showLinkable);
    this.shadowRoot.addEventListener('pointerout', hideLinkable);
  }
}

customElements.define('morehtml-heading', MoreHtmlHeading);
customElements.define('morehtml-h1', class extends MoreHtmlHeading {});
customElements.define('morehtml-h2', class extends MoreHtmlHeading {});
customElements.define('morehtml-h3', class extends MoreHtmlHeading {});
customElements.define('morehtml-h4', class extends MoreHtmlHeading {});
customElements.define('morehtml-h5', class extends MoreHtmlHeading {});
customElements.define('morehtml-h6', class extends MoreHtmlHeading {});
