function showPassword(){
    const fieldPassword = document.getElementById('field-password');
    const eye = document.getElementById('eye');
    const neye = document.getElementById('neye');

    if(eye.style.display === "none"){

        eye.style.display = "block";
        neye.style.display = "none";
        fieldPassword.type = "text";

    } else{
        eye.style.display = "none";
        neye.style.display = "block";
        fieldPassword.type = "password";
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('LOGADO');
})