import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <img
      src={currentVan.imageUrl}
      alt={`photo of ${currentVan.name}`}
      className="host-van-detail-image"
    />
  );
}
