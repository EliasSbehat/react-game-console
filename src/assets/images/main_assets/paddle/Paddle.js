import pa_1_1 from './Remap_Kits_Black.png';
import pa_1_2 from './Remap_Kits_Supernova.png';
import pa_1_3 from './Remap_Kits_Vampire_Red.png';
import pa_1_4 from './Remap_Kits_White.png';


import pa_1_1s from './1s.png';
import pa_1_2s from './2s.png';
import pa_1_3s from './3s.png';
import pa_1_4s from './4s.png';


export const Paddle = {
  flag: 0,
  steps: [
    {  }
  ],
  items: [
    { name: 'Black', image_back: pa_1_1, select: pa_1_1s},
    { name: 'Supernova', image_back: pa_1_2, select: pa_1_2s},
    { name: 'Vampire red', image_back: pa_1_3, select: pa_1_3s},
    { name: 'White', image_back: pa_1_4, select: pa_1_4s}
  ]
}