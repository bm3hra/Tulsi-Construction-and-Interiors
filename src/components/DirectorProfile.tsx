import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Award, CheckCircle, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function DirectorProfile() {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'formal' | 'site'>('formal');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted photo if available, otherwise check public or fallback
  useEffect(() => {
    const saved = localStorage.getItem('tulsi_director_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoUrl(result);
        try {
          localStorage.setItem('tulsi_director_photo', result);
        } catch {
          // localStorage may exceed quota if image is very large
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Fallback high-quality curated architectural executive portrait
  const defaultExecutivePhoto =
    activeTab === 'formal'
      ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80';

  const currentDisplayPhoto = photoUrl || defaultExecutivePhoto;

  return (
    <div
      id="director-profile-card"
      className="mt-14 lg:mt-20 bg-white rounded-3xl border border-[#E3DED4] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
    >
      {/* Decorative architectural background watermark */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#E7EEE4]/50 pointer-events-none -z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Portrait Photo Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-sm sm:max-w-md mx-auto">
            
            {/* Outer Decorative Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#F3EEE5] aspect-4/5 sm:aspect-square lg:aspect-4/5">
              <img
                src={currentDisplayPhoto}
                alt="Kailash Moyal - Founder & Project Director of Tulsi Construction"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = defaultExecutivePhoto;
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26312B]/85 via-transparent to-transparent opacity-90" />

              {/* Floating Director Badge */}
              <div className="absolute top-3 left-3 bg-[#71866A] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md flex items-center space-x-1.5 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Leadership</span>
              </div>

              {/* Bottom Details on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-editorial text-xl sm:text-2xl font-bold tracking-wide">
                  {BRAND.contactPerson}
                </div>
                <div className="text-xs sm:text-sm text-[#E7EEE4] font-medium mt-0.5 flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C9A77B]" />
                  <span>Founder & Project Director</span>
                </div>
              </div>
            </div>

            {/* Custom Photo Upload & Mode Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 w-full">
              {/* Photo Mode Switcher */}
              <div className="inline-flex bg-[#FAF8F3] p-1 rounded-lg border border-[#E3DED4] text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('formal')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'formal'
                      ? 'bg-[#71866A] text-white shadow-xs'
                      : 'text-[#687068] hover:text-[#26312B]'
                  }`}
                >
                  Formal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('site')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'site'
                      ? 'bg-[#71866A] text-white shadow-xs'
                      : 'text-[#687068] hover:text-[#26312B]'
                  }`}
                >
                  On-Site
                </button>
              </div>

              {/* Photo Upload Button */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-[#F3EEE5] hover:bg-[#EEE3D3] text-[#26312B] border border-[#E3DED4] transition-all cursor-pointer shadow-2xs"
                  title="Upload / Update photo directly"
                >
                  <Upload className="w-3.5 h-3.5 text-[#71866A]" />
                  <span>Update Photo</span>
                </button>
              </div>
            </div>

            {photoUrl && (
              <p className="text-[11px] text-[#71866A] mt-1.5 text-center font-medium">
                ✓ Custom photo loaded & saved locally
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Narrative, Philosophy & Direct Contact */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <div className="inline-flex items-center space-x-2 self-start px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#71866A]/20 text-[#71866A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3 h-3" />
            <span>DIRECTOR & PROJECT LEADERSHIP</span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#26312B] tracking-tight">
            Meet {BRAND.contactPerson}
          </h3>

          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C98262] uppercase mt-1">
            Founder & Principal Contractor • Tulsi Construction & Interiors
          </p>

          {/* Director Quote */}
          <div className="mt-4 p-4 rounded-xl bg-[#FAF8F3] border-l-4 border-[#71866A] text-sm text-[#26312B] italic leading-relaxed">
            “Every home, villa, or commercial space we build across Rajasthan is personal to us. From ground-breaking excavation to the final polish of interior veneer, our commitment is simple: complete structural integrity, honest communication, and uncompromised craftsmanship.”
          </div>

          {/* Key Directorial Commitments */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2.5">
              <CheckCircle className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#26312B]">
                Direct on-site quality and safety audits
              </span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#26312B]">
                Single-point coordination (No middlemen)
              </span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#26312B]">
                Transparent material procurement & billing
              </span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#26312B]">
                Hands-on delivery from Ajmer to Pan Rajasthan
              </span>
            </div>
          </div>

          {/* Direct Communication Buttons */}
          <div className="mt-6 pt-5 border-t border-[#E3DED4] flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <a
              href={`tel:${BRAND.rawPhone}`}
              id="director-call-btn"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 sm:py-2.5 rounded-lg bg-[#71866A] hover:bg-[#5d7056] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>Call Kailash Moyal: {BRAND.phone}</span>
            </a>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="director-whatsapp-btn"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 sm:py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              id="director-email-btn"
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 sm:py-2.5 rounded-lg bg-[#FAF8F3] hover:bg-[#F3EEE5] text-[#26312B] border border-[#E3DED4] text-xs sm:text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-[#71866A]" />
              <span>Email</span>
            </a>
          </div>

          {/* Location & Office Footer */}
          <div className="mt-4 flex items-center space-x-2 text-xs text-[#687068]">
            <MapPin className="w-3.5 h-3.5 text-[#C98262] shrink-0" />
            <span>Head Office: Ajmer, Rajasthan • Available for on-site consultation across Rajasthan</span>
          </div>

        </div>

      </div>
    </div>
  );
}
