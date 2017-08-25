## webpack
webapck  默认会编译webpack.config.js
webpack --config webpack.config.xxx.js  编译指定打包文件

## npm script 
```package
"scripts": {
    "build": "webpack"
  },
```
添加这个对象的作用：npm run build 等价于执行 webpack 这个命令

## git 
解决git pull 冲突
git reset --hard FETCH_HEAD  FETCH_HEAD表示上一次成功git pull之后形成的commit点。
git stash  拉取有冲突的文件之前先暂存你本地更改的代码
git stash pop 合并本地和拉去的代码有冲突的部分

