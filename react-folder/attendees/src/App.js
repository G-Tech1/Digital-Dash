import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import Nav from "./Nav";
function App() {
  return (
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
