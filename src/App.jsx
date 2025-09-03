import React from 'react';
import Login from './components/Login.jsx';
import SignUp from './components/Sign-up.jsx';
import Dashboard from './components/Dashboard.jsx';
import NewRFQ from './components/NewRFQ.jsx';
import RFQDetails from './components/RFQ-details.jsx';
import VendorManagement from './components/Vendor-Management.jsx';
import Reports from './components/Reports.jsx'; // ✅ Added Reports import

const App = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  // Simple router function
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Listen for browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Make navigate function globally available
  React.useEffect(() => {
    window.navigate = navigate;
  }, []);

  // Check if user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem('authToken');
  };

  // Route protection
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Login />;
    }
    return children;
  };

  // Route rendering function
  const renderRoute = () => {
    const path = currentPath;

    // Public routes
    if (path === '/' || path === '/login') {
      return <Login />;
    }

    if (path === '/signup') {
      return <SignUp />;
    }

    // Protected routes
    if (path === '/dashboard') {
      return (
        <ProtectedRoute>
          <Dashboard />
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

    // ✅ Vendor Management route
    if (path === '/vendors') {
      return (
        <ProtectedRoute>
          <VendorManagement />
        </ProtectedRoute>
      );
    }

    // ✅ New Reports route
    if (path === '/reports') {
      return (
        <ProtectedRoute>
          <Reports />
        </ProtectedRoute>
      );
    }

    // Default route
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