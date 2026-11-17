export interface CapabilityItem {
  name: string;
  category: string;
  status: 'Implemented' | 'Partially Implemented' | 'Experimental' | 'Planned';
  description: string;
  order: number;
}

export interface RoadmapStage {
  stage: number;
  title: string;
  gate: string;
  status: 'Completed' | 'Active Development' | 'Planned';
  description: string;
  deliverables: string[];
}

export interface ArticleItem {
  slug: string;
  title: string;
  publishedAt: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
}

export interface RecognitionItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  link: string;
  logo: string;
  badge: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  summary: string;
  details: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export const COMPANY_DETAILS = {
  legalName: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
  shortName: 'TUSK INNOVATIONS',
  cin: 'U62011KL2026PTC106386',
  email: 'tuskinnovationsglobal@gmail.com',
  phone: '+91 62823 53042',
  address: '26/378(1), Thekkumoodu, Vanchiyoor P.O., Thiruvananthapuram, Kerala 695035, India.',
  mapsUrl: 'https://maps.google.com/?q=26/378(1),+Thekkumoodu,+Vanchiyoor+P.O.,+Thiruvananthapuram,+Kerala+695035',
  githubOrg: 'https://github.com/NijoP',
  eakRepo: 'https://github.com/NijoP/electronics-agent-kit-new-prototype',
  tagline: 'Building Intelligent Technology. Engineering the Future.',
};

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: 'nvidia-inception',
    title: 'Selected for the NVIDIA Inception Program',
    organization: 'NVIDIA Corporation',
    category: 'Global Tech Acceleration',
    description:
      'TUSK Innovations is part of the NVIDIA Inception Program, supporting startups building innovative technology and AI solutions with technical tools, mentorship, and ecosystem resources.',
    link: 'https://www.nvidia.com/en-us/startups/',
    logo: '/brand/nvidia-full.svg',
    badge: 'NVIDIA Inception',
  },
  {
    id: 'ksum-idea-grant',
    title: 'Selected under Kerala Startup Mission Idea Grant',
    organization: 'Kerala Startup Mission (KSUM)',
    category: 'R&D Innovation Selection',
    description:
      'Selected under the Kerala Startup Mission Idea Grant program to accelerate research, architectural prototyping, and technology development in AI-assisted electronics engineering.',
    link: 'https://startupmission.kerala.gov.in/',
    logo: '/brand/ksum-logo.svg',
    badge: 'KSUM Idea Grant',
  },
  {
    id: 'dpiit-recognition',
    title: 'DPIIT-Recognised Startup',
    organization: 'Ministry of Commerce & Industry, Govt. of India',
    category: 'National Startup Recognition',
    description:
      'Officially recognized as an innovative startup under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.',
    link: 'https://www.startupindia.gov.in/',
    logo: '/brand/startup-india.png',
    badge: 'Startup India',
  },
  {
    id: 'ksum-recognition',
    title: 'Recognised by Kerala Startup Mission',
    organization: 'Kerala Startup Mission',
    category: 'State Startup Ecosystem',
    description:
      'Accredited and registered with Kerala Startup Mission (KSUM), the nodal agency of the Government of Kerala for fostering entrepreneurship and technology innovation.',
    link: 'https://startupmission.kerala.gov.in/',
    logo: '/brand/ksum-logo.svg',
    badge: 'Recognised Startup',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: 'Discovery',
    summary: 'Understand business requirements, project objectives, and technical constraints.',
    details:
      'We engage directly with your team to dissect functional requirements, operational environments, compliance requirements, target user experience, and cost boundaries.',
  },
  {
    step: 2,
    title: 'Research & Architecture',
    summary: 'Develop the technical architecture, component roadmap, and engineering strategy.',
    details:
      'We establish deterministic system topologies, evaluate component feasibility, formulate hardware-software interfaces, and design the complete technical foundation.',
  },
  {
    step: 3,
    title: 'Design & Development',
    summary: 'Build software, AI systems, circuit schematics, and PCB layouts.',
    details:
      'Our engineers implement custom AI pipelines, robust systems software, multi-layer PCB designs, embedded firmware, and responsive modern user interfaces in parallel.',
  },
  {
    step: 4,
    title: 'Integration & Testing',
    summary: 'Validate functionality, reliability, electrical rules, and system performance.',
    details:
      'Comprehensive DRC/ERC rule validation, signal integrity checks, bench testing, software unit and integration test suites, and hardware stress evaluation.',
  },
  {
    step: 5,
    title: 'Production & Deployment',
    summary: 'Coordinate manufacturing, component procurement, and production release.',
    details:
      'We generate auditable manufacturing packages (Gerbers, drill files, BOMs, centroid files), coordinate with fabrication facilities, and deploy software services.',
  },
  {
    step: 6,
    title: 'Final Delivery',
    summary: 'Deliver the completed solution, documentation, and operational handoff.',
    details:
      'We deliver fully verified physical hardware, working software codebases, comprehensive schematics, architecture documentation, and ongoing maintenance support.',
  },
];

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions for Businesses',
    subtitle: 'Intelligent Software, Autonomous Agents & Workflow Automation',
    description:
      'We architect, build, and deploy custom artificial intelligence systems that streamline complex operations, automate repetitive workflows, and empower business intelligence.',
    capabilities: [
      'Custom AI application development',
      'Autonomous AI agent development & tool orchestration',
      'Business workflow automation & RPA pipelines',
      'AI-powered internal operational tools',
      'Custom AI integrations, LLM adapters & secure APIs',
      'Intelligent executive dashboards & real-time analytics',
      'Business-specific reasoning systems & domain knowledge graphs',
      'Process automation, document analysis & productivity solutions',
    ],
  },
  {
    id: 'electronics-engineering',
    title: 'Electronics & PCB Engineering',
    subtitle: 'From Circuit Schematics to Verified Multi-Layer Boards',
    description:
      'Comprehensive hardware engineering from concept schematic synthesis to high-density PCB layouts, embedded firmware development, and manufacturing coordination.',
    capabilities: [
      'End-to-end electronics product development',
      'Circuit design and schematic engineering',
      'High-speed PCB layout, routing & stackup design',
      'Multi-layer PCB development & impedance matching',
      'Embedded systems & microcontroller-based solutions (ARM, ESP32, STM32)',
      'IoT systems, wireless communication & sensor integration',
      'Power electronics, regulators & custom electronic controllers',
      'Bill of Materials (BOM) preparation & component sourcing assistance',
      'Rapid prototype development, bring-up & lab testing',
      'Manufacturing coordination, assembly audit & fabrication packages',
    ],
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Product Development',
    subtitle: 'From Project Idea to Final Delivery',
    description:
      'Our signature offering. Whether you arrive with a napkin sketch, an incomplete hardware prototype, or an enterprise specification, we take full ownership of the engineering cycle from discovery to deployed reality.',
    capabilities: [
      'Concept feasibility analysis & technical architecture formulation',
      'Unified software, AI, and electronics co-design',
      'Full-stack cloud applications, mobile apps & desktop IDE shells',
      'Hardware prototyping, component sourcing & vendor coordination',
      'Rigorous electrical, thermal, and functional testing',
      'Regulatory compliance audit & manufacturing preparation',
      'Production deployment, documentation & client handover',
      'Post-delivery iteration, firmware updates & lifecycle support',
    ],
  },
];

