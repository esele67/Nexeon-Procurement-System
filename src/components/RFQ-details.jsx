import React, { useState, useEffect } from 'react';

// Simple SVG Icons as components
const User = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const ArrowLeft = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const Bell = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
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

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CheckCircle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const Plus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 5v14"/>
    <path d="M5 12h14"/>
  </svg>
);

const Edit = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Send = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
);

const Copy = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

const Star = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const X = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Menu = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
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

const Users = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Search = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const Settings = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const LogOut = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16,17 21,12 16,7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
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
      <div className={`w-10 h-10 bg-gradient-to-br ${colors[0]} ${colors[1]} rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 transform ${
        isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
      }`}>
        {getInitials(name)}
      </div>
      
      {/* Animated ring */}
      <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-60'
      }`}></div>
      
      {/* Pulse effect */}
      <div className={`absolute inset-0 rounded-full bg-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
      }`}></div>
    </div>
  );
};

const RFQDetail = () => {
  // Mock user - change between 'client' and 'admin' to test different views
  const [user, setUser] = useState({ name: 'Yehor', role: 'admin' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [selectedVendors, setSelectedVendors] = useState([]);

  // Mock RFQ data
  const rfq = {
    id: 1,
    title: 'Office Furniture Procurement',
    description: 'We need ergonomic chairs and standing desks for 50 employees in our new office space. Looking for modern, durable furniture that matches our company aesthetic.',
    budget: 12340,
    requiredDate: '2025-09-15',
    status: 'active',
    createdAt: '2025-08-20',
    clientName: 'TechCorp Inc.',
    attachments: ['office-layout.pdf', 'specifications.docx']
  };

  // Mock timeline data
  const timeline = [
    { id: 1, type: 'created', message: 'RFQ created', date: '2025-08-20 10:00', user: 'Client' },
    { id: 2, type: 'sent', message: 'RFQ sent to 3 vendors', date: '2025-08-20 14:30', user: 'Admin' },
    { id: 3, type: 'quote', message: 'Quote received from Modern Office Co.', date: '2025-08-22 09:15', user: 'System' },
    { id: 4, type: 'quote', message: 'Quote received from Workspace Solutions', date: '2025-08-23 11:20', user: 'System' }
  ];

  // Mock quotes data
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      vendorName: 'Modern Office Co.',
      price: 11500,
      leadTime: '3-4 weeks',
      score: 92,
      notes: 'Premium ergonomic chairs with 10-year warranty',
      status: 'pending'
    },
    {
      id: 2,
      vendorName: 'Workspace Solutions',
      price: 13200,
      leadTime: '2-3 weeks',
      score: 88,
      notes: 'High-quality standing desks with memory settings',
      status: 'pending'
    }
  ]);

  // Mock vendors for selection
  const vendors = [
    { id: 1, name: 'Modern Office Co.', rating: 4.8, specialty: 'Ergonomic Furniture' },
    { id: 2, name: 'Workspace Solutions', rating: 4.6, specialty: 'Office Equipment' },
    { id: 3, name: 'Elite Furniture Group', rating: 4.9, specialty: 'Premium Office Furniture' },
    { id: 4, name: 'Business Interiors', rating: 4.4, specialty: 'Complete Office Solutions' }
  ];

  const handleBack = () => {
    console.log('Navigate back to dashboard');
    // In real app: navigate('/dashboard');
  };

  const handleDashboardClick = () => {
    console.log('Navigate to dashboard');
    // In real app: navigate('/dashboard');
  };

  const handleApproveQuote = (quoteId) => {
    setQuotes(prev => prev.map(q => 
      q.id === quoteId ? { ...q, status: 'approved' } : q
    ));
    console.log('Quote approved:', quoteId);
  };

  const handleSendRFQ = () => {
    console.log('Sending RFQ to vendors:', selectedVendors);
    setShowVendorModal(false);
    setSelectedVendors([]);
  };

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'created': return <Plus className="text-blue-400" size={16} />;
      case 'sent': return <Send className="text-purple-400" size={16} />;
      case 'quote': return <DollarSign className="text-green-400" size={16} />;
      default: return <Clock className="text-gray-400" size={16} />;
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  // --- Improved Email Generator Component ---
  const EmailGenerator = ({ rfq, vendors, selectedVendors }) => {
    const [useSelected, setUseSelected] = useState(true);
    const [manualRecipients, setManualRecipients] = useState('');
    const [subject, setSubject] = useState(`Request for Quotation - ${rfq.title}`);
    const defaultBodyTemplate = `Hello {{vendor}},\n\nWe are requesting a quotation for the project:\nProject: ${rfq.title}\nDescription: ${rfq.description}\nBudget Range: $${rfq.budget.toLocaleString()}\nRequired Date: ${new Date(rfq.requiredDate).toLocaleDateString()}\n\nPlease provide your best quote including itemized pricing, lead time, warranty information and any additional services.\n\nKind regards,\n${rfq.clientName}`;
    const [body, setBody] = useState(defaultBodyTemplate);

    const vendorEmail = (vendor) => {
      // Create a predictable placeholder email for the mock vendors
      return `${vendor.name.toLowerCase().replace(/[^a-z0-9]/g, '')}@vendor.example.com`;
    };

    const recipientsList = () => {
      if (useSelected && selectedVendors.length > 0) {
        return selectedVendors
          .map(id => vendors.find(v => v.id === id))
          .filter(Boolean)
          .map(vendorEmail)
          .join(',');
      }
      return manualRecipients.split(',').map(s => s.trim()).filter(Boolean).join(',');
    };

    const previewBodyFor = (recipient) => {
      const vendorName = vendors.find(v => vendorEmail(v) === recipient)?.name || 'Vendor';
      return body.replace(/{{vendor}}/g, vendorName).replace(/{{rfq_title}}/g, rfq.title);
    };

    const handleCopy = async () => {
      const to = recipientsList();
      const text = `Subject: ${subject}\nTo: ${to}\n\n${previewBodyFor(to.split(',')[0] || '')}`;
      await navigator.clipboard.writeText(text);
      console.log('Email copied');
    };

    const handleOpenMailClient = () => {
      const to = recipientsList();
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailto, '_blank');
    };

    const handleDownloadEML = () => {
      const to = recipientsList();
      const content = `To: ${to}\nSubject: ${subject}\n\n${body}`;
      const blob = new Blob([content], { type: 'message/rfc822' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rfq-${rfq.id}.eml`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    };

    const insertTemplate = () => setBody(defaultBodyTemplate);

    return (
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Email Generator</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-all"
            >
              <Copy size={14} />
              Copy
            </button>
            <button
              onClick={handleOpenMailClient}
              className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium transition-all"
            >
              <Send size={14} />
              Open Mail Client
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2">
            <label className="block text-gray-300 text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Recipients</label>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input type="checkbox" checked={useSelected} onChange={() => setUseSelected(!useSelected)} />
                Use selected vendors
              </label>
            </div>
            {!useSelected && (
              <input
                type="text"
                value={manualRecipients}
                onChange={(e) => setManualRecipients(e.target.value)}
                placeholder="comma separated emails"
                className="w-full mt-2 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            )}
            {useSelected && (
              <div className="mt-2 text-gray-300 text-sm">
                {selectedVendors.length === 0 ? 'No vendors selected' : selectedVendors.map(id => vendors.find(v => v.id === id)?.name).join(', ')}
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-gray-300 text-sm font-medium">Body</label>
            <button onClick={insertTemplate} className="text-sm text-blue-400">Insert template</button>
          </div>
          <textarea
            rows={8}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none font-mono"
          />
        </div>

        <div className="flex items-center gap-3">
          <button onClick={handleDownloadEML} className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-all">Download .eml</button>
          <a
            href={`mailto:${encodeURIComponent(recipientsList())}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm font-medium transition-all"
            onClick={(e) => { if (!recipientsList()) { e.preventDefault(); alert('Please enter recipients or select vendors.'); } }}
          >
            Quick Mailto
          </a>
        </div>

        <div className="mt-4 bg-gray-800/50 rounded-lg p-3">
          <h4 className="text-sm text-gray-300 mb-2">Preview (first recipient)</h4>
          <pre className="text-gray-300 text-xs whitespace-pre-wrap font-mono max-h-40 overflow-y-auto">{`To: ${recipientsList()}\nSubject: ${subject}\n\n${previewBodyFor(recipientsList().split(',')[0] || '')}`}</pre>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Dark professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="flex min-h-screen relative z-10">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar - Same as Dashboard */}
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
              
              {/* Role indicator */}
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-md text-xs font-medium ${
                  user.role === 'admin' 
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {user.role === 'admin' ? 'Admin Panel' : 'Client Portal'}
                </span>
              </div>
               
              {/* Mobile close button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

               <nav className="space-y-1">
      {/* Dashboard - Always active on dashboard page */}
      <div className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20">
        <Home size={18} />
        <span className="text-sm font-semibold">Dashboard</span>
      </div>

      {user.role === 'admin' ? (
        <>
        <div
          onClick={() => window.navigate('/admin/clients')}
          className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
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
        <div className="flex-1 lg:ml-64">
          {/* Top Header */}
          <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <Menu size={20} className="text-gray-300" />
                </button>
                <button
                  onClick={() => window.navigate('/dashboard')}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                  aria-label="Back to dashboard"
                >
                  <ArrowLeft size={20} className="text-gray-300" />
                </button>

                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-white">RFQ Details</h1>
                  <p className="text-gray-400 text-xs lg:text-sm">#{rfq.id} - {rfq.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all">
                  <Bell size={20} className="text-gray-300" />
                </button>
                <div className="flex items-center gap-3">
                  <AnimatedAvatar name={user.name} role={user.role} />
                  <div className="hidden sm:block">
                    <span className="text-white font-semibold">{user.name}</span>
                    <p className="text-gray-400 text-xs capitalize">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column - RFQ Details & Timeline */}
              <div className="xl:col-span-5 space-y-6">
                {/* RFQ Summary */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">RFQ Summary</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      rfq.status === 'active' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      rfq.status === 'pending' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      'bg-green-500/10 text-green-400 border border-green-500/20'
                    }`}>
                      {rfq.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-medium mb-2">{rfq.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{rfq.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign size={16} className="text-blue-400" />
                          <span className="text-gray-400 text-xs">Budget</span>
                        </div>
                        <span className="text-white font-semibold">${rfq.budget.toLocaleString()}</span>
                      </div>

                      <div className="bg-gray-700/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} className="text-green-400" />
                          <span className="text-gray-400 text-xs">Due Date</span>
                        </div>
                        <span className="text-white font-semibold">{new Date(rfq.requiredDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {user.role === 'admin' && (
                      <div className="bg-gray-700/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <User size={16} className="text-purple-400" />
                          <span className="text-gray-400 text-xs">Client</span>
                        </div>
                        <span className="text-white font-semibold">{rfq.clientName}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Activity Timeline</h3>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                          {getTimelineIcon(item.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{item.message}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-gray-400 text-xs">{item.date}</span>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-400 text-xs">{item.user}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Admin Tools & Quotes */}
              <div className="xl:col-span-7 space-y-6">
                {/* Vendor Selection */}
                {user.role === 'admin' && (
                  <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Vendor Selection</h3>
                      <button
                        onClick={() => setShowVendorModal(true)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium transition-all"
                      >
                        Select Vendors
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">Choose 2-3 vendors to send this RFQ to for competitive quotes.</p>
                  </div>
                )}

                {/* Improved Email Generator */}
                <EmailGenerator rfq={rfq} vendors={vendors} selectedVendors={selectedVendors} />

                {/* Quotes Section (read-only: removed add/edit buttons) */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Quotes ({quotes.length})</h3>
                  </div>

                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <div key={quote.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-white font-medium mb-1">{quote.vendorName}</h4>
                            <p className="text-gray-300 text-sm mb-2">{quote.notes}</p>
                          </div>
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            quote.status === 'approved' ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-400'
                          }`}>
                            <Star size={12} className={getScoreColor(quote.score)} />
                            {quote.score}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign size={14} className="text-green-400" />
                              <span className="text-gray-400 text-xs">Price</span>
                            </div>
                            <span className="text-white font-semibold">${quote.price.toLocaleString()}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Clock size={14} className="text-blue-400" />
                              <span className="text-gray-400 text-xs">Lead Time</span>
                            </div>
                            <span className="text-white font-semibold">{quote.leadTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {user.role === 'client' && quote.status !== 'approved' && (
                            <button
                              onClick={() => handleApproveQuote(quote.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-sm font-medium transition-all"
                            >
                              <CheckCircle size={14} />
                              Approve
                            </button>
                          )}

                          {quote.status === 'approved' && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-medium">
                              <CheckCircle size={14} />
                              Approved
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {quotes.length === 0 && (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <DollarSign className="text-blue-400" size={24} />
                        </div>
                        <h4 className="text-white font-medium mb-2">No quotes yet</h4>
                        <p className="text-gray-400 text-sm mb-4">
                          {user.role === 'admin' 
                            ? "No vendor quotes have been submitted yet." 
                            : "Waiting for vendor quotes to be submitted."
                          }
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Selection Modal */}
      {showVendorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Select Vendors</h3>
              <button
                onClick={() => setShowVendorModal(false)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {vendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedVendors.includes(vendor.id)
                      ? 'bg-blue-600/20 border-blue-500/40 text-blue-300'
                      : 'bg-gray-700/30 border-gray-600/30 text-gray-300 hover:bg-gray-600/40'
                  }`}
                  onClick={() => {
                    setSelectedVendors(prev => 
                      prev.includes(vendor.id)
                        ? prev.filter(id => id !== vendor.id)
                        : [...prev, vendor.id]
                    );
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{vendor.name}</h4>
                      <p className="text-sm opacity-75">{vendor.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      <span className="text-sm">{vendor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowVendorModal(false)}
                className="flex-1 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSendRFQ}
                disabled={selectedVendors.length === 0}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-all"
              >
                Send RFQ ({selectedVendors.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RFQDetail;
