import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Section from "./Section";
import DashBoard from './Component/SideBar/SideBar';
import "./Util/i18n/index";
import { withTranslation } from "react-i18next"
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "./Util/CommonFunction"

function App() {
  return (
    <div>
      <Router>
        <Section/> 
      </Router>
    </div>
  );
}

export default App;
