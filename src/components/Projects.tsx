import { useState } from 'react';
import { Eye, MapPin, Layers } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { ProjectCard, ProjectCategory } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  onEnquireProject: (projectTitle: string) => void;
}

export default function Projects({ onEnquireProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Interior',
    'Renovation',
    'Turnkey'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-[#F3EEE5]/50 border-t border-[#E3DED4] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#71866A] bg-[#E7EEE4] px-3.5 py-1 rounded-full inline-block mb-3">
            OUR PROJECTS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#26312B] tracking-tight">
            Explore Our Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#687068]">
            A visual showcase of construction, interiors, renovation and turnkey projects.
          </p>
          <div className="w-16 h-0.5 bg-[#C9A77B] mx-auto mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`filter-btn-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#71866A] text-white shadow-xs'
                  : 'bg-white text-[#687068] hover:text-[#26312B] hover:bg-[#EEE3D3]/60 border border-[#E3DED4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl overflow-hidden border border-[#E3DED4] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image with overlay on hover */}
              <div className="aspect-16/11 relative overflow-hidden bg-[#E3DED4]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-sm bg-white/90 backdrop-blur-xs text-[#26312B] shadow-2xs">
                    {project.category}
                  </span>
                </div>

                {/* View Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white/95 text-[#26312B] text-xs font-semibold flex items-center space-x-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-[#71866A]" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-xs text-[#687068] mb-1.5">
                    <MapPin className="w-3 h-3 text-[#C98262]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#26312B] group-hover:text-[#71866A] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#687068] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E3DED4]/60 flex items-center justify-between text-xs text-[#71866A] font-semibold">
                  <span className="flex items-center space-x-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{project.scope.length} execution stages</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Notice as strictly requested by prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#687068] max-w-xl mx-auto bg-white/60 p-3 rounded-lg border border-[#E3DED4]">
            <span className="font-medium text-[#26312B]">Project Portfolio Note:</span> Project visual representations showcase structural execution, interior craft, and turnkey standards. Detailed drawings and on-site visits are shared during project consultation.
          </p>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={onEnquireProject}
      />
    </section>
  );
}
