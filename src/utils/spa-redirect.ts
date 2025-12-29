// Handle SPA redirect from 404.html on GitHub Pages
export function handleSpaRedirect() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    // Use history.replaceState to update the URL without reloading
    window.history.replaceState(null, '', redirect);
  }
}
