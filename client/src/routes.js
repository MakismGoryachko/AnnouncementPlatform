import Auth from "./pages/Auth"
import Board from "./pages/Board"
import Announcement from "./pages/AnnouncementPage"
import editAnnouncement from "./pages/editAnnouncement"
import createAnnouncement from "./pages/createAnnouncementPage"
import UserAnnouncement from "./pages/UserAnnouncement"
import UserAnnouncementPage from "./pages/UserAnnouncementPage"
import {
    BOARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ANNOUNCEMENT_ROUTE, CREATEANNOUNCEMENT_ROUTE, USERANNOUNCEMENT_ROUTE, USERANNOUNCEMENTPAGE_ROUTE, EDITANNOUNCEMENT_ROUTE,
    ADMINPAGE_ROUTE, MODERATIONANNOUNCEMENTPAGE_ROUTE, FAVOURITEANNOUNCEMENTPAGE_ROUTE, USERALLANNOUNCEMENT_ROUTE
} from "./utils/consts"
import AdminPage from "./pages/AdminPage"
import ModerationAnnouncementPage from "./pages/ModerationAnnouncementPage"
import FavouriteAnnouncementPage from "./pages/FavouriteAnnouncementPage"
import UserAllAnnouncement from "./pages/UserAllAnnouncement"

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
        path: EDITANNOUNCEMENT_ROUTE + '/:id',
        Component: editAnnouncement
    },


    {
        path: USERANNOUNCEMENTPAGE_ROUTE + '/:id',
        Component: UserAnnouncementPage
    },

    {
        path: MODERATIONANNOUNCEMENTPAGE_ROUTE + '/:id',
        Component: ModerationAnnouncementPage
    },

    {
        path: FAVOURITEANNOUNCEMENTPAGE_ROUTE + '/:id',
        Component: FavouriteAnnouncementPage
    },

    {
        path: ADMINPAGE_ROUTE,
        Component: AdminPage
    },

    {
        path: USERALLANNOUNCEMENT_ROUTE + '/:userId',
        Component: UserAllAnnouncement
    },

    {
        path: USERANNOUNCEMENT_ROUTE,
        Component: UserAnnouncement
    }
]