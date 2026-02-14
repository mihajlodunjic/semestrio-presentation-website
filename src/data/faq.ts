export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Da li ucenik pravi novi nalog svake godine?',
    answer: 'Ne, nalog je trajan, upis je sezonski.',
  },
  {
    id: 'faq-2',
    question: 'Sta ako sezona jos nije krenula?',
    answer: 'Upis moze biti PENDING, a aktivira se kada licenca postane efektivna.',
  },
  {
    id: 'faq-3',
    question: 'Da li postoji online placanje u platformi?',
    answer: 'Ne u MVP-u, admin rucno potvrdjuje uplatu.',
  },
  {
    id: 'faq-4',
    question: 'Da li ima notifikacije, kalendar i chat?',
    answer: 'Ne u MVP-u; fokus je na stabilnom core-u.',
  },
  {
    id: 'faq-5',
    question: 'Da li skola moze imati vise admina?',
    answer: 'Da, platforma podrzava vise SCHOOL_ADMIN korisnika po skoli.',
  },
  {
    id: 'faq-6',
    question: 'Kako radi limit ucenika?',
    answer: 'Broji se distinct ucenik, bez dupliranja po kursevima.',
  },
  {
    id: 'faq-7',
    question: 'Da li podrzava Zoom integraciju?',
    answer: 'Nema direktne integracije, ali se link dodaje u lekciju.',
  },
  {
    id: 'faq-8',
    question: 'Da li su podaci izolovani po skoli?',
    answer: 'Da, multi-tenant izolacija se vodi po schoolId.',
  },
  {
    id: 'faq-9',
    question: 'Da li mogu vise sezona?',
    answer: 'Da, kroz vreme moze vise sezona; u trenutku je najvise jedna efektivna aktivna.',
  },
  {
    id: 'faq-10',
    question: 'Da li ce postojati uloga predavaca?',
    answer: 'Planirano je kao opcija u narednim fazama.',
  },
  {
    id: 'faq-11',
    question: 'Da li mogu da izvozim izvestaje?',
    answer: 'U MVP-u su prioritet upisi i pristup, a napredni izvestaji dolaze kasnije.',
  },
  {
    id: 'faq-12',
    question: 'Kako izgleda onboarding skole?',
    answer: 'Skola dobija svoj tenant i schoolCode, a zatim admin odmah unosi kurseve i grupe.',
  },
];
