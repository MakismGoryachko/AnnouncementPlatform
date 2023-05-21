import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import { Button } from 'react-bootstrap';
import { BOARD_ROUTE, LOGIN_ROUTE, CREATEANNOUNCEMENT_ROUTE, USERANNOUNCEMENT_ROUTE } from '../utils/consts';
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={BOARD_ROUTE} style={{ color: 'white', textDecoration: 'none', fontSize: '22pt' }}>AnnouncementPlatform</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        <Button variant={"outline-light"} className='ms-3' onClick={() => navigate(USERANNOUNCEMENT_ROUTE)}>Мои объявления</Button>
                        <Button variant={"outline-light"} className='ms-3' onClick={() => navigate(CREATEANNOUNCEMENT_ROUTE)}>Создать объявление</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
};


export default NavBar;