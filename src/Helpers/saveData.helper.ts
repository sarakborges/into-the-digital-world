export const saveData = ({ key, value }: { key: string; value: any }) => {
  try {
    localStorage.setItem(`itdw_${key}`, JSON.stringify(value))
  } catch {
    console.error(`Error saving data: itdw_${key}`)
    console.error(value)
  }
}
