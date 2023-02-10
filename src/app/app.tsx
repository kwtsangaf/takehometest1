// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import AirportsPage from "./airports-page/airports-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/layout";
import StadiumsPage from "./stadiums-page/stadiums-page";
import SuaPage from "./sua-page/sua-page";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="airports" element={<AirportsPage />} />
                    <Route path="stadiums" element={<StadiumsPage />} />
                    <Route path="sua" element={<SuaPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
  // return (
  //   <>
  //       <AirportsPage></AirportsPage>
  //     <NxWelcome title="takehometest1" />
  //     <div />
  //   </>
  // );
}

export default App;
