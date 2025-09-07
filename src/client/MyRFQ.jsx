import React, { useState, useEffect } from 'react';

// SVG Icons as components (matching your dashboard design)
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

const Calendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
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

const Users = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const InboxIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
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

// RFQ Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'draft':
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      case 'sent':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'quoted':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'approved':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'rejected':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

// Create RFQ Modal Component
const CreateRFQModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    deadline: '',
    budget: '',
    attachments: null
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      deadline: '',
      budget: '',
      attachments: null
    });
    setErrors({});
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="relative bg-gray-900 rounded-xl w-full max-w-2xl border border-gray-800/50 max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Create New RFQ</h2>
                <p className="text-gray-400 text-sm">Start a new procurement request</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-400 text-sm mb-2">RFQ Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.title ? 'border-red-500/50 focus:border-red-500' : 'border-gray-700/50 focus:border-blue-500'
                  }`}
                  placeholder="e.g., Office Furniture for New Branch"
                />
                {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-400 text-sm mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
                    errors.description ? 'border-red-500/50 focus:border-red-500' : 'border-gray-700/50 focus:border-blue-500'
                  }`}
                  placeholder="Describe your requirements in detail..."
                />
                {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.category ? 'border-red-500/50 focus:border-red-500' : 'border-gray-700/50 focus:border-blue-500'
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="IT Equipment">IT Equipment</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Marketing Materials">Marketing Materials</option>
                  <option value="Professional Services">Professional Services</option>
                  <option value="Construction">Construction</option>
                  <option value="Other">Other</option>
                </select>
                {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Deadline *</label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.deadline ? 'border-red-500/50 focus:border-red-500' : 'border-gray-700/50 focus:border-blue-500'
                  }`}
                />
                {errors.deadline && <p className="text-red-400 text-xs mt-1">{errors.deadline}</p>}
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Budget Range (Optional)</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., $5,000 - $10,000"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-700/50">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-colors"
              >
                Create RFQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// RFQ Details Modal Component
const RFQDetailsModal = ({ isOpen, onClose, rfq }) => {
  if (!isOpen || !rfq) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="relative bg-gray-900 rounded-xl w-full max-w-4xl border border-gray-800/50 max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">RFQ Details</h2>
                <p className="text-gray-400 text-sm">#{rfq.id}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">RFQ Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Title</label>
                    <p className="text-white font-medium">{rfq.title}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Description</label>
                    <p className="text-white">{rfq.description}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Category</label>
                    <p className="text-white">{rfq.category}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Status</label>
                    <div className="mt-1">
                      <StatusBadge status={rfq.status} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Timeline & Responses</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Date Created</label>
                    <p className="text-white">{new Date(rfq.dateCreated).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Deadline</label>
                    <p className="text-white">{new Date(rfq.deadline).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Vendor Responses</label>
                    <p className="text-white font-semibold">{rfq.vendorResponses} vendors responded</p>
                  </div>
                </div>
              </div>
            </div>

            {rfq.vendorResponses > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Vendor Responses</h3>
                <div className="space-y-3">
                  {[1, 2, 3].slice(0, rfq.vendorResponses).map((_, index) => (
                    <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Vendor {index + 1} Response</p>
                          <p className="text-gray-400 text-sm">Submitted 2 days ago</p>
                        </div>
                        <button className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 text-sm transition-colors">
                          View Quote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main MyRFQs Component
const MyRFQs = () => {
  const [user, setUser] = useState({ name: 'John Smith', role: 'client', company: 'TechCorp Inc.' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedRFQ, setSelectedRFQ] = useState(null);

  useEffect(() => {
    const showCreateModal = localStorage.getItem('showCreateModal');
    setIsCreateModalOpen(JSON.parse(showCreateModal));
    localStorage.setItem('showCreateModal', false);
  }, []);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  // Sample RFQ data
  const [rfqs, setRfqs] = useState([
    {
      id: 'RFQ-2024-001',
      title: 'Office Furniture for New Branch',
      description: 'Need to furnish 50-person office space with desks, chairs, and storage solutions',
      category: 'Furniture',
      dateCreated: '2024-01-15',
      deadline: '2024-02-15',
      status: 'Quoted',
      vendorResponses: 3,
      budget: '$15,000 - $25,000'
    },
    {
      id: 'RFQ-2024-002',
      title: 'IT Equipment Upgrade',
      description: 'Upgrading laptops and monitors for development team',
      category: 'IT Equipment',
      dateCreated: '2024-01-10',
      deadline: '2024-01-30',
      status: 'Approved',
      vendorResponses: 2,
      budget: '$30,000 - $40,000'
    },
    {
      id: 'RFQ-2024-003',
      title: 'Marketing Materials Q1',
      description: 'Brochures, business cards, and promotional items for Q1 campaigns',
      category: 'Marketing Materials',
      dateCreated: '2024-01-05',
      deadline: '2024-01-25',
      status: 'Sent',
      vendorResponses: 1,
      budget: '$5,000 - $8,000'
    },
    {
      id: 'RFQ-2024-004',
      title: 'Cloud Infrastructure Migration',
      description: 'Professional services for migrating to AWS cloud infrastructure',
      category: 'Professional Services',
      dateCreated: '2024-01-20',
      deadline: '2024-03-01',
      status: 'Draft',
      vendorResponses: 0,
      budget: '$50,000 - $75,000'
    },
    {
      id: 'RFQ-2024-005',
      title: 'Office Cleaning Services',
      description: 'Regular cleaning services for headquarters building',
      category: 'Professional Services',
      dateCreated: '2024-01-08',
      deadline: '2024-01-22',
      status: 'Rejected',
      vendorResponses: 4,
      budget: '$2,000/month'
    }
  ]);

  // Filter RFQs
  const filteredRFQs = rfqs.filter(rfq => {
    const matchesSearch = rfq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rfq.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rfq.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || rfq.status.toLowerCase() === statusFilter.toLowerCase();
    
    let matchesDate = true;
    if (dateFilter !== 'all') {
      const rfqDate = new Date(rfq.dateCreated);
      const now = new Date();
      const daysDiff = Math.floor((now - rfqDate) / (1000 * 60 * 60 * 24));
      
      switch (dateFilter) {
        case 'last7days':
          matchesDate = daysDiff <= 7;
          break;
        case 'last30days':
          matchesDate = daysDiff <= 30;
          break;
        case 'last90days':
          matchesDate = daysDiff <= 90;
          break;
      }
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleCreateRFQ = (formData) => {
    const newRFQ = {
      id: `RFQ-2024-${String(rfqs.length + 1).padStart(3, '0')}`,
      ...formData,
      dateCreated: new Date().toISOString().split('T')[0],
      status: 'Draft',
      vendorResponses: 0
    };
    
    setRfqs([newRFQ, ...rfqs]);
    setIsCreateModalOpen(false);
    
    // Show success notification
    alert('RFQ created successfully! You can now edit and send it to vendors.');
  };

  const handleViewDetails = (rfq) => {
    setSelectedRFQ(rfq);
    setIsDetailsModalOpen(true);
  };

  const handleEditDraft = (rfq) => {
    alert(`Opening edit mode for: ${rfq.title}\n\nThis would typically:\n- Open the RFQ form in edit mode\n- Allow modification of requirements\n- Save changes as draft\n- Send to vendors when ready`);
  };

  const handleDeleteRFQ = (rfqId) => {
    if (window.confirm('Are you sure you want to delete this RFQ? This action cannot be undone.')) {
      setRfqs(rfqs.filter(rfq => rfq.id !== rfqId));
      alert('RFQ deleted successfully.');
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
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
                    My RFQs
                  </h1>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Manage your procurement requests and track progress
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
            {/* Search and Filter Controls */}
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Search RFQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Status Filter */}
                  <div className="relative">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white pr-10 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer min-w-[140px]"
                    >
                      <option value="all">All Status</option>
                      <option value="draft">Draft</option>
                      <option value="sent">Sent</option>
                      <option value="quoted">Quoted</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                  </div>

                  {/* Date Filter */}
                  <div className="relative">
                    <select
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white pr-10 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer min-w-[140px]"
                    >
                      <option value="all">All Time</option>
                      <option value="last7days">Last 7 days</option>
                      <option value="last30days">Last 30 days</option>
                      <option value="last90days">Last 90 days</option>
                    </select>
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                  </div>
                </div>

                {/* Create RFQ Button */}
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Create RFQ</span>
                  <span className="sm:hidden">Create</span>
                </button>
              </div>
            </div>

            {/* RFQs Table/List */}
            {filteredRFQs.length > 0 ? (
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/30">
                      <tr>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">RFQ ID</th>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">Title/Description</th>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">Date Created</th>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">Status</th>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">Vendor Responses</th>
                        <th className="text-left p-4 text-gray-400 font-medium text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRFQs.map((rfq, index) => (
                        <tr key={rfq.id} className={`border-t border-gray-800/30 hover:bg-gray-800/20 transition-colors ${
                          index % 2 === 0 ? 'bg-gray-800/10' : ''
                        }`}>
                          <td className="p-4 text-blue-400 font-mono text-sm">{rfq.id}</td>
                          <td className="p-4">
                            <div>
                              <p className="text-white font-medium">{rfq.title}</p>
                              <p className="text-gray-400 text-sm truncate max-w-xs">{rfq.description}</p>
                            </div>
                          </td>
                          <td className="p-4 text-gray-300">{new Date(rfq.dateCreated).toLocaleDateString()}</td>
                          <td className="p-4">
                            <StatusBadge status={rfq.status} />
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{rfq.vendorResponses}</span>
                              <Users className="text-gray-400" size={14} />
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleViewDetails(rfq)}
                                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 transition-colors"
                                title="View Details"
                              >
                                <Eye size={14} />
                              </button>
                              {rfq.status === 'Draft' && (
                                <button
                                  onClick={() => handleEditDraft(rfq)}
                                  className="p-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-400 transition-colors"
                                  title="Edit Draft"
                                >
                                  <Edit size={14} />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteRFQ(rfq.id)}
                                className="p-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden space-y-4 p-4">
                  {filteredRFQs.map((rfq) => (
                    <div key={rfq.id} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-blue-400 font-mono text-sm">{rfq.id}</p>
                          <h3 className="text-white font-medium">{rfq.title}</h3>
                        </div>
                        <StatusBadge status={rfq.status} />
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{rfq.description}</p>
                      
                      <div className="flex justify-between items-center mb-3 text-sm">
                        <span className="text-gray-400">Created: {new Date(rfq.dateCreated).toLocaleDateString()}</span>
                        <div className="flex items-center gap-1 text-gray-300">
                          <Users size={12} />
                          <span>{rfq.vendorResponses} responses</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewDetails(rfq)}
                          className="flex-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg text-blue-400 text-sm transition-colors"
                        >
                          View Details
                        </button>
                        {rfq.status === 'Draft' && (
                          <button
                            onClick={() => handleEditDraft(rfq)}
                            className="flex-1 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-lg text-green-400 text-sm transition-colors"
                          >
                            Edit Draft
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteRFQ(rfq.id)}
                          className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded-lg text-red-400 text-sm transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg p-12 text-center">
                <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <InboxIcon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">No RFQs yet</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  {searchTerm || statusFilter !== 'all' || dateFilter !== 'all' 
                    ? "No RFQs match your current filters. Try adjusting the search criteria."
                    : "Start by creating your first request for quotation to begin your procurement process."
                  }
                </p>
                {(!searchTerm && statusFilter === 'all' && dateFilter === 'all') && (
                  <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Plus size={18} />
                    Create Your First RFQ
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create RFQ Modal */}
      <CreateRFQModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateRFQ}
      />

      {/* RFQ Details Modal */}
      <RFQDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        rfq={selectedRFQ}
      />
    </div>
  );
};

export default MyRFQs;