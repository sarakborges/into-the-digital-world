export const loadData = ({ key }: { key: string }) => {
  try {
    const data = localStorage.getItem(`itdw_${key}`) || ''
    return JSON.parse(data)
  } catch {
    console.warn(`Error loading data: itdw_${key}`)
  }
}
