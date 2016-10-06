# vue2-vuex2-router2-blog

> vue2-vuex2-router2-blog

## 技术

- vue2
- vue-router
- vuex2
- fetch
- node

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## vuex 小结

- 在 actions.js 中书写 request 请求, 实现数据请求复用
- 从 getters.js 中读取数据
- vue 组件不可以直接修改state中的数据, 只能通过 dispatch 一个 action, 通知 mutations 去修改 state

## 升级日志

### 2016/09/30

- 修改eslintrc.js

```js
"env": {
  "browser": true,
  "node": true
},
```

- 封装 fetch 接口

- ~~拆分 store.js(现只改造了article) [三大改造完成]

## Bug

### 2016/09/29

1. 由于 router.js 的 beforeEach 没有 调用 next() 方法 导致路由没起作用
2. 实现 fetch 跨域请求
