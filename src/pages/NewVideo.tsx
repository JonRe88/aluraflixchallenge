import { useState } from 'react';
import VideoForm from '../components/VideoForm';
import { useNavigate } from 'react-router-dom';

interface VideoData {
  id?: string;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
}

export default function NewVideo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<VideoData>({
    title: '',
    category: '',
    videoUrl: '',
    description: ''
  });

  const handleSubmit = (data: VideoData) => {
    console.log('Submit new video:', data);
    alert('El video se guardó correctamente.');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="max-w-3xl bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl text-indigo-500 font-bold mb-8">NUEVO VIDEO</h1>
      <h2 className="uppercase text-1xl text-indigo-300 mb-8">Complete el formulario para crear una nueva tarjeta de video</h2>
      <VideoForm formData={formData} onChange={handleChange} />
      <button 
        onClick={() => handleSubmit(formData)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Guardar
      </button>
    </div>
  );
}