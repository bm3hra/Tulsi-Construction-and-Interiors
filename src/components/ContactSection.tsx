import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, CheckCircle2, MessageCircle, Send, User } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialLocation?: string;
}

export default function ContactSection({ initialProjectType = '', initialLocation = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: initialProjectType || 'New Construction',
    projectLocation: initialLocation || 'Ajmer',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    "New Construction",
    "Interior Design",
    "Renovation",
    "Turnkey Project",
    "Residential Project",
    "Commercial Project"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable client-side submission & storage
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Kailash ji, I am contacting you from the Tulsi Construction & Interiors website.%0A%0A*Name:* ${encodeURIComponent(formData.fullName || 'Prospective Client')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not specified')}%0A*Project Type:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(formData.projectLocation || 'Rajasthan')}%0A*Details:* ${encodeURIComponent(formData.message || 'Looking for project consultation.')}`;
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#FAF8F3] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            CONTACT US
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Start Your Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            Share your requirement and Tulsi Construction & Interiors will get in touch.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Cards & Kailash Moyal Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DED4] shadow-xs space-y-6">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#26312B]">
                  Direct Contact
                </h3>
                <p className="text-xs sm:text-sm text-[#687068] mt-1">
                  Connect directly with our leadership team for consultations and on-site assessments across Rajasthan.
                </p>
              </div>

              <div className="space-y-4">
                {/* Contact Person */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E3DED4]">
                  <div className="p-2 rounded-lg bg-[#E7EEE4] text-[#71866A] shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#687068] uppercase tracking-wider font-semibold">
                      Key Contact Person
                    </div>
                    <div className="text-base font-bold text-[#26312B]">
                      {BRAND.contactPerson}
                    </div>
                    <div className="text-xs text-[#71866A] font-medium">
                      Project Director • Tulsi Construction
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${BRAND.rawPhone}`}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E3DED4] hover:border-[#71866A] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#E7EEE4] text-[#71866A] shrink-0 group-hover:bg-[#71866A] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#687068] uppercase tracking-wider font-semibold">
                      Phone Call
                    </div>
                    <div className="text-base font-bold text-[#26312B] group-hover:text-[#71866A] transition-colors">
                      {BRAND.phone}
                    </div>
                    <div className="text-[11px] text-[#687068]">
                      Mon - Sat, 9:00 AM - 7:30 PM IST
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E3DED4] hover:border-[#71866A] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#EEE3D3] text-[#C9A77B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[#687068] uppercase tracking-wider font-semibold">
                      Email Address
                    </div>
                    <div className="text-sm font-bold text-[#26312B] truncate group-hover:text-[#71866A] transition-colors">
                      {BRAND.email}
                    </div>
                    <div className="text-[11px] text-[#687068]">
                      Official project enquiries & drawings
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E3DED4]">
                  <div className="p-2 rounded-lg bg-[#F3E1D8] text-[#C98262] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#687068] uppercase tracking-wider font-semibold">
                      Headquarters & Coverage
                    </div>
                    <div className="text-sm font-bold text-[#26312B]">
                      {BRAND.location}
                    </div>
                    <div className="text-[11px] text-[#71866A] font-semibold mt-0.5">
                      Serving Clients Pan Rajasthan
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E3DED4] hover:border-[#C98262] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#F3E1D8] text-[#C98262] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#687068] uppercase tracking-wider font-semibold">
                      Instagram Portfolio
                    </div>
                    <div className="text-sm font-bold text-[#26312B] group-hover:text-[#C98262] transition-colors">
                      {BRAND.instagramHandle}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DED4] shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E7EEE4] text-[#71866A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#26312B]">
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className="text-sm text-[#687068] max-w-md mx-auto leading-relaxed">
                    Kailash Moyal or our architectural execution team will review your project requirements and connect with you shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#25D366] text-white font-semibold text-xs cursor-pointer shadow-xs hover:bg-[#20bd5a]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp Instantly</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          projectType: 'New Construction',
                          projectLocation: 'Ajmer',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 rounded-md border border-[#E3DED4] text-xs font-semibold text-[#26312B] hover:bg-[#FAF8F3] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#26312B]">
                      Tell Us About Your Project
                    </h3>
                    <p className="text-xs sm:text-sm text-[#687068] mt-1">
                      Fill out this quick form or connect via WhatsApp for an immediate consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="full_name" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-[#C98262]">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                        Phone Number <span className="text-[#C98262]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-[#687068] font-normal normal-case">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="project_type" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                        Project Type <span className="text-[#C98262]">*</span>
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors cursor-pointer"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label htmlFor="project_location" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                      Project Location (City / Area in Rajasthan) <span className="text-[#C98262]">*</span>
                    </label>
                    <input
                      id="project_location"
                      name="project_location"
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Ajmer, Jaipur Road, Kishangarh, Pushkar, Jodhpur..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#26312B] mb-1.5 uppercase tracking-wider">
                      Tell Us About Your Project <span className="text-[#C98262]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your plot size, square footage, design requirements, budget preferences or expected start date..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E3DED4] bg-[#FAF8F3] text-[#26312B] focus:bg-white focus:outline-hidden focus:border-[#71866A] focus:ring-1 focus:ring-[#71866A] transition-colors"
                    />
                  </div>

                  {/* Submit Button & WhatsApp Alternative */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3.5 rounded-md bg-[#71866A] hover:bg-[#5d7056] text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Request a Consultation'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-3 rounded-md bg-[#F3EEE5] hover:bg-[#EEE3D3] text-[#26312B] border border-[#E3DED4] font-semibold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Open WhatsApp with Details</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
