const rawBase = import.meta.env.BASE_URL;
const normalizedBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const withBase = (path = '') => `${normalizedBase}${path.replace(/^\/+/, '')}`;
