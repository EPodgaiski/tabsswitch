//******************************
// tabsSwitch, 2014, jQuery script
// Creater: Egor Podgaiski, http://gorik.name/
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
// I Am ...
//******************************
function tabsSwitch(){
     var tbsAnimStopped = true;

    $('.js_tabs .js_tab_btn').on('click', function(){
        var tabBtn = $(this),
            tabsArea = null,
            tabsContent = null,
            trgtTab = null,
            curTab = null,
            tbsDuration = 400;

        if( (!tbsAnimStopped) || (tabBtn.hasClass('current')) ) return;

        tabsArea = tabBtn.closest('.js_tabs'),
        tabsContent = tabsArea.find('.js_tabs_content'),
        trgtTab = tabsContent.find('#' + tabBtn.attr('data-target-id')),
        curTab = trgtTab.siblings('.current');

        if(trgtTab.length == 0){
            console.log('Target tab content " #'+ tabBtn.attr("data-target-id") + ' " not exist');
            return;
        }

        tbsAnimStopped = false;

        tabBtn.siblings().removeClass('current');
        trgtTab.siblings().removeClass('current');
        tabsContent.css({height:tabsContent.outerHeight(), 'overflow':'hidden', 'position':'relative'});

        tabsArea.trigger('switch');

        tabBtn.addClass('current');
        trgtTab.css({'position':'absolute', top:0, left:0, width:'100%',})

        curTab.fadeOut(tbsDuration/2, function(){
            trgtTab.fadeIn(tbsDuration/2, function(){
                tabsContent.animate({height:trgtTab.outerHeight()}, 150, function(){
                    tabsContent.css({'overflow':''});
                    trgtTab.css({'position':'', top:'', left:'', width:'',}).addClass('current');
                    tabsContent.css({height:''});
                    tbsAnimStopped = true;
                    tabsArea.trigger('switched');
                });
            });
        });
    });
}