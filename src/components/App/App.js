import { Route, Routes } from "react-router";
import  Register  from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main"
import Profile from "../Profile/Profile"

function App() {
    return (
        <div className = "app">
            <Routes>
                <Route path = "/signup" element = {<Register />} />
                <Route path = "/signin" element = {<Login />} />
                <Route path = "/profile" element = {<Profile />} />
                <Route path = "/1" element = {<Main />} />
            </Routes>
        </div>
    );
}

export default App;