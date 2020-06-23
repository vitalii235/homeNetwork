import React from 'react'
const { Auth } = require("./auth/Auth");
const { default: TestPage } = require("./chatPage/TestPage");
import { useRoutes } from "hookrouter";


export const routeFunc =()=>{
    const routers = {
        './user':()=><Auth/>,
        './main':()=><TestPage/>
    }
    const routeResult = useRoutes(routers)
    return routeResult
}
