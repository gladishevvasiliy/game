import exercises from './exercises'

export const getExersisesList = numOfExercise => {
  switch (numOfExercise) {
    case 0:
      return exercises.exercises_names.exercises
    case 1:
      return exercises.exercises_pitch.exercises
    case 2:
      return exercises.exercises_sounds.exercises
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
