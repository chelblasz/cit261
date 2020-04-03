/*SUDO:
Trapezius is clicked
JS is listening and when traps are clicked JS will fetch the JSON
Json will deliver the exercises associated with the muscle cliked (traps)
JS will make it appear in a list in HTML where the Section tag is */


export default

 exercises = {
    getexercises: function (part) {
        if (this.list === null) {
           
            fetch(requestURL)
.then(response => {
    response.json()
        .then(
            response => {
                const exercises = response.exercises;

                exercises.forEach(
                    (exercise) => {
                        if (exercise.type === 'trapezius') {
                
                            document.querySelector('#trapeziusTarget')
                                .textContent = exercises.target;

                            document.querySelector('#trapeziusName')
                                .textContent = exercises.name;

                            document.querySelector('#trapeziusEquiptment')
                                .textContent = exercises.equiptment;

                            document.querySelector('#trapeziusDescription')
                                .textContent = exercises.description;
console.log(exercises);
                         } 
                        }
                        );
                    }
                )
        });
        }
        return this.list;
    },

    list: null
}


