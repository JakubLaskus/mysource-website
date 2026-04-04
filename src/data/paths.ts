export interface Path {
  id: string;
  number: string;
  title: string;
  description: string;
  curatorId: string;
  curatorName: string;
  category: 'wellbeing' | 'tech-transform' | 'leadership';
}

export interface PathCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  colorClass: string;
  number: string;
  paths: Path[];
}

export const pathCategories: PathCategory[] = [
  {
    id: 'wellbeing',
    title: 'Szkolenia wellbeingowe',
    subtitle: 'Fundament witalności i balansu',
    description:
      'Nasza odpowiedź na wypalenie zawodowe, chroniczny stres, spadki produktywności i trudności z work-life balance.',
    colorClass: 'section--sage',
    number: '01',
    paths: [
      {
        id: 'rownowaga',
        number: '01',
        title: 'Równowaga',
        description:
          'Ścieżka ma na celu lepsze radzenie sobie ze stresem poprzez efektywne korzystanie z zasobów oraz profilaktykę wypalenia zawodowego dzięki stosowaniu strategii świadomego przyspieszania i zwalniania. Uczestnicy poznają techniki mindfulness, wezmą udział w zajęciach psychoedukacyjnych oraz będą praktykować wybrane formy ruchu, co pozwoli im zrozumieć, jak działa stres, jak go "wyłączać" oraz jak mądrze zarządzać własnymi zasobami, by utrzymać wysoką jakość i wydajność bez ryzyka wypalenia.',
        curatorId: 'curator-rownowaga',
        curatorName: 'Zuzanna Ziomecka',
        category: 'wellbeing',
      },
      {
        id: 'regeneracja',
        number: '02',
        title: 'Regeneracja',
        description:
          'Celem ścieżki jest wzmocnienie odporności oraz odnowa fizyczna i psychiczna poprzez holistyczne podejście do zdrowia, które łączy techniki oddechowe, ekspozycję na zimno, suplementację, medytację oraz inne metody. Uczestnicy uzyskają narzędzia i techniki wspierające regenerację, poprawę jakości snu oraz ogólnego samopoczucia, co prowadzi do trwałej poprawy zdrowia i witalności.',
        curatorId: 'curator-regeneracja',
        curatorName: 'Adam Kowalewski',
        category: 'wellbeing',
      },
      {
        id: 'odzywianie',
        number: '03',
        title: 'Odżywianie',
        description:
          'Ścieżka wspiera zdrowie, energię i witalność poprzez promocję zdrowych nawyków żywieniowych. Uczestnicy jej programu zrozumieją wpływ diety i suplementacji na samopoczucie i wydajność w życiu zawodowym i osobistym oraz poznają tajniki zdrowego odżywiania. Ścieżka obejmuje praktyczne warsztaty, interaktywne seminaria, psychodietetykę, wykłady o nootropach i adaptogenach oraz mindful eating experience.',
        curatorId: 'curator-odzywianie',
        curatorName: 'Jakub Mauricz',
        category: 'wellbeing',
      },
    ],
  },
  {
    id: 'tech-transform',
    title: 'Szkolenia technologiczno-transformacyjne',
    subtitle: 'Kompetencje jutra',
    description:
      'Bezpieczna adaptacja do zmieniającego się środowiska pracy oraz rewolucji AI.',
    colorClass: '',
    number: '02',
    paths: [
      {
        id: 'technohumanizm',
        number: '04',
        title: 'Technohumanizm',
        description:
          'Ścieżka wspiera liderów i specjalistów w budowaniu zdrowej relacji z technologią poprzez rozwijanie świadomości cyfrowej i umiejętności ochrony autonomii poznawczej. Program koncentruje się na dwóch kluczowych filarach: higienie AI — świadomym, etycznym i bezpiecznym korzystaniu z systemów sztucznej inteligencji oraz cyfrowej higienie — zachowaniach chroniących zdrowie w relacji z technologią informacyjno-komunikacyjną.',
        curatorId: 'curator-technohumanizm',
        curatorName: 'Filip Dębowski',
        category: 'tech-transform',
      },
      {
        id: 'mindset',
        number: '05',
        title: 'Mindset',
        description:
          'Ścieżka wspiera liderów w rozwoju growth mindset, kompetencji poznawczych wyższego rzędu oraz future-skills (human skills). Uczestnicy rozwiną kluczowe future skills, nieautomatyzowalne tryby myślenia oraz wzmocnią motywację wewnętrzną i zaangażowanie w oparciu o metodyki kultury eksperymentalnej, sztuki współczesnej, designu i filozofii.',
        curatorId: 'curator-mindset',
        curatorName: 'dr Iwo Zmyślony',
        category: 'tech-transform',
      },
      {
        id: 'transformacja',
        number: '06',
        title: 'Transformacja',
        description:
          'Ścieżka przygotowuje do technologiczno-społecznych zmian, wspierając rozwój osobisty i adaptację do współczesnych realiów. Uczestnicy nauczą się oswajać wyzwania związane z technologią i AI, poprzez uwzględnienie najnowszych technologii w dbaniu o dobrostan. Program obejmuje neuromedytację, biofeedback, VR, budowanie nawyków, mindfulness, techniki oddechowe, stymulację kreatywności, oraz warsztaty neuroplastyczności.',
        curatorId: 'curator-transformacja',
        curatorName: 'Mila Orliska',
        category: 'tech-transform',
      },
      {
        id: 'sprawczosc',
        number: '07',
        title: 'Sprawczość',
        description:
          'Ścieżka koncentruje się na budowaniu decyzyjności i zdolności do świadomego działania w warunkach permanentnej zmiany. Uczestnicy dowiedzą się, jak przejść od postawy biernego odbiorcy do roli odpowiedzialnego gospodarza, gotowego proaktywnie nawigować w tzw. czasach przejścia. W ramach ścieżki stosowane są nowoczesne metody, takie jak futures thinking, praca z wielością scenariuszy przyszłości (backcasting) oraz warsztaty wspierające myślenie systemowe i projektowanie mikro-eksperymentów.',
        curatorId: 'curator-sprawczosc',
        curatorName: 'Edyta Sadowska',
        category: 'tech-transform',
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Szkolenia liderskie',
    subtitle: 'Świadome przywództwo i zarządzanie energią',
    description:
      'Nasza odpowiedź na wyczerpanie liderów, trudności z motywowaniem zespołów i podejmowaniem decyzji pod presją.',
    colorClass: 'section--mist',
    number: '03',
    paths: [
      {
        id: 'samoswiadomosc',
        number: '08',
        title: 'Samoświadomość',
        description:
          'Ścieżka wspiera liderów w budowaniu świadomego przywództwa poprzez doskonalenie umiejętności zarządzania energią — zarówno własną, jak i zespołową. Program koncentruje się na dwóch kluczowych aspektach: rozwijaniu samoświadomości oraz wzmacnianiu motywacji rozwojowej liderów. Te kluczowe kompetencje pozwalają liderom skutecznie dbać o własną efektywność oraz wspierać zespoły w nowoczesnym i efektywnym zarządzaniu ich zasobami energetycznymi.',
        curatorId: 'curator-samoswiadomosc',
        curatorName: 'Dorota Szczepan-Jakubowska',
        category: 'leadership',
      },
      {
        id: 'podswiadomosc',
        number: '09',
        title: 'Podświadomość',
        description:
          'Ścieżka skupia się na głębokiej pracy z emocjami i podświadomością, wspierając rozwój indywidualny oraz zespołowy. Uczestnicy uczą się zarządzania emocjami, wzmocnienia motywacji i budowania empatycznych relacji, co poprawia zarówno ich wydajność, jak i długotrwały dobrostan psychiczny. Program obejmuje techniki takie jak hipnoterapia, biofeedback HRV oraz NLP.',
        curatorId: 'curator-podswiadomosc',
        curatorName: 'Piotr Matejuk',
        category: 'leadership',
      },
      {
        id: 'relacje',
        number: '10',
        title: 'Relacje',
        description:
          'Ścieżka koncentruje się na budowaniu mocnych interakcji między członkami zespołu, co przyczynia się do poprawy komunikacji oraz efektywnego rozwiązywania konfliktów. Dzięki praktycznym doświadczeniom uczestnicy rozwijają umiejętności interpersonalne, które podnoszą efektywność pracy zespołowej. W ramach ścieżki stosowane są techniki takie jak experimental learning, metody świadomej komunikacji oraz warsztaty kreatywne.',
        curatorId: 'curator-relacje',
        curatorName: 'Julian Dworak',
        category: 'leadership',
      },
    ],
  },
];
