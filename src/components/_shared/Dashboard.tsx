import { useState } from "react"
import Spinner from "../ui/Spinner"
import Header from "../dasbboard/Header"
import Sidebar from "../dasbboard/Sidebar"

const Dashboard = () => {
  const [loading,] = useState(false)
  return (
    <>
    {loading &&<Spinner/>}
    <Header/>
    <Sidebar/>
    </>
  )
}
export default Dashboard