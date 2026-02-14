export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Da li učenik pravi novi nalog svake godine?',
    answer: 'Ne, nalog je trajan, upis je sezonski.',
  },
  {
    id: 'faq-2',
    question: 'Šta ako sezona još nije krenula?',
    answer: 'Upis može biti PENDING, a aktivira se kada licenca postane efektivna.',
  },
  {
    id: 'faq-3',
    question: 'Da li postoji online plaćanje u platformi?',
    answer: 'Ne u MVP-u, admin ručno potvrđuje uplatu.',
  },
  {
    id: 'faq-4',
    question: 'Da li ima notifikacije, kalendar i chat?',
    answer: 'Ne u MVP-u; fokus je na stabilnom core-u.',
  },
  {
    id: 'faq-5',
    question: 'Da li škola može imati više admina?',
    answer: 'Da, platforma podržava više SCHOOL_ADMIN korisnika po školi.',
  },
  {
    id: 'faq-6',
    question: 'Kako radi limit učenika?',
    answer: 'Broji se distinct učenik, bez dupliranja po kursevima.',
  },
  {
    id: 'faq-7',
    question: 'Da li podržava Zoom integraciju?',
    answer: 'Nema direktne integracije, ali se link dodaje u lekciju.',
  },
  {
    id: 'faq-8',
    question: 'Da li su podaci izolovani po školi?',
    answer: 'Da, multi-tenant izolacija se vodi po schoolId.',
  },
  {
    id: 'faq-9',
    question: 'Da li mogu više sezona?',
    answer: 'Da, kroz vreme može više sezona; u trenutku je najviše jedna efektivna aktivna.',
  },
  {
    id: 'faq-10',
    question: 'Da li će postojati uloga predavača?',
    answer: 'Planirano je kao opcija u narednim fazama.',
  },
  {
    id: 'faq-11',
    question: 'Da li mogu da izvozim izveštaje?',
    answer: 'U MVP-u su prioritet upisi i pristup, a napredni izveštaji dolaze kasnije.',
  },
  {
    id: 'faq-12',
    question: 'Kako izgleda onboarding škole?',
    answer: 'Škola dobija svoj tenant i schoolCode, a zatim admin odmah unosi kurseve i grupe.',
  },
];
