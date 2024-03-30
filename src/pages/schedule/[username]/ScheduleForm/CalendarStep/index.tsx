import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            tuesday <span>september 20th</span>
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
