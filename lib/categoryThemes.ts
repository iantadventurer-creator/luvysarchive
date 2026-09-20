// Sistema de categorías/franquicias compartido por TODA la web — la galería
// principal y la comunidad usan exactamente esta misma paleta, para que se
// sientan parte de un solo sistema y no dos secciones distintas pegadas.

export type CategoryTheme = { accent: string; shadow: string; ink: string };

export const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  'monster high': { accent: '#D8B4E2', shadow: '#B98FC7', ink: '#5b3a5c' },
  'mirror mi': { accent: '#B8E0F5', shadow: '#8EC7E8', ink: '#345b6e' },
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
