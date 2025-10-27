import { Video } from '../types';

export const sampleVideos: Omit<Video, 'id' | 'addedAt'>[] = [
  {
    title: '🚀 Space Adventure for Kids',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192611187_9dcb2dd2.webp',
    duration: 300
  },
  {
    title: '🦕 Dinosaur Learning Fun',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192612019_0a374a89.webp',
    duration: 420
  },
  {
    title: '🔤 ABC Learning Song',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192612774_04f4f0e5.webp',
    duration: 240
  },
  {
    title: '🎵 Musical Animals Concert',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192613490_c1f1bfd2.webp',
    duration: 360
  },
  {
    title: '🚂 Train Adventure Story',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192614260_2da8cc6b.webp',
    duration: 480
  },
  {
    title: '🐠 Under the Sea Discovery',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://d64gsuwffb70l.cloudfront.net/68f9aa697623c1671a730f62_1761192614998_fd66b8a3.webp',
    duration: 390
  }
];
