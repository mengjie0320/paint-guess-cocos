* emit事件 - 跨组件传递
全局一个eventTarget变量
* 善用mask和graphics
同时使用时，mask设置好类型，直接使用graphics画图直接应用
* 组件之间生命周期关系 ？？？
onLoad - onEnable - start - 子（onLoad - onEnable - start - update） - update
父子update关系：


# 关于游戏：
## 游戏状态及数据情况：
- 等待启动：进队及准备信息（选择进入）
- 启动前期准备：区分选词等待状态，展示选词信息（选词、选择退出）
- 开启游戏：时长倒计时、画板展示数据同步 - （监听退出状态、上报数据、同步数据、回撤数据）
- 游戏结束：展示得分信息（上报信息、等待重开）