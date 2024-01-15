class ItemMenu extends HTMLElement {
    constructor() {
        super();
        this.subMenu = this.querySelector('.menu');
        this.collapseIcon = this.querySelector('.has-children');
    }

    connectedCallback() {
        this.collapseIcon?.addEventListener('click', this.toogleSubMenu.bind(this))
    }

    toogleSubMenu() {
        this.subMenu.classList.toggle('d-none');
    }
}

if (!customElements.get('item-menu')) {
    customElements.define('item-menu', ItemMenu)
  }
  