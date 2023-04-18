import Login from "../src/components/Login.vue"
import Register from "../src/components/Register.vue"
import Card from "../src/components/Card.vue"
import Home from "../src/components/Home.vue"


export const routes=[
    {path:"/", component:Home},
    {path:"/home", component:Home},
    {path: "/card", component:Card},
    {path: "/register", component:Register},
    {path: "/login", component:Login}


]