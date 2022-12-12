const semester = [
  { value: '', label: '-- Select an option --' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
]
const courses = [
  { value: '', label: '-- Select an option --' },
  { value: 'B.Tech', label: 'B.Tech' },
  { value: 'M.Tech', label: 'M.Tech' },
  { value: 'B.C.A', label: 'B.C.A' },
  { value: 'M.C.A', label: 'M.C.A' },
  { value: 'B.E', label: 'B.E' },
  { value: 'B.Sc', label: 'B.Sc' },
  { value: 'M.Sc', label: 'M.Sc' },
]

const gender = [
  { value: '', label: '-- Select an option --' },
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
]
const passingYear = ['', '2021', '2022', '2023'].map((e) => {
  if (!e) return { value: '', label: '-- Select an option --' }
  return {
    label: e,
    value: e,
  }
})
export { semester, passingYear, courses, gender }
