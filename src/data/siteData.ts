import { ServiceItem, ShowcaseItem, ProjectCard, ProcessStep, WhyChooseItem } from '../types';

export const BRAND = {
  name: "Tulsi Construction & Interiors",
  shortName: "Tulsi",
  businessType: "Construction Company, Interior Design, Renovation & Turnkey Projects",
  contactPerson: "Kailash Moyal",
  phone: "+91 94604 25224",
  rawPhone: "+919460425224",
  whatsappNumber: "919460425224",
  whatsappUrl: "https://wa.me/919460425224",
  email: "Tulsi.designandinterior@gmail.com",
  instagramHandle: "@tulsi.interiordesign",
  instagramUrl: "https://www.instagram.com/tulsi.interiordesign/",
  location: "Ajmer, Rajasthan, India",
  serviceArea: "Pan Rajasthan",
  directorPhoto: "/kailash-moyal.svg",
  tagline: "Turning Dreams into Well-Designed Reality.",
  secondaryTagline: "Complete Construction & Interior Solutions Across Rajasthan",
  brandMessage: "Tulsi Construction – Turning Dreams into Well-Designed Reality. From construction to interiors, renovation and turnkey execution, we provide complete project solutions under one roof."
};

export const TRUST_BAR_ITEMS = [
  "Construction Solutions",
  "Interior Design",
  "Renovation",
  "Turnkey Projects",
  "Pan Rajasthan Service"
];

export const ABOUT_STATS = [
  {
    number: "360°",
    label: "Project Solutions",
    description: "Civil, MEP, interiors, and turnkey execution under one roof"
  },
  {
    number: "4",
    label: "Core Services",
    description: "Construction, interior design, renovation & turnkey delivery"
  },
  {
    number: "RJ",
    label: "Pan Rajasthan",
    description: "Comprehensive on-site coverage from Ajmer to major districts"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Construction",
    iconName: "Building2",
    description: "Complete construction solutions for residential and commercial properties, including structural execution, quality materials, and meticulous finishing.",
    scope: ["Civil Construction", "Structural Framing", "Quality Masonry", "Elevation & Facade"]
  },
  {
    number: "02",
    title: "Interior Designing",
    iconName: "Sofa",
    description: "Elegant and functional interior solutions designed around the client's space, lifestyle, functional requirements, and refined aesthetic preferences.",
    scope: ["Space Planning", "Custom Woodwork", "Lighting Design", "Material Palette Selection"]
  },
  {
    number: "03",
    title: "Renovation",
    iconName: "Hammer",
    description: "Transform existing homes, offices, and commercial spaces through thoughtful spatial reconfiguration, modern remodeling, and high-end finishing.",
    scope: ["Structural Alterations", "Bathroom & Kitchen Remodeling", "Flooring Upgrades", "Electrical & Plumbing Retrofit"]
  },
  {
    number: "04",
    title: "Turnkey Projects",
    iconName: "KeyRound",
    description: "End-to-end project coordination covering design, structural construction, interiors, and final handover through one accountable leadership team.",
    scope: ["Single-Point Accountability", "Budget & Timeline Control", "Procurement Management", "Ready-to-Occupy Delivery"]
  },
  {
    number: "05",
    title: "Residential Projects",
    iconName: "House",
    description: "Tailored construction and interior execution for luxury bungalows, villas, urban duplexes, apartments, and private farmhouses.",
    scope: ["Luxury Villas", "Duplex Homes", "Apartment Fit-outs", "Private Farmhouses"]
  },
  {
    number: "06",
    title: "Commercial Projects",
    iconName: "Building",
    description: "Professional construction and interior execution for corporate offices, retail showrooms, boutique shops, and executive hospitality spaces.",
    scope: ["Corporate Offices", "Retail Showrooms", "Commercial Complexes", "Boutique Retail"]
  }
];

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    number: "01",
    title: "Construction",
    headline: "Build with Confidence",
    description: "Plan and execute residential and commercial construction projects with a practical approach to structural integrity, functional layouts, premium finishing, and disciplined on-site supervision.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Contemporary luxury villa architectural construction with clean lines and warm stone accents",
    highlights: ["Engineered structural foundation", "On-site quality supervision", "Transparent milestone schedule", "Premium grade raw materials"]
  },
  {
    number: "02",
    title: "Interior Designing",
    headline: "Spaces That Feel Like Yours",
    description: "Create comfortable, elegant, and functional interiors that genuinely reflect your daily lifestyle and requirements. Every line, wood finish, and ambient fixture is tailored to balance utility with subtle elegance.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury living room interior with warm natural lighting, earthy textures, and bespoke furniture",
    highlights: ["Custom joinery and veneer detailing", "Warm ambient and task lighting", "Earthy warm tones & breathable spaces", "Ergonomic furniture layouts"]
  },
  {
    number: "03",
    title: "Renovation",
    headline: "Transform Existing Spaces",
    description: "Give an existing property an inspiring new identity and improved spatial functionality through thoughtful renovation, structural updates, and modern aesthetic rejuvenation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Renovated contemporary Indian home with natural stone, light wood and modern minimalist finishes",
    highlights: ["Space optimization & wall removal", "Complete plumbing & electrical rejuvenation", "Contemporary kitchen & bath suites", "Seamless blend of classic & modern"]
  },
  {
    number: "04",
    title: "Turnkey Projects",
    headline: "From Concept to Completion",
    description: "Coordinate structural construction, bespoke interior joinery, MEP utilities, and turnkey finishing through one dedicated project team for a streamlined, stress-free delivery experience.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Completed luxury villa project in warm evening daylight with courtyard lighting",
    highlights: ["Single contact point for all contractors", "Synchronized civil & interior timelines", "Zero subcontractor disputes", "Hassle-free keys handover"]
  }
];

