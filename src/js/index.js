// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// Your custom options
// });

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.reviews', {
	direction: "vertical",
	mousewheel: true,
	navigation: {
		nextEl: ".button-next",
		prevEl: ".button-prev",
		disabledClass: "button-disabled",
	},
});