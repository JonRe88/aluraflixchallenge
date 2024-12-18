import React from 'react';

interface VideoData {
  id?: string;
  title: string;
  category: string;
  videoUrl: string;
  description: string;
}

interface VideoFormProps {
  formData: VideoData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ formData, onChange }) => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">Título</label>
        <input
          name="title"
          value={formData.title}
          onChange={onChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Categoría</label>
        <select
          name="category"
          value={formData.category}
          onChange={onChange}
          className="w-full border px-2 py-1 rounded"
        >
          <option value="">Seleccione una categoría</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovation">Innovación y Gestión</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">URL del Video</label>
        <input
          name="videoUrl"
          value={formData.videoUrl}
          onChange={onChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={3}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
    </form>
  );
};

export default VideoForm;