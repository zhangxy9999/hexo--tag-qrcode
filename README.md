# hexo-tag-qrcode

## Description
This is a Hexo tag plugin that embed QR Code to your blog posts.

## Usage
1. Clone this repo to your `./blog/node_module/` folder by:
<br/><br/><pre><code>git clone https://github.com/zhangxy9999/hexo-tag-qrcode.git</code></pre>
2. Add following dependency to the `./blog/package.json` file:
<br/><br/><pre><code>"dependencies": {
            ..
            ..
            ..
            "hexo-tag-qrcode": "1.0.0"
        }</code></pre>
3. Rebuild project with `npm install`
4. In your blog post, embed QR Code with following tag:
<br/><br/><pre><code>{% qrcode https://www.example.com %}</code></pre>