$("body").on("click", ".tips_name", function ()
    {
        var thisis = $(this);
        var name = $(this).text();
        var id = $(this).parents('tr').attr('data-id');
        var orig_id = $(this).parents('tr').attr('data-origid');

        $.ajax({
            url: ajaxPath + "/ajax.php",
            type: "POST",
            data: { id: id, name: name, code: "set_name" }
        }).done(function (msg)
        {

            if (msg == true)
            {
                $(thisis).parents('td').find('span[data-prop=NAME]').text(name + ' арт. ' + orig_id)
            }
        });
    });
