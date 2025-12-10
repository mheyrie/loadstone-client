/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from '../../components/ui/Button';

interface SignupProps {
  onSwitchToLogin?: () => void;
  onClose?: () => void;
}

type SignupStep = 'account' | 'personal' | 'verification' | 'success';

export default function Signup({ onSwitchToLogin, onClose }: SignupProps) {
  const [currentStep, setCurrentStep] = useState<SignupStep>('account');
  const [formData, setFormData] = useState({
    // Step 1: Account Info
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Step 2: Personal Info
    phoneNumber: '',
    dateOfBirth: '',
    businessName: '',
    businessType: '',
    // Step 3: Verification
    verificationCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleNext = () => {
    setError('');
    
    if (currentStep === 'account') {
      // Validate account info
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (formData.password.length < 8) {
        setError('Password must be at least 8 characters');
        return;
      }
      if (!acceptTerms) {
        setError('Please accept the terms and conditions');
        return;
      }
      setCurrentStep('personal');
    } else if (currentStep === 'personal') {
      // Validate personal info
      if (!formData.phoneNumber || !formData.dateOfBirth || !formData.businessName) {
        setError('Please fill in all required fields');
        return;
      }
      setCurrentStep('verification');
    } else if (currentStep === 'verification') {
      // Validate verification code
      if (formData.verificationCode.length !== 6) {
        setError('Please enter a valid 6-digit code');
        return;
      }
      setCurrentStep('success');
    }
  };

  const handleBack = () => {
    setError('');
    if (currentStep === 'personal') {
      setCurrentStep('account');
    } else if (currentStep === 'verification') {
      setCurrentStep('personal');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  const handleFinish = () => {
    console.log('Signup completed:', formData);
    onClose?.();
  };

  // Step indicator
  const steps = [
    { id: 'account', label: 'Account', number: 1 },
    { id: 'personal', label: 'Personal', number: 2 },
    { id: 'verification', label: 'Verify', number: 3 },
    { id: 'success', label: 'Done', number: 4 }
  ];

  const currentStepNumber = steps.findIndex(s => s.id === currentStep) + 1;

  return (
    <div className="w-full">
      {/* Progress Indicator */}
      {currentStep !== 'success' && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {steps.slice(0, 3).map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                  currentStepNumber > step.number 
                    ? 'bg-brand-purple text-white' 
                    : currentStepNumber === step.number
                    ? 'bg-brand-purple text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStepNumber > step.number ? '✓' : step.number}
                </div>
                {index < 2 && (
                  <div className={`flex-1 h-1 mx-2 rounded ${
                    currentStepNumber > step.number ? 'bg-brand-purple' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            {steps.slice(0, 3).map(step => (
              <span key={step.id} className={currentStep === step.id ? 'font-semibold' : ''}>
                {step.label}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {currentStep === 'account' && 'Create Account'}
          {currentStep === 'personal' && 'Personal Information'}
          {currentStep === 'verification' && 'Verify Your Email'}
          {currentStep === 'success' && 'Welcome Aboard!'}
        </h3>
        <p className="text-gray-600 text-sm">
          {currentStep === 'account' && 'Sign up to get started'}
          {currentStep === 'personal' && 'Tell us more about yourself'}
          {currentStep === 'verification' && 'Enter the code sent to your email'}
          {currentStep === 'success' && 'Your account has been created successfully'}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1: Account Information */}
        {currentStep === 'account' && (
          <>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="signup-email"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-1 text-brand-purple border-gray-300 rounded focus:ring-brand-purple" 
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-brand-purple hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-brand-purple hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 'personal' && (
          <>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="+1 (555) 000-0000"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                placeholder="Your Business Name"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                Business Type (Optional)
              </label>
              <select
                id="businessType"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              >
                <option value="">Select business type</option>
                <option value="retail">Retail</option>
                <option value="wholesale">Wholesale</option>
                <option value="service">Service</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}

        {/* Step 3: Verification */}
        {currentStep === 'verification' && (
          <>
            <div className="text-center mb-4">
              <div className="mx-auto w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                We've sent a 6-digit verification code to<br />
                <span className="font-semibold">{formData.email}</span>
              </p>
            </div>

            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                required
                maxLength={6}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all text-center text-2xl tracking-widest"
                placeholder="000000"
                value={formData.verificationCode}
                onChange={(e) => setFormData({ ...formData, verificationCode: e.target.value.replace(/\D/g, '') })}
              />
            </div>

            <button
              type="button"
              className="text-sm text-brand-purple hover:underline"
            >
              Didn't receive the code? Resend
            </button>
          </>
        )}

        {/* Step 4: Success */}
        {currentStep === 'success' && (
          <div className="text-center py-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Created!</h3>
            <p className="text-gray-600 mb-6">
              Your account has been successfully created. You can now start accessing our services.
            </p>
            <Button
              type="button"
              classes="primary-btn w-full"
              content="Get Started"
              onClick={handleFinish}
            />
            <button
              type="button"
              onClick={onClose}
              className="mt-3 text-sm text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep !== 'success' && (
          <div className="flex gap-3 pt-2">
            {currentStep !== 'account' && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <Button
              type="submit"
              classes={`primary-btn ${currentStep === 'account' ? 'w-full' : 'flex-1'}`}
              content="Next"
            />
          </div>
        )}
      </form>

      {/* Login Link - Only show on first step */}
      {currentStep === 'account' && (
        <>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-brand-purple font-medium hover:underline"
              >
                Log in
              </button>
            </p>
          </div>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </button>
          </div>
        </>
      )}
    </div>
  );
}