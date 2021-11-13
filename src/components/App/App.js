import { Route, Routes } from "react-router";
import  Register  from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main"
import Profile from "../Profile/Profile"

function App() {
    return (
        <div className = "app">
            <Routes>
                <Route path = "/signup" element = {<Register />} /> {/*десктоп*/}
                <Route path = "/signin" element = {<Login />} />  {/*десктоп*/}
                <Route path = "/profile" element = {<Profile />} />   {/*десктоп*/}
                <Route path = "/1" element = {<Main />} />
            </Routes>
        </div>
    );
}

export default App;