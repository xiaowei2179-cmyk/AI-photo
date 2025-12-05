import { StyleConfig } from './types';

export const PHOTO_STYLES: StyleConfig[] = [
  {
    id: 'professional',
    name: '职业肖像照',
    description: 'Professional Corporate Headshot',
    prompt: 'A high-quality professional corporate headshot of this person. Wearing formal business attire (suit), neutral studio background, soft professional lighting, confident expression, sharp focus, 8k resolution, LinkedIn profile style.',
    icon: 'briefcase'
  },
  {
    id: 'fashion',
    name: '时尚大片写真',
    description: 'High Fashion Editorial',
    prompt: 'High fashion editorial photography of this person. Avant-garde styling, dramatic lighting, Vogue magazine aesthetic, bold makeup, sharp angles, cinematic depth of field, haute couture vibe.',
    icon: 'camera'
  },
  {
    id: 'museum',
    name: '博物馆迷失的她',
    description: 'Lost in the Museum',
    prompt: 'Artistic photography of this person wandering in a classical art museum. Looking at paintings, soft ambient light, cinematic atmosphere, emotional, "Lost in the museum" theme, renaissance color palette, elegant posture.',
    icon: 'landmark'
  },
  {
    id: 'bw-art',
    name: '黑白艺术照',
    description: 'Black & White Fine Art',
    prompt: 'Black and white fine art portrait of this person. High contrast, dramatic shadows (chiaroscuro), emotional intensity, timeless photography, film grain texture, Leica style.',
    icon: 'contrast'
  },
  {
    id: 'magazine',
    name: '美式杂志封面',
    description: 'American Magazine Cover',
    prompt: 'American lifestyle magazine cover style featuring this person. Bright vivid colors, celebrity photoshoot style, confident smile, clean lighting, outdoor city background or high-end studio, Time or GQ magazine aesthetic.',
    icon: 'book-open'
  },
  {
    id: 'hk-retro',
    name: '香港龙虎豹泳装',
    description: 'Retro HK Swimsuit Style',
    prompt: 'Vintage 1980s Hong Kong cinema style photography. The person is wearing a tasteful retro swimsuit. Warm nostalgic color grading, film grain, soft focus, wong kar-wai aesthetic, glamour photography, swimming pool or beach setting.',
    icon: 'film'
  }
];