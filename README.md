# MindmapFrontendAnt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## 运行步骤

```
# 克隆代码
git clone https://github.com/mind-edu/MindmapFrontendAnt.git
# 进入文件夹
cd MindmapFrontendAnt
# 下载依赖
npm install
# 运行项目
ng serve
```
在浏览器上打开  `http://localhost:4200/`

## 本地测试环境运行（推荐）

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 部署方式（nginx或者apache服务器）
```
ng build --prod --base-href /Mindmap-Frontend-Ant/
```
将`dist`目录下的文件复制到`webapps`目录下即可通过`server_ip:8080/Mindmap-Frontend-Ant`访问

## 通过Docker运行

在服务器上运行，只要服务器上安装有 Docker 环境，不需要安装有 Nodejs 和 NPM，省时省力。

```
# 生成镜像
docker build -t myapp . 
# 运行容器
docker run -d -p 8080:80 myapp
```

通过 ```ip地址:8080``` 访问，端口也可以自己修改



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



