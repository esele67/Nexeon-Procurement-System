import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
  useParams
} from 'react-router-dom';

import Login from './components/Login.jsx';
import SignUp from './components/Sign-up.jsx';
import Dashboard from './components/Dashboard.jsx';
import ClientDashboard from './client/Dashboard.jsx';
import NewRFQ from './client/NewRFQ.jsx';
import RFQDetails from './components/RFQ-details.jsx';
import VendorManagement from './components/Vendor-management.jsx';
import Reports from './components/Reports.jsx';
import MyRFQs from './client/MyRFQ.jsx';
import ClientQuotes from './client/ClientQuotes.jsx';
import ClientOrdersApprovals from './client/ClientOrdersApprovals.jsx';
import InvoicesPayments from './client/InvoicesPayments.jsx';
import AdminAddClients from './components/AdminAddClients.jsx';

const isAuthenticated = () => !!localStorage.getItem('authToken');

/* RequireAuth: Protects routes and redirects to /login if not authenticated */
const RequireAuth = ({ children }) => {
  // return isAuthenticated() ? (children ?? <Outlet />) : <Navigate to="/login" replace />;
  return children ?? <Outlet />;
};

/* Prevent authenticated users from visiting auth pages like /login or /signup */
const RedirectIfAuth = ({ children }) => {
  // return isAuthenticated() ? <Navigate to="/dashboard" replace /> : (children ?? <Outlet />);
  return <Navigate to="/dashboard" replace />;
};

/* A tiny wrapper to extract :id param and pass as prop to RFQDetails (keeps your existing RFQDetails prop API) */
const RFQDetailsWrapper = () => {
  const { id } = useParams();
  console.log(id);
  return <RFQDetails rfqId={id} />;
};

/* Exposes react-router navigate globally (keeps compatibility with previous window.navigate usage) */
const GlobalNavigateSetter = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.navigate = navigate;
    return () => {
      // cleanup if component unmounts
      if (window.navigate === navigate) window.navigate = undefined;
    };
  }, [navigate]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <GlobalNavigateSetter />
      <div className="app">
        <Routes>
          {/* Public / auth routes */}
          {/* <Route
            path="/login"
            element={
              <RedirectIfAuth>
                <Login />
              </RedirectIfAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectIfAuth>
                <SignUp />
              </RedirectIfAuth>
            }
          /> */}
          {/* Protected routes - wrap them with RequireAuth */}
          <Route
            element={<RequireAuth />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/clients" element={<AdminAddClients />} />

            {/* Client area */}
            <Route path="/client/dashboard" element={<ClientDashboard />} />
            <Route path="/client/rfq/my" element={<MyRFQs />} />
            <Route path="/client/quotes" element={<ClientQuotes />} />
            <Route path="/client/orders-approvals" element={<ClientOrdersApprovals />} />
            <Route path="/client/invoices-payments" element={<InvoicesPayments />} />

            {/* RFQ flows */}
            <Route path="/rfq/new" element={<NewRFQ />} />
            <Route path="/rfq/:id" element={<RFQDetailsWrapper />} />

            {/* Admin/other */}
            <Route path="/vendors" element={<VendorManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Route>

          {/* Root and fallback behaviour */}
          <Route
            path="/"
            // element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
            element={<Navigate to="/dashboard" replace />}
          />
          {/* Catch-all: if authenticated go dashboard, otherwise go login */}
          {/* <Route path="*" element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} /> */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
