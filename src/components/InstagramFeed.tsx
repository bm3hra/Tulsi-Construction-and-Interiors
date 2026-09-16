import { Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND, INSTAGRAM_POSTS } from '../data/siteData';

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="py-16 sm:py-20 bg-[#FAF8F3] border-t border-[#E3DED4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E3DED4]/80">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#C98262] mb-2">
              <Instagram className="w-4 h-4" />
              <span>ON INSTAGRAM</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#26312B]">
              Follow Tulsi Interiors
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#687068]">
              Explore design inspiration, site milestones, and project visuals on Instagram.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-[#F3EEE5] hover:bg-[#EEE3D3] border border-[#E3DED4] text-xs sm:text-sm font-semibold text-[#26312B] transition-colors"
            >
              <span>{BRAND.instagramHandle}</span>
              <ArrowUpRight className="w-4 h-4 text-[#71866A]" />
            </a>
          </div>
        </div>

        {/* 4 Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#F3EEE5] border border-[#E3DED4] shadow-2xs block"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <p className="text-xs text-white/90 line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                  <span className="text-[10px] font-semibold text-[#C9A77B] mt-2 inline-flex items-center space-x-1 uppercase tracking-wider">
                    <span>View on Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
