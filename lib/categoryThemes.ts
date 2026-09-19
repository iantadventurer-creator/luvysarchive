// Sistema de categorías/franquicias compartido por TODA la web — la galería
// principal y la comunidad usan exactamente esta misma paleta, para que se
// sientan parte de un solo sistema y no dos secciones distintas pegadas.

export type CategoryTheme = { accent: string; shadow: string; ink: string };

export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  draculaura: { accent: '#E0245E', shadow: '#8a1638', ink: '#ffffff' },
  clawdeen: { accent: '#F2A93B', shadow: '#8a5c14', ink: '#1a1300' },
  frankie: { accent: '#39E639', shadow: '#1f7a1f', ink: '#0a1a00' },
  lagoona: { accent: '#22C1D6', shadow: '#0f6b78', ink: '#ffffff' },
  cleo: { accent: '#D4AF37', shadow: '#7a611a', ink: '#1a1300' },
  otros: { accent: '#8B7CF6', shadow: '#4f4499', ink: '#ffffff' },
};

/** Claves en minúscula, en el orden en que se muestran los selectores/filtros. */
export const CATEGORY_KEYS = Object.keys(CATEGORY_THEMES);

/** "STAR WARS" → "Star Wars", pero conserva las siglas cortas (p. ej. "DC") en mayúsculas. */
export function formatCategoryLabel(raw: string): string {
  return raw
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => (word.length <= 2 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

export function getCategoryTheme(category: string | null | undefined): CategoryTheme | null {
  if (!category) return null;
  return CATEGORY_THEMES[category.trim().toLowerCase()] || null;
}
