//展示loading
function g_showLoading(){
    var idx = layer.msg('处理中...', {icon: 16,shade: [0.5, '#f5f5f5'],scrollbar: false,offset: '0px', time:100000}) ;
    return idx;
}
//salt
var g_passsword_salt="1a2b3c4d"
// 获取url参数
function g_getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
};
//设定时间格式化函数，使用new Date().format("yyyy-MM-dd HH:mm:ss");
Date.prototype.format = function (format) {
    var args = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
        var n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
};

//设置全局ajax处理逻辑
// $.ajaxSetup({
//     //设置ajax请求结束后的执行动作
//     complete: function (xhr) {
//         // 通过XMLHttpRequest取得响应头，sessionstatus
//         if("REDIRECT" === xhr.getResponseHeader("REDIRECT")){ //若HEADER中含有REDIRECT说明后端想重定向，
//             var win = window;
//             alert('ok')
//             while(win != win.top){
//                 win = win.top;
//             }
//             console.log(xhr.getResponseHeader("CONTENTPATH"));
//             win.location.href = xhr.getResponseHeader("CONTENTPATH");//将后端重定向的地址取出来,使用win.location.href去实现重定向的要求
//         }
//     }
// });
