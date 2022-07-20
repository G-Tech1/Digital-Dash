import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import Nav from "./Nav";
import LogInForm from './Login';
function App() {
  return (
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LogInForm />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
