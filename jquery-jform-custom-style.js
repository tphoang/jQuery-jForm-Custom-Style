
jQuery.fn.textboxWaterMask = function (text) {
    $(this).bind({
        focus: function () {
            if ($(this).val() == text) {
                $(this).val("");
            }
        },
        blur: function () {
            if ($(this).val() == "") {
                $(this).val(text);
            }
        }
    });
};

jQuery.fn.textboxEnter = function (buttonId) {
    $(this).bind('keydown', function (event) {
        if (event.which == 13) {
            $("#" + buttonId).click();
        }
    });
};

jQuery.fn.myCheckbox = function () {
    return this.each(function () {
        var $current = $(this);
        $current.css('display', 'none');
        $a = $('<a href="javascript:void(0);"></a>');
        $current.after($a);
        $current.click(function () {
            var $a1 = $(this).parent().find('a:eq(0)');
            $a1.removeClass('checked');
            if ($(this).is(':checked')) {
                $a1.addClass('checked');
            }
        });

        $a.click(function () {
            $checkbox = $(this).parent().find('input[type="checkbox"]:eq(0)');
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
                $checkbox.prop('checked', false);
            }
            else {
                $(this).addClass('checked');
                $checkbox.prop('checked', true);
            }
        });
    });
};

jQuery.fn.fakePassword = function (text, cssClass) {
    return this.each(function () {
        var id = $(this).attr('id');
        var fakeId = 'fake_' + id;
        $fakeCtrl = $('<input type="text" id="' + fakeId + '" class="' + cssClass + '" value="' + text + '" />');

        $(this).css('display', 'none').val('');

        $(this).after($fakeCtrl);

        $(this).blur(function () {
            if ($(this).val() == '') {
                $(this).hide();
                $("#" + fakeId).show();
            }
        });

        $("#" + fakeId).focus(function () {
            $(this).hide();
            $("#" + id).show().focus();
        });
    });
};
