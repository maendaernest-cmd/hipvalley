import { Project, Service, TeamMember, Job, BlogPost, FAQ } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Borrowdale Luxury Residence',
    slug: 'borrowdale-luxury-residence',
    category: 'Residential',
    location: 'Borrowdale, Harare',
    completionDate: '2025-03-15',
    client: 'Private Homeowner',
    size: '620 sqm',
    description: 'A contemporary 5-bedroom family home featuring sustainable design and luxury finishes.',
    challenge: 'Steep site requiring extensive earthworks and specialized retaining structures.',
    solution: 'Implemented a terraced design that follows the natural contours of the land, maximizing views while ensuring structural integrity.',
    imageUrl: '/images/glen.jfif',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Kuwadzana Extension',
    slug: 'kuwadzana-extension',
    category: 'Residential',
    location: 'Kuwadzana, Harare',
    completionDate: '2025-01-10',
    client: 'Private Client',
    size: '450 sqm',
    description: 'Beautiful home extension adding new living spaces for a growing family.',
    challenge: 'Integrating new construction with existing structure seamlessly.',
    solution: 'Designed extension that matches existing architecture while providing modern functionality.',
    imageUrl: '/images/WhatsApp Image 2026-03-25 at 20.27.28.jpeg',
    gallery: [],
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: 'res-const',
    title: 'Custom Home Building',
    slug: 'custom-home-building',
    icon: 'Home',
    shortDescription: 'Bespoke homes designed and built to your family\'s needs.',
    fullDescription: 'We specialize in creating beautiful, functional homes that reflect your lifestyle. From the initial design to the final finishes, we work closely with you to ensure your dream home becomes a reality.',
    process: ['Initial Consultation', 'Design & Planning', 'Budgeting', 'Construction', 'Handover'],
    features: ['New Home Construction', 'Custom Designs', 'Family Homes', 'Luxury Finishes']
  },
  {
    id: 'home-renov',
    title: 'Home Renovations',
    slug: 'home-renovations',
    icon: 'Wrench',
    shortDescription: 'Transform your existing home into your dream space.',
    fullDescription: 'We breathe new life into existing homes through thoughtful renovations. Whether it\'s a kitchen remodel, bathroom update, or whole-house renovation, we deliver exceptional results.',
    process: ['Assessment', 'Design', 'Material Selection', 'Renovation', 'Final Touches'],
    features: ['Kitchen Remodels', 'Bathroom Updates', 'Room Additions', 'Whole House Renovations']
  },
  {
    id: 'home-ext',
    title: 'Home Extensions',
    slug: 'home-extensions',
    icon: 'SquarePlus',
    shortDescription: 'Expand your living space with seamless home additions.',
    fullDescription: 'As your family grows, we help your home grow with you. Our extensions are designed to blend perfectly with your existing structure while adding valuable living space.',
    process: ['Site Analysis', 'Design Integration', 'Permits', 'Construction', 'Connection'],
    features: ['Second Story Additions', 'Room Extensions', 'Garage Conversions', 'Outdoor Living Spaces']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Tendai Ndlovu',
    role: 'Owner & Lead Builder',
    bio: 'With 8 years of experience in residential construction, I founded Hipavalley with a passion for creating beautiful family homes across Harare.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Junior Site Manager',
    department: 'Construction',
    type: 'Full-time',
    location: 'Harare',
    description: 'We are looking for a motivated site manager to oversee our residential home projects.',
    requirements: ['3+ years residential construction experience', 'Diploma in Building Construction', 'Good communication skills'],
    deadline: '2026-04-30'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Sustainable Building Trends in Harare',
    slug: 'sustainable-building-trends-harare',
    excerpt: 'How green materials are changing the landscape of Zimbabwean construction.',
    content: 'Full content goes here...',
    author: 'Tendai Ndlovu',
    date: '2026-03-10',
    category: 'Sustainability',
    imageUrl: 'https://images.unsplash.com/photo-1518005020480-383301028020?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long does a typical residential build take?',
    answer: 'A standard custom home usually takes between 8 to 14 months depending on complexity and site conditions.',
    category: 'Residential'
  },
  {
    question: 'Are you registered with the ZBCA?',
    answer: 'Yes, Hipavalley is a proud member of the Zimbabwe Building Contractors Association.',
    category: 'General'
  }
];
