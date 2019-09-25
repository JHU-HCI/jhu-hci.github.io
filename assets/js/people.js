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

    $.getJSON("data/hci_at_jhu.json", function (data) {
        $.each(data, function (key, val) {
            var out = "";
            if (val.Include == 'Y') {
                var i;
                var photo_path = 'images/members/' + val.Picture;
                if (val.Picture == '') {
                    photo_path = 'images/members/avatar.png';
                };
                console.log(photo_path);
                out += `<div class="col-4 col-12-narrower">
							<div class="card" >
								<div class="photo-container">
									<img src="` + photo_path + `" alt="` + val.Name + `" class="photo" style="width:100%">
									<div class="middle">
										<div class="text hyphenation">`+ val.Area + `</div>
									</div>
								</div>
								<div class="text-container">
									<a href="` + val.Website + `">
										<h2 id="` + String(val.Name).replace(/ /g, '_') + `">` + val.Name + `</h2>
                                    </a>
                                    <p><b>`+ val.Position + `</b><br><i>` + val.Affiliation + `</i></p>
									<a href="mailto:` + val.Username + `">
										<p>` + val.Username + `</p>
									</a>
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