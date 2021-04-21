import { Homepage } from "../pages/homepage";
import { Photos } from "../pages/photos";
import { Publications } from "../pages/publications";
import { Contacts } from "../pages/contacts";

export const appRoutes = [
    {
        path: '/hw21-React-SPA-Navigation',
        component: Homepage
    },
    {
        path: '/publications',
        component: Publications
    },
    {
        path: '/photos',
        component: Photos
    },
    {
        path: '/contacts',
        component: Contacts
    }
]