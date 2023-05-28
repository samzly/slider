function slider() {
    fetch('./json/object.json')
        .then((response) => response.json())
        .then(
            function sliderChange(data) {

// выбор dom-элементов

                const projectsProperties = document.querySelector('.projects-properties');
                const imgProjects = document.querySelector('.img_projects');
                const cityProjects = projectsProperties.querySelector('.projects_city');
                const areaProjects = projectsProperties.querySelector('.projects_area');
                const timeProjects = projectsProperties.querySelector('.projects_time');
                const titleProjects = document.querySelector('.list_projects-header');
                const arrows = document.querySelector('.arrows');
                const arrowDots = arrows.querySelector('.arrow_dots');

// функции

// перебор проектов

                function changeProject() {
                    data.forEach((elem, index) => {
                        let imgDiv = `<div class='image image-${index} ${index === 0 ? 'active' : ''}' style='background-image:url(${data[index].img});' alt='${data[index].city}' data-index='${index}'></div>`;
                        imgProjects.innerHTML += imgDiv;
                        let cityDiv = `<div class='paragraph city-${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${data[index].city[0]}<br>${data[index].city[1]}</div>`;
                        cityProjects.innerHTML += cityDiv;
                        let areaDiv = `<div class='paragraph area-${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${data[index].area}</div>`;
                        areaProjects.innerHTML += areaDiv;
                        let timeDiv = `<div class='paragraph time-${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${data[index].time}</div>`;
                        timeProjects.innerHTML += timeDiv;
                        let titleLi = `<li class='title_slider title-${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${data[index].city.join(', ')}</li>`;
                        titleProjects.innerHTML += titleLi;
                        let arrowDot = `<div class='arrow_dot dot-${index} ${index === 0 ? 'active' : ''}' data-index='${index}' aria-label='Completed project №${index + 1}'></div>`;
                        arrowDots.innerHTML += arrowDot;
                    });
                }

// переключение по нажатию стрелок

                function clickArrows() {
                    arrows.querySelectorAll('.arrow').forEach((elem) => {
                        elem.addEventListener('click', function() {
                            let currNum = +imgProjects.querySelector('.active').getAttribute('data-index');
                            let nextNum;
                            if (elem.classList.contains('left')) {
                                nextNum = currNum === 0 ? data.length - 1 : currNum - 1;
                            } else {
                                nextNum = currNum === data.length - 1 ? 0 : currNum + 1;
                            }
                            moveSlide(nextNum);
                            });
                        });
                    }

// переключение через точки

                function clickDots() {
                    arrowDots.querySelectorAll('.arrow_dot').forEach((elem) => {
                        elem.addEventListener('click', function() {
                            moveSlide(this.getAttribute('data-index'));
                        });
                    });
                }

// переключение через заголовки

                function clickTitles() {
                    titleProjects.querySelectorAll('.title_slider').forEach((elem) => {
                        elem.addEventListener('click', function() {
                            moveSlide(this.getAttribute('data-index'));
                        });
                    });
                }

// переключение слайда

                function moveSlide(num, ) {
                    imgProjects.querySelector('.active').classList.remove('active');
                    cityProjects.querySelector('.active').classList.remove('active');
                    areaProjects.querySelector('.active').classList.remove('active');
                    timeProjects.querySelector('.active').classList.remove('active');
                    titleProjects.querySelector('.active').classList.remove('active');
                    arrowDots.querySelector('.active').classList.remove('active');
                    imgProjects.querySelector('.image-' + num).classList.add('active');
                    cityProjects.querySelector('.city-' + num).classList.add('active');
                    areaProjects.querySelector('.area-' + num).classList.add('active');
                    timeProjects.querySelector('.time-' + num).classList.add('active');
                    titleProjects.querySelector('.title-' + num).classList.add('active');
                    arrowDots.querySelector('.dot-' + num).classList.add('active');
                }

// вызов функций

                changeProject();
                clickArrows();
                clickDots();
                clickTitles();
            }
        )
        .catch((response) => console.log('error\n' + response))

}
document.addEventListener('DOMContentLoaded', slider)