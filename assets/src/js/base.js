var slideshowCallback = function () {
    $(function () {
        emojify.setConfig({
            img_dir: '//cdnjs.cloudflare.com/ajax/libs/emojify.js/1.1.0/images/basic/',
            ignore_emoticons: true
        });
        emojify.run();

        $('[class*="font-"]').each(function () {
            var ratio = $(this).attr('class').replace(/^.*font-(\d+).*$/, '$1');
            $(this).css('font-size', ratio + '%');
        });

        $('[class*="width-"]').each(function () {
            var width = $(this).attr('class').replace(/^.*width-(\d+).*$/, '$1');
            $(this).find('> *').css('width', width + '%');
        });
    });
};
