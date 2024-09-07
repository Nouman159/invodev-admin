import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidePanel from './Layout/SidePanel';
import TopBar from "./Layout/TopBar";
import PortalLayout from "./Layout/PortalLayout";
import Doctors from "./Screens/Doctors/Doctors";
import AddDoctors from "./Screens/Doctors/AddDoctors";



function App() {
  return (
    <div>
      <BrowserRouter>
        <PortalLayout>
          <Routes>

            <Route path="/doctors" element={<Doctors />} />

            <Route path="/doctors/add" element={<AddDoctors />} />
          </Routes>
        </PortalLayout>

      </BrowserRouter>
    </div>
  );
}

export default App;
