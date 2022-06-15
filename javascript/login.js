function logar () {

    let usernameA = {
        'Duzoka':
        321,
        'Admin':
        123,
        'Eduardo':
        432,
        'Dudu':
        111,
    }

    var username = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    console.log(username.value+senha.value);

    if (username.value = usernameA && senha.value == usernameA) {
        localStorage.setItem("acesso", true);

        window.location.href = ("mainpag.html");
    }else{
        alert('usuario ou senha incorreto!')
    }
}
