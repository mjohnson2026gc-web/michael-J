/**
 * michael.js - small utility library for formatting personal names
 * @license MIT
 */

/**
 * Capitalize the first letter and make the rest lowercase.
 * "mICHael" -> "Michael"
 * @param {string} s
 * @returns {string}
 */
function capitalize(s) {
  if (typeof s !== 'string') return '';
  const trimmed = s.trim();
  if (trimmed === '') return '';
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

/**
 * Format a first and last name into "First Last".
 * Performs basic validation and normalization (trim + capitalization).
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string} formatted full name or empty string if both parts invalid
 */
function formatName(firstName, lastName) {
  if (firstName == null && lastName == null) return '';
  const f = capitalize(String(firstName || ''));
  const l = capitalize(String(lastName || ''));
  if (f && l) return `${f} ${l}`;
  if (f) return f;
  if (l) return l;
  return '';
}

// Exports: ESM default + named, and CommonJS compatibility
export default formatName;
export { formatName };
if (typeof module !== 'undefined' && module.exports) {
  module.exports = formatName;
  module.exports.formatName = formatName;
}
