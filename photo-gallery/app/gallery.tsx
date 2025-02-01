'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

// In a real app, this would come from your data source
const photos = [
  {
    src: '/photos/photo1.jpg',
    width: 1920,
    height: 1280,
    alt: 'Mountain landscape at sunset',
    size: 'wide', // Custom size for each photo
    overlayText: 'Explore the Wild', // Optional overlay text
  },
  {
    src: '/photos/photo2.jpg',
    width: 1080,
    height: 1620,
    alt: 'Portrait in natural light',
    size: 'tall', // Custom size for each photo
    overlayText: 'Faces of Nature', // Optional overlay text
  },
  {
    src: '/photos/photo3.jpg',
    width: 1920,
    height: 1080,
    alt: 'Urban architecture',
    size: 'wide', // Custom size for each photo
    overlayText: 'Cityscapes', // Optional overlay text
  },
  {
    src: '/photos/photo1.jpg',
    width: 1080,
    height: 1080,
    alt: 'Abstract patterns',
    size: 'tall', // Custom size for each photo
    overlayText: 'Abstract Visions', // Optional overlay text
  },
  {
    src: '/photos/photo3.jpg',
    width: 1920,
    height: 1280,
    alt: 'Nature close-up',
    size: 'large', // Custom size for each photo
    overlayText: 'Close Encounters', // Optional overlay text
  },
  // Add more photos to create a dense grid
  {
    src: '/photos/photo1.jpg',
    width: 1080,
    height: 1080,
    alt: 'Abstract patterns',
    size: 'tall', // Custom size for each photo
    overlayText: 'Abstract Visions', // Optional overlay text
  },
  {
    src: '/photos/photo2.jpg',
    width: 1080,
    height: 1620,
    alt: 'Portrait in natural light',
    size: 'tall', // Custom size for each photo
    overlayText: 'Faces of Nature', // Optional overlay text
  },
  {
    src: '/photos/photo3.jpg',
    width: 1920,
    height: 1080,
    alt: 'Urban architecture',
    size: 'wide', // Custom size for each photo
    overlayText: 'Cityscapes', // Optional overlay text
  },
  {
    src: '/photos/photo1.jpg',
    width: 1920,
    height: 1280,
    alt: 'Mountain landscape at sunset',
    size: 'large', // Custom size for each photo
    overlayText: 'Explore the Wild', // Optional overlay text
  },
  {
    src: '/photos/photo3.jpg',
    width: 1080,
    height: 1080,
    alt: 'Nature close-up',
    size: 'small', // Custom size for each photo
    overlayText: 'Close Encounters', // Optional overlay text
  },
];

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  size: 'small' | 'wide' | 'tall' | 'large'; // Custom size property
  overlayText?: string; // Optional overlay text
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Helper function to determine the grid column and row span based on the photo size
  const getGridStyles = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1'; // 1x1 grid cell
      case 'wide':
        return 'col-span-2 row-span-1'; // 2x1 grid cell
      case 'tall':
        return 'col-span-1 row-span-2'; // 1x2 grid cell
      case 'large':
        return 'col-span-2 row-span-2'; // 2x2 grid cell
      default:
        return 'col-span-1 row-span-1'; // Default to 1x1
    }
  };

  return (
      <div className="min-h-screen bg-gray-800 text-white">
        {/* Header */}
        <header className="py-12 px-4 md:px-8 text-center">
          <h1 className="text-6xl font-bold text-white uppercase tracking-widest">
            Mah joon Photography
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Capturing the essence of moments
          </p>
        </header>

        {/* Gallery Grid */}
        <main className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px, auto)]">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`relative cursor-pointer overflow-hidden ${getGridStyles(
                        photo.size
                    )} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                    onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dISkgJSUlICQpKjIuMCYxKicqKjI9PTw8PSJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQf/AABEIAAIAAgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3T1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2Q=="
                  />
                  {photo.overlayText && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-2xl font-bold uppercase tracking-widest text-center">
                          {photo.overlayText}
                        </p>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </main>

        {/* Lightbox */}
        {selectedPhoto && (
            <Transition
                show={selectedPhoto !== null}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <div
                  className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                  onClick={() => setSelectedPhoto(null)}
              >
                <div className="relative w-full max-w-7xl h-[90vh] mx-4">
                  <Image
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                  />
                  <button
                      className="absolute top-4 right-4 text-white text-4xl"
                      onClick={() => setSelectedPhoto(null)}
                  >
                    ×
                  </button>
                </div>
              </div>
            </Transition>
        )}

        {/* Footer */}
        <footer className="py-8 px-4 md:px-8 mt-12 border-t border-gray-700 text-center">
          <div className="text-white">
            <p>© 2025 Mah joon Photography. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}
