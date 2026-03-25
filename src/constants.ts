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
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Harare CBD Office Complex',
    slug: 'harare-cbd-office-complex',
    category: 'Commercial',
    location: 'CBD, Harare',
    completionDate: '2024-11-20',
    client: 'ZimProp Holdings',
    size: '4,500 sqm',
    description: 'A modern 8-story office building with energy-efficient systems and flexible workspaces.',
    challenge: 'Tight urban site with restricted access and noise control requirements.',
    solution: 'Utilized pre-cast concrete elements and off-site fabrication to minimize on-site disruption and accelerate the timeline.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Chisipite Modern Villa',
    slug: 'chisipite-modern-villa',
    category: 'Residential',
    location: 'Chisipite, Harare',
    completionDate: '2025-01-10',
    client: 'Private Client',
    size: '450 sqm',
    description: 'Minimalist villa focusing on indoor-outdoor living and natural light.',
    challenge: 'Integrating large glass spans while maintaining thermal efficiency in the Harare climate.',
    solution: 'Used high-performance double glazing and strategic overhangs to manage solar gain.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'res-const',
    title: 'Residential Construction',
    slug: 'residential-construction',
    icon: 'Home',
    shortDescription: 'Custom homes, luxury villas, and high-end renovations.',
    fullDescription: 'We specialize in creating bespoke residential spaces that reflect our clients\' lifestyles. From initial ground-breaking to the final coat of paint, our team ensures every detail is executed with precision.',
    process: ['Initial Consultation', 'Site Analysis', 'Budgeting', 'Construction', 'Handover'],
    features: ['Custom Home Building', 'Luxury Renovations', 'Extensions', 'Interior Finishing']
  },
  {
    id: 'com-const',
    title: 'Commercial Construction',
    slug: 'commercial-construction',
    icon: 'Building2',
    shortDescription: 'Office buildings, retail spaces, and industrial complexes.',
    fullDescription: 'Hipavalley delivers high-performance commercial environments. We understand the importance of timelines and ROI in commercial projects.',
    process: ['Feasibility Study', 'Project Planning', 'Structural Engineering', 'Execution', 'Commissioning'],
    features: ['Office Blocks', 'Retail Fit-outs', 'Warehousing', 'Institutional Buildings']
  },
  {
    id: 'prop-dev',
    title: 'Property Development',
    slug: 'property-development',
    icon: 'Map',
    shortDescription: 'Land development, feasibility studies, and joint ventures.',
    fullDescription: 'We partner with investors and landowners to unlock the value of prime real estate in Zimbabwe.',
    process: ['Land Acquisition', 'Market Research', 'Approvals', 'Development', 'Sales/Leasing'],
    features: ['Residential Estates', 'Mixed-use Developments', 'Feasibility Advisory']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Tendai Ndlovu',
    role: 'Managing Director',
    bio: 'With over 20 years of experience in the Zimbabwean construction sector, Tendai leads Hipavalley with a focus on quality and innovation.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Sarah Mutasa',
    role: 'Head of Projects',
    bio: 'Sarah is a certified Project Manager who ensures all Hipavalley projects are delivered on time and within budget.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Senior Project Manager',
    department: 'Construction',
    type: 'Full-time',
    location: 'Harare',
    description: 'We are looking for a seasoned PM to lead our large-scale commercial builds.',
    requirements: ['10+ years experience', 'Degree in Civil Engineering', 'ZBCA registration'],
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
