import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components (same as dashboard)
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

const TrendingUp = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
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

const Eye = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Clock = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const DollarSign = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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

const Quote = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

const ShoppingCart = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const CreditCard = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const Settings = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const LogOut = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16,17 21,12 16,7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Filter = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
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

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// Animated Avatar Component (same as dashboard)
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

  const colors = ['from-blue-500', 'to-purple-600'];

  return (
    <div className="relative">
      <div className={`w-10 h-10 bg-gradient-to-br ${colors[0]} ${colors[1]} rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 transform ${
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

// Quote Details Modal Component
const QuoteDetailsModal = ({ quote, isOpen, onClose, onApprove, onReject }) => {
  if (!isOpen || !quote) return null;

  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  
  const handleApprove = () => {
    onApprove(quote.id);
    setShowApproveConfirm(false);
    onClose();
  };

  const handleReject = () => {
    onReject(quote.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
          <div>
            <h2 className="text-xl font-bold text-white">Quote Details</h2>
            <p className="text-gray-400 text-sm">{quote.rfqTitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Vendor Name</label>
                <p className="text-white text-lg font-semibold">{quote.vendorName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Quoted Price</label>
                <p className="text-white text-2xl font-bold">${quote.price.toLocaleString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Lead Time</label>
                <p className="text-white text-lg">{quote.leadTime} days</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  quote.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                  quote.status === 'Approved' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                  'bg-red-500/20 text-red-400 border border-red-500/20'
                }`}>
                  {quote.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Submitted Date</label>
                <p className="text-white">{quote.submittedDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">RFQ ID</label>
                <button 
                  onClick={() => alert(`Navigating to RFQ #${quote.rfqId}`)}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  #{quote.rfqId} <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Vendor Notes</label>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <p className="text-gray-300 text-sm">{quote.notes}</p>
            </div>
          </div>

          {/* Scoring Breakdown */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-3">Scoring Breakdown</label>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{quote.scoring.price}/10</div>
                  <div className="text-xs text-gray-400">Price Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{quote.scoring.quality}/10</div>
                  <div className="text-xs text-gray-400">Quality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{quote.scoring.delivery}/10</div>
                  <div className="text-xs text-gray-400">Delivery Score</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
                <div className="text-3xl font-bold text-white">{quote.scoring.total}/30</div>
                <div className="text-sm text-gray-400">Overall Score</div>
              </div>
            </div>
          </div>

          {/* Attachments */}
          {quote.attachments && quote.attachments.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3">Attachments</label>
              <div className="space-y-2">
                {quote.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-blue-400" />
                      <span className="text-white text-sm">{attachment.name}</span>
                      <span className="text-gray-400 text-xs">({attachment.size})</span>
                    </div>
                    <button 
                      onClick={() => alert(`Downloading ${attachment.name}`)}
                      className="text-blue-400 hover:text-blue-300 p-2 hover:bg-gray-700/50 rounded transition-all"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-800/50">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white border border-gray-600/50 hover:border-gray-500/50 rounded-lg transition-all"
          >
            Close
          </button>
          {quote.status === 'Pending' && (
            <>
              <button 
                onClick={handleReject}
                className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition-all"
              >
                Reject Quote
              </button>
              <button 
                onClick={() => setShowApproveConfirm(true)}
                className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 hover:text-green-300 rounded-lg transition-all"
              >
                Approve Quote
              </button>
            </>
          )}
        </div>

        {/* Approve Confirmation Modal */}
        {showApproveConfirm && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-lg p-6 m-4 max-w-md border border-gray-800/50">
              <h3 className="text-lg font-semibold text-white mb-2">Confirm Approval</h3>
              <p className="text-gray-400 text-sm mb-4">
                Are you sure you want to approve this quote from {quote.vendorName} for ${quote.price.toLocaleString()}?
              </p>
              <div className="flex items-center justify-end gap-3">
                <button 
                  onClick={() => setShowApproveConfirm(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white border border-gray-600/50 hover:border-gray-500/50 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleApprove}
                  className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-400 hover:text-green-300 rounded-lg transition-all"
                >
                  Yes, Approve
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ClientQuotesPage = () => {
  const [user, setUser] = useState({ name: 'John Smith', role: 'client', company: 'TechCorp Inc.' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Date');
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNewQuotesBanner, setShowNewQuotesBanner] = useState(true);

  // Mock quotes data
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      rfqId: 'RFQ-001',
      rfqTitle: 'Office Furniture Package',
      vendorName: 'Premium Office Solutions',
      price: 15750,
      leadTime: 21,
      status: 'Pending',
      submittedDate: '2024-01-15',
      notes: 'We can provide high-quality ergonomic office furniture with a 5-year warranty. Our team includes installation and setup services. We use sustainable materials and offer customization options.',
      scoring: { price: 8, quality: 9, delivery: 7, total: 24 },
      attachments: [
        { name: 'Product_Catalog.pdf', size: '2.3 MB' },
        { name: 'Installation_Guide.pdf', size: '1.1 MB' }
      ]
    },
    {
      id: 2,
      rfqId: 'RFQ-002',
      rfqTitle: 'IT Equipment Procurement',
      vendorName: 'TechFlow Systems',
      price: 42300,
      leadTime: 14,
      status: 'Approved',
      submittedDate: '2024-01-12',
      notes: 'Latest generation equipment with enterprise-grade support and 3-year warranty. Includes setup, configuration, and training for your team.',
      scoring: { price: 7, quality: 10, delivery: 9, total: 26 },
      attachments: [
        { name: 'Technical_Specifications.pdf', size: '3.7 MB' },
        { name: 'Warranty_Terms.pdf', size: '890 KB' }
      ]
    },
    {
      id: 3,
      rfqId: 'RFQ-003',
      rfqTitle: 'Marketing Materials Design',
      vendorName: 'Creative Design Hub',
      price: 8900,
      leadTime: 10,
      status: 'Rejected',
      submittedDate: '2024-01-10',
      notes: 'Comprehensive branding package including logo design, business cards, brochures, and digital assets. Unlimited revisions during the design phase.',
      scoring: { price: 6, quality: 7, delivery: 8, total: 21 },
      attachments: [
        { name: 'Portfolio_Samples.pdf', size: '5.2 MB' }
      ]
    },
    {
      id: 4,
      rfqId: 'RFQ-004',
      rfqTitle: 'Cloud Infrastructure Setup',
      vendorName: 'CloudTech Partners',
      price: 28500,
      leadTime: 30,
      status: 'Pending',
      submittedDate: '2024-01-08',
      notes: 'Complete cloud migration with 24/7 support, backup solutions, and scalable infrastructure. Includes security audit and compliance certification.',
      scoring: { price: 9, quality: 8, delivery: 6, total: 23 },
      attachments: [
        { name: 'Migration_Plan.pdf', size: '4.1 MB' },
        { name: 'Security_Audit.pdf', size: '2.8 MB' }
      ]
    },
    {
      id: 5,
      rfqId: 'RFQ-005',
      rfqTitle: 'Employee Training Program',
      vendorName: 'SkillBuilder Academy',
      price: 12400,
      leadTime: 45,
      status: 'Pending',
      submittedDate: '2024-01-05',
      notes: 'Customized training modules with interactive sessions, progress tracking, and certification. Available in multiple formats including online and in-person.',
      scoring: { price: 7, quality: 8, delivery: 5, total: 20 },
      attachments: [
        { name: 'Training_Curriculum.pdf', size: '1.9 MB' }
      ]
    }
  ]);

  // Calculate stats
  const totalQuotes = quotes.length;
  const pendingQuotes = quotes.filter(q => q.status === 'Pending').length;
  const approvedQuotes = quotes.filter(q => q.status === 'Approved').length;
  const rejectedQuotes = quotes.filter(q => q.status === 'Rejected').length;

  // Filter and sort quotes
  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.rfqTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.vendorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'Price':
        return a.price - b.price;
      case 'Lead Time':
        return a.leadTime - b.leadTime;
      case 'Date':
      default:
        return new Date(b.submittedDate) - new Date(a.submittedDate);
    }
  });

  const handleApproveQuote = (quoteId) => {
    setQuotes(quotes.map(quote => 
      quote.id === quoteId ? { ...quote, status: 'Approved' } : quote
    ));
  };

  const handleRejectQuote = (quoteId) => {
    setQuotes(quotes.map(quote => 
      quote.id === quoteId ? { ...quote, status: 'Rejected' } : quote
    ));
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const handleViewQuote = (quote) => {
    setSelectedQuote(quote);
    setShowModal(true);
  };

  const handleRFQNavigation = (rfqId) => {
    alert(`Navigating to RFQ details page for ${rfqId}`);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="flex min-h-screen relative z-10">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
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
      <p className="text-gray-400 text-sm font-medium">CLIENT PORTAL</p>
      
      <div className="mt-2">
        <span className="px-3 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
          Active Client
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
      {/* Dashboard */}
      <div
        onClick={() => window.navigate('/client/dashboard')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/dashboard'
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
        } rounded-lg transition-all cursor-pointer`}
      >
        <Home size={18} />
        <span className={`text-sm ${window.location.pathname === '/client/dashboard' ? 'font-semibold' : ''}`}>Dashboard</span>
      </div>

      {/* My RFQs */}
      <div
        onClick={() => window.navigate('/client/rfq/my')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/rfq/my'
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
        } rounded-lg transition-all cursor-pointer`}
      >
        <FileText size={18} />
        <span className="text-sm">My RFQs</span>
      </div>

      {/* Quotes */}
      <div
        onClick={() => window.navigate('/client/quotes')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/quotes'
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
        } rounded-lg transition-all cursor-pointer`}
      >
        <Quote size={18} />
        <span className="text-sm">Quotes</span>
      </div>

      {/* Orders / Approvals */}
      <div
        onClick={() => window.navigate('/client/orders-approvals')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/orders-approvals'
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
        } rounded-lg transition-all cursor-pointer`}
      >
        <ShoppingCart size={18} />
        <span className="text-sm">Orders / Approvals</span>
      </div>

      {/* Invoices & Payments */}
      <div
        onClick={() => window.navigate('/client/invoices-payments')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/invoices-payments'
            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
        } rounded-lg transition-all cursor-pointer`}
      >
        <CreditCard size={18} />
        <span className="text-sm">Invoices & Payments</span>
      </div>

    </nav>

    <div className="mt-auto pt-6 border-t border-gray-800/50">
      <div
        onClick={() => window.navigate('/client/settings')}
        className={`flex items-center gap-3 px-3 py-3 ${
          window.location.pathname === '/client/settings'
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
  </div>
</div>


        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Top Header */}
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
                  <h1 className="text-xl lg:text-2xl font-bold text-white">My Quotes</h1>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Track and review all vendor quotes submitted for your RFQs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all relative">
                  <Bell size={20} className="text-gray-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">2</span>
                  </div>
                </button>
                <div className="flex items-center gap-3">
                  <AnimatedAvatar name={user.name} role={user.role} />
                  <div className="hidden sm:block">
                    <span className="text-white font-semibold">{user.name}</span>
                    <p className="text-gray-400 text-xs">{user.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-8">
            {/* New Quotes Notification Banner */}
            {showNewQuotesBanner && pendingQuotes > 0 && (
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Bell className="text-blue-400" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      You have {pendingQuotes} new quote{pendingQuotes !== 1 ? 's' : ''} waiting for review.
                    </p>
                    <p className="text-blue-300 text-sm">Review and approve quotes to proceed with your orders.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowNewQuotesBanner(false)}
                  className="text-blue-400 hover:text-blue-300 p-2 hover:bg-blue-600/20 rounded-lg transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Quote className="text-blue-400" size={20} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400 text-xs font-medium">+15%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{totalQuotes}</h3>
                <p className="text-gray-400 text-sm">Total Quotes Received</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-yellow-400" size={20} />
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{pendingQuotes}</h3>
                <p className="text-gray-400 text-sm">Pending Quotes</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400 text-xs font-medium">+8%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{approvedQuotes}</h3>
                <p className="text-gray-400 text-sm">Approved Quotes</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <X className="text-red-400" size={20} />
                  </div>
                  <div className="text-xs text-gray-400">
                    {((rejectedQuotes / totalQuotes) * 100).toFixed(0)}% rejected
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{rejectedQuotes}</h3>
                <p className="text-gray-400 text-sm">Rejected Quotes</p>
              </div>
            </div>

            {/* Filters Section */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6 mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search by RFQ title or vendor name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 pr-10 text-white focus:border-blue-500/50 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>

                {/* Sort Filter */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 pr-10 text-white focus:border-blue-500/50 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Date">Sort by Date</option>
                    <option value="Price">Sort by Price</option>
                    <option value="Lead Time">Sort by Lead Time</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Quotes Table/Cards */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50 border-b border-gray-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">RFQ Title</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Vendor Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Quoted Price</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Lead Time</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Submitted Date</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {filteredQuotes.map((quote) => (
                      <tr 
                        key={quote.id} 
                        onClick={() => handleViewQuote(quote)}
                        className="hover:bg-gray-800/30 cursor-pointer transition-all"
                      >
                        <td className="px-6 py-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRFQNavigation(quote.rfqId);
                            }}
                            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
                          >
                            {quote.rfqTitle}
                            <ExternalLink size={14} />
                          </button>
                        </td>
                        <td className="px-6 py-4 text-white">{quote.vendorName}</td>
                        <td className="px-6 py-4 text-white font-semibold">${quote.price.toLocaleString()}</td>
                        <td className="px-6 py-4 text-white">{quote.leadTime} days</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            quote.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                            quote.status === 'Approved' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                            'bg-red-500/20 text-red-400 border border-red-500/20'
                          }`}>
                            {quote.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-300">{quote.submittedDate}</td>
                        <td className="px-6 py-4">
                          <button
  onClick={(e) => {
    e.stopPropagation();
    handleViewQuote(quote);
  }}
  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-colors"
  title="View Quote"
>
  <Eye size={14} />
</button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden p-4 space-y-4">
                {filteredQuotes.map((quote) => (
                  <div 
                    key={quote.id}
                    onClick={() => handleViewQuote(quote)}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 cursor-pointer hover:bg-gray-800/70 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRFQNavigation(quote.rfqId);
                          }}
                          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors text-left"
                        >
                          {quote.rfqTitle}
                          <ExternalLink size={12} />
                        </button>
                        <p className="text-gray-300 text-sm mt-1">{quote.vendorName}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        quote.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                        quote.status === 'Approved' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                        'bg-red-500/20 text-red-400 border border-red-500/20'
                      }`}>
                        {quote.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Price</p>
                        <p className="text-white font-semibold">${quote.price.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Lead Time</p>
                        <p className="text-white">{quote.leadTime} days</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Submitted</p>
                        <p className="text-white">{quote.submittedDate}</p>
                      </div>
                      <div className="flex justify-end">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewQuote(quote);
                          }}
                          className="text-blue-400 hover:text-blue-300 p-2 hover:bg-gray-700/50 rounded-lg transition-all"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredQuotes.length === 0 && (
                <div className="text-center py-12">
                  <Quote className="mx-auto text-gray-600 mb-4" size={48} />
                  <h3 className="text-white text-lg font-medium mb-2">No quotes found</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {searchTerm || statusFilter !== 'All' 
                      ? 'Try adjusting your filters to see more results.' 
                      : 'You haven\'t received any quotes yet.'}
                  </p>
                  {(!searchTerm && statusFilter === 'All') && (
                    <button 
                      onClick={() => alert('Navigating to Create New RFQ page...')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all"
                    >
                      <Plus size={16} />
                      Create New RFQ
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Details Modal */}
      <QuoteDetailsModal
        quote={selectedQuote}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onApprove={handleApproveQuote}
        onReject={handleRejectQuote}
      />
    </div>
  );
};

export default ClientQuotesPage;