var people = [
  {
    firstname: "Clemi",
    lastname: "Pohle",
    age: "100",
    image: "https://www.oefb.at/oefb2/images/1278650591628556536_55d53054084120a55cce-1,0-320x320.png",
  },
  {
    firstname: "Clemi",
    lastname: "Pohle",
    age: "100",
    image: "https://www.oefb.at/oefb2/images/1278650591628556536_55d53054084120a55cce-1,0-320x320.png",
  },
];

var html = "";
for (i = 0; i < people.length; i++) {
  html += '<div class="first">';
  html += "<ul> <li>" + people[i].firstname + "</li>";
  html += "<li>" + people[i].lastname + "</li></ul></div>";
  html +=
    '<div class="second"><img width="200px" src=' +
    people[i].image +
    '" /></div>';
  html += '<div class="third">' + people[i].age + "</div> </div> </div>";
  document.getElementById("container").innerHTML = html;
}
/*
<div class="card">
        <div class="first">
          <ul>
            <li>Clemi</li>
            <li>Pohle</li>
          </ul>
        </div>
        <div class="second">
          <img
            width="200px"
            src="1278650591628556536_55d53054084120a55cce-1,0-600x315-600x315.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="third">100</div>
      </div>
 */
