// src/pages/Signup.jsx
import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import {
  User,
  Building,
  Truck,
  Heart,
  ChevronRight,
  Check,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { registerUser } from '../services/apiService';

const Signup = () => {
  const location = useLocation();
  const [activeRole, setActiveRole] = useState('farmer');
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [village, setVillage] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const role = params.get('role');
    if (role && ['farmer', 'buyer', 'provider', 'ngo'].includes(role)) {
      setActiveRole(role);
    }
  }, [location]);

  const roles = [
    {
      id: 'farmer',
      label: 'Farmer',
      icon: <User size={24} />,
      description: 'List equipment, get AI recommendations, sell produce'
    },
    {
      id: 'buyer',
      label: 'Buyer',
      icon: <Truck size={24} />,
      description: 'Purchase crops directly from farmers'
    },
    {
      id: 'provider',
      label: 'Service Provider',
      icon: <Building size={24} />,
      description: 'Offer services to farmers in the area'
    },
    {
      id: 'ngo',
      label: 'NGO / Partner',
      icon: <Heart size={24} />,
      description: 'Support farmers and access analytics'
    }
  ];

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleContinueToVerification = async () => {
    if (!firstName || !lastName || !mobile || !village || !district) {
      setError('Please fill all required fields.');
      return;
    }
    if (mobile.length !== 10) {
      setError('Mobile number must be 10 digits.');
      return;
    }

    setLoading(true);
    setError('');

    const payload = {
      FirstName: firstName.trim(),
      LastName: lastName.trim(),
      mobileNumber: parseInt(mobile),
      villageName: village.trim(),
      DistrictName: district,
      useremail: email
      
    };

    try {
      await registerUser(payload);
      setStep(3);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setStep(4);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <div>
            <h2 className="mb-6 text-2xl font-bold font-poppins text-neutral-dark">
              Choose Your Role
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              {roles.map(role => <div key={role.id} className={`border rounded-lg p-4 cursor-pointer transition-all ${activeRole === role.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 hover:border-primary/30'}`} onClick={() => setActiveRole(role.id)}>
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${activeRole === role.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {role.icon}
                    </div>
                    <h3 className="text-lg font-medium font-poppins">
                      {role.label}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 font-roboto ml-13">
                    {role.description}
                  </p>
                </div>)}
            </div>
            <Button variant="primary" onClick={nextStep}>
              Continue as {roles.find(r => r.id === activeRole)?.label}
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>;

      case 2:
        return <div>
            <h2 className="mb-6 text-2xl font-bold font-poppins text-neutral-dark">
              Create Your Account
            </h2>
            <form className="mb-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                  Village/Town
                </label>
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                    Email
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 font-roboto">
                  District
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Select district</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Patna">Patna</option>
                </select>
              </div>
            </form>
            {error && (
              <div className="px-4 py-3 mb-4 text-sm text-red-700 border border-red-200 rounded-md bg-red-50">
                {typeof error === 'string' ? error : error.message || 'Registration failed. Please try again.'}
              </div>
            )}
            <Button
              variant="primary"
              onClick={handleContinueToVerification}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Continue to Verification'}
              {!loading && <ChevronRight size={18} className="ml-1" />}
            </Button>
          </div>;

      case 3:
        return <div>
            <h2 className="mb-6 text-2xl font-bold font-poppins text-neutral-dark">
              Verify Your Identity
            </h2>
            <div className="p-4 mb-6 border border-orange-100 rounded-md bg-orange-50">
              <p className="text-sm text-orange-800 font-roboto">
                To ensure trust and security on our platform, we verify all
                users. Your information is kept secure and private.
              </p>
            </div>
            <div className="mb-8 space-y-6">
              <div className="p-4 border border-gray-200 rounded-md">
                <h3 className="mb-3 text-lg font-medium font-poppins text-neutral-dark">
                  Mobile Verification
                </h3>
                <p className="mb-4 text-sm text-gray-600 font-roboto">
                  We'll send a one-time password (OTP) to your mobile number.
                </p>
                <Button variant="outline" className="w-full md:w-auto">
                  Send OTP
                </Button>
              </div>
              <div className="p-4 border border-gray-200 rounded-md">
                <h3 className="mb-3 text-lg font-medium font-poppins text-neutral-dark">
                  Aadhaar Verification
                </h3>
                <p className="mb-4 text-sm text-gray-600 font-roboto">
                  Upload a photo of your Aadhaar card for identity verification.
                </p>
                <div className="p-6 mb-4 text-center border border-gray-300 border-dashed rounded-md bg-gray-50">
                  <p className="mb-2 text-gray-500 font-roboto">
                    Drag and drop your Aadhaar card image, or click to browse
                  </p>
                  <Button variant="ghost" className="text-primary">
                    Browse Files
                  </Button>
                </div>
                <p className="text-xs text-gray-500 font-roboto">
                  Accepted formats: JPG, PNG, PDF. Max size: 5MB.
                </p>
              </div>
            </div>
            <Button
              variant="primary"
              onClick={handleRegister}
            >
              Complete Registration
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>;

      case 4:
        return <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="mb-4 text-2xl font-bold font-poppins text-neutral-dark">
              Registration Successful!
            </h2>
            <p className="max-w-md mx-auto mb-8 text-gray-600 font-roboto">
              Your account has been created successfully. You can now access all
              the features of Farm Scapes.
            </p>
            <Button variant="primary" to="/farmer-dashboard">
              Go to Dashboard
            </Button>
          </div>;

      default:
        return null;
    }
  };

  return <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-2xl mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm">
          <div className="p-6 text-white bg-primary">
            <h1 className="text-2xl font-bold font-poppins">
              Join Farm Scapes
            </h1>
            <p className="font-roboto text-white/80">
              Create your account and start your smart farming journey
            </p>
          </div>
          {step < 4 && <div className="px-6 pt-6">
              <div className="flex items-center mb-6">
                {[1, 2, 3].map(s => <Fragment key={s}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${s <= step ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-primary' : 'bg-gray-200'}`}></div>}
                  </Fragment>)}
              </div>
            </div>}
          <div className="p-6">{renderStepContent()}</div>
        </div>
      </div>
    </div>;
};

export default Signup;