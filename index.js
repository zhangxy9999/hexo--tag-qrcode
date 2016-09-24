var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'qrcode-template.html');


function makeQRcode (args, content)
{
    var template = fs.readFileSync(filePath).toString();

    return _.template(template)({

    });
}

hexo.extend.tag.register('qrcode', makeQRcode);