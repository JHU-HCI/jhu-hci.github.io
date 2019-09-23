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

    $.getJSON("data/hci_at_jhu.json", function (data) {
        console.log("start 2");
        $.each(data, function (key, val) {
            console.log("reading success");
            var out = "";
            if (val.Include == 'Y') {
                var i;
                var photo_path = val.Photo;
                if (photo_path == '') {
                    photo_path = 'images/members/avatar.png';
                };
                // out += '<div class="col-4 col-12-narrower"><h2><strong><a href="'
                //     + val.Website + '">' + val.Name + '</a></strong></h2>'
                //     + '</header ><img src="' + photo_path + '" alt="' + val.Name + '" style="width:100%">'
                //     + '<p><strong>' + val.Position + '</strong><br>'
                //     + '<strong>' + val.Affiliation + '</strong><br>'
                //     + val.Area + '</p></section></div>';
                out += `<div class="col-4 col-12-narrower">
						<div class="card">
							<img src="` + photo_path + `" alt="` + val.Name + `" style="width:100%">
                            <div class="container">
                                <a href="` + val.Website + `">
                                    <h2>` + val.Name + `</h2>
                                </a>
                                <p class="position">` + val.Position + `</p>
                                <p class="affiliation">` + val.Affiliation + `</p>
                                <a href="mailto:` + val.Username + `">
                                <p>E-mail: ` + val.Username + `</p>
                                </a>
								<p>` + val.Area + `</p>
							</div>
						</div>
					</div>`
                $(out).appendTo($people);
            };

        });
    }).done(function () {
        console.log("second success");
    });
})(jQuery);