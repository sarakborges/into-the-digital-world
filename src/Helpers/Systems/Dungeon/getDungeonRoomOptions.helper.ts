import { generateRandomNumber } from '@/Helpers/Math/generateRandomNumber.helper'

export const getDungeonRoomOptions = (
  roomIds: Array<string>
): Array<string> => {
  if (roomIds.length <= 2) {
    return [...roomIds]
  }

  const availableRoomIds = [...roomIds]
  const roomOptions: Array<string> = []

  while (roomOptions.length < 2 && availableRoomIds.length) {
    const randomIndex = generateRandomNumber({
      min: 0,
      max: availableRoomIds.length - 1
    })
    const [roomId] = availableRoomIds.splice(randomIndex, 1)

    if (roomId) {
      roomOptions.push(roomId)
    }
  }

  return roomOptions
}
