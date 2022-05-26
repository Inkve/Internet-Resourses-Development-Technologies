$('document').ready(function(){
    get_info();
    $("#header").click(function(){
        window.location.replace('../index.html');
    });
});

function get_info(){
    $.ajax(
        {
            url: "../php/logout.php",
            dataType: "JSON",
            type: "POST",
            success: function(response){
                console.log('response: ', response);
                if (!response){
                    window.location.replace('login.html');
                } else {
                    setTimeout(() => {
                        window.location.replace('../index.html');
                    }, 3500);
                };
            },
            error: function(){
                window.location.replace('login.html');
            }
        }
    );
};