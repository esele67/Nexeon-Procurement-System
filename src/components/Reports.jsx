import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Simple SVG Icons as components (reusing from your design)
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

const Filter = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
  </svg>
);

const Download = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
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

const TrendingDown = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23,18 13.5,8.5 8.5,13.5 1,6"/>
    <polyline points="17,18 23,18 23,12"/>
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

const BarChart3 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
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

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Printer = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="6,9 6,2 18,2 18,9"/>
    <path d="M6,18H4a2,2 0 0,1-2-2v-5a2,2 0 0,1,2-2H20a2,2 0 0,1,2,2v5a2,2 0 0,1-2,2H18"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
);

const CreditCard = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const AlertTriangle = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
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

// Animated Avatar Component (reused from your design)
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
      
      <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-60'
      }`}></div>
      
      <div className={`absolute inset-0 rounded-full bg-blue-400 transition-all duration-1000 ${
        isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
      }`}></div>
    </div>
  );
};

// Sample data for charts and reports
const revenueData = [
  { name: 'Jan', revenue: 45000, payments: 42000, pending: 3000 },
  { name: 'Feb', revenue: 52000, payments: 48000, pending: 4000 },
  { name: 'Mar', revenue: 48000, payments: 45000, pending: 3000 },
  { name: 'Apr', revenue: 61000, payments: 58000, pending: 3000 },
  { name: 'May', revenue: 55000, payments: 52000, pending: 3000 },
  { name: 'Jun', revenue: 67000, payments: 63000, pending: 4000 },
];

const expenseData = [
  { vendor: 'TechSupply Co', amount: 15000, category: 'IT Equipment' },
  { vendor: 'EduBooks Ltd', amount: 12000, category: 'Books & Supplies' },
  { vendor: 'CleanCorp', amount: 8000, category: 'Maintenance' },
  { vendor: 'SecureGuard', amount: 10000, category: 'Security' },
  { vendor: 'FoodService Inc', amount: 18000, category: 'Catering' },
];

const paymentMethodData = [
  { name: 'Bank Transfer', value: 45, count: 180 },
  { name: 'Card Payment', value: 35, count: 140 },
  { name: 'Cash', value: 20, count: 80 },
];

const transactionData = [
  {
    id: 'TXN001',
    date: '2025-09-01',
    payer: 'Johnson Family',
    vendor: 'School Fees',
    amount: 1500,
    status: 'Paid',
    method: 'Bank Transfer',
    type: 'Revenue'
  },
  {
    id: 'TXN002',
    date: '2025-09-01',
    payer: 'School Admin',
    vendor: 'TechSupply Co',
    amount: 2500,
    status: 'Paid',
    method: 'Bank Transfer',
    type: 'Expense'
  },
  {
    id: 'TXN003',
    date: '2025-09-02',
    payer: 'Williams Family',
    vendor: 'School Fees',
    amount: 1200,
    status: 'Pending',
    method: 'Card Payment',
    type: 'Revenue'
  },
  {
    id: 'TXN004',
    date: '2025-09-02',
    payer: 'School Admin',
    vendor: 'CleanCorp',
    amount: 800,
    status: 'Paid',
    method: 'Cash',
    type: 'Expense'
  },
  {
    id: 'TXN005',
    date: '2025-09-03',
    payer: 'Brown Family',
    vendor: 'School Fees',
    amount: 1800,
    status: 'Failed',
    method: 'Card Payment',
    type: 'Revenue'
  },
];

const vendorBreakdownData = [
  { vendor: 'TechSupply Co', service: 'IT Equipment', amountPaid: 15000, pending: 2500 },
  { vendor: 'EduBooks Ltd', service: 'Books & Supplies', amountPaid: 12000, pending: 0 },
  { vendor: 'CleanCorp', service: 'Maintenance', amountPaid: 8000, pending: 1200 },
  { vendor: 'SecureGuard', service: 'Security Services', amountPaid: 10000, pending: 0 },
  { vendor: 'FoodService Inc', service: 'Catering', amountPaid: 18000, pending: 3000 },
];

const AdminReportsPage = () => {
  const [user] = useState({ name: 'Yehor', role: 'admin' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dateRange, setDateRange] = useState('month');
  const [selectedVendor, setSelectedVendor] = useState('all');
  const [paymentMethod, setPaymentMethod] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  // Filter transactions based on selected filters
  const filteredTransactions = transactionData.filter(transaction => {
    const matchesSearch = transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.payer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVendor = selectedVendor === 'all' || transaction.vendor === selectedVendor;
    const matchesMethod = paymentMethod === 'all' || transaction.method === paymentMethod;
    
    return matchesSearch && matchesVendor && matchesMethod;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  // Calculate KPIs
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const totalPayments = revenueData.reduce((sum, item) => sum + item.payments, 0);
  const pendingPayments = revenueData.reduce((sum, item) => sum + item.pending, 0);
  const activeVendors = vendorBreakdownData.length;

  // ✅ WORKING Export functions with actual functionality
  const handleExport = (format) => {
    if (format === 'excel') {
      exportToExcel();
    } else if (format === 'pdf') {
      exportToPDF();
    }
  };

  // ✅ Excel Export Function
  const exportToExcel = () => {
    try {
      // Create CSV content
      const csvHeaders = [
        'Transaction ID',
        'Date',
        'Payer/Vendor',
        'Type',
        'Amount',
        'Status',
        'Method'
      ];

      const csvRows = filteredTransactions.map(transaction => [
        transaction.id,
        transaction.date,
        `${transaction.payer} - ${transaction.vendor}`,
        transaction.type,
        transaction.amount,
        transaction.status,
        transaction.method
      ]);

      // Add vendor breakdown data
      csvRows.push(['', '', '', '', '', '', '']);
      csvRows.push(['VENDOR BREAKDOWN', '', '', '', '', '', '']);
      csvRows.push(['Vendor', 'Service', 'Amount Paid', 'Pending', 'Status', '', '']);
      
      vendorBreakdownData.forEach(vendor => {
        csvRows.push([
          vendor.vendor,
          vendor.service,
          vendor.amountPaid,
          vendor.pending,
          vendor.pending === 0 ? 'Paid' : 'Pending',
          '',
          ''
        ]);
      });

      // Create CSV content
      const csvContent = [csvHeaders, ...csvRows]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n');

      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `financial-report-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert('Excel file downloaded successfully!');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      alert('Error exporting to Excel. Please try again.');
    }
  };

  // ✅ PDF Export Function
  const exportToPDF = () => {
    try {
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Financial Report - ${new Date().toLocaleDateString()}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3B82F6; padding-bottom: 20px; }
            .kpi-section { display: flex; justify-content: space-around; margin: 20px 0; flex-wrap: wrap; }
            .kpi-card { text-align: center; padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin: 5px; }
            .kpi-value { font-size: 24px; font-weight: bold; color: #3B82F6; }
            .kpi-label { font-size: 14px; color: #666; margin-top: 5px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; font-weight: bold; }
            .section-title { font-size: 18px; font-weight: bold; margin: 30px 0 15px 0; color: #3B82F6; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
            @media print { 
              body { margin: 0; } 
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>NEXEON PROCUREMENT</h1>
            <h2>Financial Reports & Analytics</h2>
            <p>Generated on: ${new Date().toLocaleString()}</p>
          </div>

          <div class="kpi-section">
            <div class="kpi-card">
              <div class="kpi-value">$${totalRevenue.toLocaleString()}</div>
              <div class="kpi-label">Total Revenue</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-value">$${pendingPayments.toLocaleString()}</div>
              <div class="kpi-label">Pending Payments</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-value">$${totalPayments.toLocaleString()}</div>
              <div class="kpi-label">Recent Payments</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-value">${activeVendors}</div>
              <div class="kpi-label">Active Vendors</div>
            </div>
          </div>

          <div class="section-title">Transaction Logs</div>
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Payer/Vendor</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              ${filteredTransactions.map(transaction => `
                <tr>
                  <td>${transaction.id}</td>
                  <td>${new Date(transaction.date).toLocaleDateString()}</td>
                  <td>${transaction.payer} - ${transaction.vendor}</td>
                  <td>${transaction.type}</td>
                  <td>$${transaction.amount.toLocaleString()}</td>
                  <td>${transaction.status}</td>
                  <td>${transaction.method}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="section-title">Vendor Breakdown</div>
          <table>
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Service</th>
                <th>Amount Paid</th>
                <th>Pending</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${vendorBreakdownData.map(vendor => `
                <tr>
                  <td>${vendor.vendor}</td>
                  <td>${vendor.service}</td>
                  <td>$${vendor.amountPaid.toLocaleString()}</td>
                  <td>$${vendor.pending.toLocaleString()}</td>
                  <td>${vendor.pending === 0 ? 'Paid' : 'Pending'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="footer">
            <p>This report was generated automatically by NEXEON Procurement System</p>
            <p>Report Period: September 1-3, 2025 | Data Accuracy: 98.5%</p>
          </div>
        </body>
        </html>
      `;
      
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
      
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  // ✅ WORKING Print Function
  const handlePrint = () => {
    exportToPDF();
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

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

        {/* ✅ FIXED Sidebar with proper positioning */}
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
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Admin Reports
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
                  <div
                    onClick={() => window.navigate('/admin/clients')}
                    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
                  >
                    <Users size={18} />
                    <span className="text-sm">Clients</span>
                  </div>

                  {/* Vendors menu (inactive) */}
                  <div
                    onClick={() => window.navigate('/vendors')}
                    className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer"
                  >
                    <Users size={18} />
                    <span className="text-sm">Vendors</span>
                  </div>

                  {/* ✅ Reports menu active */}
                  <div
                    onClick={() => window.navigate('/reports')}
                    className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20 font-semibold cursor-pointer"
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

                  {/* ✅ Reports menu active for non-admin too */}
                  <div
                    onClick={() => window.navigate('/reports')}
                    className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20 font-semibold cursor-pointer"
                  >
                    <FileText size={18} />
                    <span className="text-sm">Reports</span>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* ✅ FIXED Main Content - removed excessive left margin, content now properly centered */}
        <div className="flex-1 lg:ml-64 max-w-full">
          {/* Top Header */}
          <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between max-w-full">
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
                    Financial Reports & Analytics
                  </h1>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Comprehensive financial overview and transaction management
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Export Options */}
                <div className="hidden md:flex items-center gap-2">
                  <button 
                    onClick={() => handleExport('pdf')}
                    className="flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 hover:border-red-400/50 rounded-lg text-red-400 hover:text-red-300 text-sm font-medium transition-all"
                  >
                    <Download size={16} />
                    PDF
                  </button>
                  <button 
                    onClick={() => handleExport('excel')}
                    className="flex items-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-400/50 rounded-lg text-green-400 hover:text-green-300 text-sm font-medium transition-all"
                  >
                    <Download size={16} />
                    Excel
                  </button>
                  <button 
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 hover:border-gray-400/50 rounded-lg text-gray-400 hover:text-gray-300 text-sm font-medium transition-all"
                  >
                    <Printer size={16} />
                    Print
                  </button>
                </div>

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

          {/* ✅ FIXED Content container - better spacing and centering */}
         <div className="p-4 lg:p-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-blue-400" size={20} />
                  </div>
                  <TrendingUp className="text-green-400" size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${totalRevenue.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-green-400 text-xs mt-1">+12.5% from last month</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingDown className="text-blue-400" size={20} />
                  </div>
                  <AlertTriangle className="text-yellow-400" size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${pendingPayments.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Pending Payments</p>
                <p className="text-yellow-400 text-xs mt-1">Requires attention</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="text-blue-400" size={20} />
                  </div>
                  <TrendingUp className="text-green-400" size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">${totalPayments.toLocaleString()}</h3>
                <p className="text-gray-400 text-sm">Recent Payments</p>
                <p className="text-green-400 text-xs mt-1">+8.2% this week</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-400" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{activeVendors}</h3>
                <p className="text-gray-400 text-sm">Active Vendors</p>
                <p className="text-blue-400 text-xs mt-1">All contracts active</p>
              </div>
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              {/* Revenue Overview Chart */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Revenue Overview</h3>
                    <p className="text-gray-400 text-sm">Monthly revenue and payment trends</p>
                  </div>
                  <select 
                    value={dateRange} 
                    onChange={(e) => setDateRange(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                      <YAxis stroke="#9CA3AF" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                        name="Total Revenue"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="payments" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
                        name="Collected Payments"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pending" 
                        stroke="#F59E0B" 
                        strokeWidth={2}
                        dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                        name="Pending Payments"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Payment Method Analysis */}
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Payment Methods</h3>
                    <p className="text-gray-400 text-sm">Distribution by payment type</p>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={paymentMethodData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {paymentMethodData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }}
                        formatter={(value, name) => [`${value}%`, name]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {paymentMethodData.map((method, index) => (
                    <div key={method.name} className="text-center">
                      <div className={`w-4 h-4 rounded-full mx-auto mb-2`} style={{ backgroundColor: COLORS[index] }}></div>
                      <p className="text-white text-sm font-medium">{method.name}</p>
                      <p className="text-gray-400 text-xs">{method.count} transactions</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expense & Vendor Reports */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
              {/* Expenses Bar Chart */}
              <div className="xl:col-span-2 bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Vendor Expenses</h3>
                    <p className="text-gray-400 text-sm">Monthly spending by vendor category</p>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expenseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="vendor" 
                        stroke="#9CA3AF" 
                        fontSize={12}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis stroke="#9CA3AF" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F3F4F6'
                        }}
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Amount']}
                      />
                      <Bar 
                        dataKey="amount" 
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Total Expenses</span>
                      <span className="text-white font-semibold">${expenseData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Highest Vendor</span>
                      <span className="text-white font-semibold">FoodService Inc</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Categories</span>
                      <span className="text-white font-semibold">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Avg. per Vendor</span>
                      <span className="text-white font-semibold">${(expenseData.reduce((sum, item) => sum + item.amount, 0) / expenseData.length).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Alerts */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="text-yellow-400" size={20} />
                    <h3 className="text-lg font-semibold text-white">Alerts</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-yellow-400 text-sm font-medium">Payment Overdue</p>
                        <p className="text-gray-300 text-xs">TechSupply Co invoice pending for 5 days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-red-400 text-sm font-medium">Failed Transaction</p>
                        <p className="text-gray-300 text-xs">Brown Family payment failed - retry required</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-blue-400 text-sm font-medium">New Vendor</p>
                        <p className="text-gray-300 text-xs">SportEquip Ltd contract ready for review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Breakdown Table */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Vendor Breakdown</h3>
                  <p className="text-gray-400 text-sm">Detailed vendor payment status and amounts</p>
                </div>
                <div className="flex items-center gap-3 mt-4 lg:mt-0">
                  <select 
                    value={selectedVendor} 
                    onChange={(e) => setSelectedVendor(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="all">All Vendors</option>
                    {vendorBreakdownData.map(vendor => (
                      <option key={vendor.vendor} value={vendor.vendor}>{vendor.vendor}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Vendor Name</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Service</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Amount Paid</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4">Pending</th>
                      <th className="text-center text-gray-400 font-medium py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorBreakdownData.map((vendor, index) => (
                      <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                              <span className="text-blue-400 font-semibold text-xs">
                                {vendor.vendor.substring(0, 2).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="text-white font-medium">{vendor.vendor}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-300">{vendor.service}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-green-400 font-semibold">${vendor.amountPaid.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className={`font-semibold ${vendor.pending > 0 ? 'text-yellow-400' : 'text-gray-500'}`}>
                            ${vendor.pending.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            vendor.pending === 0 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {vendor.pending === 0 ? 'Paid' : 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Detailed Transaction Logs */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Transaction Logs</h3>
                  <p className="text-gray-400 text-sm">Detailed transaction history with advanced filtering</p>
                </div>
                
                {/* Mobile Export Options */}
                <div className="flex md:hidden items-center gap-2 mt-4">
                  <button 
                    onClick={() => handleExport('pdf')}
                    className="flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 hover:border-red-400/50 rounded-lg text-red-400 hover:text-red-300 text-sm font-medium transition-all"
                  >
                    <Download size={14} />
                    PDF
                  </button>
                  <button 
                    onClick={() => handleExport('excel')}
                    className="flex items-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-400/50 rounded-lg text-green-400 hover:text-green-300 text-sm font-medium transition-all"
                  >
                    <Download size={14} />
                    Excel
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  />
                </div>

                {/* Date Range Filter */}
                <select 
                  className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>

                {/* Vendor Filter */}
                <select 
                  value={selectedVendor} 
                  onChange={(e) => setSelectedVendor(e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="all">All Vendors</option>
                  <option value="School Fees">School Fees</option>
                  <option value="TechSupply Co">TechSupply Co</option>
                  <option value="CleanCorp">CleanCorp</option>
                </select>

                {/* Payment Method Filter */}
                <select 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="all">All Methods</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Card Payment">Card Payment</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

              {/* Transaction Results Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                  <span className="text-white text-sm">
                    Showing <span className="font-semibold">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredTransactions.length)}</span> of{' '}
                    <span className="font-semibold">{filteredTransactions.length}</span> transactions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400" size={16} />
                  <span className="text-gray-400 text-sm">
                    {filteredTransactions.length !== transactionData.length && `${transactionData.length - filteredTransactions.length} filtered out`}
                  </span>
                </div>
              </div>

              {/* Transaction Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700/50">
                      <th className="text-left text-gray-400 font-medium py-3 px-4 cursor-pointer hover:text-gray-300 transition-colors">
                        Transaction ID
                      </th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4 cursor-pointer hover:text-gray-300 transition-colors">
                        Date
                      </th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Payer/Vendor</th>
                      <th className="text-left text-gray-400 font-medium py-3 px-4">Type</th>
                      <th className="text-right text-gray-400 font-medium py-3 px-4 cursor-pointer hover:text-gray-300 transition-colors">
                        Amount
                      </th>
                      <th className="text-center text-gray-400 font-medium py-3 px-4">Status</th>
                      <th className="text-center text-gray-400 font-medium py-3 px-4">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTransactions.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-8">
                          <div className="flex flex-col items-center gap-2">
                            <Search className="text-gray-500" size={32} />
                            <p className="text-gray-400">No transactions found matching your filters</p>
                            <button 
                              onClick={() => {
                                setSearchTerm('');
                                setSelectedVendor('all');
                                setPaymentMethod('all');
                              }}
                              className="text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors"
                            >
                              Clear all filters
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      currentTransactions.map((transaction, index) => (
                        <tr key={transaction.id} className="border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors">
                          <td className="py-4 px-4">
                            <span className="text-blue-400 font-mono text-sm">{transaction.id}</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-gray-300">{new Date(transaction.date).toLocaleDateString()}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center">
                                {transaction.type === 'Revenue' ? (
                                  <User className="text-green-400" size={14} />
                                ) : (
                                  <Users className="text-blue-400" size={14} />
                                )}
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{transaction.payer}</p>
                                <p className="text-gray-400 text-xs">{transaction.vendor}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                              transaction.type === 'Revenue' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <span className="text-white font-semibold">${transaction.amount.toLocaleString()}</span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'Paid' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : transaction.status === 'Pending'
                                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <CreditCard className="text-gray-400" size={14} />
                              <span className="text-gray-300 text-xs">{transaction.method}</span>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2 mb-4 sm:mb-0">
                    <span className="text-gray-400 text-sm">Rows per page:</span>
                    <select 
                      className="bg-gray-800/50 border border-gray-700/50 text-white text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm bg-gray-800/50 border border-gray-700/50 text-gray-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 hover:text-gray-300 transition-all"
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1 mx-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, Math.min(totalPages - 4, Math.max(1, currentPage - 2))) + i;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-3 py-2 text-sm rounded-lg transition-all ${
                              currentPage === pageNum
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm bg-gray-800/50 border border-gray-700/50 text-gray-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 hover:text-gray-300 transition-all"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Footer */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-green-400" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-1">Report Generated</h4>
                <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleString()}</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-blue-400" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-1">Reporting Period</h4>
                <p className="text-gray-400 text-sm">September 1-3, 2025</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="text-purple-400" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-1">Data Accuracy</h4>
                <p className="text-gray-400 text-sm">98.5% verified transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReportsPage;