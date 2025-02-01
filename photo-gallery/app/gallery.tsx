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
    alt: 'Mountain landscape at sunset'
  },
  {
    src: '/photos/photo2.jpg',
    width: 1080,
    height: 1620,
    alt: 'Portrait in natural light'
  },
  {
    src: '/photos/photo3.jpg',
    width: 1920,
    height: 1080,
    alt: 'Urban architecture'
  },
  {
    src: '/photos/photo1.jpg',
    width: 1080,
    height: 1080,
    alt: 'Abstract patterns'
  },
  {
    src: '/photos/photo3.jpg',
    width: 1920,
    height: 1280,
    alt: 'Nature close-up'
  },
];

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        {/* Header */}
        <header className="py-8 px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Mah joon Photography
          </h1>
          <p className="text-lg text-white mt-2 drop-shadow-md">
            Capturing moments
          </p>
        </header>

        {/* Gallery Grid */}
        <main className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dISkgJSUlICQpKjIuMCYxKicqKjI9PTw8PSJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQf/AABEIAAIAAgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2Q=="
                  />
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
        <footer className="py-8 px-4 md:px-8 mt-12 border-t border-gray-200 text-center">
          <div className="text-white">
            <p>© 2025 Mah joon Photography. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}
