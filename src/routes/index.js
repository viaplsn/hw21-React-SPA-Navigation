import { Homepage } from "../pages/homepage";
import { Photos } from "../pages/photos";
import { Publications } from "../pages/publications";
import { Contacts } from "../pages/contacts";
import { singleContact } from "../pages/single-contact";

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
    },
    {
        path: '/Стинсовський',
        component: singleContact
    },
    {
        path: '/Щербатська',
        component: singleContact
    },
    {
        path: '/Анонімус',
        component: singleContact
    },
    {
        path: '/Олдровна',
        component: singleContact
    },
    {
        path: '/Еріксонян',
        component: singleContact
    },
    {
        path: '/Мотсбес',
        component: singleContact
    }
]