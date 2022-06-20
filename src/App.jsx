import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import './styles/App.scss';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  );
}