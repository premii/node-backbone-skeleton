window.templates || (window.templates = {});
window.templates.index = function(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n"http://www.w3.org/TR/html4/loose.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <title>Office Map</title>\n    <link href=\'css/application.css\' rel=\'stylesheet\' type=\'text/css\'/>    \n  </head>\n  <body>\n    Hello ', name ,'\n  </body>\n  <script type="text/javascript" src="js/assets.js"></script>\n</html>');}return __p.join('');
};