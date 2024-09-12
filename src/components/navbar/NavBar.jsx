import "./navbar.scss"
import logo from "../../assets/logo.jpg"
import { Heading } from '@chakra-ui/react'

export const NavBar = () => {
    return (
        <div className="desk-nav-main" style={{ zIndex: 99 }}>

            <div className="desk-nav-main-right">
                <div>
                    <img height={50} width={50} src={logo} alt='import'></img>
                </div>
                <div>
                    <Heading as='h1' size='2xl' >
                        Company Name
                    </Heading>
                </div>
            </div>

            <div className="desk-nav-main-left">
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        About
                    </Heading>
                </nav>
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        Team
                    </Heading>
                </nav>
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        Services
                    </Heading>
                </nav>
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        Projects
                    </Heading>
                </nav>
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        Career
                    </Heading>
                </nav>
                <nav>
                    <Heading size='sm' noOfLines={1}>
                        Contact
                    </Heading>
                </nav>

            </div>

        </div>
    )
}
