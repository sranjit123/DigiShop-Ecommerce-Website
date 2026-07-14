import { useState } from 'react';

export default function Contact() {
  // 1. Form state variables holding user input parameters
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // 2. Error and success feedback state management
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Track input field changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // 4. Form validation routing logic matching explicit criteria
  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(97|98)\d{8}$/;

    // A. Name validation: Must be greater than 3 words
    const words = formData.name.trim().split(/\s+/).filter(word => word.length > 0);
    if (!formData.name.trim()) {
      localErrors.name = "Name is required.";
    } else if (words.length <= 3) {
      localErrors.name = "Name must consist of greater than 3 words.";
    }
    
    // B. Email validation: Must be standard valid format
    if (!formData.email.trim()) {
      localErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      localErrors.email = "Please enter a valid email address.";
    }

    // C. Phone validation: Must start with 97 or 98
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      localErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(cleanPhone)) {
      localErrors.phone = "Phone number must start with 97 or 98 and be exactly 10 digits long.";
    }

    // D. Message validation
    if (!formData.message.trim()) {
      localErrors.message = "Message  cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      localErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  // 5. Form submission management
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form variables upon success
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#fdfbf7] border-t border-gray-800 relative">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-black tracking-tight">Establish Connection</h2>
          <p className="mt-3 text-gray-400 text-sm">Initialize a secure message thread with validated verification guards.</p>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm font-medium">
            🚀 Connection Verified! Transmitting payload packets successfully.
          </div>
        )}

       <form 
  data-aos="zoom-in" 
  onSubmit={handleSubmit} 
  className="bg-white border border-gray-100 p-8 rounded-2xl text-left flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
>
  {/* Row 1: Name and Email */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
      <input 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
          errors.name 
            ? 'border-red-300 focus:ring-red-500 bg-red-50' 
            : 'border-gray-200 focus:border-transparent focus:ring-gray-900 hover:border-gray-300'
        }`} 
        placeholder="Ram Shrestha" 
      />
      {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
      <input 
        type="text" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
          errors.email 
            ? 'border-red-300 focus:ring-red-500 bg-red-50' 
            : 'border-gray-200 focus:border-transparent focus:ring-gray-900 hover:border-gray-300'
        }`} 
        placeholder="ram@gmail.com" 
      />
      {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
    </div>
  </div>

  {/* Row 2: Phone Number */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
    <input 
      type="text" 
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
        errors.phone 
          ? 'border-red-300 focus:ring-red-500 bg-red-50' 
          : 'border-gray-200 focus:border-transparent focus:ring-gray-900 hover:border-gray-300'
      }`} 
      placeholder="98XXXXXXXX" 
    />
    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
  </div>

  {/* Row 3: Message Payload */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
    <textarea 
      rows={4} 
      name="message"
      value={formData.message}
      onChange={handleChange}
      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
        errors.message 
          ? 'border-red-300 focus:ring-red-500 bg-red-50' 
          : 'border-gray-200 focus:border-transparent focus:ring-gray-900 hover:border-gray-300'
      }`} 
      placeholder="Message here..."
    ></textarea>
    {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
  </div>

  <button 
    type="submit" 
    className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3.5 rounded-xl transition-all active:scale-[0.98] mt-2 cursor-pointer shadow-sm"
  >
    Send Message
  </button>
</form>
      </div>
    </section>
  );
}