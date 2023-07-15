import "./sidebar.scss"
import WindowIcon from '@mui/icons-material/Window';    
import NotificationsIcon from '@mui/icons-material/Notifications';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo"><img src="./img/logo.png" alt="" />open-solar</span></div>
        <div className="center">
            <ul>
                <li>
                    <WindowIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
            </ul>
            <ul>
                <li>
                <NotificationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
            </ul>
            <ul>
                <li>
                <SolarPowerIcon className="icon"/>
                    <span>Panels</span>
                </li>
            </ul>
            <ul>
                <li>
                <BarChartIcon className="icon"/>
                    <span>Analytics</span>
                </li>
            </ul>

            <ul>
                <li>
                <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
            </ul>
            <ul>
                <li>
                <LogoutIcon className="icon"/>
                    <span>Log out</span>
                </li>
            </ul>
            </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar