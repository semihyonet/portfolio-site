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
import SkillsScreen from "./screens/skillsScreen";
import JobsScreen from "./screens/jobsScreen";
import ProjectsScreen from "./screens/projectsScreen";
import VideosScreen from "./screens/videosScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider>
            <DesktopUi>
                <Routes>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/education" element={<EducationScreen/>}/>
                    <Route path="/technologies" element={<SkillsScreen/>}/>
                    <Route path="/projects" element={<ProjectsScreen/>}/>
                    <Route path="/content" element={<VideosScreen/>}/>
                    <Route path="/job" element={<JobsScreen/>}/>
                    <Route path="/app" element={<App/>}/>
                    <Route path="/*" element={<MainScreen/>}/>
                </Routes>
            </DesktopUi>
        </Provider>
    </BrowserRouter>,
    rootElement
);