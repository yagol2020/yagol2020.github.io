# Selenium 第一章
开个新坑，讲一讲Selenium在Java中的应用

## 简介
[Selenium](https://www.selenium.dev/)
是一个用于Web应用的测试工具，其直接运行在浏览器中，就像真的用户在操作一样，浏览器支持较广，
API接口支持很多语言，如`Java`、`.Net`等

## 爬虫？
爬虫指利用程序自动提取网页上的信息，具有自动化高、效率高的有点，能够在较短时间内获得大量信息

然而，大部分网站均有反爬虫措施，因为如果网站被短时间内大量访问，将会使真实用户的访问收到影响

由此，使用Selenium模仿真实用户获得网页信息，也就促成了利用自动化Web测试工具实现爬虫的目的了

## Java Pom
你可以用多种方式导入Selenium依赖包，但我推荐使用Maven管理，这样打包的时候方便一点
`Maven`仓库的依赖如下：
```xml
<!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.1.1</version>
</dependency>
```
此外，你还可以添加其他依赖，如`devTools`等
```xml
<!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-devtools -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-devtools</artifactId>
    <version>4.0.0-rc-1</version>
</dependency>
```

## Selenium与Chrome
我用的是Chrome浏览器，你可以选择其他的浏览器，比如`FireFox`等，
浏览器的选择不同，需要准备的浏览器驱动也就不同。对于Chrome，你需要在
[官方驱动中](http://chromedriver.storage.googleapis.com/index.html)
选择与你Chrome版本相符的驱动，比如`chromedriver_win32.zip`等
