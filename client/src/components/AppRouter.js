import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { BOARD_ROUTE } from "../utils/consts";



const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Navigate to={BOARD_ROUTE} />} />
        </Routes>
    );
};


export default AppRouter;