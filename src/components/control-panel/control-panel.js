import 'React' from react;

const ControlPanel = () => {
  return (
    <div id="a11y-control-panel-wrapper">
      <button className="aesthetica11y-main-icon" aria-expanded="true" aria-label="Open" data-tooltip="Panel to Control Page Styling" data-placement="top"></button>
      <div className="aesthetica11y-container" aria-hidden="false">
        <ul className="aesthetica11y-list">
          <li className="aesthetica11y-list__item">
            <button className="aesthetica11y__button icon-{props.iconName}" aria-label="{props.ariaLabel}" data-tooltip="{props.tooltip}" data-placement="{props.placement}"></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ControlPanel;