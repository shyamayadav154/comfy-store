import React, { useState } from 'react'
import './productImages.styles.scss'
const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <section>
      <img src={main.url} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              onClick={() => setMain(images[index])}
              src={image.url}
              alt={image.filename}
              className={`${image.url === main.url? "active": null}`}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductImages
