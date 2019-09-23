// var obj = JSON.parse('data/hci.json');

// function myFunction(file) {
//     var obj = JSON.parse(file);
//     var out = "";
//     var i;
//     for (i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' +
//             arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
// }

// <div class="col-4 col-12-narrower">

//     <section>
//         <header>
//             <h2><strong><a href="http://cs.jhu.edu/~cmhuang">Chien-Ming Huang</a></strong></h2>
//         </header>
//         <img src="images/members/chienming-huang.png" alt="Dr. Huang" style="width:100%">
//             <p>
//                 <strong>Computer Science, WSE</strong><br>
//                     Human-Robot Interaction; Human-Centered Design; Intelligent User Interfaces</p>
// 	</section>

// </div>

// function displayPeople(arr) {
//     var out = "";
//     var i;
//     for (i = 0; i < arr.length; i++) {
//         out += '<h2><strong><a href="http://cs.jhu.edu/~cmhuang">Chien-Ming Huang</a></strong></h2>'
//             + '</header ><img src="' + arr.Photo + '" alt="' + arr.Username + '" style="width:100%">'
//             + '<p><strong>' + arr.Position + '</strong><br>'
//             + '<strong>' + arr.Affliation + '</strong><br>'
//             + arr.Area + '</p></section >';
//     }
//     document.getElementById("id01").innerHTML = out;
// }

(function ($) {
    var $people = $('#people');
    console.log("start");

    $.getJSON("data/hci_at_jhu.json?callback=?", function (data) {
        $.each(data, function (key, val) {
            console.log("reading success");
            var out = "";
            if (val.Include == 'Y') {
                var i;
                for (i = 0; i < val.length; i++) {
                    out += '<div class="col-4 col-12-narrower"><h2><strong><a href="http://cs.jhu.edu/~cmhuang">Chien-Ming Huang</a></strong></h2>'
                        + '</header ><img src="' + val.Photo + '" alt="' + val.Username + '" style="width:100%">'
                        + '<p><strong>' + val.Position + '</strong><br>'
                        + '<strong>' + val.Affliation + '</strong><br>'
                        + val.Area + '</p></section></div>';
                };
                $(out).appendTo($people);
            };

        });
    }).done(function () {
        console.log("second success");
    });


})(jQuery);