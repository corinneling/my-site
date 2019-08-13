import React, { Component, createRef } from 'react';
import initControlPanel from './helpers/index';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.panelButtonRef = createRef();

    this.setIntialAria = this.setIntialAria.bind(this);
    this.toggleExpandedAria = this.toggleExpandedAria.bind(this);
  }



  setIntialAria = () => {
    this.panelButtonRef.setAttribute('aria-expanded', 'false');
  }

  openControlPanelHandler = () => {
    this.panelButtonRef.addEventListener('click', this.toggleExpandedAria);
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
          className="aesthetica11y-main-icon" 
          ref={this.panelButtonRef} 
          onClick={this.openControlPanelHandler} 
          aria-expanded="true" 
          aria-label="Open" 
          data-tooltip="Panel to Control Page Styling" 
          data-placement="top">
        </button>
        <div className="aesthetica11y-container" aria-hidden="false">
          <ul className="aesthetica11y-list">
            <li className="aesthetica11y-list__item">
              <button className="aesthetica11y__button icon-color" aria-label="Change coloring of this control panel" data-tooltip="Change coloring of this control panel" data-placement="left"></button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ControlPanel;