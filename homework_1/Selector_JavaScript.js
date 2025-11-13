const testData = [
  { name: "王二", department: "技术部", date: "2025-10-12", status: "已通过" },
  { name: "张三", department: "视频部", date: "2025-10-13", status: "未通过" },
  { name: "赵四", department: "美工部", date: "2025-10-14", status: "已通过" },
  { name: "李六", department: "技术部", date: "2025-10-15", status: "未通过" },
];

const selector_situa = document.querySelector("#situa.situa");
const selector_department = document.querySelector("#depart.depart");
const nameInput = document.querySelector(".selector");
const list = document.getElementById("student-list");
const reset = document.getElementById("reset");
const show = document.querySelector("#detail_information");
const button = document.querySelector(".face_detail");

Display(testData);

selector_department.addEventListener("change", Filter);
selector_situa.addEventListener("change", Filter);
nameInput.addEventListener("input", Filter);
button.addEventListener("click", function () {
  show.classList.toggle("hidden");
});
reset.addEventListener("click", function () {
  Display(testData);
});

function Display(studentarray) {
  list.innerHTML = "";
  studentarray.forEach((student) => {
    const information = document.createElement("div");
    information.className = "student-item";
    information.innerHTML = `
        <div class="stu_name">
          ${student.name}
        </div>
        <div class="stu_infor">
            <p class="stu_depart">
            ${student.department}
            </p>
            <p>
            ${student.date}
            </p>
            <p class="situat">
            状态:${student.status}
            </p>
        </div>
    `;
    list.appendChild(information);
  });
}

function Filter() {
  const stu_department = selector_department.value;
  const stu_status = selector_situa.value;
  const searchName = nameInput.value.trim();

  const Filtered_stu = testData.filter((student) => {
    const departmentMatch =
      stu_department === "" || student.department === stu_department;
    const statusMatch = stu_status === "" || student.status === stu_status;
    const nameMatch = searchName === "" || student.name.includes(searchName);
    return departmentMatch && statusMatch && nameMatch;
  });
  Display(Filtered_stu);
}
