import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components
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

const Edit = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Trash2 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3,6 5,6 21,6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const Power = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
    <line x1="12" y1="2" x2="12" y2="12"/>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const Building = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
    <path d="M9 9v.01"/>
    <path d="M9 12v.01"/>
    <path d="M9 15v.01"/>
    <path d="M9 18v.01"/>
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

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const FileText = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const Home = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
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

const ChevronDown = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

const ExternalLink = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const MoreVertical = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="1"/>
    <circle cx="12" cy="5" r="1"/>
    <circle cx="12" cy="19" r="1"/>
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

// Document Viewer Modal
const DocumentViewer = ({ isOpen, onClose, document }) => {
  if (!isOpen || !document) return null;

  const generateDocumentContent = (docName) => {
    switch (docName) {
      case 'Business License':
        return `BUSINESS LICENSE

License Number: BL-2024-001234
Business Name: ${document.vendorName}
License Type: General Business License
Issue Date: January 15, 2024
Expiry Date: January 15, 2025
Status: Active

This license authorizes the holder to conduct business operations within the jurisdiction as specified by local regulations.

Authorized Business Activities:
- Commercial trading
- Service provision
- Customer engagement

This document is valid and legally binding.`;

      case 'Tax Certificate':
        return `TAX CERTIFICATE

Certificate Number: TC-2024-567890
Business Name: ${document.vendorName}
Tax ID: 12-3456789
Issue Date: February 10, 2024
Valid Until: February 10, 2025
Status: Compliant

This certificate confirms that the business is registered for tax purposes and is compliant with all applicable tax regulations.

Tax Categories:
- Income Tax: Registered
- Sales Tax: Registered
- Employment Tax: Registered

Certificate issued by the Tax Authority.`;

      case 'Insurance Certificate':
        return `INSURANCE CERTIFICATE

Policy Number: INS-2024-789012
Insured: ${document.vendorName}
Insurance Company: Professional Liability Insurance Co.
Policy Type: General Liability Insurance
Coverage Amount: $1,000,000
Effective Date: March 1, 2024
Expiry Date: March 1, 2025
Status: Active

Coverage Details:
- General Liability: $500,000
- Professional Liability: $300,000
- Property Damage: $200,000

This certificate is proof of current insurance coverage.`;

      default:
        return 'Document content not available.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/75" onClick={onClose}></div>
      <div className="absolute inset-4 sm:inset-8 bg-white rounded-lg shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{document.name}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
              {generateDocumentContent(document.name)}
            </pre>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                const content = generateDocumentContent(document.name);
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${document.name.replace(/\s+/g, '_')}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Download size={16} />
              Download Document
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Vendor Card Component
const MobileVendorCard = ({ vendor, onView, onToggleStatus, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'suspended': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 relative">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-sm mb-1 truncate">{vendor.businessName}</h3>
          <p className="text-gray-400 text-xs font-mono">{vendor.id}</p>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(vendor.status)}`}>
            {vendor.status}
          </span>
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <MoreVertical size={16} className="text-gray-400" />
            </button>
            
            {showActions && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-gray-800 border border-gray-700/50 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => {
                    onView(vendor);
                    setShowActions(false);
                  }}
                  className="w-full px-3 py-2 text-left text-blue-400 hover:bg-gray-700/50 rounded-t-lg transition-colors text-xs flex items-center gap-2"
                >
                  <Eye size={12} />
                  View
                </button>
                <button
                  className="w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors text-xs flex items-center gap-2"
                >
                  <Edit size={12} />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onToggleStatus(vendor.id);
                    setShowActions(false);
                  }}
                  className={`w-full px-3 py-2 text-left transition-colors text-xs flex items-center gap-2 ${
                    vendor.status === 'active' 
                      ? 'text-red-400 hover:bg-red-600/10'
                      : 'text-green-400 hover:bg-green-600/10'
                  }`}
                >
                  <Power size={12} />
                  {vendor.status === 'active' ? 'Suspend' : 'Activate'}
                </button>
                <button
                  onClick={() => {
                    onDelete(vendor.id);
                    setShowActions(false);
                  }}
                  className="w-full px-3 py-2 text-left text-red-400 hover:bg-red-600/10 rounded-b-lg transition-colors text-xs flex items-center gap-2"
                >
                  <Trash2 size={12} />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Building size={12} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-400">{vendor.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={12} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-300 truncate">{vendor.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={12} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-300">{vendor.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={12} className="text-gray-400 flex-shrink-0" />
          <span className="text-gray-300">{new Date(vendor.registrationDate).toLocaleDateString()}</span>
        </div>
      </div>

      {showActions && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowActions(false)}
        ></div>
      )}
    </div>
  );
};

// Vendor Profile Drawer Component
const VendorProfileDrawer = ({ vendor, isOpen, onClose }) => {
  const [documentViewer, setDocumentViewer] = useState({ isOpen: false, document: null });

  if (!isOpen || !vendor) return null;

  const handleViewDocument = (docName) => {
    setDocumentViewer({
      isOpen: true,
      document: { name: docName, vendorName: vendor.businessName }
    });
  };

  return (
    <>
      <div className="fixed inset-0 z-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="absolute right-0 top-0 h-full w-full sm:max-w-xl lg:max-w-2xl bg-gray-900 shadow-xl">
          <div className="flex flex-col h-full">
            <div className="bg-gray-800/50 px-4 sm:px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-white">Vendor Profile</h2>
                  <p className="text-gray-400 text-sm">{vendor.businessName}</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="space-y-6">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-sm">Business Name</label>
                      <p className="text-white font-medium break-words">{vendor.businessName}</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Category</label>
                      <p className="text-white font-medium">{vendor.category}</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Email</label>
                      <p className="text-white font-medium break-words">{vendor.email}</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Phone</label>
                      <p className="text-white font-medium">{vendor.phone}</p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Status</label>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-1 ${
                        vendor.status === 'active' ? 'text-green-400 bg-green-500/10 border-green-500/20' :
                        vendor.status === 'suspended' ? 'text-red-400 bg-red-500/10 border-red-500/20' :
                        'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
                      }`}>
                        {vendor.status}
                      </span>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Registration Date</label>
                      <p className="text-white font-medium">{new Date(vendor.registrationDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Statistics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-400">24</div>
                      <div className="text-gray-400 text-sm">Total Orders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-400">98%</div>
                      <div className="text-gray-400 text-sm">On-Time Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-yellow-400">4.8</div>
                      <div className="text-gray-400 text-sm">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Documents</h3>
                  <div className="space-y-3">
                    {['Business License', 'Tax Certificate', 'Insurance Certificate'].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-blue-400 flex-shrink-0" size={16} />
                          <span className="text-white text-sm">{doc}</span>
                        </div>
                        <button 
                          onClick={() => handleViewDocument(doc)}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm px-3 py-1 rounded-md hover:bg-blue-500/10 transition-colors"
                        >
                          <ExternalLink size={14} />
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DocumentViewer
        isOpen={documentViewer.isOpen}
        onClose={() => setDocumentViewer({ isOpen: false, document: null })}
        document={documentViewer.document}
      />
    </>
  );
};// Add Vendor Modal Component
const AddVendorModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    email: '',
    phone: '',
    status: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      businessName: '',
      category: '',
      email: '',
      phone: '',
      status: 'pending'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="relative bg-gray-900 rounded-xl p-4 sm:p-6 w-full max-w-md border border-gray-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Add New Vendor</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Business Name</label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Category</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Services">Services</option>
                <option value="Construction">Construction</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
              >
                Add Vendor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const VendorManagement = () => {
  const [user, setUser] = useState({ name: 'Yehor', role: 'admin' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop', 'mobile'

  // Sample vendor data
  const [vendors, setVendors] = useState([
    {
      id: 'VND001',
      businessName: 'TechSupply Co.',
      category: 'Electronics',
      email: 'contact@techsupply.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      registrationDate: '2024-01-15'
    },
    {
      id: 'VND002',
      businessName: 'Green Foods Inc.',
      category: 'Food',
      email: 'info@greenfoods.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      registrationDate: '2024-02-20'
    },
    {
      id: 'VND003',
      businessName: 'Fashion Forward',
      category: 'Fashion',
      email: 'orders@fashionforward.com',
      phone: '+1 (555) 345-6789',
      status: 'pending',
      registrationDate: '2024-03-10'
    },
    {
      id: 'VND004',
      businessName: 'BuildRight Construction',
      category: 'Construction',
      email: 'contracts@buildright.com',
      phone: '+1 (555) 456-7890',
      status: 'suspended',
      registrationDate: '2024-01-30'
    },
    {
      id: 'VND005',
      businessName: 'ServicePro Solutions',
      category: 'Services',
      email: 'hello@servicepro.com',
      phone: '+1 (555) 567-8901',
      status: 'active',
      registrationDate: '2024-02-14'
    }
  ]);

  // Auto-detect view mode based on screen size
  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth < 1024 ? 'mobile' : 'desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter vendors
  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || vendor.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'suspended': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const handleViewVendor = (vendor) => {
    setSelectedVendor(vendor);
    setIsProfileDrawerOpen(true);
  };

  const handleAddVendor = (vendorData) => {
    const newVendor = {
      id: `VND${String(vendors.length + 1).padStart(3, '0')}`,
      ...vendorData,
      registrationDate: new Date().toISOString().split('T')[0]
    };
    setVendors([...vendors, newVendor]);
    setIsAddModalOpen(false);
  };

  const handleToggleStatus = (vendorId) => {
    setVendors(vendors.map(vendor => 
      vendor.id === vendorId 
        ? { ...vendor, status: vendor.status === 'active' ? 'suspended' : 'active' }
        : vendor
    ));
  };

  const handleDeleteVendor = (vendorId) => {
    if (confirm('Are you sure you want to delete this vendor?')) {
      setVendors(vendors.filter(vendor => vendor.id !== vendorId));
    }
  };

  // Export functions
  const exportToCSV = () => {
    const headers = ['ID', 'Business Name', 'Category', 'Email', 'Phone', 'Status', 'Registration Date'];
    const csvContent = [
      headers.join(','),
      ...filteredVendors.map(vendor => [
        vendor.id,
        `"${vendor.businessName}"`,
        vendor.category,
        vendor.email,
        vendor.phone,
        vendor.status,
        vendor.registrationDate
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vendors.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    // Simple Excel-compatible format (HTML table)
    const htmlContent = `
      <table>
        <tr>
          <th>ID</th>
          <th>Business Name</th>
          <th>Category</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Registration Date</th>
        </tr>
        ${filteredVendors.map(vendor => `
          <tr>
            <td>${vendor.id}</td>
            <td>${vendor.businessName}</td>
            <td>${vendor.category}</td>
            <td>${vendor.email}</td>
            <td>${vendor.phone}</td>
            <td>${vendor.status}</td>
            <td>${vendor.registrationDate}</td>
          </tr>
        `).join('')}
      </table>
    `;

    const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vendors.xls';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportToPDF = () => {
    const pdfContent = `VENDOR MANAGEMENT REPORT
Generated on: ${new Date().toLocaleDateString()}

Total Vendors: ${filteredVendors.length}

VENDOR DIRECTORY:
${filteredVendors.map(vendor => `
ID: ${vendor.id}
Business Name: ${vendor.businessName}
Category: ${vendor.category}
Email: ${vendor.email}
Phone: ${vendor.phone}
Status: ${vendor.status.toUpperCase()}
Registration Date: ${new Date(vendor.registrationDate).toLocaleDateString()}
----------------------------------------
`).join('')}

Report generated by NEXEON Procurement System`;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vendors.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExport = (format) => {
    switch (format) {
      case 'csv':
        exportToCSV();
        break;
      case 'excel':
        exportToExcel();
        break;
      case 'pdf':
        exportToPDF();
        break;
      default:
        console.log(`Export format ${format} not supported`);
    }
    setExportDropdownOpen(false);
  };

  const navigateTo = (path) => {
    console.log(`Navigate to ${path}`);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="flex min-h-screen relative z-10">
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <div className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 bg-gray-900/60 backdrop-blur-xl border-r border-gray-800/50 fixed h-full overflow-y-auto z-50 lg:z-auto transition-transform duration-300`}>
          <div className="p-6">
    <div className="mb-8">
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
              <p className="text-gray-400 text-sm font-medium">PROCUREMENT</p>
              
              <div className="mt-2">
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
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
  {/* Dashboard menu (inactive now) */}
  <div
    onClick={() => window.navigate('/dashboard')}
    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
  >
    <Home size={18} />
    <span className="text-sm">Dashboard</span>
  </div>

  {user.role === 'admin' ? (
    <>
      {/* ✅ Vendors menu active */}
      <div
        onClick={() => window.navigate('/vendors')}
        className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20 font-semibold cursor-pointer"
      >
        <Users size={18} />
        <span className="text-sm">Vendors</span>
      </div>

      {/* Reports menu (inactive) */}
      <div
        onClick={() => window.navigate('/reports')}
        className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
      >
        <FileText size={18} />
        <span className="text-sm">Reports</span>
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

        <div className="flex-1 lg:ml-64">
          <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <Menu size={20} className="text-gray-300" />
                </button>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    Vendor Management
                  </h1>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Manage and monitor all registered vendors
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all">
                  <Bell size={16} className="text-gray-300" />
                </button>
                <div className="flex items-center gap-2 sm:gap-3">
                  <AnimatedAvatar name={user.name} role={user.role} />
                  <div className="hidden sm:block">
                    <span className="text-white font-semibold text-sm">{user.name}</span>
                    <p className="text-gray-400 text-xs capitalize">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-8">
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg">
              <div className="p-4 sm:p-6 border-b border-gray-800/50">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-white">Vendor Directory</h2>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="relative order-1 sm:order-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        placeholder="Search vendors..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none w-full sm:w-48 lg:w-64"
                      />
                    </div>

                    <div className="flex gap-2 order-2 sm:order-2">
                      <div className="relative flex-1 sm:flex-none">
                        <select
                          value={categoryFilter}
                          onChange={(e) => setCategoryFilter(e.target.value)}
                          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm pr-8 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer w-full"
                        >
                          <option value="all">All Categories</option>
                          <option value="Food">Food</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Services">Services</option>
                          <option value="Construction">Construction</option>
                        </select>
                        <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                      </div>

                      <div className="relative flex-1 sm:flex-none">
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm pr-8 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer w-full"
                        >
                          <option value="all">All Status</option>
                          <option value="active">Active</option>
                          <option value="pending">Pending</option>
                          <option value="suspended">Suspended</option>
                        </select>
                        <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                      </div>
                    </div>

                    <div className="flex gap-2 order-3 sm:order-3">
                      <div className="relative flex-1 sm:flex-none">
                        <button
                          onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm transition-colors w-full"
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">Export</span>
                          <ChevronDown size={14} />
                        </button>
                        
                        {exportDropdownOpen && (
                          <div className="absolute right-0 top-full mt-2 w-32 sm:w-40 bg-gray-800 border border-gray-700/50 rounded-lg shadow-lg z-10">
                            <button
                              onClick={() => handleExport('csv')}
                              className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 rounded-t-lg transition-colors text-sm"
                            >
                              CSV
                            </button>
                            <button
                              onClick={() => handleExport('excel')}
                              className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors text-sm"
                            >
                              Excel
                            </button>
                            <button
                              onClick={() => handleExport('pdf')}
                              className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 rounded-b-lg transition-colors text-sm"
                            >
                              Report
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-semibold transition-all shadow-lg flex-1 sm:flex-none"
                      >
                        <Plus size={16} />
                        <span className="hidden sm:inline">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Table/Card View */}
              {viewMode === 'desktop' ? (
                // Desktop Table View
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/30">
                      <tr>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm whitespace-nowrap">ID</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm">Business Name</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm hidden sm:table-cell">Category</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm hidden md:table-cell">Email</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm hidden lg:table-cell">Phone</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm">Status</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm hidden xl:table-cell">Registration</th>
                        <th className="text-left p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVendors.map((vendor) => (
                        <tr key={vendor.id} className="border-t border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                          <td className="p-3 sm:p-4 text-white font-mono text-xs sm:text-sm">{vendor.id}</td>
                          <td className="p-3 sm:p-4">
                            <div>
                              <div className="text-white font-medium text-sm">{vendor.businessName}</div>
                              <div className="text-gray-400 text-xs sm:hidden">{vendor.category}</div>
                            </div>
                          </td>
                          <td className="p-3 sm:p-4 text-gray-300 text-sm hidden sm:table-cell">{vendor.category}</td>
                          <td className="p-3 sm:p-4 text-gray-300 text-sm hidden md:table-cell break-all">{vendor.email}</td>
                          <td className="p-3 sm:p-4 text-gray-300 text-sm hidden lg:table-cell">{vendor.phone}</td>
                          <td className="p-3 sm:p-4">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(vendor.status)}`}>
                              {vendor.status}
                            </span>
                          </td>
                          <td className="p-3 sm:p-4 text-gray-300 text-sm hidden xl:table-cell">{new Date(vendor.registrationDate).toLocaleDateString()}</td>
                          <td className="p-3 sm:p-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <button
                                onClick={() => handleViewVendor(vendor)}
                                className="p-1 sm:p-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-colors"
                                title="View Details"
                              >
                                <Eye size={12} />
                              </button>
                              <button
                                className="p-1 sm:p-2 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 rounded-lg text-gray-400 transition-colors"
                                title="Edit"
                              >
                                <Edit size={12} />
                              </button>
                              <button
                                onClick={() => handleToggleStatus(vendor.id)}
                                className={`p-1 sm:p-2 border rounded-lg transition-colors ${
                                  vendor.status === 'active' 
                                    ? 'bg-red-600/20 hover:bg-red-600/30 border-red-500/30 text-red-400'
                                    : 'bg-green-600/20 hover:bg-green-600/30 border-green-500/30 text-green-400'
                                }`}
                                title={vendor.status === 'active' ? 'Suspend' : 'Activate'}
                              >
                                <Power size={12} />
                              </button>
                              <button
                                onClick={() => handleDeleteVendor(vendor.id)}
                                className="p-1 sm:p-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                // Mobile Card View
                <div className="p-4 sm:p-6 space-y-4">
                  {filteredVendors.map((vendor) => (
                    <MobileVendorCard
                      key={vendor.id}
                      vendor={vendor}
                      onView={handleViewVendor}
                      onToggleStatus={handleToggleStatus}
                      onDelete={handleDeleteVendor}
                    />
                  ))}
                </div>
              )}

              {filteredVendors.length === 0 && (
                <div className="text-center py-8 sm:py-12 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-blue-400" size={24} sm:size={28} />
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">No vendors found</h3>
                  <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                    {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                      ? "No vendors match your current filters."
                      : "No vendors have been registered yet."
                    }
                  </p>
                  {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
                    <button
                      onClick={() => setIsAddModalOpen(true)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all shadow-lg"
                    >
                      Add Your First Vendor
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Results Summary - Mobile Friendly */}
            {filteredVendors.length > 0 && (
              <div className="mt-4 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-t border-gray-800/50">
                  <div className="text-gray-400 text-sm">
                    Showing <span className="text-white font-medium">{filteredVendors.length}</span> of <span className="text-white font-medium">{vendors.length}</span> vendors
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Active: {vendors.filter(v => v.status === 'active').length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Pending: {vendors.filter(v => v.status === 'pending').length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Suspended: {vendors.filter(v => v.status === 'suspended').length}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close any open dropdowns when clicking outside */}
      {exportDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setExportDropdownOpen(false)}
        ></div>
      )}

      <VendorProfileDrawer
        vendor={selectedVendor}
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
      />

      <AddVendorModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddVendor}
      />

      {/* Mobile Bottom Navigation Bar (Optional Enhancement) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-xl border-t border-gray-800/50 px-4 py-2 z-30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Users size={14} />
            <span>{filteredVendors.length} vendors</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 text-xs transition-colors"
            >
              <Download size={14} />
              Export
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-xs font-semibold transition-colors"
            >
              <Plus size={14} />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Padding to Account for Fixed Navigation */}
      <div className="lg:hidden h-16"></div>
    </div>
  );
};

export default VendorManagement;