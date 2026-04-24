export const deleteSession = ({ key }: { key: string }) => {
  try {
    sessionStorage.removeItem(`itdw_${key}`)
  } catch {
    console.error(`Error deleting session: itdw_${key}`)
  }
}
