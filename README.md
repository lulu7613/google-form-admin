# 仿 google 登入頁面 & 元件切換 (動態與異步組件練習)

## Project setup
```
yarn install
yarn run serve
yarn run build
```

## 環境

1. Vue-cli 3
2. 無 ESLint
3. json-server 替代資料庫

## 插件

1. axios
2. svg-sprite-loader
3. vue-i18n
4. lodash (_.cloneDeep)



## 紀錄

### 自製 Input 元件

* [v-mode 設定](https://www.haorooms.com/post/vue_vmodel)、[官方文檔](https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model)

* google 的 placeholder 在 focus/有資料 狀態下位置會移動，原生 placeholder 無法透過 CSS 設定達到相同效果，因此使用 div 模擬 placeholder。

css 設定
``` scss
input {
  outline-style: none;              // 隱藏 focus 時預設外邊框設定
  
  &::-webkit-input-placeholder {    // 隱藏原生 placeholder
      opacity: 0;
  }
}

.placeholder {
  color: #80868b;
  position: absolute;
  bottom: 17px;
  left: 10px;
  background-color: #fff;
  transition: ease 150ms;
}
```

html 架構
```vue
<template>
  <div> <!-- 父層 -->
    <div style="position: relative; z-index: 1001;">
      <div
        class="placeholder"
        :class="{
          'small': size === 'small',
          'focus': isFocus,
          'hasData': hasData && !isFocus,
          'error': isError
        }"
        @click="actInputFocus()"
      >
        {{ placeholder }}
      </div>
    </div>

    <div>
      <!-- inout 本體 -->
    </div>
  </div>
</template>
```
原本是把 .placeholder 放在 input 本體裡，但 errorMsg 也是用 position: absulote 定位，兩者共用同一個父層，彼此會相互影響位置。後來決定將 .placeholder 獨立出來。