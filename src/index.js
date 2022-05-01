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
import {Provider} from "./context/Context";
import AboutScreen from "./screens/aboutScreen";
import EducationScreen from "./screens/educationScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider>
            <DesktopUi>
                <Routes>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/education" element={<EducationScreen/>}/>
                    <Route path="/*" element={<MainScreen/>}/>
                </Routes>
            </DesktopUi>
        </Provider>
    </BrowserRouter>,
    rootElement
);