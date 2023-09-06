//function start
m = 0; //margin
var y;

function strat() {
    y = setInterval(run, 100); //ilbiriqsi second

    function run() {

        if (m == 1200) {
            clearInterval(y)
            m = 0
        } else {
            m += 10;
            var x = document.getElementById("img");
            x.style.marginLeft = m + "px"
            h1.style.visibility = "visible"

        }


        // if (m == 1200) {
        //     clearInterval(y)
        //         // console.log(m)
        //     m = 0


        // } else {
        //     m += 10;
        //     var x = document.getElementById("img");
        //     x.style.marginLeft = m + "px"
        //     console.log(m)
        // }

    }
}

//function stop
function stop() {
    clearInterval(y)
    var h1 = document.getElementById("h1")
    console.log(h1)
    h1.style.visibility = "hidden"
        //clearinterval waxa uu istaaginayaa function kii loobas gareyay shaqada uu hayay

}