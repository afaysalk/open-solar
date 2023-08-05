import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="best"/>
          <Widget type="rated"/>
          <Widget type="working"/>
        </div>
        <Chart/>
        <div className="listContainer">
        <div className="listTitle">All</div>
        <Table/>

      </div>
      </div>
      

    </div>
    
    
  )
}

export default Home