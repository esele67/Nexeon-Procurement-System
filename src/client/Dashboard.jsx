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

const Play = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const ArrowRight = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
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

// RFQ Status Donut Chart
const RFQStatusChart = ({ data }) => {
  const width = 350;
  const height = 250;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = 80;
  const innerRadius = 50;
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  let currentAngle = 0;
  const segments = data.map((item, index) => {
    const angle = (item.value / total) * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    
    const largeArc = angle > Math.PI ? 1 : 0;
    
    const x1 = centerX + outerRadius * Math.cos(startAngle);
    const y1 = centerY + outerRadius * Math.sin(startAngle);
    const x2 = centerX + outerRadius * Math.cos(endAngle);
    const y2 = centerY + outerRadius * Math.sin(endAngle);
    
    const x3 = centerX + innerRadius * Math.cos(endAngle);
    const y3 = centerY + innerRadius * Math.sin(endAngle);
    const x4 = centerX + innerRadius * Math.cos(startAngle);
    const y4 = centerY + innerRadius * Math.sin(startAngle);
    
    const pathData = [
      `M ${x1} ${y1}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${x3} ${y3}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}`,
      'Z'
    ].join(' ');
    
    const labelAngle = (startAngle + endAngle) / 2;
    const labelRadius = (outerRadius + innerRadius) / 2;
    const labelX = centerX + labelRadius * Math.cos(labelAngle);
    const labelY = centerY + labelRadius * Math.sin(labelAngle);
    
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
    
    return {
      pathData,
      color: colors[index % colors.length],
      labelX,
      labelY,
      percentage: Math.round((item.value / total) * 100),
      ...item
    };
  });

  return (
    <div className="w-full h-64 flex items-center">
      <div className="flex-1">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          {segments.map((segment, index) => (
            <g key={index}>
              <path
                d={segment.pathData}
                fill={segment.color}
                className="hover:opacity-80 transition-opacity cursor-pointer"
                opacity="0.9"
              />
              <text
                x={segment.labelX}
                y={segment.labelY}
                textAnchor="middle"
                className="text-xs fill-white font-semibold"
                dy="0.35em"
              >
                {segment.percentage}%
              </text>
            </g>
          ))}
          
          <text
            x={centerX}
            y={centerY - 6}
            textAnchor="middle"
            className="text-lg fill-white font-bold"
          >
            {total}
          </text>
          <text
            x={centerX}
            y={centerY + 8}
            textAnchor="middle"
            className="text-xs fill-gray-400 font-medium"
          >
            Total RFQs
          </text>
        </svg>
      </div>
      
      <div className="ml-4 space-y-2">
        {data.map((item, index) => {
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
          return (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <div>
                <div className="text-white text-sm font-medium">{item.status}</div>
                <div className="text-gray-400 text-xs">{item.value} RFQs</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// RFQ Trend Line Chart
const RFQTrendChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const width = 400;
  const height = 200;
  const padding = 40;
  
  const points = data.map((item, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((item.value / maxValue) * (height - padding * 2));
    return { x, y, ...item };
  });

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  return (
    <div className="w-full h-52">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          <linearGradient id="rfqTrendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 5 }, (_, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + (i * (height - padding * 2)) / 4}
            x2={width - padding}
            y2={padding + (i * (height - padding * 2)) / 4}
            stroke="#374151"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        
        <path
          d={`${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
          fill="url(#rfqTrendGradient)"
          opacity="0.1"
        />
        
        <path
          d={pathData}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#3B82F6"
            stroke="#1F2937"
            strokeWidth="2"
            className="hover:r-6 transition-all cursor-pointer"
          />
        ))}
        
        {points.map((point, index) => (
          <text
            key={index}
            x={point.x}
            y={height - padding + 15}
            textAnchor="middle"
            className="text-xs fill-gray-400 font-medium"
          >
            {point.month}
          </text>
        ))}
      </svg>
    </div>
  );
};

// Quick Action Floating Button
const QuickActionButton = ({ icon, label, onClick, color = "blue" }) => (
  <button
    onClick={onClick}
    className={`fixed bottom-6 right-6 w-16 h-16 bg-${color}-600 hover:bg-${color}-500 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 z-50 group`}
  >
    {icon}
    <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </div>
  </button>
);

const ClientDashboard = () => {
  const [user, setUser] = useState({ name: 'John Smith', role: 'client', company: 'TechCorp Inc.' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Updated mock data for Four Key Client Stats
  const clientStats = {
    totalRFQs: 45,
    pendingQuotes: 8,
    approvedOrders: 23,
    outstandingPayments: 15250
  };

  const statusChartData = [
    { status: 'Draft', value: 2 },
    { status: 'Sent', value: 3 },
    { status: 'Quoted', value: 4 },
    { status: 'Approved', value: 3 }
  ];

  const trendData = [
    { month: 'Aug', value: 2 },
    { month: 'Sep', value: 4 },
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 5 },
    { month: 'Dec', value: 6 }
  ];

  const recentActivities = [
    { id: 1, type: 'quote_received', message: 'New quote received for Office Furniture RFQ', time: '2 hours ago', rfqId: 1 },
    { id: 2, type: 'rfq_created', message: 'Created new RFQ for IT Equipment', time: '1 day ago', rfqId: 2 },
    { id: 3, type: 'rfq_approved', message: 'Marketing Materials RFQ approved', time: '2 days ago', rfqId: 3 },
    { id: 4, type: 'quote_received', message: 'Quote received for Cloud Infrastructure', time: '3 days ago', rfqId: 4 }
  ];

  const pendingActions = [
    { id: 1, message: 'You have 3 new quotes to review', action: 'Review Quotes', link: '/client/quotes' },
    // { id: 2, message: '1 RFQ requires your approval', action: 'View RFQ', link: '/rfqs/pending' }
  ];

  const handleStatCardClick = (status) => {
    setSelectedFilter(status);
    // Navigate to RFQs with filter
    console.log(`Filter RFQs by: ${status}`);
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  // Handler functions for buttons
  const handleReviewQuotes = (link) => {
    window.navigate(link);
  };

  const handleViewRFQ = () => {
    alert('Navigating to RFQ Details page...\n\nThis would typically:\n- Show RFQ specifications\n- Display current status\n- List received quotes\n- Show vendor responses');
  };

  const handleViewActivity = (activity) => {
    // alert(`Viewing details for: ${activity.message}\n\nRFQ ID: ${activity.rfqId}\nType: ${activity.type}\nTime: ${activity.time}\n\nThis would typically navigate to the specific RFQ or quote details page.`);
    window.navigate('/client/rfq/my');
  };

  const handleCreateNewRFQ = () => {
    localStorage.setItem('showCreateModal', true);
    window.navigate('/client/rfq/my');
  };

  const handleViewQuotes = () => {
    window.navigate('/client/quotes');
  };

  const handleMyOrders = () => {
    window.navigate('/client/orders-approvals');
  };

  const handleProfileSettings = () => {
    alert('Navigating to Profile & Settings page...\n\nThis would typically:\n- Edit profile information\n- Manage notification preferences\n- Update company details\n- Configure security settings');
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
                  <h1 className="text-xl lg:text-2xl font-bold text-white">
                    Welcome back, {user.name}
                  </h1>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {user.company} • Manage your procurement requests and track progress
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
            {/* Overview Cards (Four Key Client Stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div 
                onClick={() => handleStatCardClick('total_rfqs')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-400" size={20} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400 text-xs font-medium">+12%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{clientStats.totalRFQs}</h3>
                <p className="text-gray-400 text-sm">Total RFQs Created</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('pending_quotes')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-yellow-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-yellow-400" size={20} />
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{clientStats.pendingQuotes}</h3>
                <p className="text-gray-400 text-sm">Pending Quotes</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('approved_orders')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400 text-xs font-medium">+8%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{clientStats.approvedOrders}</h3>
                <p className="text-gray-400 text-sm">Approved Orders</p>
              </div>

              <div 
                onClick={() => handleStatCardClick('outstanding_payments')}
                className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-red-500/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-red-400" size={20} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="text-red-400" size={16} />
                    <span className="text-red-400 text-xs font-medium">Due</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${clientStats.outstandingPayments.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Outstanding Payments</p>
              </div>
            </div>

            {/* Pending Actions Widget */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-orange-400" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Pending Actions</h3>
                  <p className="text-gray-400 text-sm">Items requiring your attention</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {pendingActions.map((action) => (
                  <div key={action.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm">{action.message}</span>
                    </div>
                    <button 
                      onClick={action.action === 'Review Quotes' ? () => handleReviewQuotes(action.link) : handleViewRFQ}
                      className="px-4 py-2 bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 rounded-lg text-orange-400 text-sm font-medium transition-all"
                    >
                      {action.action}
                      <ArrowRight className="inline ml-1" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Insights Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* RFQ Status Distribution */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">RFQ Status Distribution</h3>
                    <p className="text-gray-400 text-sm">Current status breakdown</p>
                  </div>
                </div>
                <RFQStatusChart data={statusChartData} />
              </div>

              {/* RFQ Creation Trend */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">RFQ Creation Trend</h3>
                    <p className="text-gray-400 text-sm">Monthly activity overview</p>
                  </div>
                </div>
                <RFQTrendChart data={trendData} />
              </div>
            </div>

            {/* Media & Engagement + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Media & Engagement Section */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Play className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Quick Tutorial</h3>
                    <p className="text-gray-400 text-sm">Getting started guide</p>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/20 overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-32 object-cover"
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTExODI3Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM5MzMzRUEiLz4KPHN2ZyB4PSIxODUiIHk9Ijg1IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+Cjxwb2x5Z29uIHBvaW50cz0iNSwzIDE5LDEyIDUsMjEiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K"
                  >
                    <source src="../../public/vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2">How to Create Your First RFQ</h4>
                  <p className="text-gray-400 text-sm mb-3">Learn the basics of creating and managing RFQs in our system.</p>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 transition-colors">
                    Watch Tutorial <Play size={12} />
                  </button>
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div className="lg:col-span-2 bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                    <p className="text-gray-400 text-sm">Your latest procurement activities</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'quote_received' ? 'bg-blue-600/20 border-2 border-blue-500/30' :
                          activity.type === 'rfq_created' ? 'bg-green-600/20 border-2 border-green-500/30' :
                          activity.type === 'rfq_approved' ? 'bg-purple-600/20 border-2 border-purple-500/30' :
                          'bg-gray-600/20 border-2 border-gray-500/30'
                        }`}>
                          {activity.type === 'quote_received' && <Quote className="text-blue-400" size={14} />}
                          {activity.type === 'rfq_created' && <Plus className="text-green-400" size={14} />}
                          {activity.type === 'rfq_approved' && <CheckCircle className="text-purple-400" size={14} />}
                        </div>
                        {index < recentActivities.length - 1 && (
                          <div className="w-0.5 h-8 bg-gray-700/50 mt-2"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium mb-1">{activity.message}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                      
                      <button 
                        onClick={() => handleViewActivity(activity)}
                        className="px-3 py-1 bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 rounded-md text-gray-300 text-xs transition-all"
                      >
                        <Eye size={12} className="inline mr-1" />
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Access Shortcuts */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Plus className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                  <p className="text-gray-400 text-sm">Commonly used features</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                  onClick={handleCreateNewRFQ}
                  className="flex flex-col items-center gap-3 p-6 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-400/40 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plus className="text-blue-400" size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm">Create New RFQ</h4>
                    <p className="text-gray-400 text-xs">Start procurement request</p>
                  </div>
                </button>

                <button 
                  onClick={handleViewQuotes}
                  className="flex flex-col items-center gap-3 p-6 bg-green-600/10 hover:bg-green-600/20 border border-green-500/20 hover:border-green-400/40 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Quote className="text-green-400" size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm">View Quotes</h4>
                    <p className="text-gray-400 text-xs">Review proposals</p>
                  </div>
                </button>

                <button 
                  onClick={handleMyOrders}
                  className="flex flex-col items-center gap-3 p-6 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-400/40 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingCart className="text-purple-400" size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm">My Orders</h4>
                    <p className="text-gray-400 text-xs">Track progress</p>
                  </div>
                </button>

                <button 
                  onClick={handleProfileSettings}
                  className="flex flex-col items-center gap-3 p-6 bg-orange-600/10 hover:bg-orange-600/20 border border-orange-500/20 hover:border-orange-400/40 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Settings className="text-orange-400" size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm">Profile & Settings</h4>
                    <p className="text-gray-400 text-xs">Manage account</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Action Button */}
      <QuickActionButton
        icon={<Plus className="text-white" size={24} />}
        label="Create New RFQ"
        onClick={handleCreateNewRFQ}
      />
    </div>
  );
};

export default ClientDashboard;
