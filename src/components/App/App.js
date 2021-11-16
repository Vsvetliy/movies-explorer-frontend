import { Route, Routes } from "react-router";
import  Register  from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main"
import Profile from "../Profile/Profile"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import NotFound from "../NotFound/NotFound"

function App() {
    return (
        <div className = "app">
            <Routes>
                <Route path = "/signup" element = {<Register />} /> {/*десктоп*/}
                <Route path = "/signin" element = {<Login />} />  {/*десктоп*/}
                <Route path = "/profile" element = {<Profile />} />   {/*десктоп*/}
                <Route path = "/" element = {<Main />} />
                <Route path = "/movies" element = {<Movies />} />
                <Route path = "/saved-movies" element = {<SavedMovies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;