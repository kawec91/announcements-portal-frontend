import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Landing from "./components/Page/Landing";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Raports from "./components/Page/Reports";
import Admin from "./components/Page/Admin";
import AdminLanding from "./components/Page/admin/AdminLanding";
import AdminUsers from "./components/Page/admin/AdminUsers";
import AdminAnnouncements from "./components/Page/admin/AdminAnnouncements";
import AdminAplications from "./components/Page/admin/AdminAplications";
import AdminInProgressAplications from "./components/Page/admin/AdminInProgressAplications";
import AdminAcceptedAplications from "./components/Page/admin/AdminAcceptedAplications";
import AdminRejectedAplications from "./components/Page/admin/AdminRejectedAplications";
import AdminReports from "./components/Page/admin/AdminReports";
import AdminContentWrapper from "./components/Page/admin/AdminContentWrapper";
import AdminFiles from "./components/Page/admin/AdminFiles";
import AnnouncementsDetails from "./components/Page/AnnouncementsDetails";
import { AuthProvider } from "./components/Auth/AuthProvider";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Footer />}>
              <Route path="/" element={<Main />}>
                <Route path="/" element={<Landing />} />
                <Route
                  path="/ogloszenia/:id"
                  element={<AnnouncementsDetails />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                  path="/reports"
                  element={
                    <ProtectedRoute>
                      <Raports />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }
                >
                  <Route path="/admin" element={<AdminLanding />} />
                  <Route path="/admin" element={<AdminContentWrapper />}>
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route
                      path="/admin/announcements"
                      element={<AdminAnnouncements />}
                    />
                    <Route
                      path="/admin/aplications"
                      element={<AdminAplications />}
                    />
                    <Route
                      path="/admin/aplications/inprogress"
                      element={<AdminInProgressAplications />}
                    />
                    <Route
                      path="/admin/aplications/accepted"
                      element={<AdminAcceptedAplications />}
                    />
                    <Route
                      path="/admin/aplications/rejected"
                      element={<AdminRejectedAplications />}
                    />
                    <Route path="/admin/reports" element={<AdminReports />} />
                    <Route path="/admin/files" element={<AdminFiles />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
