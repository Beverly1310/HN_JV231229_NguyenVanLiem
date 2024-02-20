let heroInfo = {
  name: "Minh Cường",
  job: "freelance react developer",
  imgUrl: "https://picsum.photos/200/300",
};

let personalDetail = {
  name: "Minh Cường",
  dob: "06 June 1995",
  spokenLanguages: ["English", "France", "German"],
  nationality: "Vietnam",
  interest: ["Music", "Reading", "Journey"],
  techs: [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
      techName: "Android",
      exp: 2,
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      techName: "Angular",
      exp: 1,
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      techName: "Bootstrap",
      exp: 3,
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      techName: "Vue",
      exp: 2,
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      techName: "React",
      exp: 2 / 3,
    },
    {
      id: 6,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      techName: "Mongodb",
      exp: 0.25,
    },
    {
      id: 7,
      imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
      techName: "Laravel",
      exp: 1,
    },
    {
      id: 8,
      imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
      techName: "Node.js",
      exp: 5 / 6,
    },
  ],
};
localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
localStorage.setItem("personalDetail", JSON.stringify(personalDetail));

let storedPersonalDetail = localStorage.getItem("personalDetail");
let getpersonalDetail = JSON.parse(storedPersonalDetail);
let personalInfoHTML = `
    <h2>${getpersonalDetail.name}</h2>
    <p>Date of Birth: ${getpersonalDetail.dob}</p>
    <p>Spoken Languages: ${getpersonalDetail.spokenLanguages.join(", ")}</p>
    <p>Nationality: ${getpersonalDetail.nationality}</p>
    <p>Interest: ${getpersonalDetail.interest.join(", ")}</p>
  `;
document.getElementById("personalinfo").innerHTML = personalInfoHTML;
let exp = "";
for (let i = 0; i < personalDetail.techs.length - 3; i++) {
  const myExp = personalDetail.techs[i];
  exp += `
    <div class ="expbox">
    <img src="${myExp.imgUrl}" alt="" style="width: 50px; height: 50px;">
    <div>
        <h4>${myExp.techName}</h4>
        <p>${myExp.exp.toFixed(1)} Year Experience</p>
    </div>
    </div>
    `;
}
document.getElementById("exp").innerHTML = exp;

let exp2 = "";
for (let i = 5; i < personalDetail.techs.length; i++) {
  const myExp = personalDetail.techs[i];
  exp2 += `
    <div class ="expbox">
    <img src="${myExp.imgUrl}" alt="" style="width: 50px; height: 50px;">
    <div>
        <h4>${myExp.techName}</h4>
        <p>${myExp.exp.toFixed(1)} Year Experience</p>
    </div>
    </div>
    `;
}
document.getElementById("exp2").innerHTML = exp2;

const myproject = document.querySelector(".myproject");
function renderproject() {
  const listproject = JSON.parse(localStorage.getItem("data-project")) || [];
  let newElement = "";
  for (let i = 0; i < listproject.length; i++) {
    const project = listproject[i];
    newElement += `
    <div class = "prj">
    <table>
        <th>
            <td><img src="${project.img}"  alt="${project.img}" class="prj-picture"></td>
            <td>
                <b>${project.nameproject}</b><br>
                <a href="${project.link}">${project.link}</a>
            </td>
        </th>
    </table>            
    <p style=" padding-left: 20px;">${project.tags}</p>          
</div>
      `;
  }
  myproject.innerHTML = newElement;
}
renderproject();
