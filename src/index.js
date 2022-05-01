import './index.css';
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import MainScreen from "./screens/mainScreen";
import DesktopUi from "./ui/desktopUi";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <DesktopUi>
            <Routes>
                <Route path="/*" element={<MainScreen/>}/>
            </Routes>
        </DesktopUi>
    </BrowserRouter>,
    rootElement
);