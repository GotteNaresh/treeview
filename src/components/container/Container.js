import NavComponent from "../header/NavComponent";
import ContainerFuid from "../container/ContainerFluid"
import FooterComponent from "../footer/FooterComponent";
const Container = () => {
    return(
        <>
        <div className="container">
        <NavComponent></NavComponent>
        <ContainerFuid></ContainerFuid>
        <FooterComponent></FooterComponent>
        </div>
        </>
    )
}
export default Container;