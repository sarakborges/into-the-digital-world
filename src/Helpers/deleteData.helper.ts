export const deleteData = ({ key }: { key: string }) => {
  try {
    localStorage.removeItem(`itdw_${key}`)
  } catch {
    console.error(`Error deleting data: itdw_${key}`)
  }
}
