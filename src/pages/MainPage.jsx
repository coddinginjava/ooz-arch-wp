import { NavBar } from "../components/navbar/NavBar"
import { About } from "./about/About"
import "./mainPage.scss"
import ServiceOffered from "./service-offered/ServiceOffered"
import { TeamMembers } from "./team-members/TeamMembers"

export const MainPage = () => {
    return (
        <div className="desk-top-page" >
            <NavBar />
            <div className="desk-main-page" >
                <About />
                <TeamMembers />
                <ServiceOffered />
                <div style={{ height: '100vh', backgroundColor: 'lightcyan' }}></div>
            </div>
        </div>
    )
}
