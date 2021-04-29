y = document.getElementsByClassName('error_msgs')[0];
x = document.getElementById('close_err_msg')
x.addEventListener('click', function() {
    y.remove();
});

