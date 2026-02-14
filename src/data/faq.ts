export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Da li učenik pravi novi nalog svake godine?',
    answer: 'Ne. Nalog je trajan, a upis se vodi po školskoj godini.',
  },
  {
    id: 'faq-2',
    question: 'Šta ako licenca još nije počela da važi?',
    answer: 'Upis može biti na čekanju i aktivira se kada licenca počne da važi.',
  },
  {
    id: 'faq-3',
    question: 'Da li postoji online plaćanje u platformi?',
    answer: 'U trenutnoj verziji uplatu evidentira administracija i ručno aktivira upis.',
  },
  {
    id: 'faq-4',
    question: 'Da li ima notifikacije, kalendar i chat?',
    answer: 'U ovoj fazi fokus je na upisima, lekcijama i kontroli pristupa. Dodatne opcije uvodimo po potrebi.',
  },
  {
    id: 'faq-5',
    question: 'Da li škola može imati više administratora?',
    answer: 'Da. Možete dodati više osoba u administraciju škole.',
  },
  {
    id: 'faq-6',
    question: 'Kako radi limit učenika?',
    answer: 'Broji se jedinstveni broj učenika: svaki učenik se računa jednom, bez dupliranja po kursevima.',
  },
  {
    id: 'faq-7',
    question: 'Da li podržava Zoom/Meet/Teams?',
    answer: 'Da. Link za online čas se dodaje u lekciju (bez posebnih integracija).',
  },
  {
    id: 'faq-8',
    question: 'Da li su podaci odvojeni po školi?',
    answer: 'Da. Svaka škola radi u zasebnom okruženju, sa odvojenim podacima i korisnicima.',
  },
  {
    id: 'faq-9',
    question: 'Da li mogu da vodim više školskih godina?',
    answer: 'Da. Kroz vreme možete imati više godina; u jednom trenutku je aktivna ona koja važi.',
  },
  {
    id: 'faq-10',
    question: 'Da li će postojati uloga predavača?',
    answer: 'Planirano je u narednim fazama, u skladu sa potrebama škola.',
  },
  {
    id: 'faq-11',
    question: 'Da li postoje izveštaji?',
    answer: 'Osnovni pregledi su dostupni, a napredni izveštaji se dodaju po dogovoru.',
  },
  {
    id: 'faq-12',
    question: 'Kako izgleda uvođenje škole?',
    answer: 'Dobijate nalog škole i pristupni kod, zatim administracija unosi kurseve i grupe. Učenici se registruju uz pristupni kod.',
  },
];
