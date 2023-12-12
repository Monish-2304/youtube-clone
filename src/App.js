import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <Provider store={store}>
    <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="/watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
