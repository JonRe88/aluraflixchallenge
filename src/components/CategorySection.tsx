import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoCard from './VideoCard';
import CategoryButton from './CategoryButton';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

interface Video {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
}

interface CategorySectionProps {
  title: string;
  color: string;
  videos: Video[];
  onEditVideo: (id: string) => void;
  onDeleteVideo: (id: string) => void;
  category: 'frontend' | 'backend' | 'innovation';
}

export default function CategorySection({
  title,
  color,
  videos,
  onEditVideo,
  onDeleteVideo,
  category,
}: CategorySectionProps) {
  return (
    <div className={`py-8 ${category}-section`}>
      <div className="mb-6 px-4">
        <CategoryButton color={color}>
          {title}
        </CategoryButton>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView="auto"
        className="px-4"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id} className="!w-auto">
            <VideoCard
              {...video}
              categoryColor={color}
              onEdit={() => onEditVideo(video.id)}
              onDelete={() => onDeleteVideo(video.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};