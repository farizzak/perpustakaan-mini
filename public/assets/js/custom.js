/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */

//number format ribuan
function jsribuan(number){

    return number.toLocaleString('id-ID')
}

// MASK RIBUAN DENGAN TITIK
$(document).on("input", ".mask_ribuan", function () {
    $('.mask_ribuan').mask("#.##0", {
        reverse: true,
        removeMaskOnSubmit: true,
        translation: {
            '#': {
            pattern: /-|[0-9*]/,
            recursive: true
            }
        }
    });//set separator number
});

$('form').submit(function() {
    $(".mask_ribuan").unmask();
});