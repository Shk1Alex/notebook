$('#item-input').on('input', function () {
    // латинские и кириллические символы
    $(this).val($(this).val().replace(/[^a-zA-Zа-яА-Я\s]/g, ''));
});

function saveList() {
    var items = [];
    $('ol li').each(function() {
        items.push($(this).text().trim());
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function loadList() {
    var items = JSON.parse(localStorage.getItem('shoppingList'));
    if (items) {
        items.forEach(function(item) {
            $('ol').append('<li>' + item + 
                '<span><i class="fa-regular fa-circle-xmark" style="color: #7d5b21;"></i></span></li>');
        });
    }
}

$('ol').on('click', 'li', function () {
    $(this).toggleClass('done');
    saveList();
})

$('ol').on('click', 'span', function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
        saveList();
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
            saveList();
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
        saveList();
    } else if ($('ol li').length >= 23) {
        alert('Достигнут предел количества элементов (23).');
    }
});

$('h2 span').click(function () {
    $('input').fadeToggle();
})

$(document).ready(function() {
    loadList();
});


