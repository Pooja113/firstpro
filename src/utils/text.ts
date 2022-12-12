const textCapitalize = (text: string) => {
  const words = text?.toLowerCase().split(' ')
  return words
    .map((word) => {
      return word[0]?.toUpperCase() + word?.substring(1)
    })
    .join(' ')
    ?.trim()
}

export default textCapitalize
