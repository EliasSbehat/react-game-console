import dl_1_1 from './1.png';
import dl_1_2 from './2.png';
import dl_1_3 from './3.png';
import dl_1_4 from './4.png';

import dl_1_1s from './1s.png';
import dl_1_2s from './2s.png';
import dl_1_3s from './3s.png';
import dl_1_4s from './4s.png';

export const DominR = {
  flag: 0,
  steps: [
    {
      name: "Button Type",
    }
  ],
  items: [
    { name: 'Circle', select: dl_1_1s, image_back: dl_1_1 },
    { name: 'Circle Red LED', select: dl_1_2s, image_back: dl_1_2 },
    { name: 'Circle Blue LED', select: dl_1_3s, image_back: dl_1_3 },
    { name: 'Circle Green LED', select: dl_1_4s, image_back: dl_1_4 }
  ]
}