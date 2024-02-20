const form = document.querySelector("#form-input");
const nameproject = document.querySelector("#name-project");
const imgproject = document.querySelector("#img-project");
const linkproject = document.querySelector("#link-project");
const tagsproject = document.querySelector("#tags-project");
const tbodyTable = document.querySelector("#data-project");
const btnSubmit = document.querySelector("#btn-submit");
let existingIndex = -1;
let existing = false;
function renderproject() {
  const listproject = JSON.parse(localStorage.getItem("data-project")) || [];
  let newElement = "";
  for (let i = 0; i < listproject.length; i++) {
    const project = listproject[i];
    newElement += `
    <tr>
        <td>${i + 1}</td>
        <td>${project.nameproject}</td>
        <td>${project.img}</td>
        <td>${project.link}</td>    
        <td>${project.tags}</td>    
        <td>
            <button class="btndel" onclick="deleteproject(${i})">Delete</button>
            <button class="btnupdate" onclick="editproject(${i})">Update</button>
        </td>
    </tr>
    `;
  }
  tbodyTable.innerHTML = newElement;
}
renderproject();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const project = {
    nameproject: nameproject.value,
    img: imgproject.value,
    link: linkproject.value,
    tags: tagsproject.value.split(","),
  };
  const projectLocal = JSON.parse(localStorage.getItem("data-project")) || [];
  if (existing) {
    projectLocal[existingIndex] = project;
    existingIndex = -1;
    existing = false;
    btnSubmit.textContent = "+ New Project";
  } else {
    projectLocal.push(project);
  }
  localStorage.setItem("data-project", JSON.stringify(projectLocal));
  renderproject();
  resetForm();
});
function resetForm() {
  nameproject.value = "";
  imgproject.value = "";
  linkproject.value = "";
  tagsproject.value = "";
}
function deleteproject(index) {
  const getDataLocal = JSON.parse(localStorage.getItem("data-project"));
  getDataLocal.splice(index, 1);
  localStorage.setItem("data-project", JSON.stringify(getDataLocal));
  renderproject();
}
function editproject(index) {
  const getDataLocal = JSON.parse(localStorage.getItem("data-project"));
  nameproject.value = getDataLocal[index].nameproject;
  imgproject.value = getDataLocal[index].img;
  linkproject.value = getDataLocal[index].link;
  tagsproject.value = getDataLocal[index].tags;
  existingIndex = index;
  existing = true;
  btnSubmit.textContent = "Update";
}
