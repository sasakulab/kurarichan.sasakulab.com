function showDay( tYear, tMonth, tDay) {
    var nowDate = new Date();
    var dnumNow = nowDate.getTime();
    var tDate = new Date( tYear, tMonth-1, tDay );
    var dnumGoal = tDate.getTime();

    var diffMSec = dnumGoal - dnumNow;
    var diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
    var showDays = Math.ceil( diffDays );
    return showDays
}

awayday = Math.abs(showDay(2023, 1, 31))
document.getElementById("remain").textContent = '終了まであと、 ' + showDay(2023, 4, 30) + "日";
document.getElementById("progress").textContent = awayday + " / 89"
document.getElementById("progress").style.width = (Math.ceil(awayday / 89 * 100)) + "%";
