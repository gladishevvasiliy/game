import exercises from './exercises'

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j] // eslint-disable-line
    array[j] = temp // eslint-disable-line
  }
  return array
}

const getRandomItemsFromList = (list, numOfItems) => {
  // TODO тут ошибка если количество требуемых заданий меньше или равно тех что есть в массиве то ошибка. наприер если стоит 3, и их 3 то ошибка
  let i = 0
  let end = numOfItems
  if (numOfItems > list.length) end = list.length
  const randomIndexList = []
  const randomItemsList = []
  while (i < end) {
    const randomIndex = getRandomInt(0, list.length - 1)
    if (!randomIndexList.includes(randomIndex)) {
      randomIndexList.push(randomIndex)
      randomItemsList.push(list[randomIndex])
      i += 1
    }
  }
  return randomItemsList
}

export const getExersisesList = (numOfExercise, numberOfExercises) => {
  switch (numOfExercise) {
    case 0:
      return getRandomItemsFromList(exercises.exercises_names.exercises, numberOfExercises)
    case 1:
      return getRandomItemsFromList(exercises.exercises_pitch.exercises, numberOfExercises)
    case 2:
      return getRandomItemsFromList(exercises.exercises_sounds.exercises, numberOfExercises)
    default:
      return null
  }
}

export const getVariants = numOfExercise => {
  switch (numOfExercise) {
    case 0:
      return exercises.exercises_names.variants
    case 1:
      return exercises.exercises_pitch.variants
    case 2:
      return exercises.exercises_sounds.variants
    default:
      return null
  }
}

export const getQuestion = numOfExercise => {
  switch (numOfExercise) {
    case 0:
      return exercises.exercises_names.question
    case 1:
      return exercises.exercises_pitch.question
    case 2:
      return exercises.exercises_sounds.question
    default:
      return null
  }
}
