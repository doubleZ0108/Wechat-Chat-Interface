# Wechat-Chat-Interface
基于原生CSS的微信聊天界面 | WeChat chat interface based on native CSS

[toc]

------

## 效果截图

<img src="https://upload-images.jianshu.io/upload_images/12014150-8d4d8aac3a41056c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="demo image" width="75%;" />

<img src="https://upload-images.jianshu.io/upload_images/12014150-30b21127889b5377.gif?imageMogr2/auto-orient/strip" alt="demo.gif" width="30%;" />

<br/>

## 如何使用

1. 替换img文件夹下两个头像图片

2. 编写一个json格式的聊天文件

   ```json
   {
       "leftPrefix": "[left-person]",		//可自行指定发送方前缀标识符(后期以此作为分隔)
       "rightPrefix": "[right-person]",
       "recordGroup": [
           {
               "time": "2020年8月11日",
               "records": [
                   "[left-person]hello",	//前缀之后即为显示在屏幕上的聊天信息
                   "[right-person]world",
               ]
           }
         //... add more records
       ]
   }
   ```

3. 如果需要修改手机尺寸，理论上只需要修改最上层div.WechatRecordGroup的尺寸，其他大小可以进行大致的自适应*(但很不推荐，并没有非常关注自适应)*

<br/>

## 开发环境

- **操作系统**: macOS Catalina 10.15.5
- **开发语言**: HTML + CSS + JavaScript

<br/>

## 关于作者

|     姓名👤     |                   张喆 \| doubleZ                   |
| :-----------: | :-------------------------------------------------: |
|   **学校🏫**   |                      同济大学                       |
| **联系方式✉️** | [dbzdbz@tongji.edu.cn](mailto:dbzdbz@tongji.edu.cn) |

