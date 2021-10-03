export default () => {
  const setTheme = () => {
    if (localStorage.theme === 'dark' || !localStorage.theme) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }
  return [setTheme]
}
