$(document).ready(function () {
    $("img").click(function () {
        // console.log("data-alt-src value is", $(this).val("data-alt-src"));

        var current = $(this).attr("src");
        var swap = $(this).attr("data-alt-src");
        $(this).attr("src", swap).attr("data-alt-src", current);
    });
});
