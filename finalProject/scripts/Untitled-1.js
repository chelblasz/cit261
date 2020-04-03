
fetch(requestURL)
.then(response => {
    response.json()
        .then(
            response => {
                const exercises = response.exercises;

                exercises.forEach(
                    (exercise) => {
                        if (exercise.type === 'trapezius') {
                            // fish haven
                            document.querySelector('#trapeziusTarget')
                                .textContent = exercises.target;

                            document.querySelector('#trapeziusName')
                                .textContent = exercises.name;

                            document.querySelector('#trapeziusEquiptment')
                                .textContent = exercises.equiptment;

                            document.querySelector('#trapeziusDescription')
                                .textContent = exercises.description;

                         } 
                        //  else if (town.name.toLowerCase() === 'preston') {
                        //     // Preston
                        //     document.querySelector('#prestonMotto')
                        //         .textContent = town.motto;

                        //     document.querySelector('#prestonYearFounded')
                        //         .textContent = town.yearFounded;

                        //     document.querySelector('#prestonCurrentPopulation')
                        //         .textContent = town.currentPopulation;

                        //     document.querySelector('#prestonAverageRainfall')
                        //         .textContent = town.averageRainfall;

                        //     document.querySelector('#prestonImage')
                        //         .setAttribute('src', 'images/' + town.photo);

                        // } else if (town.name.toLowerCase() === 'soda springs') {
                        //     // Soda springs
                        //     document.querySelector('#sodaSpringsMotto')
                        //         .textContent = town.motto;

                        //     document.querySelector('#sodaSpringsYearFounded')
                        //         .textContent = town.yearFounded;

                        //     document.querySelector('#sodaSpringsCurrentPopulation')
                        //         .textContent = town.currentPopulation;

                        //     document.querySelector('#sodaSpringsAverageRainfall')
                        //         .textContent = town.averageRainfall;

                        //     document.querySelector('#sodaSpringsImage')
                        //         .setAttribute('src', 'images/' + town.photo);
                        // }
                    }
                );
            }
        )
});