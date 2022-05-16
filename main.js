const select = document.querySelector("select.filter");

select.addEventListener("change", function (e) {
    const filter= e.target.value;
    const actives = document.querySelectorAll(".item.active");
    actives.forEach(function(item) {
        item.classList.remove("active");
    });
    const make_active = document.querySelectorAll(`.item.${filter}`);
    make_active.forEach(function (item) {
        item.classList.add("active");
    });
});

const dots = document.querySelectorAll(".dot");

dots.forEach(function (dot) {
    dot.addEventListener("click", function (e) {
    e.preventDefault();
    const this_dot = e.target;
    this_dot.classList.add("active");
});
});


const close_buttons = document.querySelectorAll(".close");
close_buttons.forEach(function (close_button) {
close_button.addEventListener("click", function (e) {
   e.preventDefault();
    e.stopPropagation();

    const this_close_button = e.target;
    const this_dot = this_close_button.closest(".dot"); 

    this_dot.classList.remove("active");
});
});