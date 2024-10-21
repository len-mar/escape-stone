import './App.css'
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/LoginPage.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <p>
                Hello, puzzlers!
            </p>
            <LoginPage/>
            <Footer/>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}></Route>
            </Routes>
        </>
    )
}

export default App