export const EAK_CAPABILITIES: CapabilityItem[] = [
  {
    name: 'Live Terminal-to-EDA Synchronization',
    category: 'Workstation & Shell',
    status: 'Implemented',
    description:
      'A coding agent in the terminal workspace edits the design via typed commands; the schematic and PCB views update live in real-time, preserving camera orientation and selection.',
    order: 1,
  },
  {
    name: 'Typed Deterministic Engine with Fail-Closed Validation',
    category: 'Kernel & Physics',
    status: 'Implemented',
    description:
      'Every change is a typed runtime command on one canonical design model. Invariant validation (ERC/DRC) is computed by deterministic engines, never guessed by neural models. Unknown checks report fail-closed.',
    order: 2,
  },
  {
    name: 'Interactive Schematic Design & Editing',
    category: 'Schematic Engine',
    status: 'Implemented',
    description:
      'Drag-and-drop component placement, click-to-place with rotation, automatic junction dots, wires, net labels, no-connect markers, mirror, and multi-level undo/redo.',
    order: 3,
  },
  {
    name: 'PCB Layout, Layer Manager & Net Highlighting',
    category: 'PCB Engine',
    status: 'Implemented',
    description:
      'Board outlines, footprint placement, tracks, vias, zone refills with dynamic connectivity recomputation, net highlighting, and comprehensive multi-layer stackup management.',
    order: 4,
  },
  {
    name: 'Electrical Rules Check (ERC) & Design Rules Check (DRC)',
    category: 'Verification',
    status: 'Implemented',
    description:
      'Automated ERC verification required before PCB synchronization; clearance and connectivity DRC with explicit finding reports and gap disclosures.',
    order: 5,
  },
  {
    name: 'Automated Placement & Routing (Auto-Route)',
    category: 'PCB Engine',
    status: 'Partially Implemented',
    description:
      "Native auto-place heuristics and EAK's built-in routing engine. Functional in developer preview for rapid board layout exploration.",
    order: 6,
  },
  {
    name: 'Native 3D PCB Visualization',
    category: '3D Rendering',
    status: 'Implemented',
    description:
      'Interactive 3D board rendering with substrate layers, copper geometry, drill holes, and component body projections for visual inspection.',
    order: 7,
  },
  {
    name: 'Native Vendor-Neutral Component Library',
    category: 'Component Intelligence',
    status: 'Implemented',
    description:
      "EAK's own structured component format is the source of truth, with verified pin matrices, parametric attributes, and symbol-to-footprint mappings.",
    order: 8,
  },
  {
    name: 'KiCad Bidirectional Asset Interchange',
    category: 'EDA Interoperability',
    status: 'Implemented',
    description:
      'Import symbols (.kicad_sym) and footprints (.kicad_mod) with transactional library commits, allowing seamless migration without vendor lock-in.',
    order: 9,
  },
  {
    name: 'Circuit Simulation Engine (ngspice)',
    category: 'Verification & Physics',
    status: 'Partially Implemented',
    description:
      'Integrated ngspice simulation interface for transient, AC, and DC operating point circuit analysis directly from schematic models.',
    order: 10,
  },
  {
    name: 'Manufacturing Package Generator (Draft Gerbers & BOM)',
    category: 'Manufacturing',
    status: 'Implemented',
    description:
      'Deterministic generation of RS-274X Gerber files, Excellon drill files, structured Bill of Materials (BOM), and centroid placement files (explicitly marked draft for review).',
    order: 11,
  },
  {
    name: 'Agent Orchestration & Typed Task Graphs',
    category: 'AI Orchestration',
    status: 'Partially Implemented',
    description:
      'Typed task graphs, journaled task histories, scoped context boundaries, and smart re-run capabilities across agent phases.',
    order: 12,
  },
  {
    name: 'Interactive Push-and-Shove Routing',
    category: 'PCB Engine',
    status: 'Planned',
    description:
      'Real-time obstacle avoidance and trace pushing during interactive manual routing for high-density interconnect designs.',
    order: 13,
  },
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    stage: 0,
    title: 'Repository Reset & Canonical Foundations',
    gate: 'Gate 0: Repository Clean & Verified Docs',
    status: 'Completed',
    description: 'Establish canonical documentation, clean architecture boundaries, branding, and comprehensive testing gates.',
    deliverables: ['Clean workspace layout', 'Canonical Architecture RFCs', 'Clean Cargo topology'],
  },
  {
    stage: 1,
    title: 'Foundation Product & Tauri Spine',
    gate: 'Gate 1: Developer Preview',
    status: 'Completed',
    description: 'Native desktop IDE bridge connecting the Rust kernel event stream to real-time UI views with live terminal sync.',
    deliverables: ['Desktop IDE shell (Tauri v2)', 'Live event streaming pipeline', 'Interactive schematic & PCB canvas'],
  },
  {
    stage: 2,
    title: 'Model Intelligence & Boundary Isolation',
    gate: 'Gate 2: Real AI Engineering Workflow',
    status: 'Active Development',
    description: 'Standardized capability seams ensuring AI proposals never bypass deterministic engineering verification.',
    deliverables: ['Multi-provider reasoning ports', 'Validated capability proposals', 'Provenance-tracked event logs'],
  },
  {
    stage: 3,
    title: 'Component Intelligence & Parametric Search',
    gate: 'Gate 3: Component-Aware Engineering',
    status: 'Active Development',
    description: 'Automated datasheet parsing, pin-matrix extraction, and verified library footprint mapping.',
    deliverables: ['Datasheet parser', 'Parametric attribute graph', 'Standardized footprints/symbols'],
  },
  {
    stage: 4,
    title: 'Schematic Synthesis & Netlist Generation',
    gate: 'Gate 4: Schematic-Capable',
    status: 'Active Development',
    description: 'Deterministic translation of high-level functional intent into formal schematic hierarchies and pin connections.',
    deliverables: ['Hierarchical schematic engine', 'ERC validation suite', 'KiCad symbol import adapter'],
  },
  {
    stage: 5,
    title: 'PCB Physical Geometry & Placement',
    gate: 'Gate 5: PCB-Capable',
    status: 'Active Development',
    description: 'Physical constraint engine handling enclosure dimensions, keepouts, mechanical mounting, and copper geometry.',
    deliverables: ['Board stackup editor', 'Thermal/signal placement engine', 'Zone refill & net highlight'],
  },
  {
    stage: 6,
    title: 'Verification & Physics Engine',
    gate: 'Gate 6: Verified Engineering Workflow',
    status: 'Active Development',
    description: 'Multi-layer physics verification checking impedance, current density, signal timing, and manufacturing rules.',
    deliverables: ['Impedance solver', 'DRC rule evaluator', 'ngspice simulation bridge'],
  },
  {
    stage: 7,
    title: 'Autonomous Multi-Agent Engineering Crew',
    gate: 'Gate 7: Autonomous Workflow Orchestration',
    status: 'Planned',
    description: 'Collaborative autonomous roles (Architecture, Component, Schematic, Routing, Verification agents) coordinated via runtime state.',
    deliverables: ['Agent orchestration engine', 'Task decomposition planner', 'Human-in-the-loop audit gates'],
  },
  {
    stage: 8,
    title: 'Manufacturing & Supply Chain Compilation',
    gate: 'Gate 8: Public V1',
    status: 'Planned',
    description: 'Exporting production-ready manufacturing packages with verified distributor stock availability and design-for-assembly checks.',
    deliverables: ['Gerber / Drill generators', 'BOM preparation engine', 'Turnkey assembly handoff packages'],
  },
];

