import albums from "./albums.json";
import filterTable from "./task-2";

function render(el, data) {
    const html = data.map((row, index) => `
<tr ${index % 2 ? "class=\"table-row-even\"" : ""}>
    <td>${index + 1}</td>
    <td data-field="album">${row.album}</td>
    <td data-field="performer">${row.performer}</td>
    <td data-field="genre">${row.genre}</td>
    <td data-field="year">${row.year}</td>
    <td><a href="${row.album_url}" target="_blank">Link</a></td>
</tr>
`).join("");
    el.innerHTML = html;
}

const table = document.getElementById("table-task-2"),
    tbody = table.querySelector("tbody"),
    filterButton = table.querySelector("button"),
    filterInputs = [...table.querySelectorAll("input")];

filterButton.addEventListener("click", () => {
    const filters = filterInputs.reduce((acc, input) => {
        acc[input.dataset.field] = input.value;
        return acc;
    }, {});

    filterTable(tbody, filters);
});
render(tbody, albums);
