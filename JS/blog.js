function blogposting () {

    var name = document.getElementById("name").value;
    var picture = document.getElementById("picture").value;
    var post = document.getElementById("post").value;

    
    document.getElementById("puthere").innerHTML ="<div class='parallax'style='background-image: url("+picture+")'><div class='imags'></div></div><div class='text'>"+"<h2>posted by: "+name+"</h2>"+post+"</div>";
    
}
document.getElementById("send").onclick=blogposting;
