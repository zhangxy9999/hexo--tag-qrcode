var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'qrcode-template.html');


function makeQRcode (args)
{
    var template = fs.readFileSync(filePath).toString(),
        link;

    return _.template(template)({
        link: args[0]
    });
}

hexo.extend.tag.register('qrcode', makeQRcode, {
    async: true
});