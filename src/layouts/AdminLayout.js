import React from 'react'
import HeaderAdmin from '../modules/admin/components/HeaderAdmin'
import SideBarResponsive from '../modules/admin/components/SideBarResponsive'
import SlideBar from '../modules/admin/components/SlideBar'

export default function AdminLayout({children, ...rest}) {
    return (
        <div className="admin-bg">
            <HeaderAdmin />
            <SlideBar />
            {children}
            <SideBarResponsive />
        </div>
    )
}
