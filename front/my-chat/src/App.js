import logo from './logo.svg';
import './App.css';
import "../src/style/main.css"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import List from "./components/list/List";
import Chat from "./components/Сhat/Chat";
import Detail from "./components/detail/Detail";

function App() {



  return (
    <div className="container">
     <List/>
        <Chat/>
        <Detail/>
    </div>
  );
}

export default App;
