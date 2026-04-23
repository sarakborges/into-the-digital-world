export const loadSession = ({ key }: { key: string }) => {
  try {
    const data = sessionStorage.getItem(`itdw_${key}`) || ''
    return JSON.parse(data)
  } catch {
    console.error(`Error loading session: itdw_${key}`)
  }
}
