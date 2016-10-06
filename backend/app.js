/**
* @Date:   2016-09-29T16:33:33+08:00
* @Last modified time: 2016-09-29T18:11:57+08:00
*/

/* backend */

const express = require('express')
const path = require('path')
const fs = require("fs")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
global.moment = require('moment'); //日期函数全局访问
global.moment.locale('zh-cn');

const app = express()

app.use(bodyParser.json())
/* 创建 application/x-www-form-urlencoded 编码解析 */
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/articles', (req, res) => {
  let articles = [
      {
        author: '云仔',
        title: '明天会更好',
        created_at: new Date(),
        read: 999,
        content: '各位不要在意英雄的帮派问题嘛，做英雄呢，最要紧是开心，分什么 DC 漫威嘛对不对？吃火锅吃火锅来歪个楼他来自宇宙，在襁褓之中被父母送往地球，他的母星随即被摧毁。他力大无穷却心如赤子，人生的早期都生活在远离大城市的的地方。在地球上他被好人收养，形成了温和的性格他女友的父亲是一位颇有声望的武人他在成长的过程中认识了一群实力强大的伙伴，他们常常并肩作战拯救地球在成年之后他遇见了自己的一位亲人并进行了一次较量'
      }, {
        author: '云仔',
        title: '明天是国庆',
        created_at: new Date(),
        read: 100000000,
        content: '各位不要在意英雄的帮派问题嘛，做英雄呢，最要紧是开心，分什么 DC 漫威嘛对不对？吃火锅吃火锅来歪个楼他来自宇宙，在襁褓之中被父母送往地球，他的母星随即被摧毁。他力大无穷却心如赤子，人生的早期都生活在远离大城市的的地方。在地球上他被好人收养，形成了温和的性格他女友的父亲是一位颇有声望的武人他在成长的过程中认识了一群实力强大的伙伴，他们常常并肩作战拯救地球在成年之后他遇见了自己的一位亲人并进行了一次较量'
      }, {
        author: '云仔',
        title: '前天是中秋',
        created_at: new Date(),
        read: 100000000,
        content: '各位不要在意英雄的帮派问题嘛，做英雄呢，最要紧是开心，分什么 DC 漫威嘛对不对？吃火锅吃火锅来歪个楼他来自宇宙，在襁褓之中被父母送往地球，他的母星随即被摧毁。他力大无穷却心如赤子，人生的早期都生活在远离大城市的的地方。在地球上他被好人收养，形成了温和的性格他女友的父亲是一位颇有声望的武人他在成长的过程中认识了一群实力强大的伙伴，他们常常并肩作战拯救地球在成年之后他遇见了自己的一位亲人并进行了一次较量'
      }
    ];
    let result = {
      code: 200,
      success: true,
      data: articles
    }
    res.send(JSON.stringify(result))
})

app.get('/topics', (req, res) => {
  let topics = [
      {
        author: '云仔',
        title: '孙悟空和贝吉塔能打败所有超级英雄吗？',
        created_at: new Date(),
        read: 200000000,
        content: '各位不要在意英雄的帮派问题嘛，做英雄呢，最要紧是开心，分什么 DC 漫威嘛对不对？吃火锅吃火锅来歪个楼他来自宇宙，在襁褓之中被父母送往地球，他的母星随即被摧毁。他力大无穷却心如赤子，人生的早期都生活在远离大城市的的地方。在地球上他被好人收养，形成了温和的性格他女友的父亲是一位颇有声望的武人他在成长的过程中认识了一群实力强大的伙伴，他们常常并肩作战拯救地球在成年之后他遇见了自己的一位亲人并进行了一次较量'
      }, {
        author: '云仔',
        title: '手机摄像头普及后，手机拍照是否改变了人们的拍照行为？未来还可能产生哪些行为变化？',
        created_at: new Date(),
        read: 200000000,
        content: '各位不要在意英雄的帮派问题嘛，做英雄呢，最要紧是开心，分什么 DC 漫威嘛对不对？吃火锅吃火锅来歪个楼他来自宇宙，在襁褓之中被父母送往地球，他的母星随即被摧毁。他力大无穷却心如赤子，人生的早期都生活在远离大城市的的地方。在地球上他被好人收养，形成了温和的性格他女友的父亲是一位颇有声望的武人他在成长的过程中认识了一群实力强大的伙伴，他们常常并肩作战拯救地球在成年之后他遇见了自己的一位亲人并进行了一次较量'
      }
    ]
    let result = {
      code: 200,
      success: true,
      data: topics
    }
    res.send(JSON.stringify(result))
})

app.post('/topics/create', (req, res) => {
  let result = {
    code: 200,
    success: true,
    data: ''
  }
  res.send(JSON.stringify(result))
})

app.get('/videos', (req, res) => {
  let videos = [
      {
        // 演员
        casts: '古天乐',
        pic: 'https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2370795749.jpg',
        title: '反贪风暴2',
        created_at: new Date(),
        collect_count: 99999
      }, {
        author: '邓超',
        pic: 'https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg',
        title: '从你的全世界路过',
        created_at: new Date(),
        collect_count: 1999
      }
    ]
    let result = {
      code: 200,
      success: true,
      data: videos
    }
    res.send(JSON.stringify(result))
})


//应用未Catch异常
process.on('uncaughtException', function(err) {
  if (err) {
    console.error(err);
  }
});

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Application listening at port http://%s:%s', host, port);
})
