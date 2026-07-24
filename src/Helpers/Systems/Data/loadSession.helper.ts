export const loadSession = (key: string) => {
  const data = sessionStorage.getItem(`itdw_${key}`)

  if (!data) {
    return
  }

  try {
    return JSON.parse(data)
  } catch {
    console.warn(`Error loading session: itdw_${key}`)
  }
}
