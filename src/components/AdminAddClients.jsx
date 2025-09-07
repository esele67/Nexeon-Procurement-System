import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components (using your existing icons plus new ones)
const AlertCircle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <circle cx="12" cy="16" r="0.01"/>
  </svg>
);

const CheckCircle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const User = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const Bell = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const Search = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const Plus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 5v14"/>
    <path d="M5 12h14"/>
  </svg>
);

const Filter = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
  </svg>
);

const Eye = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Home = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const FileText = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const Menu = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const X = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Users = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Edit = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Trash = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3,6 5,6 21,6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const Upload = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const RefreshCw = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23,4 23,10 17,10"/>
    <polyline points="1,20 1,14 7,14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>
);

const ChevronLeft = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="15,18 9,12 15,6"/>
  </svg>
);

const ChevronRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const ChevronUp = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="18,15 12,9 6,15"/>
  </svg>
);

const ChevronDown = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

const MoreVertical = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="19" r="1"/>
  </svg>
);

const LogOut = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16,17 21,12 16,7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Settings = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const Save = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17,21 17,13 7,13 7,21"/>
    <polyline points="7,3 7,8 15,8"/>
  </svg>
);

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Mail = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Phone = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Building = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18H6z"/>
    <path d="M6 12h12"/>
    <path d="M18 9h.01"/>
    <path d="M18 6h.01"/>
    <path d="M18 15h.01"/>
    <path d="M12 9h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 15h.01"/>
    <path d="M6 9h.01"/>
    <path d="M6 6h.01"/>
    <path d="M6 15h.01"/>
  </svg>
);

// Animated Avatar Component
const AnimatedAvatar = ({ name, role }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const colors = role === 'admin' 
    ? ['from-blue-500', 'to-purple-600'] 
    : ['from-green-500', 'to-blue-600'];

  return (
    <div className="relative">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${colors[0]} ${colors[1]} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-500 transform ${
        isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
      }`}>
        {getInitials(name)}
      </div>
      
      <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-60'
      }`}></div>
      
      <div className={`absolute inset-0 rounded-full bg-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
      }`}></div>
    </div>
  );
};

