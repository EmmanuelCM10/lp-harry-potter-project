const MONTHS_PT_BR = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

export function formatDateOfBirth(rawDate: string | null): string {
  if (!rawDate) return 'Desconhecida';

  const [day, month, year] = rawDate.split('-').map(Number);

  if (!day || !month || !year) return 'Desconhecida';

  return `${day} de ${MONTHS_PT_BR[month - 1]} de ${year}`;
}
