import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import Nav from "./Nav";
import LogInForm from './Login';
// import DataList from './DataList';
import SignUpForm from './SignUp';
import Graph from './Graph';
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="login" element={<LogInForm />} />
      <Route path="signup" element={<SignUpForm />} />
      </Routes>
      <Nav />
      <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="MyData" element={<DataList />} /> */}
      <Route path="graph/" element={<Graph />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
