export function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }
  return "Holberton School main dashboard";
}
