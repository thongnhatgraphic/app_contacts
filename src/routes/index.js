import RegisterComponent from "../container/Register"
import LogInComponent from "../container/LogIn"
import ContactsComponent from "../container/Contacts"
import CreateContactComponent from "../container/CreateContacts"

export const routes = [
    {
        path: "/auth/register",
        component: RegisterComponent,
        title: "Register",
        exact: false
    },
    {
        path: "/auth/login",
        component: LogInComponent,
        title: "LogIn",
        exact: false
    },
    {
        path: "/",
        component: ContactsComponent,
        title: "Contacts",
        exact: true
    },
    {
        path: "/contacts/create",
        component: CreateContactComponent,
        title: "Create Contacts",
        exact: false
    },

]