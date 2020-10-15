// Set the date we're counting down to
var nowDate = new Date();
var countDownDate = new Date();
countDownDate.setDate(nowDate.getDate() + (5 - 1 - nowDate.getDay() + 7) % 7 + 1);
countDownDate.setHours(17, 0, 0, 0);
const hour = new Date().getHours();
console.log(hour);

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text

    if (distance < 0) {
        clearInterval(x);
        if (hours <= 18 && hours >= 17) {
            document.getElementById("date").style.display = "block";
        } else {
            document.getElementById("post-date").style.display = "block";
        }
    } else {
        document.getElementById("pre-date").style.display = "block";
    }
}, 1000);