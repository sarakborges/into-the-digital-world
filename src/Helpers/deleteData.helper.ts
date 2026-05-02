export const deleteData = ({ key }: { key: string }) => {
  try {
    localStorage.removeItem(`itdw_${key}`)
  } catch {
    console.warn(`Error deleting data: itdw_${key}`)
  }
}
