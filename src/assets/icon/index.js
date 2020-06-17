import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);

const req = require.context('../icon', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);

// icon 的顏色是吃父層的 css:color ，如果發現 icon 顏色改不了，記得把 SVG 檔裡的 fill 或 stroke 改成 currentColor
