interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })

  const weekDays = Array.from(Array(7).keys()).map((day) =>
    formatter.format(new Date(Date.UTC(2021, 5, day))),
  )

  if (short) {
    return weekDays.map((weekDay) => weekDay.substring(0, 3).toUpperCase())
  }

  return weekDays
}
