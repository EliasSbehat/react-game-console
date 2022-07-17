import dl_1_1 from './1.png';
import dl_1_2 from './2.png';
import dl_1_3 from './3.png';
import dl_1_4 from './4.png';

import dl_1_1s from './1s.png';
import dl_1_2s from './2s.png';
import dl_1_3s from './3s.png';
import dl_1_4s from './4s.png';

import sel_1 from './selection/1.png'
import sel_2 from './selection/2.png'
import sel_3 from './selection/3.png'
import sel_4 from './selection/4.png'
import sel_5 from './selection/5.png'
import sel_6 from './selection/6.png'

export const DominL = {
  flag: 0,
  steps: [
    {
      name: "Button Type",
    }
  ],
  items: [
    { name: 'Circle', select: dl_1_1s, image_back: dl_1_1, price: 0.00},
    { name: 'Circle Red LED', select: dl_1_2s, image_back: dl_1_2, price: 3.00},
    { name: 'Circle Blue LED', select: dl_1_3s, image_back: dl_1_3, price: 3.00},
    { name: 'Circle Green LED', select: dl_1_4s, image_back: dl_1_4, price: 3.00}
  ]
}

export const DominSelection = {
  steps: { name: "Button Selection" },
  items: [
    { name: '', image: sel_1, select: sel_1, price: 12.99 },
    { name: '', image: sel_1, select: sel_2, price: 12.99 },
    { name: '', image: sel_1, select: sel_3, price: 12.99 },
    { name: '', image: sel_1, select: sel_4, price: 12.99 },
    { name: '', image: sel_1, select: sel_5, price: 12.99 },
    { name: '', image: sel_1, select: sel_6, price: 12.99 },
  ]
}

// export const DominSelection_APIED = {
//   items: [
//     { name: '', image: sel_1, select: sel_1, price: 12.99 },
//     { name: '', image: sel_1, select: sel_2, price: 12.99 },
//     { name: '', image: sel_1, select: sel_3, price: 12.99 },
//     { name: '', image: sel_1, select: sel_4, price: 12.99 },
//     { name: '', image: sel_1, select: sel_5, price: 12.99 },
//     { name: '', image: sel_1, select: sel_6, price: 12.99 },
//   ]
// }