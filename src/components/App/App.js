import { Route, Routes } from "react-router";
import  Register  from "../Register/Register";
import Login from "../Login/Login"

function App() {
    return (
        <div className = "app">
            <Routes>
                <Route path = "/signup" element = {<Register />} />
                <Route path = "/signin" element = {<Login />} />
            </Routes>
        </div>
    );
}

export default App;