export const PROJECTS: ProjectCard[] = [
  {
    id: "proj-1",
    title: "The Arched Villa (22 Globe VR)",
    category: "Residential",
    location: "Ajmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A signature 3-tier luxury villa featuring custom curved Roman arch double-height glazing, textured basalt feature cladding, warm teak soffits, cantilevered balconies with vertical fluted slats, and integrated evening ambient lighting.",
    scope: ["Complete RCC & Civil Construction", "Double-Height Curved Arch Glazing", "Exterior Fluted & Textured Stone Facade", "Integrated Ambient Facade Lighting"],
    isConceptNote: true
  },
  {
    id: "proj-2",
    title: "GS Prime Twin Residences",
    category: "Turnkey",
    location: "Kishangarh Road, Ajmer",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Symmetrical modern twin villas engineered with climate-responsive terracotta jaali lattice screens, floor-to-ceiling atrium glass stairwells, teak-paneled overhangs with warm LED illumination, and private automated vehicular access.",
    scope: ["Twin Duplex Turnkey Construction", "Terracotta Jaali Screen Fabrication", "Double-Height Atrium Glazing", "Custom Teak Soffits & Electrical Commissioning"],
    isConceptNote: true
  },
  {
    id: "proj-3",
    title: "Sandstone & Walnut Living Suite",
    category: "Interior",
    location: "Jaipur Road, Ajmer",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Bespoke residential interior with subtle Rajasthan-inspired warm tones, textured limewash walls, custom fluted paneling, and warm architectural lighting.",
    scope: ["Living & Dining Interior", "False Ceiling & Recessed Lighting", "Custom Veneer Media Console", "Curated Soft Furnishings"],
    isConceptNote: true
  },
  {
    id: "proj-4",
    title: "Executive Corporate Workspace",
    category: "Commercial",
    location: "Civil Lines, Ajmer",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "A contemporary commercial office space balancing collaborative work zones, sound-insulated cabins, biophilic indoor planter accents, and an inviting reception area.",
    scope: ["Acoustic Partitions & Glass Glazing", "Ergonomic Modular Desking", "HVAC & Network Integration", "Executive Boardroom Suite"],
    isConceptNote: true
  },
  {
    id: "proj-5",
    title: "Heritage Duplex Transformation",
    category: "Renovation",
    location: "Pushkar Road, Ajmer",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    description: "Comprehensive remodeling of an older 2-storey house, reconfiguring internal load-bearing sections to introduce open-plan living, modern wet areas, and upgraded insulation.",
    scope: ["Structural Reconfiguration", "Modern Modular Kitchen Setup", "Complete Waterproofing & Plumbing", "Exterior Stucco & Terrazzo"],
    isConceptNote: true
  },
  {
    id: "proj-6",
    title: "Serene Master Bedroom Retreat",
    category: "Interior",
    location: "Vaishali Nagar, Ajmer",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Warm minimalist master bedroom design incorporating custom upholstered headboard, concealed walk-in closet joinery, and soothing muted terracotta and sage color palette.",
    scope: ["Walk-in Wardrobes", "Ambient Mood Lighting", "Integrated Vanity Space", "Hardwood Accent Flooring"],
    isConceptNote: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Consultation & Requirement Analysis",
    description: "We begin with a thorough discussion to understand your exact requirements, land or existing property conditions, budget preferences, lifestyle needs, and project timeline.",
    deliverables: ["Site inspection & dimension verification", "Client brief & functional priority list", "Budget framework discussion"]
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Design & Technical Layout",
    description: "Our team develops the practical architectural approach, spatial floor layouts, material specifications, and execution plan calibrated to Rajasthan's climate and building norms.",
    deliverables: ["Architectural 2D/3D layouts", "Material & finishes breakdown", "Detailed itemized work estimate"]
  },
  {
    number: "03",
    title: "Execute",
    subtitle: "Rigorous On-Site Coordination",
    description: "Construction, civil masonry, interior joinery, and electrical/plumbing installations are coordinated methodically with regular supervisory presence and quality audits.",
    deliverables: ["Experienced site supervision", "Structured construction milestones", "Ongoing progress updates to client"]
  },
  {
    number: "04",
    title: "Finish",
    subtitle: "Inspection & Handover",
    description: "Final surface finishing, snag-list resolution, deep cleaning, and systematic verification of all fittings ensure the finished space is truly ready for handover.",
    deliverables: ["Comprehensive quality checklist", "Final snagging inspection", "Flawless walkthrough & handover"]
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Complete Project Solutions",
    description: "Construction, interior design, renovation, and turnkey delivery handled by one coordinated business under single responsibility.",
    iconName: "Layers"
  },
  {
    title: "Ajmer-Based Leadership",
    description: "Firmly rooted in Ajmer with intimate knowledge of regional vendors, stone quarries, local weather conditions, and craftsmanship standards.",
    iconName: "Compass"
  },
  {
    title: "Single-Point Coordination",
    description: "No dealing with disconnected contractors or pointing fingers. Coordinate all structural and aesthetic requirements through Kailash Moyal and team.",
    iconName: "ShieldCheck"
  },
  {
    title: "Practical, Livable Design",
    description: "We balance sophisticated modern visual elegance with pragmatic day-to-day utility, thermal efficiency, and easy long-term maintenance.",
    iconName: "Sliders"
  },
  {
    title: "Personal Attention",
    description: "Every site receives direct managerial supervision and prompt communication, ensuring your preferences are faithfully realized in the field.",
    iconName: "UserCheck"
  },
  {
    title: "Pan Rajasthan Reach",
    description: "Equipped with mobile execution teams and supervisory networks capable of delivering projects across key Rajasthan districts.",
    iconName: "MapPin"
  }
];

