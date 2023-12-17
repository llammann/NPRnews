type Props = {}
import { Outlet } from "react-router-dom"
import UserNavbar from "../../../layout/UserNavbar"
function UserRoot({}: Props) {
  return (
   <>
    <UserNavbar/>
    <Outlet/>
   </>
  )
}

export default UserRoot