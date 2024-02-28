
    function showGreeting() {
    var name = document.getElementById('name').value;
    var checkboxes = document.querySelectorAll('input[name="favorite_movie"]:checked');
    var count = checkboxes.length;
    var message = name + '님, 저와 ' + count + '개의 취향이 같으시네요!';
    alert(message);
}
