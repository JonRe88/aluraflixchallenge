import { useState } from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import Modal from '../components/Modal';
import { COLORS } from '../styles/colors';

interface VideoData {
  id?: string;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
}

// Datos iniciales de videos
const initialVideos = {
  frontend: [
    {
      id: '1',
      title: 'Cuándo usar let, var y const?',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=PztCEdIJITY&t=406s',
      description: '¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.',
    },
    {
      id: '2',
      title: '¿Qué es JavaScript?',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=GJfOSoaXk4s&t=119s',
      description: 'JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.',
    },
  {
      id: '3',
      title: 'Equipo Frontend',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=rpvrLaBQwgg',
      description: '¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?',
    },
  ],
  backend: [
    {
      id: '4',
      title: 'Spring Frameworkt',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=t-iqt1b2qqk&t=1s&pp=ygUWc3ByaW5nIGZyYW1ld29yayBhbHVyYQ%3D%3D',
      description: '¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? ',
    },
    {
      id: '5',
      title: '¿QUÉ ES EL SQL Y NOSQL',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=cLLKVd5CNLc&pp=ygUScXVlcyBlc2wgc3FsIGFsdXJh',
      description: '¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y ',
    },
 {
      id: '6',
      title: 'Simplificando tu código en Java: Conoce los enum',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=EoPvlE85XAQ&pp=ygUqU0lNUExJRklDQU5ETyBUVSBDT0RJR08gRU4gQVZBIEFMVVJBIExBVEFN',
      description: '¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código?  ',
    },
  ],
  innovation: [
       {
      id: '7',
      title: '¿QUÉ SON LAS SOFTSKILLS',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=vhwspfvI52k&t=279s&pp=ygUXcXVlIHNvbiBsYXMgc29mdCBza2lsbHM%3D',
      description: '¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.',
    },
    {
      id: '8',
      title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=YhR7Zp8NUzE&pp=ygUjcXVlIHNvbiBsYXMgc29mdCBza2lsbHMgTEFTIDcgQUxVUkE%3D',
      description: 'Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? ',
    },
    {
      id: '9',
      title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=6N3OkLCfK-0&pp=ygUfTUVUT0RPTE9HSUFTIEFHVUlMRVMgQUxJVVJBIExBTg%3D%3',
      description: 'En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles',
    },
  ],
};

export default function Home() {
  const [videos, setVideos] = useState(initialVideos);
  const [editingVideo, setEditingVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditVideo = (id: string) => {
    const video = Object.values(videos)
      .flat()
      .find((v) => v.id === id);
    setEditingVideo(video || null);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = (id: string) => {
    setVideos((prevVideos) => {
      const updatedVideos = Object.keys(prevVideos).reduce<typeof prevVideos>((acc, category) => {
        acc[category as keyof typeof prevVideos] = prevVideos[category as keyof typeof prevVideos].filter((video: VideoData) => video.id !== id);
        return acc;
      }, {} as typeof prevVideos);

      return updatedVideos;
    });
    console.log('Video eliminado:', id);
  };

  const handleSaveVideo = (data: VideoData) => {
    setVideos((prevVideos) => {
      const updatedCategory = prevVideos[data.category as keyof typeof prevVideos].map((video: VideoData) =>
        video.id === data.id ? data : video
      );

      const isEditing = prevVideos[data.category as keyof typeof prevVideos].some((video: VideoData) => video.id === data.id);
      const newCategoryVideos = isEditing
        ? updatedCategory
        : [...prevVideos[data.category as keyof typeof prevVideos], { ...data, id: Date.now().toString() }];

      return {
        ...prevVideos,
        [data.category]: newCategoryVideos,
      };
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySection
          title="Frontend"
          color={COLORS.FRONTEND}
          videos={videos.frontend}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="frontend"
        />
        <CategorySection
          title="Backend"
          color={COLORS.BACKEND}
          videos={videos.backend}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="backend"
        />
        <CategorySection
          title="Innovación y Gestión"
          color={COLORS.INNOVATION}
          videos={videos.innovation}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="innovation"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoData={editingVideo || undefined}
        onSave={handleSaveVideo}
      />
    </div>
  );
}