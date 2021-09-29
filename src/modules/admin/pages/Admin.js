import React from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom"
import AdminLayout from '../../../layouts/AdminLayout'
import Movie from './Movie'
import Dashboard from './Dashboard'
import User from './User'
export default function Admin() {
    const { path } = useRouteMatch()
    return (
        <AdminLayout>
            <Switch>
                <Route exact path="/admin/">
                    <Dashboard />
                </Route>

                <Route path="/admin/movie">
                    <Movie />
                </Route>

                <Route path="/admin/user">
                    <User />
                </Route>
            </Switch>
        </AdminLayout>

    )
}
