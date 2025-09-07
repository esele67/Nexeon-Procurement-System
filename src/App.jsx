import React from 'react';
import Login from './components/Login.jsx';
import SignUp from './components/Sign-up.jsx';
import Dashboard from './components/Dashboard.jsx';
import ClientDashboard from './client/Dashboard.jsx';
import NewRFQ from './client/NewRFQ.jsx';
import RFQDetails from './components/RFQ-details.jsx';
import VendorManagement from './components/Vendor-Management.jsx';
import Reports from './components/Reports.jsx';
import MyRFQs from './client/MyRFQ.jsx';
import ClientQuotes from './client/ClientQuotes.jsx';
import ClientOrdersApprovals from './client/ClientOrdersApprovals.jsx';
import InvoicesPayments from './client/InvoicesPayments.jsx';
import AdminAddClients from './components/AdminAddClients.jsx'; // ✅ Import new page

const App = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    window.navigate = navigate;
  }, []);

  const isAuthenticated = () => {
    return localStorage.getItem('authToken');
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Login />;
    }
    return children;
  };

  const renderRoute = () => {
    const path = currentPath;

    // Public routes
    // if (path === '/' || path === '/login') return <Login />;
    // if (path === '/signup') return <SignUp />;

    // Admin routes
    if (path === '/dashboard') {
      return (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      );
    }

    if (path === '/admin/clients') { // ✅ New Admin Clients route
      return (
        <ProtectedRoute>
          <AdminAddClients />
        </ProtectedRoute>
      );
    }

    // Client routes
    if (path === '/client/dashboard') {
      return (
        <ProtectedRoute>
          <ClientDashboard />
        </ProtectedRoute>
      );
    }

    if (path === '/client/rfq/my') {
      return (
        <ProtectedRoute>
          <MyRFQs />
        </ProtectedRoute>
      );
    }

    if (path === '/client/quotes') {
      return (
        <ProtectedRoute>
          <ClientQuotes />
        </ProtectedRoute>
      );
    }

    if (path === '/client/orders-approvals') {
      return (
        <ProtectedRoute>
          <ClientOrdersApprovals />
        </ProtectedRoute>
      );
    }

    if (path === '/client/invoices-payments') {
      return (
        <ProtectedRoute>
          <InvoicesPayments />
        </ProtectedRoute>
      );
    }

    if (path === '/rfq/new') {
      return (
        <ProtectedRoute>
          <NewRFQ />
        </ProtectedRoute>
      );
    }

    if (path.startsWith('/rfq/') && path !== '/rfq/new') {
      const rfqId = path.split('/')[2];
      return (
        <ProtectedRoute>
          <RFQDetails rfqId={rfqId} />
        </ProtectedRoute>
      );
    }

    if (path === '/vendors') {
      return (
        <ProtectedRoute>
          <VendorManagement />
        </ProtectedRoute>
      );
    }

    if (path === '/reports') {
      return (
        <ProtectedRoute>
          <Reports />
        </ProtectedRoute>
      );
    }

    // Default fallback
    if (isAuthenticated()) {
      return (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      );
    } else {
      return <Login />;
    }
  };

  return <div className="app">{renderRoute()}</div>;
};

export default App;
