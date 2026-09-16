import { X, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectCard } from '../types';

interface ProjectModalProps {
  project: ProjectCard | null;
  onClose: () => void;
  onEnquire: (projectTitle: string) => void;
}

export default function ProjectModal({ project, onClose, onEnquire }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#E3DED4] z-10 my-4 sm:my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 backdrop-blur-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto w-full flex-1">
          {/* Project Image Header */}
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-[#F3EEE5] overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26312B]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 right-14 sm:right-16 text-white">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-[#71866A] text-white mb-1.5 sm:mb-2">
                {project.category}
              </span>
              <h2 id="project-modal-title" className="font-editorial text-xl sm:text-3xl font-bold leading-tight">
                {project.title}
              </h2>
              <div className="flex items-center space-x-1.5 text-xs text-white/90 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C9A77B]" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#71866A] mb-2">
                Architectural Overview
              </h3>
              <p className="text-sm sm:text-base text-[#26312B] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#71866A] mb-3">
                Execution Scope & Solutions Delivered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item) => (
                  <div key={item} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#71866A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#687068] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative Notice required by prompt */}
            {project.isConceptNote && (
              <div className="p-3 rounded-lg bg-[#FAF8F3] border border-[#E3DED4] text-xs text-[#687068]">
                <span className="font-semibold text-[#26312B]">Note:</span> Architectural visuals showcase craftsmanship typology and aesthetic standards for client consultation reference.
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E3DED4] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#687068] text-center sm:text-left">
                Interested in a similar project for your property?
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-md border border-[#E3DED4] text-xs font-semibold text-[#26312B] hover:bg-[#FAF8F3] transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onEnquire(project.title);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-md bg-[#71866A] hover:bg-[#5d7056] text-xs font-semibold text-white transition-colors flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
                >
                  <span>Inquire About This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
