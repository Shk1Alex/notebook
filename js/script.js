$('#item-input').on('input', function () {
    // только латинские
    $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
});


$('ol').on('click', 'li', function () {
    $(this).toggleClass('done');
})

$('ol').on('click', 'span', function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
})

function hideinfo1() {
    if ($('#info-1').is(':visible')) {
        $('#info-1').fadeOut('slow'); // Плавное скрытие info-1 при вызове
    }
}

function hideinfo2() {
    if ($('#info-2').is(':visible')) {
        $('#info-2').fadeOut('slow'); // Плавное скрытие info-2 при вызове
    }
}

$('input').keypress(function(event) {
    if (event.which === 13) {
        var itemText = $(this).val().trim(); // пробелы
        if (itemText !== '' && $('ol li').length < 23) { // пустые строки и макс число li
            $(this).val('');
            $('ol').append('<li>' + itemText + 
                '<span><i class="fa-regular fa-circle-xmark" style="color: #7d5b21;"></i></span></li>'); // иконка удаления
         hideinfo1(); // Скрытие info-1
        } else if ($('ol li').length >= 23) {
            alert('Достигнут предел количества элементов (23).');
        }
    }
});

$('#add-button').on('click', function() {
    var itemText = $('#item-input').val().trim(); 
    if (itemText !== '' && $('ol li').length < 23) { 
        $('#item-input').val('');
        $('ol').append('<li>' + itemText + 
            '<span><i class="fa-regular fa-circle-xmark" style="color: #7d5b21;"></i></span></li>'); // иконка удаления
     hideinfo1(); // Скрытие info-1
    } else if ($('ol li').length >= 23) {
        alert('Достигнут предел количества элементов (23).');
    }
});


$('h2 span').click(function () {
    $('input').fadeToggle();
})


