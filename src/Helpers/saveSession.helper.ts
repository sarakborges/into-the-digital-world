export const saveSession = ({ key, value }: { key: string; value: any }) => {
  try {
    sessionStorage.setItem(`itdw_${key}`, JSON.stringify(value))
  } catch {
    console.error(`Error saving session: itdw_${key}`)
    console.error(value)
  }
}
