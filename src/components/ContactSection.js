import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../contexts/ToastContext';
import LoadingAnimation from './LoadingAnimation';
import { sanitizeInput, checkRateLimit, saveFormProgress, getFormProgress } from '../utils/formUtils';

const ContactSection = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState(() => getFormProgress() || {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: 'Not specified'
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    saveFormProgress(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;wErrors).length === 0;
  };

  const handleSubmit = async (e) => {nst handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    if (!checkRateLimit()) {
      showError('Too many submissions. Please try again in an hour.');  showError('Too many submissions. Please try again in an hour.');
      return;
    }

    if (!validateForm()) return;f (!validateForm()) return;
    setLoading(true);    try {
    rtController();
    try { = setTimeout(() => controller.abort(), 10000);ading(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);st response = await fetch("https://formspree.io/f/xpwpwwpn", {
 new AbortController();
      const response = await fetch("https://formspree.io/f/xpwpwwpn", {
        method: "POST",        headers: {
        signal: controller.signal,n", {
        headers: {": "application/json",OST",
          "Accept": "application/json",
          "Content-Type": "application/json",.stringify({
        },ation/json",
        body: JSON.stringify({ata.name}: ${formData.subject}`,lication/json",
          ...formData,,
          _subject: `New contact from ${formData.name}: ${formData.subject}`,
        }),
      });${formData.subject}`,

      clearTimeout(timeoutId);(response.ok) {
        localStorage.removeItem('formProgress');
      if (response.ok) {ent successfully! I will respond within 24 hours.');utId);
        setSubmitStatus('success');        setFormData({
        localStorage.removeItem('formProgress');l: '', phone: '', 
        showSuccess( budget: 'Not specified'us('success');
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-3xl mb-2 text-green-500" />
            <h3 className="font-bold mb-1">Message Sent Successfully!</h3>Name="flex flex-col items-center">
          </div>
        );
      }onst errorMessage = error.name === 'AbortError'      <p>I will respond within 24 hours</p>
    } catch (error) {med out. Please try again.'
      const errorMessage = error.name === 'AbortError' email directly.';
        ? 'Request timed out. Please try again.'
        : 'Failed to send message. Please try again or email directly.';
      showError(errorMessage);budget: 'Not specified'
    } finally {
      setLoading(false);
    }row new Error('Submission failed');
  };nst calculateProgress = () => {  }
    const totalFields = 5;    } catch (error) {
  const calculateProgress = () => {ues(formData).filter(value => value.trim() !== '').length;
    const totalFields = 5; totalFields) * 100; error.name === 'AbortError' 
    const filledFields = Object.values(formData).filter(value => value.trim() !== '').length;
    return (filledFields / totalFields) * 100;
  };turn (  showError(
    <main className="pt-20">        <div className="flex flex-col items-center">
  return (tion className="py-16 bg-white"><FaExclamationCircle className="text-3xl mb-2 text-red-500" />
    <main className="pt-20">-1">Message Failed to Send</h3>
      <section className="py-16 bg-white">ectly</p>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}ow gap-8 lg:gap-12 max-w-6xl mx-auto"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto"shadow-lg p-8 border border-gray-100">
          >
            {/* Contact Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">ess Hours (EST)</h3>
              {/* Business Hours Display */}ame="grid grid-cols-2 gap-2 text-sm">Object.values(formData).filter(value => value.trim() !== '').length;
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3 text-gray-900">Business Hours (EST)</h3>ou within 24 hours</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="font-medium">9:00 AM - 5:00 PM</p>
                  </div>me="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div>/>xl mx-auto">v>
                    <p className="text-gray-600">Response Time</p>
                    <p className="font-medium">Within 24 Hours</p>Me a Message</h2>
                  </div>
                </div>assName="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              </div>-6">justify-center mx-auto mb-4">
ormation Section */}e className="text-gold text-2xl" />uration: 0.8 }}
              {/* Form Progress Indicator */}unded-lg">bold">Send Me a Message</h2>
              <div className="mb-6 bg-gray-100 h-2 rounded-full">-sm font-medium text-gray-700 mb-4">Personal Information</h3>xt-2xl font-forum font-bold">Send Me a Message</h2>lassName="text-gray-600 mt-2">I'll get back to you within 24 hours</p>
                <divgrid-cols-1 md:grid-cols-2 gap-6">gray-600 mt-2">I'll get back to you within 24 hours</p>v>lassName="text-center mb-8">
                  className="h-full bg-gold rounded-full transition-all duration-300"8"> className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">    value={formData.name}
                  style={{ width: `${calculateProgress()}%` }} rounded-full flex items-center justify-center mx-auto mb-4">                <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">                          onChange={handleChange}
                ></div>">
              </div>
700 mb-4">Personal Information</h3>mt-2">I'll get back to you within 24 hours</p>ocus:outline-none transition-colors`}Name Field */}
              <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">Information</h3>mt-2">I'll get back to you within 24 hours</p>d grid-cols-1 md:grid-cols-2 gap-6">e"ative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}name"
                  <div className="relative">lFor="name" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">me="mb-6 bg-gray-100 h-2 rounded-full">s.name && (l>
                    <label htmlFor="name" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">Name className="mt-1 text-red-500 text-sm flex items-center">nput
                      Your Nameation-300"lassName="mr-1">⚠️</span> {errors.name}pe="text"
                    </label>order-2 ${full bg-gold rounded-full transition-all duration-300"                        <input                     id="name"
                    <inputrors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'`,
                      type="text"hite focus:outline-none transition-colors`}ress()}%`,
                      id="name"                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${red-500 text-sm flex items-center">aria-label="Contact form" className="space-y-6">id grid-cols-1 md:grid-cols-2 gap-6">
                        errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'assName="mr-1">⚠️</span> {errors.name} */}
                      } bg-white focus:outline-none transition-colors`}tive"><input
                      placeholder="John Doe" -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                      required
                    />
                    {errors.name && (Field */}
                      <p className="mt-1 text-red-500 text-sm flex items-center">lassName="relative">
                        <span className="mr-1">⚠️</span> {errors.name} htmlFor="email" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">-4 py-3 rounded-lg border-2 ${
                      </p>                      Your Emailrs.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'me"
                    )}e focus:outline-none transition-colors`}value={formData.name}
                  </div>ge}

                  {/* Email Field */}
                  <div className="relative">ail"ors.email && (-white focus:outline-none transition-colors`}l>
                    <label htmlFor="email" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">{formData.email}  <p className="mt-1 text-red-500 text-sm flex items-center">placeholder="John Doe"nput
                      Your EmailleChange}  <span className="mr-1">⚠️</span> {errors.email}quiredpe="email"
                    </label>w-full px-4 py-3 rounded-lg border-2 ${  </p>id="email"
                    <input ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'                        )}                      {errors.name && (                        name="email"
                      type="email"-none transition-colors`}t-red-500 text-sm flex items-center">ta.email}
                      id="email".com"rors.name}ge}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}line-none transition-colors`}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${text-sm flex items-center">ssName="p-4 bg-gray-50 rounded-lg">m"
                        errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'assName="mr-1">⚠️</span> {errors.email}e="text-sm font-medium text-gray-700 mb-4">Project Details</h3>eld */}
                      } bg-white focus:outline-none transition-colors`}p>and Message fields */}me="relative">
                      placeholder="john@example.com"-1 text-red-500 text-sm flex items-center">l && (
                      requiredm font-medium text-gray-600">r-1">⚠️</span> {errors.email}ext-red-500 text-sm flex items-center">
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">e Field */}
                        <span className="mr-1">⚠️</span> {errors.email}Name="relative">  type="text"v>div>
                      </p> htmlFor="phone" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">id="subject"
                    )}                    Phone Number (Optional)                        name="subject"                  {/* Phone Field */}
                  </div>e">
                </div>e -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">

                {/* Phone Field */}border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'mber (Optional)
                <div className="relative">one"-white focus:outline-none transition-colors`}
                  <label htmlFor="phone" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">{formData.phone}aceholder="What's on your mind?"="tel"
                    Phone Number (Optional)ndleChange}
                  </label>-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors"
                  <inputour Phone Number"t && (a.phone}
                    type="tel"tems-center">
                    id="phone"ubject}py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}lassName="relative">
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors" htmlFor="subject" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                    placeholder="Your Phone Number"                    SubjectName="relative">Field */}
                  />r="message" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600"> className="relative">Subject Field */}
                </div>-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">ve">

                {/* Subject Field */}ct"
                <div className="relative">bject"="message"l>
                  <label htmlFor="subject" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">{formData.subject}  name="message"type="text"nput
                    SubjectdleChange}value={formData.message}="subject"pe="text"
                  </label>full px-4 py-3 rounded-lg border-2 ${                        onChange={handleChange}                      name="subject"                      id="subject"
                  <input ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                    type="text"one transition-colors`}x-4 py-3 rounded-lg border-2 ${}t}
                    id="subject"ur mind?"
                    name="subject"size-none`}s.subject ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'me={`w-full px-4 py-3 rounded-lg border-2 ${
                    value={formData.subject}? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                    onChange={handleChange} focus:outline-none transition-colors`}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${-sm flex items-center">t's on your mind?"
                      errors.subject ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'assName="mr-1">⚠️</span> {errors.subject}e && (
                    } bg-white focus:outline-none transition-colors`}p>t-red-500 text-sm flex items-center">
                    placeholder="What's on your mind?"s.message}-red-500 text-sm flex items-center">
                    requiredd-500 text-sm flex items-center">
                  />
                  {errors.subject && (e Field */}
                    <p className="mt-1 text-red-500 text-sm flex items-center">lassName="relative">
                      <span className="mr-1">⚠️</span> {errors.subject} htmlFor="message" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                    </p>                    Your Messageal Information Section */}Field */}
                  )}-50 rounded-lg">="relative">eld */}
                </div>xt-gray-700 mb-4">Additional Information</h3>age" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">ve">

                {/* Message Field */}sage"
                <div className="relative">ormData.message}l>abel htmlFor="company" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">real>
                  <label htmlFor="message" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">{handleChange}extarea    Company Name (Optional)id="message"extarea
                    Messagefull px-4 py-3 rounded-lg border-2 ${="message"</label>me="message"="message"
                  </label> ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'                      name="message"                        <input                      value={formData.message}                      name="message"
                  <textareaone transition-colors`}ue={formData.message} type="text"hange={handleChange}ue={formData.message}
                    id="message"lp you?"andleChange}pany"leChange}
                    name="message"
                    value={formData.message} py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors" ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'll px-4 py-3 rounded-lg border-2 ${
                    onChange={handleChange}</textarea>     errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'       placeholder="Your Company Name"   } bg-white focus:outline-none transition-colors resize-none`}     errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                    rows="5"e && ( focus:outline-none transition-colors resize-none`}l me more about your project!" focus:outline-none transition-colors resize-none`}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${lassName="mt-1 text-red-500 text-sm flex items-center">aceholder="Tell me more about your project!"div>quiredaceholder="Tell me more about your project!"
                      errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                    } bg-white focus:outline-none transition-colors`}
                    placeholder="Your message..."
                    required-1 text-red-500 text-sm flex items-center">l>className="mr-1">⚠️</span> {errors.message}Name="mt-1 text-red-500 text-sm flex items-center">
                  ></textarea>️</span> {errors.message}>⚠️</span> {errors.message}
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">s Indicator */}="website"
                      <span className="mr-1">⚠️</span> {errors.message}g-gray-100 h-2 rounded-full">
                    </p>-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors"ton
                  )}="h-full bg-gold rounded-full transition-all duration-300"ceholder="https://"ubmit"
                </div>={{ width: `${calculateProgress()}%` }}e="submit" />ssName="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"e="submit"
iv>className="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"  </div>disabled={loading}className="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                <buttonloading}>oading}
                  type="submit"                  >                  </div>                    {loading ? (                  >
                  className="w-full py-3 px-6 rounded-lg bg-gold text-white font-medium hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all duration-300"
                  disabled={loading}type="submit"      <>  {/* Submit Button */}        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">      <>
                >  className="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">    <button            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  {loading ? (disabled={loading}          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>    type="submit"          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>         <>   >         className="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"             </svg>               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">                    </svg>            {loading ? (                disabled={loading}                    Sending...                    </svg>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>                      Sending...                <>                >                    </>                      Sending...
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>                      </>                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">                    {loading ? (                    ) : (                      </>
                      </svg>className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

















































export default ContactSection;};  );    </main>      </section>        {/* ...existing Calendly Section... */}        </motion.div>          </div>            </div>              </div>                </ul>                  </li>                    <span>Consider your budget and timeline expectations</span>






export default ContactSection;};  );    </main>      </section>        </div>          </motion.div>            {/* ...existing Calendly Section... */}            </div>              </div>                </div>                  </div>                    </div>                      <span className="ml-2 text-sm text-gray-600">Average Consultation Rating</span>                      </div>                        ))}                          <FaStar key={i} className="inline" />                        {[...Array(5)].map((_, i) => (                      <div className="text-gold">                    <div className="flex items-center mb-2">                  <div className="bg-gray-50 p-4 rounded-lg">                  </div>                    <p className="text-sm text-gray-500">- Marketing Director</p>                    <p className="italic text-gray-600 mb-2">"The consultation was incredibly helpful. Prince took the time to understand our needs and provided clear solutions."</p>                  <div className="bg-gray-50 p-4 rounded-lg">                <div className="grid gap-4">                <h3 className="text-lg font-medium mb-4 text-center">What Clients Say About Our Consultations</h3>              <div className="mb-8 border-t border-gray-100 pt-8 mt-8">            <div className="bg-white rounded-xl shadow-md p-8">            {/* Social Proof Section */}            </div>              </form>                </button>                  )}                    'Send Message'                  ) : (                    </>                      Sending...


                    <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />





                  <li className="flex items-start">                  </li>                    <span>Have a rough idea of your automation goals</span>


                    <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <li className="flex items-start">                  </li>                    <span>Think about your current business processes and pain points</span>


                    <FaCheckCircle className="text-gold mt-1 mr-2 flex-shrink-0" />

                  <li className="flex items-start">                <ul className="space-y-3 text-gray-600">
                <h3 className="font-bold text-lg mb-4">Prepare for Your Consultation</h3>
              <div className="bg-gray-50 p-6 rounded-lg text-left mb-8">

              {/* Consultation Preparation Guide */}                            </p>                Pick a time that works for you to discuss how AI automation can transform your business.              <p className="text-gray-600 mt-4 mb-6">              <h2 className="text-2xl font-forum font-bold">Book a Free Consultation</h2>

              <FaCalendarAlt className="text-gold text-4xl mx-auto mb-4" />



            <div className="text-center mb-8">





          <div className="bg-white rounded-xl shadow-md p-8">          {/* Consultation Section */}          </div>            </form>              </button>                )}                  'Send Message'                ) : (                  </>                    Sending...                    </svg>                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>















export default ContactSection;};  );    </main>      </section>        </div>          </div>            {/* ...existing Calendly Section... */}            </motion.div>              </div>                </form>                  </button>                    )}                      'Send Message'






















export default ContactSection;};  );    </main>      </section>        </div>          </div>            {/* ...existing Calendly Section... */}            </motion.div>              </div>                </form>                  </button>                    )}                      'Send Message'                    ) : (                      </>                        Sending...                        </svg>                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">














export default ContactSection;};  );    </main>      </section>        </div>          </div>            {/* ...existing Calendly Section... */}            </motion.div>              </div>                </form>                  </button>                    )}                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ...existing Calendly Section... */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;