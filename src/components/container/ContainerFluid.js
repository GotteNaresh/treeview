import {
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Reports from "../pages/Reports";
import SideNavComponent from "../sidenav/SideNavComponent";
const ContainerFluid = () => {
    return(
        <>
        <div className="container-fluid text-center">    
            <div className="row content">
                <div className="col-sm-2 sidenav">
                <SideNavComponent />
                </div>
                <div className="col-sm-10 text-left"> 
                <Routes>
                <Route path="/Home" element={<Home />}>
                </Route>
                <Route path="/Products" element={<Products />}>
                </Route>
                <Route path="/Reports" element={<Reports />}>
                </Route>
                <Route path="/" element={<Home />}>
                </Route>
                </Routes>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContainerFluid;