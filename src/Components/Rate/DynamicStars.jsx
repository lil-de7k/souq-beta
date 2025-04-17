import React, { useState } from 'react'
import { Rating } from '@mui/material'

const DynamicStars = () => {
  const [value, setValue] = useState(1.5)

  const handleRatingChange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue)
  }

  return (
    <div className="mt-0.5 sm:mt-0">
      <Rating
        name="half-rating"
        value={value}
        precision={0.5}
        size='small' // تقدر تغير لـ 'medium' في الشاشات الكبيرة لو حبيت
        sx={{
          direction: 'ltr',
          fontSize: {
            xs: '18px', // للشاشات الصغيرة
            sm: '20px', // للشاشات المتوسطة
            md: '22px', // للشاشات الكبيرة
          }
        }}
        onChange={handleRatingChange}
      />
    </div>
  )
}

export default DynamicStars