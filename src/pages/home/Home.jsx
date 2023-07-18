import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

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
      </div>

    </div>
    
    
  )
}

export default Home