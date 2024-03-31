import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()
  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('MMMM[ ]DD')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }, [selectedDate, username])

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>8:00 AM</TimePickerItem>
            <TimePickerItem>9:00 AM</TimePickerItem>
            <TimePickerItem>10:00 AM</TimePickerItem>
            <TimePickerItem>11:00 AM</TimePickerItem>
            <TimePickerItem>12:00 AM</TimePickerItem>
            <TimePickerItem>1:00 PM</TimePickerItem>
            <TimePickerItem>2:00 PM</TimePickerItem>
            <TimePickerItem>3:00 PM</TimePickerItem>
            <TimePickerItem>4:00 PM</TimePickerItem>
            <TimePickerItem>5:00 PM</TimePickerItem>
            <TimePickerItem>6:00 PM</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
