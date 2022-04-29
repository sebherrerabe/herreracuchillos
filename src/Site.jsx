import { Routes, Route } from 'react-router';
import MainPage from './MainPage.jsx';

function Site() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default Site;
