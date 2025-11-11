import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageDD({ selectedImage, setSelectedImage }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 5,
    onDrop: (files) => setSelectedImage(files), // update parent state
  });

  // optional: reset URL objects to avoid memory leaks
  useEffect(() => {
    return () =>
      acceptedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [acceptedFiles]);

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
    >
      <input {...getInputProps()} />
      <p className="text-gray-600">
        Drag and drop images here, or click to select
      </p>

      {acceptedFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {acceptedFiles.map((file) => (
            <img
              key={file.name}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-32 object-cover rounded-md border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
