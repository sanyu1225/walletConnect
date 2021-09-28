export default () => {
  const link2 = (link) => {
    if (!link) return
    window.location.href = link
  }
  return [link2]
}
