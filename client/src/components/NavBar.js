import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import { Button, Form } from 'react-bootstrap';
import { BOARD_ROUTE, LOGIN_ROUTE, CREATEANNOUNCEMENT_ROUTE, USERANNOUNCEMENT_ROUTE, ADMINPAGE_ROUTE } from '../utils/consts';
import { useNavigate, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FiLogOut } from 'react-icons/fi';

const NavBar = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    const role = decoded.role
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={BOARD_ROUTE} style={{ color: 'white', textDecoration: 'none', fontSize: '22pt' }}>Sellora</NavLink>
                {user.isAuth ? (
                    role === 'ADMIN' ? (
                        <Nav className="ms-auto">
                            <Button variant="outline-light" color="black" className="ms-3" onClick={() => navigate(ADMINPAGE_ROUTE)}>
                                Панель администратора
                            </Button>
                            <Button variant="success" className="ms-3 font-weight-bold" onClick={() => navigate(CREATEANNOUNCEMENT_ROUTE)}>
                                Подать объявление
                            </Button>
                            <Button variant="outline-light" color="black" className="ms-3" onClick={() => navigate(USERANNOUNCEMENT_ROUTE)}>
                                Мои объявления
                            </Button>

                        </Nav>
                    ) : (
                        <Nav className="ms-auto">
                            <Button variant="outline-light" color="black" className="ms-3" onClick={() => navigate(USERANNOUNCEMENT_ROUTE)}>
                                Мои объявления
                            </Button>
                            <Button variant="success" className="ms-3 font-weight-bold" onClick={() => navigate(CREATEANNOUNCEMENT_ROUTE)}>
                                Подать объявление
                            </Button>
                            <Button variant="outline-light" className="ms-3">
                                <FiLogOut />
                            </Button>
                        </Nav>
                    )
                ) : (
                    <Nav className="ms-auto">
                        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
};


export default NavBar;