export const RAJASTHAN_LOCATIONS = [
  { name: "Ajmer", role: "Headquarters & Core Hub", isHQ: true },
  { name: "Jaipur", role: "Service Region", isHQ: false },
  { name: "Kishangarh", role: "Service Region", isHQ: false },
  { name: "Beawar", role: "Service Region", isHQ: false },
  { name: "Pushkar", role: "Service Region", isHQ: false },
  { name: "Jodhpur", role: "Service Region", isHQ: false },
  { name: "Udaipur", role: "Service Region", isHQ: false },
  { name: "Bhilwara", role: "Service Region", isHQ: false },
  { name: "Kota", role: "Service Region", isHQ: false },
  { name: "Alwar", role: "Service Region", isHQ: false },
  { name: "Bikaner", role: "Service Region", isHQ: false },
  { name: "Sikar", role: "Service Region", isHQ: false },
  { name: "Nagaur", role: "Service Region", isHQ: false },
  { name: "Pali", role: "Service Region", isHQ: false },
  { name: "Rajsamand", role: "Service Region", isHQ: false }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    caption: "Contemporary villa elevation detailing in progress. Natural stone and balanced volume.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    likes: "View Post"
  },
  {
    id: "ig-2",
    caption: "Warm living room palettes crafted with fluted wood and subtle ambient lighting.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80",
    likes: "View Post"
  },
  {
    id: "ig-3",
    caption: "On-site quality check for structural framework. Precision and durability first.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    likes: "View Post"
  },
  {
    id: "ig-4",
    caption: "Minimalist dining transition featuring natural stone flooring and warm accents.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
    likes: "View Post"
  }
];
