import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  description: string;
  categoryColor: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function VideoCard({
  title,
  videoUrl,
  description,
  categoryColor,
  onEdit,
  onDelete
}: VideoCardProps) {
  return (
    <div 
      className="bg-transparent hover:scale-105 rounded-lg overflow-hidden w-[480px]"
      style={{ boxShadow: `1px 8px 30px ${categoryColor}40` }}
    >
      <iframe 
        width="480" 
        height="200" 
        src={videoUrl} 
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-4" style={({borderColor: categoryColor })}
                />
      <div className="p-4 border-4 " style={{ borderColor: categoryColor }}>
        <h3 className="text-xl text-blue-500 font-bold mb-2">{title}</h3>
        <p className="text-cyan-400 mb-4">{description}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onEdit}
            className="uppercase hover:scale-105 flex items-center space-x-2 px-4 py-2 rounded-md text-white transition-colors"
            style={{ backgroundColor: categoryColor }}
          >
            <span>Edit</span>
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={onDelete}
            className="hover:scale-105 uppercase flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            <span>Delete</span>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}