
export default function filterTable(tbody, filters) {

    const rows = tbody.getElementsByTagName("tr");
    let num = 0;
    for (const row of rows) {

        const check = [...row.children].slice(1).reduce((a, e) => {

            return a && ((filters.hasOwnProperty(e.dataset.fieldName))
                ? e.innerHTML.includes(filters[e.dataset.fieldName])
                : true);
        }, true);

        if (check) {
            num++;
            row.firstElementChild.innerHTML = num;
            if (num % 2) {
                row.classList.remove("table-row-even");
            } else {
                row.classList.add("table-row-even");
            }
            row.classList.remove("d-none");
        } else {
            row.classList.add("d-none");
        }
    }
}
