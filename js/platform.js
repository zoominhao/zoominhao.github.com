// 获取终端的相关信息  
var Terminal = {  
    // 辨别移动终端类型  
    platform : function(){  
        var u = navigator.userAgent, app = navigator.appVersion;  
          
        return {  
            //IE内核  
            windows: u.indexOf('Windows') > -1,   
            //opera内核   
            presto: u.indexOf('Presto') > -1,   
            //苹果、谷歌内核  
            webKit: u.indexOf('AppleWebKit') > -1,   
            //火狐内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,   
            //是否为移动终端  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),   
            //ios终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),   
            //android终端或者uc浏览器  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,   
            //是否iPad  
            iPad: u.indexOf('iPad') > -1,   
            //是否为iPhone或者QQHD浏览器  
            iPhone: u.indexOf('iPhone') > -1,  
            //是否为mac系统  
            Mac: u.indexOf('Macintosh') > -1,   
            //是否web应该程序，没有头部与底部  
            webApp: u.indexOf('Safari') == -1   
        };  
    }(),  
    // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...  
    language : (navigator.browserLanguage || navigator.language).toLowerCase()  
}  
