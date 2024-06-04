import { useEffect, useState } from "react"
import {formatDistanceToNow} from 'date-fns'
import {es} from 'date-fns/locale'

const DateFormat = ({ item }: any) => {


    const [relativeTime, setRelativeTime] = useState('');

    const updateRelativeTime = () => {
        const date = new Date(item);
        const formattedDate = formatDistanceToNow(date, {addSuffix: true, locale: es})
        setRelativeTime(formattedDate)
    }


    useEffect(() => {
        updateRelativeTime();
        const intervalId = setInterval(updateRelativeTime, 1000)
        return () => clearInterval(intervalId)
    }, [item])

  return (
        <div className=" ">
        {relativeTime}
        </div>
  )
}

export default DateFormat