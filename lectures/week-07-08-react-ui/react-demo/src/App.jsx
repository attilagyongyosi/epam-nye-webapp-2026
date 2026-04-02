import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation.jsx';
import { EmployeesPage } from './pages/employees/EmployeesPage.jsx';
import { HiringPage } from './pages/hiring/HiringPage.jsx';
import { ProfilePage } from './pages/profile/ProfilePage.jsx';
import { Home } from './pages/home/Home.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route
          path="/hire"
          element={
            <ProtectedRoute>
              <HiringPage />
            </ProtectedRoute>
          }
        />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
