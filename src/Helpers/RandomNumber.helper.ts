export const randomNumber = ({ min, max }: { min: number; max: number }) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
