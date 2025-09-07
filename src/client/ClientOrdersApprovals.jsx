import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components
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

const X = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const XCircle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="m15 9-6 6"/>
    <path d="m9 9 6 6"/>
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

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const Check = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const ChevronDown = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="6,9 12,15 18,9"/>
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

const Truck = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16,8 20,8 23,11 23,16 16,16"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const Package = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
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

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch(status) {
      case 'pending':
        return { 
          emoji: '🟡', 
          text: 'Pending', 
          class: 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30' 
        };
      case 'approved':
        return { 
          emoji: '🟢', 
          text: 'Approved', 
          class: 'bg-green-600/20 text-green-400 border-green-500/30' 
        };
      case 'rejected':
        return { 
          emoji: '🔴', 
          text: 'Rejected', 
          class: 'bg-red-600/20 text-red-400 border-red-500/30' 
        };
      case 'in_progress':
        return { 
          emoji: '🔵', 
          text: 'In Progress', 
          class: 'bg-blue-600/20 text-blue-400 border-blue-500/30' 
        };
      default:
        return { 
          emoji: '⚪', 
          text: 'Unknown', 
          class: 'bg-gray-600/20 text-gray-400 border-gray-500/30' 
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${config.class}`}>
      <span>{config.emoji}</span>
      {config.text}
    </span>
  );
};

const ClientOrdersApprovals = () => {
  const [user, setUser] = useState({ name: 'John Smith', role: 'client', company: 'TechCorp Inc.' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [vendorFilter, setVendorFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data for orders statistics
  const orderStats = {
    totalOrders: 156,
    awaitingApproval: 12,
    approvedOrdersValue: 2850000,
    rejectedOrders: 8
  };

  // Mock orders data
  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      rfqReference: 'RFQ-2024-045',
      vendor: 'Tech Solutions Inc.',
      orderDate: '2024-01-15',
      totalAmount: 125000,
      status: 'pending',
      lineItems: [
        { product: 'Dell Laptops', quantity: 50, price: 1200, subtotal: 60000 },
        { product: 'Microsoft Office Licenses', quantity: 50, price: 150, subtotal: 7500 },
        { product: 'Security Software', quantity: 50, price: 200, subtotal: 10000 },
        { product: 'Installation & Setup', quantity: 1, price: 15000, subtotal: 15000 }
      ],
      vendorDetails: {
        name: 'Tech Solutions Inc.',
        contact: 'Sarah Johnson',
        email: 'sarah.johnson@techsolutions.com',
        phone: '+1 (555) 123-4567',
        address: '123 Business Ave, Tech City, TC 12345'
      },
      deliveryTerms: {
        deliveryDate: '2024-02-01',
        location: 'TechCorp Inc. Headquarters',
        terms: 'Standard delivery, 30-day payment terms'
      },
      approvalHistory: []
    },
    {
      id: 'ORD-2024-002',
      rfqReference: 'RFQ-2024-038',
      vendor: 'Office Supplies Pro',
      orderDate: '2024-01-12',
      totalAmount: 45000,
      status: 'approved',
      lineItems: [
        { product: 'Standing Desks', quantity: 25, price: 800, subtotal: 20000 },
        { product: 'Ergonomic Chairs', quantity: 25, price: 450, subtotal: 11250 },
        { product: 'Monitor Arms', quantity: 25, price: 150, subtotal: 3750 },
        { product: 'Delivery & Assembly', quantity: 1, price: 10000, subtotal: 10000 }
      ],
      vendorDetails: {
        name: 'Office Supplies Pro',
        contact: 'Mike Chen',
        email: 'mike.chen@officesuppliespro.com',
        phone: '+1 (555) 987-6543',
        address: '456 Supply Street, Office City, OC 67890'
      },
      deliveryTerms: {
        deliveryDate: '2024-01-25',
        location: 'TechCorp Inc. New Office Wing',
        terms: 'White glove delivery with assembly'
      },
      approvalHistory: [
        { action: 'approved', by: 'John Smith', date: '2024-01-13', notes: 'Budget approved by finance team' }
      ]
    },
    {
      id: 'ORD-2024-003',
      rfqReference: 'RFQ-2024-051',
      vendor: 'CloudTech Systems',
      orderDate: '2024-01-18',
      totalAmount: 280000,
      status: 'rejected',
      lineItems: [
        { product: 'Cloud Infrastructure', quantity: 1, price: 200000, subtotal: 200000 },
        { product: 'Security Package', quantity: 1, price: 50000, subtotal: 50000 },
        { product: 'Migration Services', quantity: 1, price: 30000, subtotal: 30000 }
      ],
      vendorDetails: {
        name: 'CloudTech Systems',
        contact: 'David Wilson',
        email: 'david.wilson@cloudtech.com',
        phone: '+1 (555) 456-7890',
        address: '789 Cloud Boulevard, Data City, DC 13579'
      },
      deliveryTerms: {
        deliveryDate: '2024-03-01',
        location: 'Remote Implementation',
        terms: 'Phased implementation over 60 days'
      },
      approvalHistory: [
        { action: 'rejected', by: 'Finance Manager', date: '2024-01-19', notes: 'Exceeds Q1 budget allocation' }
      ]
    },
    {
      id: 'ORD-2024-004',
      rfqReference: 'RFQ-2024-042',
      vendor: 'Marketing Materials Ltd',
      orderDate: '2024-01-10',
      totalAmount: 15000,
      status: 'in_progress',
      lineItems: [
        { product: 'Trade Show Banners', quantity: 10, price: 500, subtotal: 5000 },
        { product: 'Business Cards', quantity: 5000, price: 0.5, subtotal: 2500 },
        { product: 'Brochures', quantity: 2000, price: 2, subtotal: 4000 },
        { product: 'Design Services', quantity: 1, price: 3500, subtotal: 3500 }
      ],
      vendorDetails: {
        name: 'Marketing Materials Ltd',
        contact: 'Lisa Anderson',
        email: 'lisa.anderson@marketingmaterials.com',
        phone: '+1 (555) 234-5678',
        address: '321 Design Street, Creative City, CC 24680'
      },
      deliveryTerms: {
        deliveryDate: '2024-01-30',
        location: 'TechCorp Inc. Marketing Department',
        terms: 'Rush order, 50% deposit required'
      },
      approvalHistory: [
        { action: 'approved', by: 'Marketing Director', date: '2024-01-11', notes: 'Approved for upcoming trade show' }
      ]
    }
  ]);

  // Filter orders based on search and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.rfqReference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesVendor = vendorFilter === 'all' || order.vendor === vendorFilter;
    
    return matchesSearch && matchesStatus && matchesVendor;
  });

  // Get unique vendors for filter
  const uniqueVendors = [...new Set(orders.map(order => order.vendor))];

  // Handler functions
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleApprove = (orderId) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { 
              ...order, 
              status: 'approved',
              approvalHistory: [
                ...order.approvalHistory,
                { 
                  action: 'approved', 
                  by: user.name, 
                  date: new Date().toISOString().split('T')[0], 
                  notes: 'Approved via dashboard' 
                }
              ]
            }
          : order
      )
    );
    
    alert(`Order ${orderId} has been approved successfully!\n\nThe vendor will be notified and the order will proceed to fulfillment stage.`);
  };

  const handleReject = (orderId) => {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId 
            ? { 
                ...order, 
                status: 'rejected',
                approvalHistory: [
                  ...order.approvalHistory,
                  { 
                    action: 'rejected', 
                    by: user.name, 
                    date: new Date().toISOString().split('T')[0], 
                    notes: reason 
                  }
                ]
              }
            : order
        )
      );
      
      alert(`Order ${orderId} has been rejected.\n\nReason: ${reason}\n\nThe vendor will be notified of the rejection.`);
    }
  };

  const handleDownloadPDF = (orderId) => {
    alert(`Generating PDF for Order ${orderId}...\n\nThis would typically:\n- Generate a comprehensive order document\n- Include all line items and terms\n- Provide vendor and delivery information\n- Download as PDF file`);
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

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
                <h1 className="text-xl lg:text-2xl font-bold text-white">Orders & Approvals</h1>
                <p className="text-gray-400 text-xs lg:text-sm">Manage and approve your procurement orders</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all relative">
                <Bell size={20} className="text-gray-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">3</span>
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

        {/* Page content wrapper: center on small screens so it doesn't become a narrow column */}
        <div className="p-4 lg:p-8 max-w-screen-sm sm:max-w-lg md:max-w-full mx-auto lg:mx-0">
          {/* Notifications Banner */}
          <div className="bg-orange-600/10 border border-orange-500/30 rounded-xl p-3 mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-orange-400" size={18} />
              <div>
                <p className="text-orange-400 font-medium text-sm">⚠️ You have {orderStats.awaitingApproval} orders awaiting your approval</p>
                <p className="text-orange-300/70 text-xs">Review pending orders to keep your procurement process moving smoothly.</p>
              </div>
            </div>
          </div>

          {/* Top Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* keep the card contents — slightly reduced padding for small screens */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Package className="text-blue-400" size={18} />
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="text-green-400" size={14} />
                  <span className="text-green-400 text-xs font-medium">+8%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-0">{orderStats.totalOrders}</h3>
              <p className="text-gray-400 text-xs">Total Orders</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800/50 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="text-yellow-400" size={18} />
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-0">{orderStats.awaitingApproval}</h3>
              <p className="text-gray-400 text-xs">Awaiting Approval</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800/50 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-green-400" size={18} />
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="text-green-400" size={14} />
                  <span className="text-green-400 text-xs font-medium">+15%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-0">${orderStats.approvedOrdersValue.toLocaleString()}</h3>
              <p className="text-gray-400 text-xs">Approved Orders Value</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-4 border border-gray-800/50 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <XCircle className="text-red-400" size={18} />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-red-400 text-xs font-medium">-2%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-0">{orderStats.rejectedOrders}</h3>
              <p className="text-gray-400 text-xs">Rejected Orders</p>
            </div>
          </div>

          {/* Filters & Search Section */}
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-sm p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by Order ID or RFQ Reference..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 pr-8 text-white text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="in_progress">In Progress</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>

                <div className="relative">
                  <select
                    value={vendorFilter}
                    onChange={(e) => setVendorFilter(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 pr-8 text-white text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Vendors</option>
                    {uniqueVendors.map(vendor => (
                      <option key={vendor} value={vendor}>{vendor}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>

                <div className="relative">
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 pr-8 text-white text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Dates</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* ORDERS: mobile card list (hidden on md+) */}
          <div className="space-y-3 md:hidden mb-6">
            {filteredOrders.map(order => (
              <div key={order.id} className="bg-gray-900/60 rounded-lg border border-gray-800/50 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold">{order.id}</h4>
                      <span className="text-gray-400 text-xs">{order.rfqReference}</span>
                    </div>
                    <div className="text-gray-300 text-sm">{order.vendor}</div>
                    <div className="text-gray-500 text-xs mt-2">Date: {order.orderDate}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-white font-bold">${order.totalAmount.toLocaleString()}</div>
                    <div className="mt-2">
                      <StatusBadge status={order.status} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => handleViewDetails(order)}
                    className="flex-1 py-2 text-sm bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-all"
                  >
                    View
                  </button>

                  {order.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="py-2 px-3 text-sm bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-400 transition-all"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="py-2 px-3 text-sm bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 transition-all"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handleDownloadPDF(order.id)}
                    className="py-2 px-3 text-sm bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-400 transition-all"
                  >
                    PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ORDERS: table for md+ */}
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-700/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Order ID</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">RFQ Reference</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Vendor</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Order Date</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Total Amount</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Status</th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-800/30 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-white font-medium">{order.id}</td>
                      <td className="py-4 px-6 text-gray-300">{order.rfqReference}</td>
                      <td className="py-4 px-6 text-gray-300">{order.vendor}</td>
                      <td className="py-4 px-6 text-gray-300">{order.orderDate}</td>
                      <td className="py-4 px-6 text-white font-semibold">${order.totalAmount.toLocaleString()}</td>
                      <td className="py-4 px-6">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(order)}
                            className="p-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-all"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>

                          {order.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleApprove(order.id)}
                                className="p-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-400 transition-all"
                                title="Approve"
                              >
                                <Check size={16} />
                              </button>

                              <button
                                onClick={() => handleReject(order.id)}
                                className="p-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 transition-all"
                                title="Reject"
                              >
                                <X size={16} />
                              </button>
                            </>
                          )}

                          <button
                            onClick={() => handleDownloadPDF(order.id)}
                            className="p-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-400 transition-all"
                            title="Download PDF"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <Package className="mx-auto text-gray-500 mb-4" size={48} />
                <p className="text-gray-400 text-lg mb-2">No orders found</p>
                <p className="text-gray-500 text-sm">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Order Details Modal */}
    {isModalOpen && selectedOrder && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {/* ... keep modal content unchanged but ensure widths are responsive ... */}
          {/* (use the same modal content you already have – it will inherit responsive sizes above) */}
        </div>
      </div>
    )}
  </div>
);
};

export default ClientOrdersApprovals;