export const TECHNICAL_ARTICLES: ArticleItem[] = [
  {
    slug: 'why-hardware-engineering-needs-canonical-state',
    title: 'Why Hardware Engineering Demands Canonical State, Not Loose CAD Files',
    publishedAt: '2026-10-15T10:00:00Z',
    readTime: '6 min read',
    category: 'Architecture',
    excerpt: 'Traditional EDA tools store truth across disparate file formats. We explain why treating the engineering model as an immutable event stream fundamentally prevents desynchronization bugs.',
    content: [
      'In conventional electronics workflows, engineering truth is scattered across unstructured datasheets, isolated schematic files (.kicad_sch), PCB layouts (.kicad_pcb), and separate spreadsheet BOMs.',
      'When an engineer updates an op-amp feedback resistor in the schematic, the PCB routing or heat dissipation calculations may fall out of sync silently. When AI is introduced into this paradigm without a single source of truth, hallucinations produce disastrous physical outcomes.',
      'At TUSK, we designed Electronics Agent Kit around a non-negotiable rule: external file formats are never the source of truth. The EAK runtime maintains a canonical event log. Every component choice, net connection, and pin mapping is committed only through validated deterministic verification checks.',
    ],
  },
  {
    slug: 'clean-architecture-in-rust-eda',
    title: 'Enforcing Clean Architecture at Compile Time in Rust',
    publishedAt: '2026-09-28T09:30:00Z',
    readTime: '8 min read',
    category: 'Engineering',
    excerpt: 'How we structured EAK into concentric rings where dependencies point only inward, ensuring UI frameworks, CAD wrappers, and LLMs remain peripheral adapters.',
    content: [
      'EDA software tends to grow into monolithic systems with tight coupling between geometric rendering engines, schematic databases, and file parsers.',
      "In EAK, we enforce Robert C. Martin's Clean Architecture using Cargo workspace crate boundaries. The central kernel (eak-runtime) depends only on domain definitions (eak-domain), physical units (eak-units), and abstract ports (eak-ports).",
      'This means our KiCad integration (eak-kicad), desktop UI (Tauri), and LLM reasoning providers (eak-reasoning) are merely peripheral adapters. They can be refactored, replaced, or mocked in tests without altering a single line of core engineering logic.',
    ],
  },
  {
    slug: 'from-intent-to-verified-board',
    title: 'From Intent In to Manufactured Board Out: The Engineering Pipeline',
    publishedAt: '2026-09-10T14:15:00Z',
    readTime: '5 min read',
    category: 'Foundational Research',
    excerpt: 'An inside look at the 7-stage pipeline that guides raw product requirements toward verified manufacturing packages without sacrificing engineering rigour.',
    content: [
      'Building an electronic device requires passing through distinct engineering phases: requirement interpretation, component selection, datasheet electrical constraint extraction, schematic creation, physics validation, and PCB routing.',
      'We do not treat AI as a conversational gimmick that spits out complete circuit boards blindly. Instead, AI proposes incremental modifications across a validated capability seam.',
      'Each proposal must pass deterministic physics and connectivity checks before it can alter the canonical engineering model. The result is verifiable engineering progression.',
    ],
  },
];
