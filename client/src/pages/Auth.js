import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, BOARD_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, name ,password)
            } else {
                data = await registration(email, name, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            console.log(user.isAuth)
            navigate(BOARD_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            {isLogin ?
                <Card style={{ width: 600 }} className="p-5">
                    <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="d-flex flex-row justify-content-between mt-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink style={{ textDecoration: "none" }} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink style={{ textDecoration: "none" }} to={LOGIN_ROUTE}>Войти!</NavLink>
                                </div>
                            }
                            <Button
                                variant={"outline-dark"}
                                onClick={click}
                            >
                                {isLogin ? "Войти" : "Зарегистрироваться"}
                            </Button>
                        </div>
                    </Form>
                </Card>
                :
                <Card style={{ width: 600 }} className="p-5">
                    <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваше имя"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="d-flex flex-row justify-content-between mt-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink style={{ textDecoration: "none" }} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink style={{ textDecoration: "none" }} to={LOGIN_ROUTE}>Войти!</NavLink>
                                </div>
                            }
                            <Button
                                variant={"outline-dark"}
                                onClick={click}
                            >
                                {isLogin ? "Войти" : "Зарегистрироваться"}
                            </Button>
                        </div>
                    </Form>
                </Card>
            }
        </Container>
    )
})

export default Auth;