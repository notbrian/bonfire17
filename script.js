function allTheWayUp() {
    var allTheWayUp = new Audio("ALLTHEWAYUP.mp3");
    allTheWayUp.play();
    document.getElementById("allthewayuptag").setAttribute("onclick", "null");
    setTimeout(function() {
            document.getElementById("allthewayuptag").setAttribute("onclick", "allTheWayUp()");

    }, 1500);

}