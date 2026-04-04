export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const founders: TeamMember[] = [
  {
    id: 'founder-1',
    name: 'Założyciel 1',
    role: 'Co-founder & CEO',
    bio: 'Specjalista transformacji organizacyjnej z wieloletnim doświadczeniem w zarządzaniu zmianą.',
    image: '/images/team/partner-1.png',
  },
  {
    id: 'founder-2',
    name: 'Założyciel 2',
    role: 'Co-founder & COO',
    bio: 'Ekspert w budowaniu kultury organizacyjnej i programów wellbeingowych.',
    image: '/images/team/partner-2.png',
  },
];

// Eksperci RADAR — interdyscyplinarny zespół
export const radarExperts: TeamMember[] = [
  {
    id: 'iwo-zmylony',
    name: 'dr Iwo Zmyślony',
    role: 'Projektant zmiany i kultury innowacji, badacz',
    bio: 'Projektant zmiany i kultury innowacji, badacz. Kurator ścieżki Mindset.',
    image: '/images/team/iwo-zmylony.png',
  },
  {
    id: 'filip-debowski',
    name: 'Filip Dębowski',
    role: 'Technohumanista, ekspert higieny cyfrowej i współpracy z AI',
    bio: 'Technohumanista, ekspert higieny cyfrowej i współpracy z AI. Kurator ścieżki Technohumanizm.',
    image: '/images/team/filip-debowski.png',
  },
  {
    id: 'edyta-sadowska',
    name: 'Edyta Sadowska',
    role: 'Kuratorka ścieżki Sprawczość',
    bio: 'Ekspertka w zakresie budowania sprawczości i decyzyjności w warunkach permanentnej zmiany.',
    image: '/images/team/edyta-sadowska.png',
  },
  {
    id: 'bartek-frackowiak',
    name: 'Bartek Frąckowiak',
    role: 'Ekspert RADAR',
    bio: 'Członek interdyscyplinarnego zespołu eksperckiego RADAR.',
    image: '/images/team/partner-3.png',
  },
];

// Kuratorzy ścieżek
export const curators: TeamMember[] = [
  // Wellbeingowe
  {
    id: 'curator-rownowaga',
    name: 'Zuzanna Ziomecka',
    role: 'Kuratorka ścieżki Równowaga',
    bio: 'Ekspertka technik mindfulness i psychoedukacji w zakresie zarządzania stresem i profilaktyki wypalenia zawodowego.',
    image: '/images/team/ziomecka.png',
  },
  {
    id: 'curator-regeneracja',
    name: 'Adam Kowalewski',
    role: 'Kurator ścieżki Regeneracja',
    bio: 'Specjalista holistycznego podejścia do zdrowia, łączący techniki oddechowe, ekspozycję na zimno, suplementację i medytację.',
    image: '/images/team/kowalewski.png',
  },
  {
    id: 'curator-odzywianie',
    name: 'Jakub Mauricz',
    role: 'Kurator ścieżki Odżywianie',
    bio: 'Ekspert zdrowych nawyków żywieniowych, psychodietetyki i nootropów.',
    image: '/images/team/mauricz.png',
  },
  // Technologiczno-transformacyjne
  {
    id: 'curator-technohumanizm',
    name: 'Filip Dębowski',
    role: 'Kurator ścieżki Technohumanizm',
    bio: 'Technohumanista, ekspert higieny cyfrowej i współpracy z AI.',
    image: '/images/team/filip-debowski.png',
  },
  {
    id: 'curator-mindset',
    name: 'dr Iwo Zmyślony',
    role: 'Kurator ścieżki Mindset',
    bio: 'Projektant zmiany i kultury innowacji, badacz. Autorski program rozwoju kompetencji przyszłości.',
    image: '/images/team/iwo-zmylony.png',
  },
  {
    id: 'curator-transformacja',
    name: 'Mila Orliska',
    role: 'Kuratorka ścieżki Transformacja',
    bio: 'Specjalistka przygotowywania do technologiczno-społecznych zmian, integracji najnowszych technologii w dbaniu o dobrostan.',
    image: '/images/team/orlinska.png',
  },
  {
    id: 'curator-sprawczosc',
    name: 'Edyta Sadowska',
    role: 'Kuratorka ścieżki Sprawczość',
    bio: 'Ekspertka futures thinking, backcasting i projektowania mikro-eksperymentów.',
    image: '/images/team/edyta-sadowska.png',
  },
  // Liderskie
  {
    id: 'curator-samoswiadomosc',
    name: 'Dorota Szczepan-Jakubowska',
    role: 'Kuratorka ścieżki Samoświadomość',
    bio: 'Ekspertka świadomego przywództwa i zarządzania energią — własną i zespołową.',
    image: '/images/team/dorota-szj.png',
    linkedin: 'https://www.mysource.pl/partnerzy#dorota-szczepan-jakubowska',
  },
  {
    id: 'curator-podswiadomosc',
    name: 'Piotr Matejuk',
    role: 'Kurator ścieżki Podświadomość',
    bio: 'Ekspert głębokiej pracy z emocjami i podświadomością. Hipnoterapia, biofeedback HRV, NLP.',
    image: '/images/team/matejuk.png',
  },
  {
    id: 'curator-relacje',
    name: 'Julian Dworak',
    role: 'Kurator ścieżki Relacje',
    bio: 'Specjalista budowania mocnych interakcji między członkami zespołu i efektywnego rozwiązywania konfliktów.',
    image: '/images/team/dworak.png',
  },
];