// Toast notification component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const icon = type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />;

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg z-50 flex items-center gap-2 sm:gap-3 max-w-xs sm:max-w-sm`}>
      {icon}
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 hover:opacity-70">
        <X size={16} />
      </button>
    </div>
  );
};

// Client View Modal Component
const ClientViewModal = ({ client, isOpen, onClose }) => {
  if (!isOpen || !client) return null;

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? 'text-green-400 bg-green-500/10 border-green-500/20'
      : 'text-gray-400 bg-gray-500/10 border-gray-500/20';
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <Eye className="text-blue-400" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Client Details</h2>
              <p className="text-gray-400 text-sm">Complete information about this client</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Building size={18} className="text-blue-400" />
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Company Name</span>
                </div>
                <p className="text-white font-medium">{client.companyName}</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Contact Person</span>
                </div>
                <p className="text-white font-medium">{client.contactPerson}</p>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Email Address</span>
                </div>
                <p className="text-white font-medium break-all">{client.email}</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Phone Number</span>
                </div>
                <p className="text-white font-medium">{client.phone || 'Not provided'}</p>
              </div>
            </div>
          </div>

          {/* Business Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Settings size={18} className="text-blue-400" />
              Business Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Building size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Industry</span>
                </div>
                <p className="text-white font-medium">{client.industry || 'Not specified'}</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Status</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(client.status)}`}>
                  {client.status}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <Calendar size={18} className="text-blue-400" />
              Additional Information
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Date Added</span>
                </div>
                <p className="text-white font-medium">{new Date(client.dateAdded).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              {client.notes && (
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-sm">Notes</span>
                  </div>
                  <p className="text-white">{client.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-700/50">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Client Edit Modal Component
const ClientEditModal = ({ client, isOpen, onClose, onSave }) => {
  const [editFormData, setEditFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    status: 'active',
    notes: ''
  });

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Construction',
    'Marketing',
    'Data Analytics',
    'Startup',
    'Other'
  ];

  useEffect(() => {
    if (client && isOpen) {
      setEditFormData({
        companyName: client.companyName || '',
        contactPerson: client.contactPerson || '',
        email: client.email || '',
        phone: client.phone || '',
        industry: client.industry || '',
        status: client.status || 'active',
        notes: client.notes || ''
      });
    }
  }, [client, isOpen]);

  if (!isOpen || !client) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editFormData.companyName || !editFormData.contactPerson || !editFormData.email) {
      return;
    }
    onSave(client.id, editFormData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
              <Edit className="text-yellow-400" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Edit Client</h2>
              <p className="text-gray-400 text-sm">Update client information</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company/Client Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={editFormData.companyName}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter company name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Person <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                value={editFormData.contactPerson}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter contact person name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter email address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={editFormData.phone}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Industry/Category
              </label>
              <select
                name="industry"
                value={editFormData.industry}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status
              </label>
              <select
                name="status"
                value={editFormData.status}
                onChange={handleInputChange}
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              value={editFormData.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              placeholder="Additional notes about the client"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-700/50">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all"
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Mobile Client Card Component
const ClientCard = ({ client, index, onView, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? 'text-green-400 bg-green-500/10 border-green-500/20'
      : 'text-gray-400 bg-gray-500/10 border-gray-500/20';
  };

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate">{client.companyName}</h3>
          <p className="text-gray-400 text-sm">{client.contactPerson}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(client.status)}`}>
            {client.status}
          </span>
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 transition-all"
            >
              <MoreVertical size={14} />
            </button>
            {showActions && (
              <div className="absolute right-0 top-8 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-lg py-2 z-20">
                <button
                  onClick={() => {
                    onView(client.id);
                    setShowActions(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-blue-400 hover:bg-gray-700/50 transition-all text-sm"
                >
                  <Eye size={14} />
                  View
                </button>
                <button
                  onClick={() => {
                    onEdit(client.id);
                    setShowActions(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-yellow-400 hover:bg-gray-700/50 transition-all text-sm"
                >
                  <Edit size={14} />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(client.id);
                    setShowActions(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-gray-700/50 transition-all text-sm"
                >
                  <Trash size={14} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-2 text-sm">
        <div>
          <span className="text-gray-500">Email:</span>
          <span className="text-gray-300 ml-2 break-all">{client.email}</span>
        </div>
        {client.phone && (
          <div>
            <span className="text-gray-500">Phone:</span>
            <span className="text-gray-300 ml-2">{client.phone}</span>
          </div>
        )}
        {client.industry && (
          <div>
            <span className="text-gray-500">Industry:</span>
            <span className="text-gray-300 ml-2">{client.industry}</span>
          </div>
        )}
        <div>
          <span className="text-gray-500">Added:</span>
          <span className="text-gray-300 ml-2">{new Date(client.dateAdded).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

const AdminAddClients = () => {
  const [user, setUser] = useState({ name: 'Yehor', role: 'admin' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    status: 'active',
    notes: '',
    logo: null
  });

  // Table state
  const [clients, setClients] = useState([
    {
      id: 1,
      companyName: 'TechCorp Inc.',
      contactPerson: 'John Smith',
      email: 'john@techcorp.com',
      phone: '+1 (555) 123-4567',
      industry: 'Technology',
      status: 'active',
      dateAdded: '2025-08-15',
      notes: 'Large enterprise client'
    },
    {
      id: 2,
      companyName: 'StartupXYZ',
      contactPerson: 'Sarah Johnson',
      email: 'sarah@startupxyz.com',
      phone: '+1 (555) 987-6543',
      industry: 'Startup',
      status: 'active',
      dateAdded: '2025-08-20',
      notes: 'Growing startup, potential for expansion'
    },
    {
      id: 3,
      companyName: 'Creative Agency',
      contactPerson: 'Mike Wilson',
      email: 'mike@creativeagency.com',
      phone: '+1 (555) 456-7890',
      industry: 'Marketing',
      status: 'inactive',
      dateAdded: '2025-07-30',
      notes: 'On hold due to budget constraints'
    },
    {
      id: 4,
      companyName: 'DataFlow Ltd',
      contactPerson: 'Emily Chen',
      email: 'emily@dataflow.com',
      phone: '+1 (555) 234-5678',
      industry: 'Data Analytics',
      status: 'active',
      dateAdded: '2025-08-25',
      notes: 'Key client for data services'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState('dateAdded');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Construction',
    'Marketing',
    'Data Analytics',
    'Startup',
    'Other'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      logo: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.contactPerson || !formData.email) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const newClient = {
      id: clients.length + 1,
      ...formData,
      dateAdded: new Date().toISOString().split('T')[0]
    };

    setClients(prev => [newClient, ...prev]);
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      industry: '',
      status: 'active',
      notes: '',
      logo: null
    });
    
    const fileInput = document.getElementById('logo-upload');
    if (fileInput) fileInput.value = '';

    showToast('Client added successfully!');
  };

  const handleEdit = (clientId) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setSelectedClient(client);
      setEditModalOpen(true);
    }
  };

  const handleEditSave = (clientId, updatedData) => {
    setClients(prev => prev.map(client => 
      client.id === clientId 
        ? { ...client, ...updatedData }
        : client
    ));
    setEditModalOpen(false);
    setSelectedClient(null);
    showToast('Client updated successfully!');
  };

  const handleDelete = (clientId) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(prev => prev.filter(client => client.id !== clientId));
      showToast('Client deleted successfully!');
    }
  };

  const handleView = (clientId) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setSelectedClient(client);
      setViewModalOpen(true);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleExport = () => {
    showToast('Export functionality would download CSV/Excel here');
  };

  const handleRefresh = () => {
    showToast('Data refreshed!');
  };

  // Filter and sort clients
  const filteredClients = clients
    .filter(client => {
      const matchesSearch = 
        client.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm) ||
        client.industry.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      if (sortField === 'dateAdded') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClients = filteredClients.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? 'text-green-400 bg-green-500/10 border-green-500/20'
      : 'text-gray-400 bg-gray-500/10 border-gray-500/20';
  };

  // Auto-detect view mode based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('cards');
      } else {
        setViewMode('table');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Background (make non-interactive so it doesn't affect layout/interaction) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Toast notifications */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Modals */}
      <ClientViewModal 
        client={selectedClient}
        isOpen={viewModalOpen}
        onClose={() => {
          setViewModalOpen(false);
          setSelectedClient(null);
        }}
      />

      <ClientEditModal 
        client={selectedClient}
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedClient(null);
        }}
        onSave={handleEditSave}
      />

      <div className="flex min-h-screen relative z-10">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
        <div className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 bg-gray-900/60 backdrop-blur-xl border-r border-gray-800/50 fixed h-full overflow-y-auto z-50 lg:z-auto transition-transform duration-300`}>
          <div className="p-4 lg:p-6">
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/nexeon.jpg" 
                  alt="Nexeon Logo" 
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h2 className="text-white text-xl font-bold">NEXEON</h2>
                </div>
              </div>
              <p className="text-gray-400 text-xs lg:text-sm font-medium">PROCUREMENT</p>
              
              <div className="mt-2">
                <span className="px-2 lg:px-3 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Admin Panel
                </span>
              </div>
              
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <nav className="space-y-1">
              {/* Dashboard - Always active on dashboard page */}
              <div
                onClick={() => window.navigate('/dashboard')}
                className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
              >
                <Home size={18} />
                <span className="text-sm font-semibold">Dashboard</span>
              </div>

              {user.role === 'admin' ? (
                <>
                  <div
                    onClick={() => window.navigate('/admin/clients')}
                    className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20"
                  >
                    <Users size={18} />
                    <span className="text-sm">Clients</span>
                  </div>

                  {/* Vendors menu */}
                  <div
                    onClick={() => window.navigate('/vendors')}
                    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
                  >
                    <Users size={18} />
                    <span className="text-sm">Vendors</span>
                  </div>

                  {/* Reports menu */}
                  <div
                    onClick={() => window.navigate('/reports')}
                    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
                  >
                    <FileText size={18} />
                    <span className="text-sm">Reports</span>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-800/50">
                    <div
                      onClick={() => window.navigate('/admin/settings')}
                      className={`flex items-center gap-3 px-3 py-3 ${
                        window.location.pathname === '/admin/settings'
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                      } rounded-lg transition-all cursor-pointer`}
                    >
                      <Settings size={18} />
                      <span className="text-sm">Settings</span>
                    </div>
                    
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-3 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer w-full"
                    >
                      <LogOut size={18} />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer">
                    <Search size={18} />
                    <span className="text-sm">My RFQs</span>
                  </div>

                  <div
                    onClick={() => window.navigate('/reports')}
                    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
                  >
                    <FileText size={18} />
                    <span className="text-sm">Reports</span>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full min-w-0 lg:pl-64">
          <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-wrap items-center justify-between w-full gap-2">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden flex-shrink-0 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <Menu size={18} className="text-gray-300" />
                </button>
                <div className="min-w-0 flex-1">
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate">
                    Client Management
                  </h1>
                  <p className="text-gray-400 text-xs hidden md:block truncate">
                    Add and manage your clients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 ml-2 min-w-0"> 
                {/* bell - never shrink */}
                <button className="flex-shrink-0 p-1.5 sm:p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all" title="Notifications">
                  <Bell size={14} className="text-gray-300" />
                </button>

                {/* avatar + text container */}
                <div className="flex items-center gap-2 min-w-0">
                  {/* keep avatar fixed size and don't let it shrink */}
                  <div className="flex-shrink-0">
                    <AnimatedAvatar name={user.name} role={user.role} />
                  </div>

                  {/* user text: allow truncation and a reasonable max width */}
                  <div className="hidden sm:flex flex-col min-w-0">
                    <span className="text-white font-semibold text-xs sm:text-sm block truncate max-w-[8rem] sm:max-w-[12rem]">
                      {user.name}
                    </span>
                    <p className="text-gray-400 text-xs capitalize truncate max-w-[8rem] sm:max-w-[12rem]">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 lg:p-8 space-y-6 lg:space-y-8">
            {/* Add Client Form */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Plus className="text-blue-400" size={16} lg:size={20} />
                </div>
                <div>
                  <h2 className="text-lg lg:text-xl font-semibold text-white">Add New Client</h2>
                  <p className="text-gray-400 text-xs lg:text-sm">Fill in the details to add a new client</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Client Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Person <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Industry/Category
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-sm lg:text-base"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm lg:text-base"
                    placeholder="Additional notes about the client"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Logo (Optional)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      id="logo-upload"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 cursor-pointer transition-all text-sm"
                    >
                      <Upload size={14} />
                      Choose File
                    </label>
                    {formData.logo && (
                      <span className="text-gray-400 text-sm truncate max-w-xs">{formData.logo.name}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all shadow-lg text-sm lg:text-base"
                  >
                    <Plus size={16} lg:size={18} />
                    Add Client
                  </button>
                </div>
              </form>
            </div>

            {/* Clients List */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-4 sm:p-6">
              {/* Header with controls */}
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-400" size={16} lg:size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg lg:text-xl font-semibold text-white">Clients List</h2>
                    <p className="text-gray-400 text-xs lg:text-sm">{filteredClients.length} total clients</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="flex flex-col sm:flex-row gap-3 flex-1">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        placeholder="Search clients..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                      />
                    </div>

                    {/* Status Filter */}
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none text-sm min-w-0"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRefresh}
                      className="p-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 transition-all"
                      title="Refresh"
                    >
                      <RefreshCw size={16} />
                    </button>
                    <button
                      onClick={handleExport}
                      className="p-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 transition-all"
                      title="Export"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              {viewMode === 'table' ? (
                /* Desktop Table View */
                <div className="hidden md:block">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700/50">
                          <th className="text-left py-3 px-4 text-gray-300 font-medium text-sm">#</th>
                          <th 
                            className="text-left py-3 px-4 text-gray-300 font-medium text-sm cursor-pointer hover:text-white transition-colors"
                            onClick={() => handleSort('companyName')}
                          >
                            <div className="flex items-center gap-2">
                              Client Name
                              {sortField === 'companyName' && (
                                sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                              )}
                            </div>
                          </th>
                          <th 
                            className="text-left py-3 px-4 text-gray-300 font-medium text-sm cursor-pointer hover:text-white transition-colors"
                            onClick={() => handleSort('contactPerson')}
                          >
                            <div className="flex items-center gap-2">
                              Contact Person
                              {sortField === 'contactPerson' && (
                                sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                              )}
                            </div>
                          </th>
                          <th 
                            className="text-left py-3 px-4 text-gray-300 font-medium text-sm cursor-pointer hover:text-white transition-colors"
                            onClick={() => handleSort('email')}
                          >
                            <div className="flex items-center gap-2">
                              Email
                              {sortField === 'email' && (
                                sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-3 px-4 text-gray-300 font-medium text-sm">Phone</th>
                          <th className="text-left py-3 px-4 text-gray-300 font-medium text-sm hidden lg:table-cell">Industry</th>
                          <th className="text-left py-3 px-4 text-gray-300 font-medium text-sm">Status</th>
                          <th 
                            className="text-left py-3 px-4 text-gray-300 font-medium text-sm cursor-pointer hover:text-white transition-colors hidden xl:table-cell"
                            onClick={() => handleSort('dateAdded')}
                          >
                            <div className="flex items-center gap-2">
                              Date Added
                              {sortField === 'dateAdded' && (
                                sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                              )}
                            </div>
                          </th>
                          <th className="text-left py-3 px-4 text-gray-300 font-medium text-sm">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedClients.map((client, index) => (
                          <tr 
                            key={client.id} 
                            className={`border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors ${
                              index % 2 === 0 ? 'bg-gray-800/10' : ''
                            }`}
                          >
                            <td className="py-4 px-4 text-gray-400 text-sm">
                              {startIndex + index + 1}
                            </td>
                            <td className="py-4 px-4">
                              <div className="text-white font-medium">{client.companyName}</div>
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm">
                              {client.contactPerson}
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm">
                              <div className="max-w-xs truncate">{client.email}</div>
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm">
                              {client.phone}
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm hidden lg:table-cell">
                              {client.industry}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(client.status)}`}>
                                {client.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm hidden xl:table-cell">
                              {new Date(client.dateAdded).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleView(client.id)}
                                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-all"
                                  title="View Details"
                                >
                                  <Eye size={14} />
                                </button>
                                <button
                                  onClick={() => handleEdit(client.id)}
                                  className="p-2 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/30 rounded-lg text-yellow-400 transition-all"
                                  title="Edit"
                                >
                                  <Edit size={14} />
                                </button>
                                <button
                                  onClick={() => handleDelete(client.id)}
                                  className="p-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 transition-all"
                                  title="Delete"
                                >
                                  <Trash size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* Mobile Card View */
                <div className="md:hidden">
                  <div className="grid gap-4">
                    {paginatedClients.map((client, index) => (
                      <ClientCard
                        key={client.id}
                        client={client}
                        index={index}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-700/50">
                  <div className="text-gray-400 text-sm">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredClients.length)} of {filteredClients.length} results
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg border transition-all ${
                        currentPage === 1
                          ? 'bg-gray-700/20 border-gray-600/20 text-gray-500 cursor-not-allowed'
                          : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-2 sm:px-3 py-2 rounded-lg border text-sm transition-all ${
                            currentPage === page
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg border transition-all ${
                        currentPage === totalPages
                          ? 'bg-gray-700/20 border-gray-600/20 text-gray-500 cursor-not-allowed'
                          : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {filteredClients.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-blue-400" size={24} lg:size={32} />
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">No clients found</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your search or filter criteria'
                      : 'Add your first client using the form above'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddClients;