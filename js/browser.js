    (function() {
    	var matched = navigator.userAgent.match(/msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i);
    	if (matched && Number(matched[2]) < 9) {
    		document.getElementById('browserTipsIcon').style.backgroundImage = 'url(//cdn.tgp.qq.com/forum/static/404.gif)';
    		document.getElementById('browserTips').style.display = '';
    		document.body.className = 'brow-tips';
    		document.getElementById('app').style.display = 'none';
    	}
    })();
    BJ_REPORT.init({
    	id: 9,
    	combo: 0,
    	delay: 0,
    	url: '//betterjs.tgp.qq.com/badjs',
    	random: 1
    });