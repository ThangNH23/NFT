import React from 'react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { Swiper,SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation])

const ContentF=()=> {
  return (
    <div className='banner'>
        <Swiper Navigation={true} modules={[Navigation]} className='mySwiper'></Swiper>
            <SwiperSlide>
                <div className='card1'>
                    <div className='overlay'></div>
                    <div className='tesk'>
                        <h3>THE FIRST SILDE</h3>
                        <h4>Nguyễn Hữu Thắng</h4>
                        <button>Contact us</button>
                    </div>
                </div>
            </SwiperSlide>
    </div>
  )
}
export default ContentF