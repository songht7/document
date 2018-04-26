********royalSlider.js*******************************************************
参数名								参数说明													可选值			默认值
autoScaleSlider				是否基于基础宽度自动更新滑块高度	true或false	false
autoScaleSliderWidth	幻灯片基本宽度	整数	800
autoScaleSliderHeight	幻灯片基本高度	整数	400
imageScaleMode				图片缩放模式	“fill”, “fit”, “fit-if-smaller” 或 “none”	‘fit-if-smaller’
imageAlignCenter			幻灯片是否居中对齐	true或false	true
imageScalePadding			图片和幻灯片边缘的距离，在’fill’缩放模式下不起作用	数字	4
controlNavigation			导航类型	‘bullets’, ‘thumbnails’, ‘tabs’ 或 ‘none’	‘bullets’
arrowsNav							是否用箭头导航	true或false	true
arrowsNavAutoHide			箭头导航是否自动隐藏	true或false	true
arrowsNavHideOnTouch	箭头导航是否在触摸设备中隐藏	true或false	false
imgWidth							所有图片的基本宽度	整数	null
imgHeight							所有图片的基本高度	整数	null
slidesSpacing					幻灯片之间的间隔，单位px	整数	8
startSlideId					从第几张幻灯片开始播放	整数	0
loop									是否从最后一张幻灯片滑动到第一张	true或false	false
loopRewind						是否从最后一张幻灯片通过环绕的方式滑动到第一张，重写loop参数	true或false	false
randomizeSlides				是否随机一张幻灯片开始播放	true或false	false
numImagesToPreload		幻灯片预加载的图片数量，如果设置为0，那么开始将只有一张图片显示在列表中	整数	4
usePreloader					Enables spinning preloader, you may style it via CSS (class rsPreloader). Since 9.3 version.true或false true
slidesOrientation			滑动方向	‘vertical’ 或 ‘horizontal’	‘horizontal’
transitionType				切换过渡类型	‘move’ 或 ‘fade’	‘move	‘
transitionSpeed				切换毫秒速度	整数	600
navigateByClick				是否允许在幻灯片上点击鼠标导航	true或false	true
sliderDrag						是否允许在幻灯片上鼠标拖动导航	true或false	true
sliderTouch						是否允许触摸导航	rue或false	true
keyboardNavEnabled		是否允许键盘按键控制导航	true或false	false
fadeinLoadedSlide			Fades in slide after it’s loaded.	true或false	true
allowCSS3							是否允许css3效果的使用	true或false	true
globalCaption					Adds global caption element to slide	true或false	true
addActiveClass				是否在切换之前将rsActiveSlide应用到当前幻灯片的样式上	true或false	false
minSlideOffset				拖拽时的最小偏移量	数字	10
autoHeight						缩放和动画基本高度	false
slides								重写html幻灯片，用于创建未附加到DOM的的元素	null
