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

const TrendingDown = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23,18 13.5,8.5 8.5,13.5 1,6"/>
    <polyline points="17,18 23,18 23,12"/>
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

const TrendingUp = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
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

const BarChart3 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
);

const LineChart = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 3v18h18"/>
    <path d="M7 12l4-4 4 4 4-4"/>
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

// Professional Chart Components - Updated with new data

// Vendors by Category Chart (Donut Chart)
const VendorsByCategoryChart = ({ data }) => {
  const width = 400;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = 100;
  const innerRadius = 60;
  
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
    
    // Calculate label position
    const labelAngle = (startAngle + endAngle) / 2;
    const labelRadius = (outerRadius + innerRadius) / 2;
    const labelX = centerX + labelRadius * Math.cos(labelAngle);
    const labelY = centerY + labelRadius * Math.sin(labelAngle);
    
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
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
    <div className="w-full h-80 flex items-center">
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
          
          {/* Center text */}
          <text
            x={centerX}
            y={centerY - 8}
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
            Total Vendors
          </text>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="ml-6 space-y-3">
        {data.map((item, index) => {
          const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
          return (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <div>
                <div className="text-white text-sm font-medium">{item.category}</div>
                <div className="text-gray-400 text-xs">{item.value} vendors</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Vendor Growth Over Time Chart
const VendorGrowthChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const width = 500;
  const height = 300;
  const padding = 60;
  
  const points = data.map((item, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((item.value / maxValue) * (height - padding * 2));
    return { x, y, ...item };
  });

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  return (
    <div className="w-full h-80">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {/* Grid lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + (i * (height - padding * 2)) / 5}
            x2={width - padding}
            y2={padding + (i * (height - padding * 2)) / 5}
            stroke="#374151"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        
        {/* Vertical grid lines */}
        {points.map((point, index) => (
          <line
            key={index}
            x1={point.x}
            y1={padding}
            x2={point.x}
            y2={height - padding}
            stroke="#374151"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
        
        {/* Area under curve */}
        <path
          d={`${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
          fill="url(#vendorGradient)"
          opacity="0.1"
        />
        
        {/* Main line */}
        <path
          d={pathData}
          fill="none"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#10B981"
            stroke="#1F2937"
            strokeWidth="2"
            className="hover:r-7 transition-all cursor-pointer"
          />
        ))}
        
        {/* X-axis labels */}
        {points.map((point, index) => (
          <text
            key={index}
            x={point.x}
            y={height - padding + 20}
            textAnchor="middle"
            className="text-xs fill-gray-400 font-medium"
          >
            {point.month}
          </text>
        ))}
        
        {/* Y-axis labels */}
        {Array.from({ length: 6 }, (_, i) => {
          const value = Math.round((maxValue / 5) * (5 - i));
          return (
            <text
              key={i}
              x={padding - 10}
              y={padding + (i * (height - padding * 2)) / 5 + 5}
              textAnchor="end"
              className="text-xs fill-gray-400 font-medium"
            >
              {value}
            </text>
          );
        })}
        
        <defs>
          <linearGradient id="vendorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
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

const Dashboard = () => {
  // Toggle between 'client' and 'admin' to test both views
  const [user, setUser] = useState({ name: 'Yehor', role: 'admin' }); // Change to 'client' to test client view
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [rfqs, setRfqs] = useState([
    {
      id: 1,
      title: 'Office Furniture Procurement',
      description: 'Need ergonomic chairs and standing desks for 50 employees',
      budget: 12340,
      requiredDate: '2025-09-15',
      status: 'active',
      createdAt: '2025-08-20',
      quotesCount: 3,
      clientName: 'TechCorp Inc.'
    },
    {
      id: 2,
      title: 'IT Equipment & Software',
      description: 'Laptops, monitors, and software licenses for development team',
      budget: 25000,
      requiredDate: '2025-10-01',
      status: 'pending',
      createdAt: '2025-08-22',
      quotesCount: 1,
      clientName: 'StartupXYZ'
    },
    {
      id: 3,
      title: 'Marketing Materials Design',
      description: 'Brand identity, business cards, and promotional materials',
      budget: 5000,
      requiredDate: '2025-09-30',
      status: 'completed',
      createdAt: '2025-08-18',
      quotesCount: 5,
      clientName: 'Creative Agency'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Setup',
      description: 'AWS setup, security configuration, and monitoring tools',
      budget: 18500,
      requiredDate: '2025-10-15',
      status: 'active',
      createdAt: '2025-08-25',
      quotesCount: 2,
      clientName: 'DataFlow Ltd'
    }
  ]);
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data for charts - updated with new chart types
  const vendorsByCategoryData = [
    { category: 'Food', value: 25 },
    { category: 'Electronics', value: 18 },
    { category: 'Fashion', value: 12 },
    { category: 'Services', value: 15 },
    { category: 'Construction', value: 8 }
  ];

  const vendorGrowthData = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 8 },
    { month: 'Mar', value: 12 },
    { month: 'Apr', value: 15 },
    { month: 'May', value: 22 },
    { month: 'Jun', value: 28 }
  ];

  // Replace existing handleRFQClick
const handleRFQClick = (rfqId) => {
  // SPA navigation to RFQ details
  window.navigate(`/rfq/${rfqId}`);
};

// Replace existing handleViewRFQDetails
const handleViewRFQDetails = (rfqId, e) => {
  e?.stopPropagation();
  window.navigate(`/rfq/${rfqId}`);
};


  const handleNewRFQ = () => {
    console.log('Navigate to new RFQ form');
    // In real app: navigate('/rfq/new');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'completed': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const filteredRFQs = filterStatus === 'all' ? rfqs : rfqs.filter(rfq => rfq.status === filterStatus);

  // Role-specific metrics
  const getMetrics = () => {
    if (user.role === 'admin') {
      return {
        total: rfqs.length,
        active: rfqs.filter(rfq => rfq.status === 'active').length,
        pending: rfqs.filter(rfq => rfq.status === 'pending').length,
        completed: rfqs.filter(rfq => rfq.status === 'completed').length,
        totalBudget: rfqs.reduce((sum, rfq) => sum + rfq.budget, 0)
      };
    } else {
      // Client sees only their own RFQs
      const clientRfqs = rfqs.filter(rfq => rfq.clientName === 'TechCorp Inc.'); // Mock client filtering
      return {
        total: clientRfqs.length,
        active: clientRfqs.filter(rfq => rfq.status === 'active').length,
        totalBudget: clientRfqs.reduce((sum, rfq) => sum + rfq.budget, 0),
        savings: 15 // Mock savings percentage
      };
    }
  };

  const metrics = getMetrics();

  const handleLogout = () => {
    console.log('Logout');
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

        {/* Sidebar - Safe version for Dashboard */}
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
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-white">
                    Welcome, {user.name}
                  </h1>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {user.role === 'admin' 
                      ? 'Manage procurement operations and vendor relationships' 
                      : 'Track your procurement requests and approvals'
                    }
                  </p>
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

          <div className="p-4 lg:p-8">
            {/* Improved RFQ Management Cards - Enhanced Design */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  {user.role === 'admin' ? (
    <>
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <FileText className="text-blue-400" size={20} />
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-green-400 text-xs font-medium">+5.2%</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.total}</h3>
        <p className="text-gray-400 text-sm">Total RFQs</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <Clock className="text-blue-400" size={20} />
          </div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.active}</h3>
        <p className="text-gray-400 text-sm">Active RFQs</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <Eye className="text-blue-400" size={20} />
          </div>
          {metrics.pending > 0 && (
            <div className="flex items-center space-x-1">
              <AlertCircle className="text-orange-400" size={16} />
              <span className="text-orange-400 text-xs font-medium">Review</span>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.pending}</h3>
        <p className="text-gray-400 text-sm">Pending Review</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <CheckCircle className="text-blue-400" size={20} />
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-green-400 text-xs font-medium">+8.1%</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.completed}</h3>
        <p className="text-gray-400 text-sm">Completed</p>
      </div>
    </>
  ) : (
    <>
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <DollarSign className="text-blue-400" size={20} />
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-green-400 text-xs font-medium">+12.3%</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">${metrics.totalBudget.toLocaleString()}</h3>
        <p className="text-gray-400 text-sm">Total Budget</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <Eye className="text-blue-400" size={20} />
          </div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.active}</h3>
        <p className="text-gray-400 text-sm">Active RFQs</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <TrendingDown className="text-blue-400" size={20} />
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-green-400 text-xs font-medium">{metrics.savings}%</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.savings}%</h3>
        <p className="text-gray-400 text-sm">Cost Savings</p>
      </div>

      <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <FileText className="text-blue-400" size={20} />
          </div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{metrics.total}</h3>
        <p className="text-gray-400 text-sm">Total RFQs</p>
      </div>
    </>
  )}
</div>

            {/* Two Professional Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Vendors by Category */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Vendors by Category</h3>
                    <p className="text-gray-400 text-sm">Distribution across categories</p>
                  </div>
                </div>
                <VendorsByCategoryChart data={vendorsByCategoryData} />
              </div>

              {/* Vendor Growth Over Time */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <LineChart className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Vendor Growth Over Time</h3>
                    <p className="text-gray-400 text-sm">New vendors per month</p>
                  </div>
                </div>
                <VendorGrowthChart data={vendorGrowthData} />
              </div>
            </div>

            {/* RFQ Section */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6">
              {/* Header with Role-Aware CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-xl font-semibold text-white">
                  {user.role === 'admin' ? 'All Request for Quotations' : 'My Request for Quotations'}
                </h2>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Status Filter */}
                  <div className="relative">
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-2 text-white text-sm pr-8 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer w-full sm:w-auto"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                    <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                  </div>

                  {/* Only show "New RFQ" button for clients */}
                  {user.role === 'client' && (
                    <button
                      onClick={handleNewRFQ}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-semibold transition-all shadow-lg"
                    >
                      <Plus size={16} />
                      New RFQ
                    </button>
                  )}
                </div>
              </div>

              {/* RFQ List */}
              <div className="space-y-3">
                {filteredRFQs.map((rfq) => (
                  <div
                    key={rfq.id}
                    onClick={() => handleRFQClick(rfq.id)}
                    className="bg-gray-700/30 hover:bg-gray-600/40 rounded-lg p-5 border border-gray-600/30 hover:border-blue-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <h3 className="text-white text-base font-medium group-hover:text-blue-300 transition-colors">
                            {rfq.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border self-start ${getStatusColor(rfq.status)}`}>
                            {rfq.status}
                          </span>
                        </div>
                        
                        {/* Show description and client info for admin */}
                        {user.role === 'admin' && (
                          <div className="mb-3">
                            <p className="text-gray-300 text-sm mb-1">{rfq.description}</p>
                            <p className="text-gray-500 text-xs">Client: {rfq.clientName}</p>
                          </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <DollarSign size={14} />
                            ${rfq.budget.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            Due {new Date(rfq.requiredDate).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={14} />
                            {rfq.quotesCount} quotes
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {/* View RFQ Details Button */}
                        <button
                          onClick={(e) => handleViewRFQDetails(rfq.id, e)}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-lg text-blue-400 hover:text-blue-300 text-sm font-medium transition-all"
                        >
                          <Eye size={16} />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredRFQs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">No RFQs found</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {filterStatus === 'all' 
                      ? (user.role === 'admin' 
                          ? "No RFQs have been created yet." 
                          : "You haven't created any RFQs yet.")
                      : `No RFQs with status "${filterStatus}".`
                    }
                  </p>
                  {user.role === 'client' && filterStatus === 'all' && (
                    <button
                      onClick={handleNewRFQ}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all shadow-lg"
                    >
                      Create Your First RFQ
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
