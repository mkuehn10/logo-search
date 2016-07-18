$(function() {
    var type;
    var level;

    function createColorImgSrc(src) {
        return 'images/' + src.slice(7, src.length - 4) + ' - color.png';
    }

    function removeColorImgSrc(src) {
        if (src.includes('color')) {
            return 'images/' + src.slice(7, 10) + '.png';
        } else {
            return src;
        }
    }

    function getSelectValue(name) {
        return $('select[name=' + name + ']').val();

    }

    function getImagesInMatrix() {
        return $('.picture-matrix div img');
    }

    function tagContainsClass(cls, tags) {
        return ($.inArray(cls, tags) != -1);
    }

    $('#search-form').submit(function(e) {
        e.preventDefault();
        type = getSelectValue('type');
        level = getSelectValue('level');
        var query = getImagesInMatrix();
        $.each(query, function(n, item) {
            $(item).attr('src', removeColorImgSrc($(item).attr('src')));
            var currentTagClasses = $(item).attr('class').split(' ');
            var containsType = tagContainsClass(type, currentTagClasses);
            var containsLevel = tagContainsClass(level, currentTagClasses);
            if (containsType || containsLevel) {
                $(item).attr('src', createColorImgSrc($(item).attr('src')));
            }
        })
    })
});