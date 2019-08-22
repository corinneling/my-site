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
    this.panelButtonRef.current.setAttribute('aria-expanded', 'false');
  }

  toggleExpandedAria = (e) => {
    const expandedValue = e.target.getAttribute('aria-expanded');
    let setValue = expandedValue === 'true' ? 'false' : 'true';
    e.target.setAttribute('aria-expanded', setValue);
    console.log('clicked')
  }

  componentDidMount() {
    this.setIntialAria();
    initControlPanel();
  }

  render() {
    return (
      <div className="panel">
        <button 
          className="panel__main-button" 
          ref={this.panelButtonRef} 
          onClick={this.toggleExpandedAria} 
          aria-expanded="true" 
          aria-label="Panel to Control Page Styling" 
          data-placement="top">
        </button>
        <ul className="panel__list">
          <li className="panel__list-item">
            <button className="panel__button icon-color" aria-label="Change coloring of this control panel" data-placement="left"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-contrast" aria-label="Switch page to dark mode" data-placement="left" data-cy="icon-contrast"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-underline" aria-label="Add underline to links" data-placement="left"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-letter-spacing" aria-label="Increase spacing between text letters" data-placement="left"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-line-height" aria-label="Increase spacing between text lines" data-placement="left"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-font" aria-label="Change page font to OpenDyslexic font" data-placement="left" data-cy="icon-font"></button>
          </li>
          <li className="panel__list-item">
            <button className="panel__button icon-refresh" aria-label="Refresh page styling" data-placement="left"></button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ControlPanel;