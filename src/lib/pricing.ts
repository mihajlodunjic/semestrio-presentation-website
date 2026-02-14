import { PRICING_BY_CYCLE, type BillingCycle, type PricingPlan } from '../data/pricing';

interface PriceResult {
  perStudentTotal: number | null;
  minPrice: number | null;
  total: number | null;
  isCustom: boolean;
}

export function getPlanForStudents(students: number, cycle: BillingCycle): PricingPlan {
  const plans = PRICING_BY_CYCLE[cycle];
  const normalized = Number.isFinite(students) ? students : 0;

  const matched = plans.find((plan) => {
    if (plan.maxStudents === null) {
      return false;
    }
    return normalized <= plan.maxStudents;
  });

  return matched ?? plans[plans.length - 1];
}

export function calcTotal(students: number, plan: PricingPlan): PriceResult {
  if (plan.custom || plan.perStudent === null || plan.minPrice === null) {
    return {
      perStudentTotal: null,
      minPrice: null,
      total: null,
      isCustom: true,
    };
  }

  const safeStudents = Math.max(0, students);
  const perStudentTotal = safeStudents * plan.perStudent;
  const total = Math.max(plan.minPrice, perStudentTotal);

  return {
    perStudentTotal,
    minPrice: plan.minPrice,
    total,
    isCustom: false,
  };
}

export function formatEUR(value: number): string {
  const rounded = Math.round(value);
  const formatted = new Intl.NumberFormat('de-DE').format(rounded);
  return `${formatted}€`;
}
