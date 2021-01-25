import { withRouter } from "react-router-dom";
import HoverButton from "../hoverButton/hover-button.component";
import IconContainer from "./icon-container/icon-container.component";

const TabContainer = ({routeName, tabName, active, bordered, children, quantity, handleClick}) => (
  <HoverButton
    className={`hover-button ${active === tabName ? 'active' : ''}`}
    onClick={() => handleClick(tabName, routeName)}
    tooltip={tabName}>
    <IconContainer quantity={quantity}>
      {children}
    </IconContainer>
    {active === tabName & bordered ? <div className='bottom-border'></div> : ''}
  </HoverButton>
);

export default withRouter(TabContainer)