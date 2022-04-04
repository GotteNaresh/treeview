import { MenusData } from './MenusData';
import {
    Link
  } from "react-router-dom";
const SubMenusList = (props) => {
    const { Name } = props.menu;
    return(
        <ul className="nested">
            {MenusData.map((value, index) => {
            const redirectPath = Name +"-"+ value.Name;
            return(
            <li key={index}><span className="caret"><Link to={redirectPath}>{value.Name}</Link></span>
            
            </li>
            );
            })}
            
        </ul>
    )
}
const SideNavComponent = () => {
    return(
        <>
            <ul id="myUL">
                {MenusData.map((value, index) => {
                return(
                <li key={index}><span className="caret"><Link to={value.Name}>{value.Name}</Link></span>
                <SubMenusList menu={value}></SubMenusList>
                </li>
                );
                })}
                
            </ul>
        </>
    )
}
export default SideNavComponent;

