export const loadSession = (key: string) => {
  try {
    const data = sessionStorage.getItem(`itdw_${key}`) || ''
    return JSON.parse(data)
  } catch {
    console.warn(`Error loading session: itdw_${key}`)
  }
}
