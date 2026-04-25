import { Outlet } from 'react-router'
import UserNavbar from '../components/User/UserNavbar'
import UserFooter from '../components/User/UserFooter'

export default function UserLayout() {
    return (
        <>
            <UserNavbar/>
            <Outlet />
            <UserFooter/>
        </>
    )
}