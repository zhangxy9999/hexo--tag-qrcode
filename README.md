# hexo-tag-qrcode

## Description
This is a Hexo tag plugin that embed QR Code to your blog posts.

## Usage
1. Clone this repo to your `./blog/node_module/` folder by:
```
git clone https://github.com/zhangxy9999/hexo-tag-qrcode.git
```
2. Add following dependency to the `./blog/package.json` file:
```
"dependencies": {
    ..
    ..
    ..
    "hexo-tag-qrcode": "1.0.0"
}
```
3. Rebuild project with `npm install`
4. In your blog post, embed QR Code with following tag:
```
{% qrcode https://www.example.com %}
```