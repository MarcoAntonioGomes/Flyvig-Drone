$('.carousel').carousel({
    interval: 5000
});


$('#myModalLogin').on('shown.bs.modal', function () {
    $('#email-login-input').focus()
});

$('[data-toggle="tolltip"]').tooltip({
    title: 'Teste de title via javascripi jquery com Bottstrap...'
});

function fn_excluir() {
    $('.form_excluir').submit(function () {
        return confirm("Click OK para continuar");
    })

}

function load_modal(nome,email) {
    $('#text_nome').val(nome);
    $('#text_email').val(email);

}