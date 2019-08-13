import React, { Component, createRef } from 'react';
import initControlPanel from './helpers';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.panelButtonRef = createRef();

    this.setIntialAria = this.setIntialAria.bind(this);
    this.toggleExpandedAria = this.toggleExpandedAria.bind(this);
  }

  setIntialAria = () => {
    console.log(this.panelButtonRef);
    this.panelButtonRef.current.setAttribute('aria-expanded', 'false');
  }

  openControlPanelHandler = () => {
    this.panelButtonRef.current.addEventListener('click', this.toggleExpandedAria);
  }

  toggleExpandedAria = (e) => {
    const expandedValue = e.target.getAttribute('aria-expanded');
    let setValue = expandedValue === 'true' ? 'false' : 'true';
    e.target.setAttribute('aria-expanded', setValue);
  }

  componentDidMount() {
    this.setIntialAria();
  }

  render() {
    return (
      <div id="a11y-control-panel-wrapper">
        <button 
          className="panel__main-button" 
          ref={this.panelButtonRef} 
          onClick={this.openControlPanelHandler} 
          aria-expanded="true" 
          aria-label="Panel to Control Page Styling" 
          data-placement="top">
        </button>
        <div className="panel__container" aria-hidden="false">
          <ul class="panel__list">
            <li class="panel__list-item">
              <button class="panel__button icon-color" aria-label="Change coloring of this control panel" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-contrast" aria-label="Switch page contrast to dark or light" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-decrease" aria-label="Decrease body font size" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-increase" aria-label="Increase body font size" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-underline" aria-label="Add underline to links" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-letter-spacing" aria-label="Increase spacing between text letters" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-line-height" aria-label="Increase spacing between text lines" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-font" aria-label="Change page text to OpenDyslexic font" data-placement="left"></button>
            </li>
            <li class="panel__list-item">
              <button class="panel__button icon-refresh" aria-label="Refresh page styling" data-placement="left"></button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ControlPanel;