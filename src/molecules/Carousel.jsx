// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default () => {
  return (
<>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

<SwiperSlide>
  <div class="teaser">
    <figure class="teaser-image">
      <picture>
        <img src="../img/stocks.jpg" />
      </picture>
    </figure>

    <div class="teaser-info">
      <h3 class="title" >
        Nedgang på Oslo Børs før kveldens rentebeskjed fra USA
      </h3>
      <ul class="category" >
        <li>Finans</li>
        <li>|</li>
        <li>Abonnent</li>
      </ul>
    </div>
  </div>
</SwiperSlide>


<SwiperSlide>
  <div class="teaser">
    <figure class="teaser-image">
      <picture>
        <img src="../img/oil.jpg" />
      </picture>
    </figure>

    <div class="teaser-info">
      <h3 class="title" >
        Oljeindustrien satser: Store investeringer til tross for svak etterspørselsvekst
      </h3>
      <ul class="category" >
        <li>Finans</li>
        <li>|</li>
        <li>Abonnent</li>
      </ul>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div class="teaser">
    <figure class="teaser-image">
      <picture>
        <img src="../img/dude.jpg" />
      </picture>
    </figure>

    <div class="teaser-info">
      <h3 class="title" >
        Svak økonomisk utvikling i Kina: Sentralbanken kutter renten – millionærflukt akselererer
      </h3>
      <ul class="category" >
        <li>Finans</li>
        <li>|</li>
        <li>Abonnent</li>
      </ul>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div class="teaser">
    <figure class="teaser-image">
      <picture>
        <img src="../img/finans.jpg" />
      </picture>
    </figure>

    <div class="teaser-info">
      <h3 class="title" >
        Derfor boikotter de Schjødt: «Ikke forenlig med Blystad-gruppens verdier»
      </h3>
      <ul class="category" >
        <li>Finans</li>
        <li>|</li>
        <li>Abonnent</li>
      </ul>
    </div>
  </div>
</SwiperSlide>


    </Swiper>
    </>
  );
};


