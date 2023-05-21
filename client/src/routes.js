import Auth from "./pages/Auth"
import Board from "./pages/Board"
import Announcement from "./pages/AnnouncementPage"
import createAnnouncement from "./pages/createAnnouncementPage"
import UserAnnouncement from "./pages/UserAnnouncement"
import { BOARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ANNOUNCEMENT_ROUTE, CREATEANNOUNCEMENT_ROUTE, USERANNOUNCEMENT_ROUTE } from "./utils/consts"

export const authRoutes = [

]


export const publicRoutes = [
    {
        path: BOARD_ROUTE,
        Component: Board
    },

    {
        path: CREATEANNOUNCEMENT_ROUTE,
        Component: createAnnouncement
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: ANNOUNCEMENT_ROUTE + '/:id',
        Component: Announcement
    },

    {
        path: USERANNOUNCEMENT_ROUTE,
        Component: UserAnnouncement
    }
]