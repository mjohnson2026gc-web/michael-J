// michael.js
// Small utility library for personal-name formatting and validation

/**
 * Trim, normalize-case and join first and last names.
 * Example: ("michael", "johnson") -> "Michael Johnson"
 */
function formatName(firstName, lastName) {
  if (!firstName && !lastName) return '';
  const f = (firstName || '').toString().trim();
  const l = (lastName || '').toString().trim();
  const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
  return [capitalize(f), capitalize(l)].filter(Boolean).join(' ');
}

/** Return true if name contains only letters, spaces, hyphens or apostrophes */
function isValidName(name) {
  if (typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (!trimmed) return false;
  return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(trimmed);
}

/** Format with optional title: { title: "Dr." } -> "Dr. Michael Johnson" */
function formatWithTitle(firstName, lastName, options = {}) {
  const title = options.title ? options.title.toString().trim() : '';
  const full = formatName(firstName, lastName);
  return title ? `${title} ${full}` : full;
}

module.exports = {
  formatName,
  isValidName,
  formatWithTitle,
};
