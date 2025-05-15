import type { Project } from './types';

export const projects: Project[] = [
  {
    name: 'Retail at Scale: From Fragmented Campaigns to a Marketing Machine',
    client: 'National Retail Chain',
    industry: 'Retail',
    usedServices: [
      'Marketing Ops Advisory',
      'Workflow Automation',
      'Performance Analytics',
    ],
    problems: [
      '100+ stores.',
      '0 unified vision.',
      'Marketing teams worked in silos, running inconsistent campaigns across regions — bloating costs and muddying brand identity.',
    ],
    problemsResults: [
      'Duplication of effort across marketing teams',
      'No central data loop for performance feedback',
      'Disconnected tech tools with manual reporting',
    ],
    built: [
      'Unified marketing command center across 100+ stores',
      'Automated workflow from strategy to in-store execution',
      'Central dashboard for real-time campaign analytics',
    ],
    builtResults: [
      '-30% marketing overhead',
      'Campaign launch time cut by 45%',
      '+25% consistency in brand application across stores',
    ],
    slogan:
      '“This wasn’t optimization — it was transformation. Our internal chaos became a coordinated performance.”',
  },
  {
    name: 'SaaS Startup: Turning a Scattered Team into a Scalable Engine',
    client: 'Tech Startup (Series A)',
    industry: 'B2B SaaS',
    usedServices: [
      'Corporate Strategy',
      'Go-to-Market Alignment',
      'Revenue Architecture',
    ],
    problems: [
      'A fast-growing startup with a killer product — and a team burning out trying to keep up.',
      'Scaling was reactive, not strategic',
    ],
    problemsResults: [
      'No revenue predictability',
      'Undefined ICP (Ideal Customer Profile)',
      'Disconnected sales, product, and marketing priorities',
    ],
    built: [
      'GTM architecture from funnel to forecast',
      'Lead qualification engine using behavioral data',
      'Unified product-led and sales-led motions',
    ],
    builtResults: [
      '+150% increase in SQLs in 4 months',
      'Time-to-onboard reduced by 38%',
      'Burn rate flattened without cutting innovation velocity',
    ],
    slogan:
      '“Optisence didn’t just guide us — they built our entire growth engine and handed us the keys.”',
  },
  {
    name: 'Healthcare Network: Building a Patient-First, Tech-Backed Experience',
    client: 'Multi-site Healthcare Provider',
    industry: 'Healthcare',
    usedServices: [
      'Patient Journey Mapping',
      'Digital Strategy',
      'Operational Redesign',
    ],
    problems: [
      'Fragmented data.',
      'Frustrated patients.',
      'A digital experience stuck in 2012 — leading to high no-show rates and low trust.',
    ],
    problemsResults: [
      'Manual intake processes causing delays',
      'Zero personalization in patient comms',
      'Lack of journey continuity between departments',
    ],
    built: [
      'End-to-end digital patient experience — mobile-first',
      'Unified communication flows across clinical + admin teams',
      'Smart scheduling powered by engagement data',
    ],
    builtResults: [
      '+55% patient engagement',
      '25% drop in no-shows',
      'Admin task load reduced by 35%',
    ],
    slogan:
      '“We didn’t just fix the pain points. We reimagined care around the patient — and it worked.”',
  },
  {
    name: 'Fintech Expansion: From Static Strategy to Global Growth Blueprint',
    client: 'Mid-Sized Fintech',
    industry: 'Financial Services',
    usedServices: [
      'Market Entry Strategy',
      'Brand Messaging',
      'Leadership Alignment',
    ],
    problems: [
      'A solid product with potential — trapped inside a brand that didn’t scale. ',
      'Their growth? Stuck between ambition and confusion.',
    ],
    problemsResults: [
      'Brand lost in translation across markets',
      'Expansion plans driven by gut, not data',
      'Leadership not aligned on who they serve',
    ],
    built: [
      'Multi-market expansion framework (Europe + Africa)',
      'Repositioned brand with clear messaging across touchpoints',
      'Strategy offsite to realign leadership vision + velocity',
    ],
    builtResults: [
      '+40% YoY revenue growth',
      '2 new markets launched — both profitable in < 9 months',
      'Leadership team realigned around one vision, one mission',
    ],
    slogan:
      '“We stopped guessing. Optisence gave us precision — and the confidence to scale globally.”',
  },
  {
    name: 'Manufacturing Reinvented: From Legacy Systems to Lean-Driven Growth',
    client: 'Industrial Manufacturing Group',
    industry: 'Manufacturing',
    usedServices: [
      'Process Optimization',
      'Digital Transformation',
      'Leadership Enablement',
    ],
    problems: [
      'Production was stable — but stagnant.',
      'Legacy systems, manual data capture, and siloed departments created hidden inefficiencies and massive opportunity cost.',
    ],
    problemsResults: [
      'Teams relying on spreadsheets for mission-critical operations',
      'Zero visibility across supply chain performance',
      'Managers reactive instead of proactive due to lack of data',
    ],
    built: [
      'End-to-end operational intelligence dashboard',
      'Digital workflows across production, supply chain, and QA',
      'KPI structure aligned with lean methodology',
    ],
    builtResults: [
      '+40% productivity uplift across 3 core facilities',
      '€5M in cost savings from reduced operational waste',
      'Real-time visibility enabled weekly course correction',
    ],
    slogan:
      '“We didn’t just upgrade tech. Optisence helped us rethink how we work. Every process now talks to every result.”',
  },
  {
    name: 'Energy Sector Evolution: Aligning Sustainability with Profit',
    client: 'Regional Energy Provider',
    industry: 'Energy & Utilities',
    usedServices: [
      'Sustainability Strategy',
      'Stakeholder Alignment',
      'ESG Reporting Architecture',
    ],
    problems: [
      'Environmental pressure was mounting.',
      'Stakeholders demanded change — but internal teams saw sustainability as a cost center, not a strategic driver.',
    ],
    problemsResults: [
      'Fragmented sustainability efforts with no unified roadmap',
      'Regulatory risk with outdated carbon reporting',
      'Leadership split between long-term vision and short-term pressure',
    ],
    built: [
      'ESG-aligned transformation plan linked to commercial goals',
      'Roadmap for reducing emissions without compromising performance',
      'Stakeholder reporting system with real-time metrics',
    ],
    builtResults: [
      '-12% reduction in emissions in Year 1 (without CapEx spike)',
      '+18% investor confidence as measured by quarterly sentiment report',
      'Sustainability integrated into business planning — not bolted on',
    ],
    slogan:
      '“They reframed sustainability from cost to value. It became a lever — not a lecture.”',
  },
  {
    name: 'Telecom Reinvention: From High Churn to High Retention',
    client: 'National Telco Provider',
    industry: 'Telecommunications',
    usedServices: [
      'Customer Experience Strategy',
      'Brand Turnaround',
      'Retention Analytics',
    ],
    problems: [
      'Customer churn was quietly killing growth. Marketing focused on acquisition, but no one owned retention.',
      'CX was fragmented. The brand lost emotional relevance.',
    ],
    problemsResults: [
      'Multiple departments touching the customer journey — but no ownership',
      'Outdated segmentation ignoring behavioral trends',
      'Messaging that didn’t match modern user expectations',
    ],
    built: [
      'Voice-of-Customer ecosystem with unified feedback loops',
      'Predictive churn modeling using real-time usage data',
      'Repositioned brand narrative based on loyalty drivers',
    ],
    builtResults: [
      '-18% churn within 6 months',
      '+12% ARPU through cross-sell strategy',
      '+40% NPS lift after CX redesign rollout',
    ],
    slogan:
      '“It wasn’t about louder marketing. It was about sharper listening — and Optisence made us hear what really mattered.”',
  },
];
