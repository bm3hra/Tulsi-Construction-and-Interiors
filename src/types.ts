export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  iconName: 'Building2' | 'Sofa' | 'Hammer' | 'KeyRound' | 'House' | 'Building';
  description: string;
  scope: string[];
}

export interface ShowcaseItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Interior' | 'Renovation' | 'Turnkey';

export interface ProjectCard {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Renovation' | 'Turnkey';
  image: string;
  location: string;
  duration?: string;
  description: string;
  scope: string[];
  isConceptNote?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  message: string;
}
