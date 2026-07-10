import { Outlet } from 'react-router'
import UserNavbar from '../components/User/UserNavbar'
import UserFooter from '../components/User/UserFooter'

export default function UserLayout() {
    return (
        <>
            <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
                <UserNavbar />
                <Outlet />
                <UserFooter />
            </div>
        </>
    )
}