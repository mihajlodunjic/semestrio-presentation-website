export type BillingCycle = 'SEASONAL_5M' | 'ANNUAL_12M';
export type PlanId = 'START' | 'GROWTH' | 'PRO' | 'ENTERPRISE';

export interface PricingPlan {
  id: PlanId;
  name: string;
  maxStudents: number | null;
  perStudent: number | null;
  minPrice: number | null;
  exampleText: string;
  custom: boolean;
}

export const PRICING_BY_CYCLE: Record<BillingCycle, PricingPlan[]> = {
  SEASONAL_5M: [
    {
      id: 'START',
      name: 'START',
      maxStudents: 50,
      perStudent: 15,
      minPrice: 600,
      exampleText: '50 ucenika -> 750€',
      custom: false,
    },
    {
      id: 'GROWTH',
      name: 'GROWTH',
      maxStudents: 150,
      perStudent: 13,
      minPrice: 1200,
      exampleText: '150 ucenika -> 1.950€',
      custom: false,
    },
    {
      id: 'PRO',
      name: 'PRO',
      maxStudents: 300,
      perStudent: 11,
      minPrice: 2200,
      exampleText: '300 ucenika -> 3.300€',
      custom: false,
    },
    {
      id: 'ENTERPRISE',
      name: 'ENTERPRISE',
      maxStudents: null,
      perStudent: null,
      minPrice: null,
      exampleText: '>300 ucenika -> po dogovoru',
      custom: true,
    },
  ],
  ANNUAL_12M: [
    {
      id: 'START',
      name: 'START',
      maxStudents: 50,
      perStudent: 25,
      minPrice: 1000,
      exampleText: '50 ucenika -> 1.250€',
      custom: false,
    },
    {
      id: 'GROWTH',
      name: 'GROWTH',
      maxStudents: 150,
      perStudent: 22,
      minPrice: 2200,
      exampleText: '150 ucenika -> 3.300€',
      custom: false,
    },
    {
      id: 'PRO',
      name: 'PRO',
      maxStudents: 300,
      perStudent: 20,
      minPrice: 4500,
      exampleText: '300 ucenika -> 6.000€',
      custom: false,
    },
    {
      id: 'ENTERPRISE',
      name: 'ENTERPRISE',
      maxStudents: null,
      perStudent: null,
      minPrice: null,
      exampleText: '>300 ucenika -> po dogovoru',
      custom: true,
    },
  ],
};
