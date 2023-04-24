
//! today date

let d;
let dates = document.getElementById("date");
dates.innerHTML = "Current time"
setInterval(() => {
    d = new Date();
    if (d.getSeconds() < 10) {
        if (d.getMinutes() < 10) {
            if (d.getHours() < 10) {
                dates.innerHTML = `0${d.getHours()}: 0${d.getMinutes()}: 0${d.getSeconds()}`;
            }
            else {
                dates.innerHTML = `${d.getHours()}: 0${d.getMinutes()}: 0${d.getSeconds()}`;
            }
        }
        else {
            if (d.getHours() < 10) {
                dates.innerHTML = `0${d.getHours()}: ${d.getMinutes()}: 0${d.getSeconds()}`;
            }
            else {
                dates.innerHTML = `${d.getHours()}: ${d.getMinutes()}: 0${d.getSeconds()}`;
            }
        }

    }
    else {
        if (d.getMinutes() < 10) {
            if (d.getHours() < 10) {
                dates.innerHTML = `0${d.getHours()}: 0${d.getMinutes()}: ${d.getSeconds()}`;
            }
            else {
                dates.innerHTML = `${d.getHours()}: 0${d.getMinutes()}: ${d.getSeconds()}`;
            }
        }
        else {
            if (d.getHours() < 10) {
                dates.innerHTML = `0${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
            }
            else {
                dates.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
            }
        }
    }
}, 1000)





// ! Hour

let start = document.querySelector("#start");
let stop1 = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let title = document.querySelector("#title");
let intervalId = undefined;
let minute = 24;
let second = 60;
start.onclick = function () {
    intervalId = setInterval(() => {
        second -= 1;
        if (second == 0) {
            second = 60;
            minute -= 1;
            title.textContent = `${minute}:00`;
        }
        else {
            if (second < 10) {
                if (minute < 10) {
                    title.textContent = `0${minute}:0${second}`;
                }
                else {
                    title.textContent = `${minute}:0${second}`;
                }

            }
            else {
                if (minute < 10) {
                    title.textContent = `0${minute}:${second}`;
                }
                else {
                    title.textContent = `${minute}:${second}`;
                }
            }
        }
        if (minute < 0) {
            clearInterval(intervalId);
            title.textContent = "00:00";
            alert("vaxt bitdi")
        }
    }, 1000);
}
reset.onclick = function () {
    clearInterval(intervalId);
    minute = 24;
    second = 60;
    title.textContent = "25:00";
}
stop1.onclick = function () {
    clearInterval(intervalId);
}





//! ToDo

const imputval = document.querySelector("#imputval");
const form = document.querySelector(".form");
const addButton = document.querySelector(".addbutton");
const toDoList = document.querySelector(".todolist");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (imputval.value == "") {
        Swal.fire({
            title: "Warning",
            text: "please add text",
            icon: "warning",
            cancelButtonColor: "#d33",
        });
    }
    else {
        const newTask = createNewItem(imputval.value);
        toDoList.appendChild(newTask);
        imputval.value = "";
    }
});
function createNewItem(imputValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.className = "delBtn btn text-danger";
    span.textContent = imputValue;
    delBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
    li.appendChild(span);
    li.appendChild(delBtn);
    delBtn.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        Swal.fire({
            title: "Deleted",
            icon: "error",
        });
    });
    span.addEventListener("click", () => {
        span.style.textDecoration = "line-through";
        Swal.fire("Done")
    })
    return li;
}