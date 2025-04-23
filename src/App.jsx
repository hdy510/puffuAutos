import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import Section1 from './resources/components/Section1/Section1.jsx';
import Section2 from './resources/components/Section2/Section2.jsx';
import Section3 from './resources/components/Section3/Section3.jsx';
import Section4 from './resources/components/Section4/Section4.jsx';
import Section5 from './resources/components/Section5/Section5.jsx';
import Section6 from './resources/components/Section6/Section6.jsx';
import Section7 from './resources/components/Section7/Section7.jsx';
import Section8 from './resources/components/Section8/Section8.jsx';
import Section9 from './resources/components/Section9/Section9.jsx';
import Section10 from './resources/components/Section10/Section10.jsx';
import Section11 from './resources/components/Section11/Section11.jsx';

function App() {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      direction={'vertical'}
      mousewheel={true}
      modules={[ Mousewheel ]}
    >
      <SwiperSlide>
        <Section1 />
      </SwiperSlide>

      <SwiperSlide>
        <Section2 />
      </SwiperSlide>

      <SwiperSlide>
        <Section3 />
      </SwiperSlide>

      <SwiperSlide>
        <Section4 />
      </SwiperSlide>

      <SwiperSlide>
        <Section5 />
      </SwiperSlide>

      <SwiperSlide>
        <Section6 />
      </SwiperSlide>

      <SwiperSlide>
        <Section7 />
      </SwiperSlide>

      <SwiperSlide>
        <Section8 />
      </SwiperSlide>

      <SwiperSlide>
        <Section9 />
      </SwiperSlide>

      <SwiperSlide>
        <Section10 />
      </SwiperSlide>

      <SwiperSlide>
        <Section11 />
      </SwiperSlide>
    </Swiper>
  )
}

export default App
