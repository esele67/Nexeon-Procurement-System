import React, { useState } from 'react';

// Simple SVG Icons as components (reusing from dashboard)
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

const ArrowLeft = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M19 12H5"/>
    <path d="M12 19l-7-7 7-7"/>
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

const DollarSign = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const FileText = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

const Paperclip = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"/>
  </svg>
);

const Save = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17,21 17,13 7,13 7,21"/>
    <polyline points="7,3 7,8 15,8"/>
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

const Home = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const Search = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const Topbar = ({ user, onBackClick, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <div className="bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50 px-4 lg:px-8 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        >
          <Menu size={20} className="text-gray-300" />
        </button>
        
        <button
          onClick={onBackClick}
          className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-all"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Back to Dashboard</span>
          <span className="sm:hidden">Back</span>
        </button>
        
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-white">Create New RFQ</h1>
          <p className="text-gray-400 text-xs lg:text-sm">Fill out the details for your request for quotation</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 transition-all">
          <Bell size={20} className="text-gray-300" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
          <span className="text-white font-semibold hidden sm:block">{user.name}</span>
        </div>
      </div>
    </div>
  </div>
);

const RFQForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    requiredDate: '',
    attachmentLink: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.budget || formData.budget <= 0) {
      newErrors.budget = 'Budget must be a positive number';
    }
    
    if (!formData.requiredDate) {
      newErrors.requiredDate = 'Required date is required';
    } else {
      const selectedDate = new Date(formData.requiredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.requiredDate = 'Required date cannot be in the past';
      }
    }
    
    if (formData.attachmentLink && formData.attachmentLink.trim()) {
      const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (!urlPattern.test(formData.attachmentLink)) {
        newErrors.attachmentLink = 'Please enter a valid URL';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          <FileText size={16} className="inline mr-2" />
          RFQ Title *
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Enter a descriptive title for your RFQ"
          className={`w-full px-4 py-3 bg-gray-700/50 border ${
            errors.title ? 'border-red-500/50' : 'border-gray-600/50'
          } rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all`}
        />
        {errors.title && (
          <p className="mt-2 text-sm text-red-400">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          <FileText size={16} className="inline mr-2" />
          Description *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Provide detailed requirements, specifications, and any other relevant information..."
          rows={6}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${
            errors.description ? 'border-red-500/50' : 'border-gray-600/50'
          } rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all resize-vertical`}
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-400">{errors.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            <DollarSign size={16} className="inline mr-2" />
            Budget *
          </label>
          <input
            type="number"
            value={formData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            className={`w-full px-4 py-3 bg-gray-700/50 border ${
              errors.budget ? 'border-red-500/50' : 'border-gray-600/50'
            } rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all`}
          />
          {errors.budget && (
            <p className="mt-2 text-sm text-red-400">{errors.budget}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Required Date *
          </label>
          <input
            type="date"
            value={formData.requiredDate}
            onChange={(e) => handleChange('requiredDate', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 bg-gray-700/50 border ${
              errors.requiredDate ? 'border-red-500/50' : 'border-gray-600/50'
            } rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all`}
          />
          {errors.requiredDate && (
            <p className="mt-2 text-sm text-red-400">{errors.requiredDate}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          <Paperclip size={16} className="inline mr-2" />
          Attachment Link <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="url"
          value={formData.attachmentLink}
          onChange={(e) => handleChange('attachmentLink', e.target.value)}
          placeholder="https://example.com/document.pdf"
          className={`w-full px-4 py-3 bg-gray-700/50 border ${
            errors.attachmentLink ? 'border-red-500/50' : 'border-gray-600/50'
          } rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all`}
        />
        {errors.attachmentLink && (
          <p className="mt-2 text-sm text-red-400">{errors.attachmentLink}</p>
        )}
        <p className="mt-2 text-xs text-gray-400">
          Add a link to any supporting documents (specifications, drawings, etc.)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="button"
          onClick={() => window.history?.back() || (window.navigate && window.navigate('/dashboard'))}
          className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg text-gray-300 font-medium transition-all"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Creating RFQ...
            </>
          ) : (
            <>
              <Save size={18} />
              Create RFQ
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const NewRFQ = () => {
  const [user] = useState({ name: 'Yehor', role: 'client' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBackClick = () => {
    if (window.history && window.history.back) {
      window.history.back();
    } else if (window.navigate) {
      window.navigate('/dashboard');
    }
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/rfqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          budget: parseFloat(formData.budget),
          status: 'pending',
          createdAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        const newRFQ = await response.json();
        alert('RFQ created successfully!');
        if (window.navigate) {
          window.navigate(`/rfq/${newRFQ.id}`);
        }
      } else {
        throw new Error('Failed to create RFQ');
      }
    } catch (error) {
      console.error('Error creating RFQ:', error);
      alert('Failed to create RFQ. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <nav className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer">
                <Home size={18} />
                <span className="text-sm">Dashboard</span>
              </div>
              
              <div className="flex items-center gap-3 px-3 py-3 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/20">
                <Search size={18} />
                <span className="text-sm font-semibold">Procurement</span>
              </div>

              <div className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer">
                <User size={18} />
                <span className="text-sm">Vendors</span>
              </div>

              <div className="flex items-center gap-3 px-3 py-3 text-gray-400 hover:text-gray-200 hover:bg-gray-700/30 rounded-lg transition-all cursor-pointer">
                <FileText size={18} />
                <span className="text-sm">Reports</span>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex-1 lg:ml-64">
          <Topbar 
            user={user} 
            onBackClick={handleBackClick}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          <div className="p-4 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-800/50 p-6 lg:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Request for Quotation</h2>
                  <p className="text-gray-400">
                    Provide detailed information about your procurement needs. The more specific you are, 
                    the better quotes you'll receive from vendors.
                  </p>
                </div>

                <RFQForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
              </div>

              <div className="mt-6 bg-blue-900/20 backdrop-blur-xl rounded-xl border border-blue-800/30 p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">💡 Tips for Better RFQs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-200">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Be specific about quantities, materials, and technical requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Include delivery location and any special handling requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Set realistic budgets and deadlines for better vendor participation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Attach technical drawings, specifications, or reference documents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRFQ;