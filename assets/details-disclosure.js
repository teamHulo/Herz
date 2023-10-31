/*class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    console.log('toggle eee 1');
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    console.log('toggle eee 2');
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    console.log('toggle eee 3');
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);*/

class DetailsDisclosure extends HTMLElement {
  constructor() {
    super(); 
    this.mainDetailsToggle = this.querySelector('details');
    this.header = this.mainDetailsToggle.querySelector('summary');
    this.content = this.mainDetailsToggle.querySelector('div');

    this.header.addEventListener('mouseenter', this.onHeaderMouseEnter.bind(this));
    

    document.querySelector('header').addEventListener('mouseleave',this.closeAll);
    this.mainDetailsToggle.addEventListener('mouseenter', this.onDetailsMouseEnter.bind(this));
    const liNoTargetElements = document.querySelectorAll('.li-no-targer');
    liNoTargetElements.forEach(element => {
      element.addEventListener('mouseenter', this.onLiNoTargetMouseEnter.bind(this));
    });
  }
  onLiNoTargetMouseEnter() {
    this.closeAll();
  }
  onHeaderMouseEnter() {
    console.log('toggle eee 1 (header mouseenter)');
    this.open();
  }

  onHeaderMouseLeave() {
    console.log('toggle eee 2 (header mouseleave)');
    this.close();
  }

  onDetailsMouseEnter() {
    console.log('toggle eee 3 (details mouseenter)');
  }

  onDetailsMouseLeave() {
    console.log('toggle eee 4 (details mouseleave)');
    this.close();
  }

  open() {
    console.log('toggle eee 5 (open)');
    this.closeAll();
    this.mainDetailsToggle.setAttribute('open', '');
    this.header.setAttribute('aria-expanded', true);
  }
  closeAll() {
    let detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(function (details) {
      details.removeAttribute('open');
    });
  }
  close() {
    console.log('toggle eee 6 (close)');
    this.mainDetailsToggle.removeAttribute('open');
    this.header.setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);







class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
  }

  onToggle() {
    console.log('toggle eee 4');
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);
