/*SUDO:
Trapezius is clicked
JS is listening and when traps are clicked JS will fetch the JSON
Json will deliver the exercises associated with the muscle cliked (traps)
JS will make it appear in a list in HTML where the Section tag is */

let exerciseList = [];

document.querySelector('#bodyBack').addEventListener('click', (e) => {
    e.preventDefault();
    const type = e.target.title.split('-');
    // store type in array If this is in the array do not add and if it is not then add.
    listElements(type[0]);
});

function listElements(e) {
    exerciseList.filter(exercise => exercise.type.toLowerCase() == e).forEach(exercise => {
        renderEx(exercise);

    });
}

function renderEx(modify) {
    let eList = document.querySelector("#exerciseList");
    eList.innerHTML += `
        <div>
        <div class="target">${modify.target}</div>
            <div>${modify.name}</div>
            <div>${modify.equipment}</div>
            <div>${modify.description}</div>
        </div>
    `;
}

function getExercises() {
    fetch('../exercises.json')
        .then(response => {
            response.json()
                .then(
                    response => {
                        exerciseList = response.exercises;
                        
                    }
                )
        });
}

document.querySelector("#delete").addEventListener("click", e => {
document.querySelector("#exerciseList").innerHTML = "";
});

getExercises();





// exercises.forEach(
                        //     (exercise) => {
                        //         if (exercise.type === 'Trapezius') {
                        //            let eList = document.querySelector("#exerciseList");
                        //             eList.innerHTML += `
                        //                 <div>
                        //                     ${exercise.target}
                        //                     <div>${exercise.name}</div>
                        //                     <div>${exercise.equipment}</div>
                        //                     <div>${exercise.description}</div>
                        //                 </div>
                        //                 <br>
                        //             `;

                        //          } else if (exercise.type === 'Glutes') {
                        //             let eList = document.querySelector("#exerciseList");
                        //             eList.innerHTML += `
                        //                 <div>
                        //                     ${exercise.target}
                        //                     <div>${exercise.name}</div>
                        //                     <div>${exercise.equipment}</div>
                        //                     <div>${exercise.description}</div>
                        //                 </div>
                        //                 <br>
                        //             `;

                        //             // document.querySelector('.glutes')
                        //             //     .textContent = exercises.target;

                        //          } else if (exercise.type === 'Obliques') {
                        //             let eList = document.querySelector("#exerciseList");
                        //             eList.innerHTML += `
                        //                 <div>
                        //                          ${exercise.target}
                        //                     <div>${exercise.name}</div>
                        //                     <div>${exercise.equipment}</div>
                        //                     <div>${exercise.description}</div>
                        //                 </div>
                        //                 <br>
                        //             `;

                        //             // document.querySelector('.obliques')
                        //             //     .textContent = exercises.target;

                        //          } else if (exercise.type === 'Abs') {
                        //             let eList = document.querySelector("#exerciseList");
                        //             eList.innerHTML += `
                        //                 <div>
                        //                          ${exercise.target}
                        //                     <div>${exercise.name}</div>
                        //                     <div>${exercise.equipment}</div>
                        //                     <div>${exercise.description}</div>
                        //                 </div>
                        //                 <br>
                        //             `;

                        //             // document.querySelector('.abs')
                        //             //     .textContent = exercises.target;

                        //          }
                        // }
                        // );