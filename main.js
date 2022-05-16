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
