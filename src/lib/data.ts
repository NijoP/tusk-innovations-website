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

export const COMPANY_DETAILS = {
  legalName: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
  shortName: 'TUSK INNOVATIONS',
  cin: 'U62011KL2026PTC106386',
  email: 'tuskinnovationsglobal@gmail.com',
  phone: '+91 62823 53042',
  address: '26/378(1), Thekkumoodu, Vanchiyoor P.O., Thiruvananthapuram, Kerala 695035, India.',
  mapsUrl: 'https://maps.google.com/?q=26/378(1),+Thekkumoodu,+Vanchiyoor+P.O.,+Thiruvananthapuram,+Kerala+695035',
  githubOrg: 'https://github.com/NijoP',
  eakRepo: 'https://github.com/NijoP/electronics-agent-kit-proto',
  tagline: 'Engineering Intelligence for the Next Generation of Electronics.',
};

export const EAK_CAPABILITIES: CapabilityItem[] = [
  {
    name: 'Event-Sourced Engineering Runtime Core',
    category: 'Kernel & Runtime',
    status: 'Implemented',
    description: 'Deterministic state machine (`RuntimeCore::commit`) with append-only event log, invariant validation, and deterministic replay.',
    order: 1,
  },
  {
    name: 'Physical Quantities & Typed Unit System',
    category: 'Kernel & Runtime',
    status: 'Implemented',
    description: 'Compile-time physical quantity validation (`eak-units`) with tolerances, unit conversion, and SI-derived dimensions.',
    order: 2,
  },
  {
    name: 'Clean Architecture Port & Adapter Boundary',
    category: 'Kernel & Runtime',
    status: 'Implemented',
    description: 'Ring dependency structure where kernel never depends on outer adapters, enforced at compile time via Cargo topology.',
    order: 3,
  },
  {
    name: 'Desktop IDE Bridge (Tauri v2 Spine)',
    category: 'EDA Integration',
    status: 'Implemented',
    description: 'Native desktop shell streaming live kernel events over `eak_ports::EventSink` to reactive desktop UI surfaces.',
    order: 4,
  },
  {
    name: 'Multi-Provider Model Isolation Layer',
    category: 'Kernel & Runtime',
    status: 'Implemented',
    description: 'Pluggable reasoning ports (`eak-reasoning`) supporting NVIDIA, OpenAI, and local offline inference models behind strict capability seams.',
    order: 5,
  },
  {
    name: 'Component Asset Management & Schemas',
    category: 'Component Intelligence',
    status: 'Partially Implemented',
    description: 'Asset pipeline (`eak-assets`) managing symbol libraries, footprints, 3D bodies, and structured parametric attributes.',
    order: 6,
  },
  {
    name: 'KiCad Bidirectional Sync & Adapter',
    category: 'EDA Integration',
    status: 'Partially Implemented',
    description: 'Import/export adapter (`eak-kicad`) translating canonical engineering state to and from KiCad schematic/PCB files.',
    order: 7,
  },
  {
    name: 'Requirement & Engineering IR Compiler',
    category: 'Kernel & Runtime',
    status: 'Partially Implemented',
    description: 'Domain-specific lowering passes (`eak-compiler`) translating natural-language requirements into verified netlists and constraints.',
    order: 8,
  },
  {
    name: 'Rule-Based Verification Engine',
    category: 'Verification & Physics',
    status: 'Partially Implemented',
    description: 'Deterministic DRC, ERC, voltage-drop, and pin-constraint checkers (`eak-engines`) that validate AI proposals prior to commit.',
    order: 9,
  },
  {
    name: 'Automated Schematic Synthesis',
    category: 'Schematic Synthesis',
    status: 'Experimental',
    description: 'Constraint-driven netlist synthesis and automatic multi-sheet schematic layout generation from engineering specs.',
    order: 10,
  },
  {
    name: 'Autonomous PCB Component Placement',
    category: 'PCB Layout & Placement',
    status: 'Experimental',
    description: 'Geometric thermal and signal integrity heuristics evaluating component floorplans and routing topology.',
    order: 11,
  },
  {
    name: 'Automated DRC-Clean Autorouting',
    category: 'PCB Layout & Placement',
    status: 'Planned',
    description: 'Multi-layer high-density interconnect routing with deterministic return-path and differential-pair validation.',
    order: 12,
  },
  {
    name: 'Automated Fabrication Package Compiler',
    category: 'Manufacturing & BOM',
    status: 'Planned',
    description: 'One-click generation of verified Gerbers, drill tables, IPC-D-356 netlists, centroid files, and supply-chain audited BOMs.',
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
    deliverables: ['Clean workspace layout', '16 Canonical Architecture RFCs', 'Clean Cargo topology'],
  },
  {
    stage: 1,
    title: 'Foundation Product & Tauri Spine',
    gate: 'Gate 1: Developer Preview',
    status: 'Active Development',
    description: 'Native desktop IDE bridge connecting the Rust kernel event stream (`EventSink`) to real-time UI views.',
    deliverables: ['Desktop IDE shell (Tauri v2)', 'Live event streaming pipeline', 'Canonical state viewer'],
  },
  {
    stage: 2,
    title: 'Model Intelligence & Boundary Isolation',
    gate: 'Gate 2: Real AI Engineering Workflow',
    status: 'Active Development',
    description: 'Standardized capability seams ensuring AI proposals never bypass deterministic engineering verification.',
    deliverables: ['NVIDIA/OpenAI/Local providers', 'Validated capability proposals', 'Provenance-tracked event logs'],
  },
  {
    stage: 3,
    title: 'Component Intelligence & Parametric Search',
    gate: 'Gate 3: Component-Aware Engineering',
    status: 'Planned',
    description: 'Automated datasheet parsing, pin-matrix extraction, and verified library footprint mapping.',
    deliverables: ['Datasheet parser', 'Parametric attribute graph', 'Standardized footprints/symbols'],
  },
  {
    stage: 4,
    title: 'Schematic Synthesis & Netlist Generation',
    gate: 'Gate 4: Schematic-Capable',
    status: 'Planned',
    description: 'Deterministic translation of high-level functional intent into formal schematic hierarchies and pin connections.',
    deliverables: ['Hierarchical schematic engine', 'ERC validation suite', 'KiCad schematic sync'],
  },
  {
    stage: 5,
    title: 'PCB Physical Geometry & Placement',
    gate: 'Gate 5: PCB-Capable',
    status: 'Planned',
    description: 'Physical constraint engine handling enclosure dimensions, keepouts, mechanical mounting, and copper geometry.',
    deliverables: ['Board stackup editor', 'Thermal/signal placement engine', 'KiCad PCB bidirectional sync'],
  },
  {
    stage: 6,
    title: 'Verification & Physics Engine',
    gate: 'Gate 6: Verified Engineering Workflow',
    status: 'Planned',
    description: 'Multi-layer physics verification checking impedance, current density, signal timing, and manufacturing rules.',
    deliverables: ['Impedance solver', 'DRC rule evaluator', 'Automated error remediation suggestions'],
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
    deliverables: ['Gerber / Drill generators', 'BOM stock validation', 'Turnkey assembly handoff packages'],
  },
  {
    stage: 9,
    title: 'Product Maturity & Enterprise Workspace',
    gate: 'Gate 9: Mature Engineering Platform',
    status: 'Planned',
    description: 'Scalable multi-seat collaboration, versioned team libraries, enterprise on-premise execution, and private model support.',
    deliverables: ['Team workspaces', 'Versioned component repositories', 'Enterprise security & audit controls'],
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
      'In EAK, we enforce Robert C. Martin\'s Clean Architecture using Cargo workspace crate boundaries. The central kernel (eak-runtime) depends only on domain definitions (eak-domain), physical units (eak-units), and abstract ports (eak-ports).',
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
