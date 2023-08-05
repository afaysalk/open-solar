import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
  return (
    <div className="list" >
      <Sidebar/>
      <div className="listContainer"></div>
      <Navbar/>
      datatable
    </div>
  )
}

export default List