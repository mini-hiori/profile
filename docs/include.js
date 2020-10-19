// https://qiita.com/hiroyukiwk/items/f2a74ba1406de9fad6f6

function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}