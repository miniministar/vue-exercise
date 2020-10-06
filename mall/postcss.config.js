module.exports = {
  plugins : {
    'postcss-px-to-viewport': {
      viewportWidth: 375, //设计稿的视口宽度，对应的是我们设计稿的高度（iPhone6 750 * 1334)
      viewportHeight: 667, //视窗高度，可以不配置
      unitPrecision: 5, //单位转换后保留的小数位数
      viewportUnit: 'vw', //转换后的视口单位
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //不进行转换的css选择器，继续使用原有单位
      minPixelValue: 1, //设置最小的转换数值
      mediaQuery: false, //设置媒体查询里的单位是否需要转换单位

      // propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
      // fontViewportUnit: 'vw', //转换后字体使用的视口单位
      // replace: true, //是否直接更换属性值，而不添加备用属性
      exclude: [/MainTabbar/] //忽略某些文件夹下的文件
    }
  }
}
