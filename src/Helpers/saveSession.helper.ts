export const saveSession = ({ key, value }: { key: string; value: any }) => {
  try {
    sessionStorage.setItem(`itdw_${key}`, JSON.stringify(value))
  } catch {
    console.warn(`Error saving session: itdw_${key}`)
    console.warn(value)
  }
}
