import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CustomCarousel = ({children, ...props}) => (
  <Carousel
    showArrows={true}
    swipeable={true}
    emulateTouch={true}
    showThumbs={false}
    showStatus={false}
    {...props}
  >
    {children}
  </Carousel>
)

export default CustomCarousel
