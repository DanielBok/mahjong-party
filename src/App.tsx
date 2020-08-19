import { AppAction } from "@/domain/application";
import Home from "@/pages/Home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Room from "./Room";
// import NotFound from "./NotFound";
// import Tutorial from "./pages/Tutorial";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppAction.fetchAppUser.request());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/rooms" element={<Rooms />} />*/}
        {/*<Route path="/tutorial" element={<Tutorial />} />*/}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
};

// function Rooms() {
//   return (
//     <Routes>
//       <Route path=":roomId" element={<Room />} />
//     </Routes>
//   );
// }

export default App;
