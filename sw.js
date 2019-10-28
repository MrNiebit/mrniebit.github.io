/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/20/2019年7月20日/index.html","20ad718017b72cb92025d172e7e69212"],["/2019/07/20/Spring入门学习/index.html","c828c794c214345e365734dec34598c3"],["/2019/07/20/scrapy爬虫项目的创建和设置/index.html","db726aa06e55b92f02b68aab87e08f4e"],["/2019/08/04/Struts2的执行流程分析/index.html","34176dad2cd33f38b8095ce3a07ee156"],["/2019/08/17/Struts2的拦截器栈/index.html","e4a6231ad87776545eb502be8ae8c0da"],["/2019/08/20/ognl表达式和值栈/index.html","41e95b4ad9483c504399c6f3793dbcdf"],["/2019/08/26/scrapy爬52古装网高清壁纸并下载/index.html","6e0b37b4e641b277bc8a62607ac7d77a"],["/2019/09/01/Untitled/index.html","a1ab43eb4625ef1b1edcbf9003494271"],["/2019/09/05/Mybatis一些细节详解-持续更新/index.html","f466a1c8818eb4fad3145e20991fbfb9"],["/2019/09/06/MybatisUtils工具类/index.html","ee2a98274c6bd27b77b5dd5e31a2a4ee"],["/2019/09/06/Mybatis使用注解入门案例/index.html","e12327f3bf7377f49c9d2dc2d14215ae"],["/2019/09/11/Git笔记/index.html","bd9d2f105b9d09197c6df7512596a099"],["/2019/09/11/MyBatis的动态SQL/index.html","479d835e0e66dca3da26360d85695624"],["/2019/09/14/安装Docker/index.html","c42f5b3b779df6d8c778d6d83ac7ec1e"],["/2019/09/15/图解MySQL-内连接、外连接、左连接、右连接、全连接……太多了/index.html","1a69d60fec1a46f42e86c5acfc62309c"],["/2019/09/21/linux服务器和tomcat部署/index.html","54fe6986e9fb4dc1c216dbf1be82fd11"],["/2019/09/21/maven创建spring入门项目/index.html","9967f1767e2f050c1cf6209bf9060945"],["/2019/09/23/mybatis多对一、一对多查询/index.html","bb2beb336cc8877b4e746e8c1d1b70fc"],["/2019/10/08/Maven入门学习/index.html","6422908af3a953c9fd056406aca0bce8"],["/2019/10/09/CentOS安装Dokcer/index.html","5dbd8a02120c7f3233d4a268a0798eb5"],["/2019/10/09/docker学习的入门/index.html","25a55e4672434410f9b0a7e91234c2ab"],["/2019/10/09/linux常用命令/index.html","86ce0a19561532e371b14f3556d1b48d"],["/2019/10/10/mybatis单表的嵌套查询/index.html","d5d038f9d88b66f766377524b6686472"],["/2019/10/11/Deepin安装aria2实现百度云高速下载/index.html","a7a5958ad64b41877bb1843306c38b18"],["/2019/10/14/mybatis注解开发（以及动态sql）/index.html","14c193d3efb35cd7b135e80bdfff1585"],["/2019/10/23/docker安装mysql/index.html","86fee4562bac4b85946863ff97967f95"],["/2019/10/24/Spring的属性注入/index.html","898c6f9b0b5ccc3e3532903d3b39316b"],["/2019/10/25/模拟电梯系统（java）/index.html","0e713746cae1549482a5807c510d390f"],["/2019/10/26/Docker学习之二/index.html","0bdd84b9ba13157f3d7edd7e9b920fa9"],["/2019/10/28/Untitled/index.html","8c1a33ca8fc1e0032fffc06c93bd168d"],["/about/index.html","6ef31886f28dbd0cd0b249c4fadf7931"],["/archives/2019/07/index.html","89403ec9073bf0aeecb37f4613cfc4a3"],["/archives/2019/08/index.html","14f3af768061d08984af512a8ebc7112"],["/archives/2019/09/index.html","d0ee6ea7326e16448500f2dd460277f7"],["/archives/2019/09/page/2/index.html","bca9f39a583b3b6bd1774e4ca2d33dbd"],["/archives/2019/10/index.html","b365154fd31d34724ef7883d7bf678af"],["/archives/2019/10/page/2/index.html","0b535333e3eb25db342ac24f131faa41"],["/archives/2019/index.html","038e3e5165f73ffb5367409d4bd07b5a"],["/archives/2019/page/2/index.html","5f02294955de314823d8b66de8af806d"],["/archives/2019/page/3/index.html","37bca4389bcd3eac0bb92091c700b2fb"],["/archives/index.html","087545671250d46cd9629325199ff2e6"],["/archives/page/2/index.html","36e90eb304979b5f27a62515be29871a"],["/archives/page/3/index.html","9393274f7b3b81f5778eff92c5faaa67"],["/bundle.js","96714fb4e9d56d61eb4c7f923328baac"],["/categories/Spring框架/index.html","13593641397cf975d09154d19319edcd"],["/categories/docker/index.html","91aa8907f9833fe72fd6c18b01f8cc25"],["/categories/git/index.html","db6a7d71d589513facc16ae92a2836d2"],["/categories/index.html","12437ebded6b57bad2c86f28a161ea47"],["/categories/java基础/index.html","9c0e15e3b26650ae3865c9a7eaa10827"],["/categories/linux/index.html","b961f51d794c78dfb1627ad56dc7b466"],["/categories/linux/tomcat/index.html","98ee81b8df1f6529dc1b532f21f2b031"],["/categories/maven/index.html","ee19a779ba9cb2944ea475ceff1f75e8"],["/categories/mybatis/index.html","8bc3087dcc69b2ca04f8c950d79b0f2f"],["/categories/mybatis/框架/index.html","1a7019d3c13db299ef6630f011fb630c"],["/categories/mysql/index.html","225a7f82391d74050d7c86db96e7c2d1"],["/categories/oracle/index.html","bc155fb5e8277639231c5e9852cf50e6"],["/categories/spring/index.html","25cb37405ef1119ca836bd87d0a7fab7"],["/categories/struts2/index.html","731eb7b976bd8ef82561372f7a3b961e"],["/categories/框架/page/2/index.html","4864f40a56dd0d6fcecce4f4e3906dfe"],["/categories/框架、/index.html","27636cc58ced3859dafb7e13f36edfdd"],["/categories/爬虫/index.html","18e0d62fae70bc0f869204c158e6480c"],["/categories/爬虫/框架/index.html","c5efc8d7f04fe1f8c715386f34e66e89"],["/categories/高速下载相关/index.html","28c00529c3e519fa4f7a8cd02f6875ad"],["/css/font/fontawesome-webfont.eot","5f4a40c122903174c4227e6871b88cff"],["/css/font/fontawesome-webfont.svg","13420cbc7af6227733d1a12e5df28fe9"],["/css/font/fontawesome-webfont.ttf","6ea09593203493bfd053a1e838c62404"],["/css/font/fontawesome-webfont.woff","04b9bfc362dcb9bc999c7d1bcb44a942"],["/css/images/body.jpg","9f1f83fac960cd3d4c988b7fb1737c0f"],["/css/main.css","bf25247297ba2b121b08aeab2fcb19db"],["/css/style.css","bbda78389e31dd63067c1d181d28b229"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3a1204053aed60b928cfa88c8e8570ce"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","7e2b2ada1eb320569e2eac6cf35e96fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/desert.jpg","5ab36a5949f7af8cb5a96612ec67123e"],["/images/desert2.jpg","653d6c7487ac03c63e6ea534c5c322b6"],["/images/desert3.jpg","03a3e9ce89b618d5cfeaace71e1ab091"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/touxiang.jpg","6e8b59223340c1b9f95f5e075656f1b7"],["/images/weixin.png","f570057b876bed78c23abb8c8e13331b"],["/index.html","6935eb95436c3b996957813b9c9f68c3"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","b3aee3d105c4591f59d179fff0819e3c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d7fd6875bee08da285259e853da0fe2e"],["/js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["/js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["/js/next-boot.js","45dd0578b4a642d54ef2adbee872a5cc"],["/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["/js/src/Valine.min.js","9bae343848475b7df404b52b94ef9d77"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","45e7c05af8316a66971362d7b5d0fdf3"],["/js/src/algolia-search.js","2caf90b1fdff6f5e63b38f1f8725ab71"],["/js/src/bootstrap.js","f314aae9107c1be1351de39bd542bd28"],["/js/src/clipboard-use.js","507c837e0c561605894f3605485a5dcb"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","35354be54d58b1c9aed7b1943ffc5f03"],["/js/src/exturl.js","69665b0a76935e571ee505f105f1cf4e"],["/js/src/hook-duoshuo.js","58965a8fb4e35ffdf0076d302d975976"],["/js/src/instantclick.js","2a1174e70cf3827e07ed51f36c892936"],["/js/src/js.cookie.js","0b47494dbdaee03488f49451fd008dc6"],["/js/src/motion.js","1e2a39c6ff93a6f01f61a8d4535329e8"],["/js/src/post-details.js","3ab76382a2ac4c8882eb73bde09e66b6"],["/js/src/schemes/pisces.js","23a3a0650e7657481602af9af075af39"],["/js/src/scroll-cookie.js","a4c82a224d818b1769f0ea8ad1a51378"],["/js/src/scrollspy.js","29fb247d1552c84b5588464c494f1c6a"],["/js/src/utils.js","1ea7d47ce9a9bfc73a818ebeba74ed66"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/js/utils.js","9fd0ebe09ccb47b8fb5ec51392026c80"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","0ad8f64d2da78e0e18e774a0913dedad"],["/lib/Han/dist/han.js","2fe444fca26a14f78fa3115a751da19f"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2787e4ebc77754b4c715cd3731597955"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a19b55a17c0ec5363f9658faf41a4206"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6bcbd0cc5235d7f5a1d5c1e67216227c"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a33c7f8a150d8b854d2282cdd4c1ad82"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2eee05b730671b457e359242d4e6f73a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d6231e6e6e3b14792836479170b25457"],["/lib/fancybox/source/jquery.fancybox.css","f6da22fcdb011575217485fbdedf1ea3"],["/lib/fancybox/source/jquery.fancybox.js","62de716bb93cc9cd382541c711bcfcfc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c0f79a1123d9be62fc734eaf188eaff8"],["/lib/fastclick/lib/fastclick.js","41221917bb3682136ae84eebace28ee9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4b4346cdf4dbf91b0c48b3c43b91f26f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","3ea1a01322642b382ec04ac6270c82ae"],["/lib/jquery_lazyload/README.html","620bd8bf2f0057559ca6ea1c37a578a2"],["/lib/jquery_lazyload/jquery.lazyload.js","206a2a1ff06d2a2c6bddbddd0901da99"],["/lib/jquery_lazyload/jquery.scrollstop.js","951ad40178d84ac704614a286fa7be88"],["/lib/needsharebutton/font-embedded.css","131b7baa5e1f592d22b2edc0ec21558d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","cba59d3d952db776342553d46adc46e6"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a741d864bb67ec92f7d4d50098208897"],["/lib/velocity/velocity.js","79634953df2c420b7c2403990c37407c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bdd7c4f93fa9140678b60c60d19b33c5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b4e01be133b1e7d546c6bcb1baf1da44"],["/page/3/index.html","f8ccf7735eabbd7ac626c6e83aeb5809"],["/static/api/css/imgshare.css","e3e46ee85cc41fa60f67a9b30116a6b1"],["/static/api/css/like.css","1e3e6f55021859b5869d1d6b7b5c850b"],["/static/api/css/select_share.css","e669334e63e73539b99aff387e8390e6"],["/static/api/css/share_popup.css","25fd75fcb919a78c16db72b0206bdf78"],["/static/api/css/share_style0_16.css","c2060043cf9c93e308ca62bbf990334d"],["/static/api/css/share_style0_24.css","b910ef3082c9593493eded38a12f9de9"],["/static/api/css/share_style0_32.css","c6c97ab38ad2d8dff1cb675d66cf8059"],["/static/api/css/share_style1_16.css","a8d1acfc5106e211d25b409438eda1c0"],["/static/api/css/share_style1_24.css","808c85e70ab07d7efb9ee12b52cdb359"],["/static/api/css/share_style1_32.css","5cc0002dc140de39d15a18d43e226c26"],["/static/api/css/share_style2.css","2d2333345b6ef485be2e849d15a995b2"],["/static/api/css/share_style2_16.css","fb2daf13b6ba9fafe7626b044ef2101c"],["/static/api/css/share_style2_24.css","f418fbea81b77947607f067577ab3e77"],["/static/api/css/share_style2_32.css","2ecef282e480bb41d9d1529154a8b8f9"],["/static/api/css/share_style4.css","125161925d8ee339520a96c827bff9b7"],["/static/api/css/slide_share.css","9181ac62d56860ac6061fe46903faadb"],["/static/api/css/weixin_popup.css","6acf25d73d9110a20e00dd110bd6f1d5"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","f7b3c31d7556b6e28f311c55f177bce4"],["/static/api/js/base/tangram.js","aa6dcdab497bb72b0376c83e849d27d7"],["/static/api/js/component/animate.js","09ded5098d3f359db153b171d1e88e36"],["/static/api/js/component/anticheat.js","5af5cdf763a7fa2cd99a7d553c0be258"],["/static/api/js/component/comm_tools.js","10fe7f5d8654cc53c513038445ad4fd4"],["/static/api/js/component/partners.js","40e18ea0980970c047ed716a75f96774"],["/static/api/js/component/pop_base.js","05b19ef6cf387928cabb3dc9f9b69cef"],["/static/api/js/component/pop_dialog.js","8bc11ca3c00fada7591ae6a3a61c78dc"],["/static/api/js/component/pop_popup.js","e578e3458e005b754b309c3889c2bce1"],["/static/api/js/component/pop_popup_slide.js","5f3157f11d663693811156fb511c3acf"],["/static/api/js/component/qrcode.js","5535819a8b8063c3b49982da6b982566"],["/static/api/js/conf/const.js","2b7f1ac74709ad58293896b0bd9243dd"],["/static/api/js/conf/define.js","863aef2b889064bddefee6a147d9105c"],["/static/api/js/share.js","f130e8778095fb4a0edfed2fd088f6ad"],["/static/api/js/share/api_base.js","8f4fe4b09486f15f05504afab98e4d5e"],["/static/api/js/share/combine_api.js","69c29243eb14a6cf92315d798bb11c20"],["/static/api/js/share/image_api.js","263c8a295acc3420f7e01c208ee7e93c"],["/static/api/js/share/like_api.js","a5f8bd23688fe35d66021fb44186d2cd"],["/static/api/js/share/likeshare.js","9408773e85db105ff3c38ca5666ba351"],["/static/api/js/share/select_api.js","3600acffd1a26f0d48b9c7c093b7e7f7"],["/static/api/js/share/share_api.js","5691d3a5c18836522c283b0ba6767d28"],["/static/api/js/share/slide_api.js","bc708c23bf03a0d972414bdf9a4d2a31"],["/static/api/js/start/router.js","3a3ceb36e2bdec484c066b403293a6e8"],["/static/api/js/trans/data.js","f551de21110603c669671b2d7cceb749"],["/static/api/js/trans/logger.js","f551de21110603c669671b2d7cceb749"],["/static/api/js/trans/trans.js","03b6dd265644020de25c004a8679fe47"],["/static/api/js/trans/trans_bdxc.js","bd5bbd9eeb0a5ae6090d7598bfbd0ebf"],["/static/api/js/trans/trans_bdysc.js","af975980c166f04ba5a11ec4e7622dd8"],["/static/api/js/trans/trans_weixin.js","d355817fd33b6df23ad73bb47f8a1073"],["/static/api/js/view/image_view.js","fd5beed8ac9ad3c31b644adda045ce18"],["/static/api/js/view/like_view.js","d6531f7a021b115471e2cf4473fcf147"],["/static/api/js/view/select_view.js","9d5bd3e9f64c617fe619f01d9b429624"],["/static/api/js/view/share_view.js","68ecabbd7f5b170c2609f2781bbb44e1"],["/static/api/js/view/slide_view.js","5724bb3038ddaf7b4d3015fdd20f648c"],["/static/api/js/view/view_base.js","cf101f93a21f383294fb4f1cf57b1541"],["/style.css","5bd07930e4233730565e623dd1367d00"],["/sw-register.js","6ab8147398de3924c3baa78acff980d8"],["/tags/docker/index.html","7ccbbf04b8316619a372177947ad1379"],["/tags/git/index.html","2690412f7f8139679ed5cdb1c0945eb0"],["/tags/index.html","bca08e20010b2242bf9f0b4708f9fb99"],["/tags/java/index.html","8865e35bddc4e88b8c30e03293a885fc"],["/tags/linux/index.html","33253a79a8f6a0a933d9c80ab4fb47c9"],["/tags/maven/index.html","a389b4f6a41aa97730995764df72177f"],["/tags/mybatis/index.html","c11e4e5ae6cf378c8f3a4b61cb15bc09"],["/tags/mysql/index.html","7d598f6776f1ce14ea340315359aabce"],["/tags/oracle/index.html","aac088fcd7e1b8e5502d094a65abe316"],["/tags/scrapy/index.html","128b556142f968244dd17f8316db9e62"],["/tags/spring/index.html","031245c82a6dc8e53385103d9b1de75c"],["/tags/struts2/index.html","976664381209b7d714c2d5499ff9d364"],["/tags/tomcat/index.html","63ce37b81f1449a9212c09af23fb2bd6"],["/tags/爬虫/index.html","a61c6342204ff79eddcfcd51fc42de53"],["/tags/百度云/index.html","92ae8aae455d14b38c700a9e121ee43d"],["/tags/高速下载/index.html","4779a8ead3342fbe6ddc7ade2f6ac28a"],["/测试/index.html","95c33f134d0f1affe92bc8355470c26b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
