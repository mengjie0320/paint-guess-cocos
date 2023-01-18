# webgl - three.js
## 简单渲染
相机 - 拍摄 - 场景，得到 渲染器 渲染的结果。
```

```
渲染有两种方式：实时渲染和离线渲染 。离线渲染：一帧一帧的图片，拼接成电脑，质量较高。实时渲染：不停地循环渲染。

```
function render() {
  cube.rotation.x += 0.1; // 0.1 是弧度，度＝弧度×180°/π，所以是旋转 5.7度。
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(render); // 动画，下次重回之前调用指定的回调函数更新动画
}
```

正投影相机THREE.OrthographicCamera和透视投影相机THREE.PerspectiveCamera
正投影，远近高低都相同；透视投影远处物体比近处物体小；
var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
<!-- var camera = new THREE.OrthographicCamera( left, right, top, bottom, near, far ); -->
var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
<!-- PerspectiveCamera( fov, aspect, near, far )
fov 视角，眼睛睁开的角度，人类的正常视角是120度左右，但是要集中注意力看清楚东西，那么眼睛的视角在30-40度比较好；眼睛大，焦距无法固定，所以场景非常模糊
aspect 纵横比，实际窗口的纵横比，及宽度除以高度，宽度大 - 宽银幕电影，小于 1 - LED屏幕； -->

光的类型：混合使用的时候效果也要学会分辨。
环境光是经过多次反射而来的光称为环境光，无法确定其最初的方向。物体都将表现同样的明暗程度。new THREE.AmbientLight( 0xff0000 );
点光源：由这种光源放出的光线来自同一点，且方向辐射自四面八方。例如蜡烛放出的光，萤火虫放出的光。PointLight( color, intensity, distance )
聚光灯：这种光源的光线从一个锥体中射出，在被照射的物体上产生聚光的效果。使用这种光源需要指定光的射出方向以及锥体的顶角α。THREE.SpotLight( hex, intensity, distance, angle, exponent ) // exponent 衰减的参数
平行光（方向光）一组没有衰减的平行的光线，类似太阳光的效果。 THREE.DirectionalLight = function ( hex, intensity )。方向有位置和原点确定，只与方向有关，与离物体远近无关。


材质：
Lambert材质表面会在所有方向上均匀地散射灯光，这就会使颜色看上去比较均匀。就像一张纸。
材质会受环境光和无光影响，这种情况下呈现环境光和无光。

相机常用参数:
postion：相机位置，默认为（0，0，0）
up: 相机朝向，默认（0，1，0）,可以理解为那一根坐标轴向上，快门方向
lookAt: 相机焦点方向，默认为Z轴负半轴方向, 大白话就是相机看向哪一个点

## 纹理
3D模型由顶点(vertex)组成，顶点之间连成三角形或四边形（在一个平面上）,多个三角形或者四边形就能够组成复杂的立体模型。
文件后缀类型：.vtk、.obj、.stl。THREE.Line表示的是线条。THREE.Mesh表示面的集合。Vtk模型是一种以文本方式表示的3D模型文件，其能够表示点面信息，而且能够以人类易读易懂的方式以文本的形式存储下来。
THREE.Mesh = function ( geometry, material )  geometry一个包含顶点和顶点之间连接关系的对象，material定义的材质。

在canvas上画时钟 - 将canvas传递给Three.Texture纹理 - 将纹理传给Three.MeshBasicMaterial材质 - 构造Three.Mesh


## 3D模型的加载与使用
js解析模型文件并生成mesh模型，显示在场景中。
 - vtk文件中的点，转换为geometry的vertices数组中；vtk文件中每个点的索引，转换到geometry的faces中。点的存储空间，存储组成三角形、四边形点的存储空间。需要计算每个面的中心、每个面的法向量、每一个定点的法向量、可以包围图形的椭圆（中心点是geometry中心，sphere最大半径是离中心店最远的一个点）

3D世界只有三种运动方式：移动、旋转、放大缩小。
THREE.BoxGeometry = function ( width, height, depth, widthSegments, heightSegments, depthSegments ) // 分段分数
new THREE.GridHelper( 1000, 50 ); // 大网格边长，小网格边长
旋转以物体本身中心为中心，以人或其他目标为中心

View视图类：function View( canvas, fullWidth 视口宽-可视面宽, fullHeight, viewX 视口x坐标位置-渲染位置, viewY, viewWidth 显示视口宽-渲染大小宽, viewHeight )
其他点的颜色可以通过3个顶点的颜色自动找到相似色。底部阴影效果额外添加纹理？

```
// 反锯齿声明渲染器
renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( fullWidth, fullHeight );
```