$(document).foundation()

$document.ready(
    function () {
        $("h1").click(function () {
            //This is the activity that will happen when the h1 is clicked

            $("p").fadeToggle();

        });
    }

);
$document.ready(
    function () {
        $("h1").click(function () {
            //This is the activity that will happen when the h1 is clicked

            alert("you clicked the h1")

        });
    }

);