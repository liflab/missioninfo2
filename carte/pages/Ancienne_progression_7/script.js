// To check if the slideshow is finished
popupInfo("Pour ce niveau, aide Robotino à se rendre à l'arrivée tout \n en simplifiant ton programme grâce à la boucle. N'oublie pas \n de repérer le bout de code qui se répète afin \n de savoir quelles commandes placer dans la boucle !");

function addEndListener() {
    Reveal.addEventListener('slidechanged', function (event) {
        if (Reveal.getProgress() == 1) {
            document.getElementById("btn_next_exercise").style.display = "block";
        }
        writeToLog(activity, "Slide changed : " + Reveal.getProgress());
    });
}
//------------------------------------------------//