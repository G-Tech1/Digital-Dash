import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import Nav from "./Nav";
import LogInForm from './Login';
import DataList from './DataList';
import SignUpForm from './SignUp';
import ProductList from './Products';
function App() {
  return (
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="accounts/login" element={<LogInForm />} />
      <Route path="accounts/signup" element={<SignUpForm />} />
      <Route path="/" element={<MainPage />} />
      <Route path="products" element={<ProductList />} />
      <Route path="MyData" element={<DataList />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
