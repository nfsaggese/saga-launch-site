//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88742289-1', 'auto');
ga('send', 'pageview');

// Hotjar Tracking Code for www.saga.guide -->
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:420572,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

//-- AgileCRM Analytics -->
var Agile_API = Agile_API || {}; Agile_API.on_after_load = function(){
_agile.set_account('qg5v4sh4hjde4q2ijquoiee14d', 'saga');
_agile.track_page_view();
_agile_execute_web_rules();};

//crisp chatbox
$crisp=[];CRISP_WEBSITE_ID="2d9bf025-32a1-4428-b292-c4daeb4da373";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.im/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();