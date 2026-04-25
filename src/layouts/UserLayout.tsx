import { Outlet } from 'react-router'
import UserNavbar from '../pages/User/UserNavbar'
import UserFooter from '../pages/User/UserFooter'

export default function UserLayout() {
    return (
        <>
            <UserNavbar/>
            <Outlet />
            <UserFooter/>
        </>
    )
}