/**
 * Created by UI on 2016/7/23.
 */
$(document).ready(function () {
    $('#fullPage').fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5',],
        slidesNavigation: true,
        navigation: true,
        navigationTooltips: ['首页', '关于我', '专业技能', '工作经历', '作品展示',  '联系我吧'],
        //滚动到某一屏后产生的动画效果
        afterLoad: function (link, index) {
            switch (index) {
                case 1:
                    move('.section1 img').rotate(360).end();
                    move('.section1 p').set('margin-top', '5%').end();

                    break;
                case 2:
                    move('#sec2-tit').scale(0.7).end();
                    move('#aboutme').set('margin-top', '50px').end();

                    break;
                case 3:
                    move('#sec3-tit').scale(0.7).end();
                    move('#ui').set('margin-left', '0').end();
                    move('#web').set('margin-left', '0').end();
                    break;
                case 4:
                    move('#sec4-tit').scale(0.7).end();
                    break;
                case 5:
                    move('#sec5-tit').scale(0.7).end(function(){
                        move('#i1').rotate(360).end(function(){
                            move('#i2').rotate(360).end(function(){
                                move('#i3').rotate(360).end(function(){
                                    move('#i4').rotate(360).end();
                                });
                            });
                        });
                    });
                    break;
                case 6:
                    move('#sec6-tit').scale(0.7).end();
                    break;
                default :
                    break;
            }
        },
        //离开某一屏后恢复到初始效果
        onLeave: function (link, index) {
            switch (index) {
                case 1:
                    move('.section1 img').rotate(-360).end();
                    move('.section1 p').set('margin-top', '800px').end();
                    break;
                case 2:
                    move('#sec2-tit').scale(1).end();
                    move('#aboutme').set('margin-top', '550px').end();
                    break;
                case 3:
                    move('#sec3-tit').scale(1).end();
                    move('#ui').set('margin-left', '-9999px').end();
                    move('#web').set('margin-left', '9999px').end();
                    break;
                case 4:
                    move('#sec4-tit').scale(1).end();
                    break;
                case 5:
                    move('#sec5-tit').scale(1).end();
                    move('#i1').rotate(-360).end();
                    move('#i2').rotate(-360).end();
                    move('#i3').rotate(-360).end();
                    move('#i4').rotate(-360).end();
                    break;
                case 6:
                    move('#sec6-tit').scale(1).end();
                    break;
                default :
                    break;
            }
        },
    })


})
