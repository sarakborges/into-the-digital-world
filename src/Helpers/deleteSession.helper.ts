export const deleteSession = ({ key }: { key: string }) => {
  try {
    sessionStorage.removeItem(`itdw_${key}`)
  } catch {
    console.warn(`Error deleting session: itdw_${key}`)
  }
}
