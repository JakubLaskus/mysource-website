export interface Method {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
}

export const methods: Method[] = [
  {
    id: 'warsztaty',
    title: 'Warsztaty',
    description: 'Interaktywne sesje grupowe łączące wiedzę z praktyką.',
    items: ['Design thinking', 'Facylitacja grupowa', 'Prototypowanie rozwiązań'],
    icon: 'workshop',
  },
  {
    id: 'coaching',
    title: 'Coaching',
    description: 'Indywidualne i grupowe sesje rozwojowe.',
    items: ['Coaching liderski', 'Team coaching', 'Coaching transformacyjny'],
    icon: 'coaching',
  },
  {
    id: 'diagnostyka',
    title: 'Diagnostyka',
    description: 'Narzędzia analityczne do oceny gotowości organizacyjnej.',
    items: ['RADAR', 'Audyt kultury', 'Mapowanie kompetencji'],
    icon: 'diagnostic',
  },
  {
    id: 'szkolenia',
    title: 'Szkolenia',
    description: 'Programy edukacyjne dostosowane do potrzeb organizacji.',
    items: ['AI Literacy', 'Change Management', 'Wellbeing w pracy'],
    icon: 'training',
  },
  {
    id: 'mentoring',
    title: 'Mentoring',
    description: 'Długoterminowe wsparcie rozwojowe.',
    items: ['Mentoring liderski', 'Reverse mentoring', 'Peer mentoring'],
    icon: 'mentoring',
  },
  {
    id: 'konsultacje',
    title: 'Konsultacje strategiczne',
    description: 'Eksperckie doradztwo w zakresie transformacji.',
    items: ['Strategia transformacji', 'Roadmapa zmian', 'Architektura organizacyjna'],
    icon: 'consulting',
  },
  {
    id: 'programy',
    title: 'Programy rozwojowe',
    description: 'Kompleksowe ścieżki rozwoju dla zespołów.',
    items: ['Leadership Academy', 'Digital Readiness', 'Culture Lab'],
    icon: 'program',
  },
  {
    id: 'facylitacja',
    title: 'Facylitacja',
    description: 'Prowadzenie procesów grupowych i sesji strategicznych.',
    items: ['Sesje strategiczne', 'Retrospektywy', 'Sesje innowacyjne'],
    icon: 'facilitation',
  },
  {
    id: 'badania',
    title: 'Badania i raporty',
    description: 'Analiza trendów i badania organizacyjne.',
    items: ['Raporty trendów', 'Badania zaangażowania', 'Benchmarking'],
    icon: 'research',
  },
];
