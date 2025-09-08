import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components (matching your dashboard)
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

const Eye = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const Search = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const Filter = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
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

const X = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const FileText = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CreditCard = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const Menu = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const Bell = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const Home = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
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

const Lock = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <circle cx="12" cy="16" r="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const ArrowLeft = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

// Animated Avatar Component (matching your dashboard)
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

// Paystack Checkout Component
const PaystackCheckout = ({ invoice, onSuccess, onCancel, onClose }) => {
  const [paymentData, setPaymentData] = useState({
    email: '',
    name: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!paymentData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(paymentData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!paymentData.name) {
      newErrors.name = 'Full name is required';
    }
    
    if (!paymentData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handlePayment = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate Paystack payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate successful payment
      const paymentResponse = {
        reference: `PAY_${Date.now()}`,
        status: 'success',
        amount: invoice.amount * 100, // Paystack uses kobo
        customer: paymentData,
        invoice_id: invoice.id
      };
      
      onSuccess(paymentResponse);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                <Lock className="text-green-400" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Secure Payment</h2>
                <p className="text-gray-400 text-sm">Powered by Paystack</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Invoice:</span>
              <span className="text-white font-medium">{invoice.id}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Vendor:</span>
              <span className="text-white">{invoice.vendor}</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-700/50 pt-2">
              <span className="text-white font-semibold">Total Amount:</span>
              <span className="text-2xl font-bold text-green-400">${invoice.amount.toLocaleString()}</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={paymentData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email 
                    ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                    : 'border-gray-700/50 focus:ring-blue-500/50 focus:border-blue-500/50'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={paymentData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.name 
                    ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                    : 'border-gray-700/50 focus:ring-blue-500/50 focus:border-blue-500/50'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={paymentData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone 
                    ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                    : 'border-gray-700/50 focus:ring-blue-500/50 focus:border-blue-500/50'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Security Info */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3 mb-6">
            <div className="flex items-start gap-3">
              <Lock className="text-blue-400 mt-0.5" size={16} />
              <div>
                <p className="text-blue-400 text-sm font-medium">Secure Payment</p>
                <p className="text-gray-400 text-xs">Your payment information is encrypted and secure.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full px-6 py-4 bg-green-600 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing Payment...
                </>
              ) : (
                <>
                  <Lock size={18} />
                  Pay ${invoice.amount.toLocaleString()}
                </>
              )}
            </button>
            
            <button
              onClick={onCancel}
              disabled={isProcessing}
              className="w-full px-6 py-3 bg-gray-700/50 hover:bg-gray-600/60 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600/50 rounded-lg text-gray-300 font-medium transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Cancel Payment
            </button>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400 text-xs text-center mb-3">We accept</p>
            <div className="flex items-center justify-center gap-4">
              <div className="px-3 py-2 bg-gray-800/50 rounded border border-gray-700/50">
                <span className="text-xs text-gray-300 font-medium">VISA</span>
              </div>
              <div className="px-3 py-2 bg-gray-800/50 rounded border border-gray-700/50">
                <span className="text-xs text-gray-300 font-medium">MASTERCARD</span>
              </div>
              <div className="px-3 py-2 bg-gray-800/50 rounded border border-gray-700/50">
                <span className="text-xs text-gray-300 font-medium">VERVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoicesPayments = () => {
  const [user, setUser] = useState({ name: 'John Smith', role: 'client', company: 'TechCorp Inc.' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('invoices');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [invoicesData, setInvoicesData] = useState([
    {
      id: 'INV-2024-001',
      vendor: 'Tech Solutions Inc.',
      amount: 12500.00,
      status: 'paid',
      dueDate: '2024-01-15',
      issueDate: '2024-01-01',
      rfqId: 'RFQ-2023-045',
      orderId: 'ORD-2023-089',
      items: [
        { description: 'Cloud Infrastructure Setup', quantity: 1, unitPrice: 8500.00, total: 8500.00 },
        { description: 'Technical Support (3 months)', quantity: 3, unitPrice: 1333.33, total: 4000.00 }
      ],
      pdfUrl: '#',
      vendorInfo: {
        name: 'Tech Solutions Inc.',
        address: '123 Business St, Suite 100, Tech City, TC 12345',
        contact: 'billing@techsolutions.com',
        phone: '+1 (555) 123-4567'
      }
    },
    {
      id: 'INV-2024-002',
      vendor: 'Office Supplies Co.',
      amount: 3200.00,
      status: 'pending',
      dueDate: '2024-02-20',
      issueDate: '2024-02-05',
      rfqId: 'RFQ-2024-012',
      orderId: 'ORD-2024-003',
      items: [
        { description: 'Office Furniture Set', quantity: 5, unitPrice: 450.00, total: 2250.00 },
        { description: 'Ergonomic Chairs', quantity: 5, unitPrice: 190.00, total: 950.00 }
      ],
      pdfUrl: '#',
      vendorInfo: {
        name: 'Office Supplies Co.',
        address: '456 Commerce Ave, Business Park, BC 67890',
        contact: 'invoices@officesupplies.com',
        phone: '+1 (555) 987-6543'
      }
    },
    {
      id: 'INV-2024-003',
      vendor: 'Marketing Agency Pro',
      amount: 8750.00,
      status: 'overdue',
      dueDate: '2024-01-30',
      issueDate: '2024-01-15',
      rfqId: 'RFQ-2024-008',
      orderId: 'ORD-2024-001',
      items: [
        { description: 'Brand Identity Package', quantity: 1, unitPrice: 5000.00, total: 5000.00 },
        { description: 'Website Redesign', quantity: 1, unitPrice: 3750.00, total: 3750.00 }
      ],
      pdfUrl: '#',
      vendorInfo: {
        name: 'Marketing Agency Pro',
        address: '789 Creative Blvd, Design District, DD 13579',
        contact: 'billing@marketingpro.com',
        phone: '+1 (555) 246-8135'
      }
    },
    {
      id: 'INV-2024-004',
      vendor: 'Security Systems Ltd.',
      amount: 15600.00,
      status: 'paid',
      dueDate: '2024-02-10',
      issueDate: '2024-01-26',
      rfqId: 'RFQ-2024-015',
      orderId: 'ORD-2024-007',
      items: [
        { description: 'Security Camera System', quantity: 8, unitPrice: 750.00, total: 6000.00 },
        { description: 'Access Control System', quantity: 1, unitPrice: 4600.00, total: 4600.00 },
        { description: 'Installation & Setup', quantity: 1, unitPrice: 5000.00, total: 5000.00 }
      ],
      pdfUrl: '#',
      vendorInfo: {
        name: 'Security Systems Ltd.',
        address: '321 Safety Way, Secure Zone, SZ 24680',
        contact: 'accounts@securitysystems.com',
        phone: '+1 (555) 369-2580'
      }
    },
    {
      id: 'INV-2024-005',
      vendor: 'IT Equipment Hub',
      amount: 22400.00,
      status: 'pending',
      dueDate: '2024-03-01',
      issueDate: '2024-02-15',
      rfqId: 'RFQ-2024-020',
      orderId: 'ORD-2024-011',
      items: [
        { description: 'Laptops (Dell XPS 13)', quantity: 10, unitPrice: 1200.00, total: 12000.00 },
        { description: 'Monitors (27" 4K)', quantity: 10, unitPrice: 400.00, total: 4000.00 },
        { description: 'Docking Stations', quantity: 10, unitPrice: 180.00, total: 1800.00 },
        { description: 'Extended Warranty (2 years)', quantity: 10, unitPrice: 460.00, total: 4600.00 }
      ],
      pdfUrl: '#',
      vendorInfo: {
        name: 'IT Equipment Hub',
        address: '654 Technology Dr, Innovation Park, IP 97531',
        contact: 'billing@itequipmenthub.com',
        phone: '+1 (555) 147-8520'
      }
    }
  ]);
  
  // Mock data for invoices statistics (calculated from invoicesData)
  const invoiceStats = {
    totalInvoices: invoicesData.length,
    paidInvoices: invoicesData.filter(inv => inv.status === 'paid').length,
    pendingInvoices: invoicesData.filter(inv => inv.status === 'pending').length,
    outstandingBalance: invoicesData
      .filter(inv => inv.status !== 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0)
  };

  // Mock payments data
  const paymentsData = [
    {
      id: 'PAY-2024-001',
      invoiceId: 'INV-2024-001',
      date: '2024-01-14',
      amount: 12500.00,
      method: 'Bank Transfer',
      status: 'completed',
      vendor: 'Tech Solutions Inc.'
    },
    {
      id: 'PAY-2024-002',
      invoiceId: 'INV-2024-004',
      date: '2024-02-09',
      amount: 15600.00,
      method: 'Credit Card',
      status: 'completed',
      vendor: 'Security Systems Ltd.'
    },
    {
      id: 'PAY-2024-003',
      invoiceId: 'INV-2023-089',
      date: '2024-01-28',
      amount: 5400.00,
      method: 'Bank Transfer',
      status: 'completed',
      vendor: 'Software Licensing Co.'
    },
    {
      id: 'PAY-2024-004',
      invoiceId: 'INV-2023-095',
      date: '2024-02-05',
      amount: 3200.00,
      method: 'Check',
      status: 'processing',
      vendor: 'Maintenance Services'
    }
  ];

  // Filter invoices based on search and filters
  const filteredInvoices = invoicesData.filter(invoice => {
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    const matchesSearch = invoice.vendor.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Get status badge styling
  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'overdue':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  // Get payment method icon
  const getPaymentMethodIcon = (method) => {
    switch (method.toLowerCase()) {
      case 'credit card':
        return <CreditCard size={16} className="text-blue-400" />;
      case 'bank transfer':
        return <DollarSign size={16} className="text-green-400" />;
      case 'check':
        return <FileText size={16} className="text-orange-400" />;
      default:
        return <DollarSign size={16} className="text-gray-400" />;
    }
  };

  // Handler functions
  const handleLogout = () => {
    console.log('Logout');
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
    setShowPaymentModal(false);
  };

  const handleApproveInvoice = (invoice) => {
    alert(`Invoice ${invoice.id} has been approved!\n\nThis action would typically:\n- Update invoice status to approved\n- Trigger payment processing workflow\n- Send confirmation to vendor\n- Update financial records`);
    setSelectedInvoice(null);
  };

  const handlePayInvoice = (invoice) => {
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentResponse) => {
    // Update invoice status to paid
    setInvoicesData(prevInvoices => 
      prevInvoices.map(invoice => 
        invoice.id === selectedInvoice.id 
          ? { ...invoice, status: 'paid' }
          : invoice
      )
    );

    // Show success message
    alert(`Payment successful!\n\nPayment Reference: ${paymentResponse.reference}\nInvoice ${selectedInvoice.id} has been marked as paid.`);

    // Close modals
    setShowPaymentModal(false);
    setSelectedInvoice(null);
  };

  const handlePaymentCancel = () => {
    setShowPaymentModal(false);
  };

  const handleDownloadPDF = (invoice) => {
    alert(`Downloading PDF for invoice ${invoice.id}...\n\nThis would typically:\n- Generate or fetch the invoice PDF\n- Download file to user's device\n- Log download activity\n- Track document access`);
  };

  const handleStatCardClick = (statType) => {
    switch (statType) {
      case 'total':
        setStatusFilter('all');
        setActiveTab('invoices');
        break;
      case 'paid':
        setStatusFilter('paid');
        setActiveTab('invoices');
        break;
      case 'pending':
        setStatusFilter('pending');
        setActiveTab('invoices');
        break;
      case 'outstanding':
        setStatusFilter('overdue');
        setActiveTab('invoices');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Background gradients (matching your dashboard) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="flex min-h-screen relative z-10">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-64 transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-gray-900/60 backdrop-blur-xl border-r border-gray-800/50 h-screen overflow-y-auto`}>
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
        <div className="flex-1 w-full min-w-0 lg:ml-64">
          {/* Top Header */}
          <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <Menu size={20} className="text-gray-300" />
                </button>
                <div className="min-w-0">
                  <h1 className="text-xl lg:text-2xl font-bold text-white truncate">
                    Invoices & Payments
                  </h1>
                  <p className="text-gray-400 text-xs lg:text-sm truncate">
                    Track invoices, payments, and outstanding balances.
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

                <div className="flex items-center gap-3 min-w-0">
                  <AnimatedAvatar name={user.name} role={user.role} />
                  <div className="hidden sm:block min-w-0">
                    <span className="text-white font-semibold truncate block w-full">{user.name}</span>
                    <p className="text-gray-400 text-xs truncate">{user.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 max-w-[1100px] mx-auto lg:mx-0">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div 
                onClick={() => handleStatCardClick('total')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-400" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{invoiceStats.totalInvoices}</h3>
                <p className="text-gray-400 text-sm">Total Invoices</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('paid')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{invoiceStats.paidInvoices}</h3>
                <p className="text-gray-400 text-sm">Paid Invoices</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('pending')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-yellow-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-yellow-400" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{invoiceStats.pendingInvoices}</h3>
                <p className="text-gray-400 text-sm">Pending Invoices</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('outstanding')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-red-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <AlertCircle className="text-red-400" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${invoiceStats.outstandingBalance.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Outstanding Balance</p>
              </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by vendor name or invoice ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>

                  {/* Date Range */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="date"
                      value={dateRange.from}
                      onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                    <input
                      type="date"
                      value={dateRange.to}
                      onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <div className="flex border-b border-gray-800/50">
                <button
                  onClick={() => setActiveTab('invoices')}
                  className={`px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === 'invoices'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  Invoices ({filteredInvoices.length})
                </button>
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === 'payments'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  Payments History ({paymentsData.length})
                </button>
              </div>
            </div>

            {/* Invoices Table */}
            {activeTab === 'invoices' && (
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 border-b border-gray-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Invoice ID</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Vendor</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Due Date</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {filteredInvoices.map((invoice) => (
                        <tr key={invoice.id} className="hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{invoice.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-white">{invoice.vendor}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">${invoice.amount.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(invoice.status)}`}>
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">{invoice.dueDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => handleViewInvoice(invoice)}
                              className="inline-flex items-center px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium transition-all"
                            >
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Payments History Table */}
            {activeTab === 'payments' && (
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50 border-b border-gray-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Payment ID</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Invoice ID</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {paymentsData.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{payment.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer">{payment.invoiceId}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-300">{payment.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">${payment.amount.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              {getPaymentMethodIcon(payment.method)}
                              <span className="text-sm text-gray-300">{payment.method}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                              payment.status === 'completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                            }`}>
                              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && !showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-3 sm:p-4 lg:p-6">
              {/* Modal Header */}
              <div className="flex items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white truncate">Invoice Details</h2>
                  <p className="text-gray-400 text-xs sm:text-sm">Invoice {selectedInvoice.id}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="flex-shrink-0 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400" />
                </button>
              </div>

              {/* Invoice Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                {/* Vendor Information */}
                <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                    Vendor Information
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <span className="text-gray-400 text-xs sm:text-sm block mb-1">Company:</span>
                      <p className="text-white font-medium text-sm sm:text-base break-words">
                        {selectedInvoice.vendorInfo.name}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs sm:text-sm block mb-1">Address:</span>
                      <p className="text-white text-xs sm:text-sm lg:text-base break-words leading-relaxed">
                        {selectedInvoice.vendorInfo.address}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs sm:text-sm block mb-1">Email:</span>
                      <p className="text-blue-400 text-xs sm:text-sm lg:text-base break-all hover:text-blue-300 transition-colors">
                        {selectedInvoice.vendorInfo.contact}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs sm:text-sm block mb-1">Phone:</span>
                      <p className="text-white text-xs sm:text-sm lg:text-base">
                        {selectedInvoice.vendorInfo.phone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Invoice Information */}
                <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                    Invoice Information
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Invoice ID:</span>
                      <p className="text-white font-medium text-sm sm:text-base break-words">
                        {selectedInvoice.id}
                      </p>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Issue Date:</span>
                      <p className="text-white text-sm sm:text-base">{selectedInvoice.issueDate}</p>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Due Date:</span>
                      <p className="text-white text-sm sm:text-base">{selectedInvoice.dueDate}</p>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Linked RFQ:</span>
                      <p className="text-blue-400 cursor-pointer hover:text-blue-300 text-sm sm:text-base break-words transition-colors">
                        {selectedInvoice.rfqId}
                      </p>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Order ID:</span>
                      <p className="text-blue-400 cursor-pointer hover:text-blue-300 text-sm sm:text-base break-words transition-colors">
                        {selectedInvoice.orderId}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Itemized Breakdown */}
              <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 mb-4 sm:mb-6">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Itemized Breakdown
                </h3>
                
                {/* Mobile/Small Tablet View - Cards */}
                <div className="block lg:hidden space-y-3">
                  {selectedInvoice.items.map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-3 sm:p-4 border border-gray-600/30">
                      <div className="text-sm sm:text-base font-medium text-white mb-2 sm:mb-3 break-words">
                        {item.description}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div className="flex flex-col">
                          <span className="text-gray-400 mb-1">Qty:</span>
                          <span className="text-white font-medium">{item.quantity}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 mb-1">Unit Price:</span>
                          <span className="text-white font-medium">${item.unitPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col col-span-2 sm:col-span-2">
                          <span className="text-gray-400 mb-1">Total:</span>
                          <span className="text-white font-semibold text-sm sm:text-base">
                            ${item.total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Mobile Total */}
                  <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 border border-gray-600/50 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-sm sm:text-base">Total Amount:</span>
                      <span className="text-lg sm:text-xl font-bold text-white">
                        ${selectedInvoice.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop View - Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead className="border-b border-gray-700/50">
                      <tr>
                        <th className="px-3 xl:px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-3 xl:px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Qty
                        </th>
                        <th className="px-3 xl:px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Unit Price
                        </th>
                        <th className="px-3 xl:px-4 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {selectedInvoice.items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-700/20 transition-colors">
                          <td className="px-3 xl:px-4 py-3 text-sm text-white break-words max-w-0">
                            {item.description}
                          </td>
                          <td className="px-3 xl:px-4 py-3 text-sm text-gray-300 text-center whitespace-nowrap">
                            {item.quantity}
                          </td>
                          <td className="px-3 xl:px-4 py-3 text-sm text-gray-300 text-right whitespace-nowrap">
                            ${item.unitPrice.toLocaleString()}
                          </td>
                          <td className="px-3 xl:px-4 py-3 text-sm font-medium text-white text-right whitespace-nowrap">
                            ${item.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="border-t-2 border-gray-700/50 bg-gray-700/20">
                      <tr>
                        <td colSpan="3" className="px-3 xl:px-4 py-4 text-sm font-semibold text-white text-right">
                          Total Amount:
                        </td>
                        <td className="px-3 xl:px-4 py-4 text-lg font-bold text-white text-right whitespace-nowrap">
                          ${selectedInvoice.amount.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* PDF Preview Section */}
              <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                    Invoice Document
                  </h3>
                  <button
                    onClick={() => handleDownloadPDF(selectedInvoice)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 text-xs sm:text-sm font-medium transition-all duration-200"
                  >
                    <Download size={14} className="sm:w-4 sm:h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 sm:p-6 lg:p-8 text-center border border-gray-600/50">
                  <FileText size={24} className="sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-gray-300 mb-2 text-xs sm:text-sm lg:text-base font-medium">
                    Invoice PDF Document
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Click download to view the full invoice document
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:justify-end">
                <button
                  onClick={handleCloseModal}
                  className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-700/50 hover:bg-gray-600/60 border border-gray-600/50 rounded-lg text-gray-300 text-sm sm:text-base font-medium transition-all duration-200 order-last md:order-first"
                >
                  Close
                </button>
                {selectedInvoice.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApproveInvoice(selectedInvoice)}
                      className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-400 text-sm sm:text-base font-medium transition-all duration-200"
                    >
                      Approve Invoice
                    </button>
                    <button
                      onClick={() => handlePayInvoice(selectedInvoice)}
                      className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 text-sm sm:text-base font-medium transition-all duration-200"
                    >
                      Pay Now
                    </button>
                  </>
                )}
                {selectedInvoice.status === 'overdue' && (
                  <button
                    onClick={() => handlePayInvoice(selectedInvoice)}
                    className="w-full md:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 rounded-lg text-orange-400 text-sm sm:text-base font-medium transition-all duration-200"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Paystack Payment Modal */}
      {showPaymentModal && selectedInvoice && (
        <PaystackCheckout
          invoice={selectedInvoice}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default InvoicesPayments;