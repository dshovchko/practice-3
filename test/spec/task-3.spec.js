import renderTable from '../../src/task-3/render';
import filterTable from '../../src/task-3/task-3';
import albums from '../../src/task-3/albums.json';

let table;

function getVisibleRows() {
  return [...table.querySelectorAll('tr:not(.d-none)')];
}

function checkIndexation() {
  expect(getVisibleRows().every((row, index) => row.firstElementChild.innerHTML.includes(index + 1))).toBe(true);
}

function checkZebra() {
  expect(
    getVisibleRows().every((row, index) =>
        index % 2 === 0
            ? !row.className.includes('table-row-even')
            : row.className.includes('table-row-even')
    )).toBe(true);
}


describe('Task 3: Table Filterer', () => {

  beforeEach(() => {
    table = document.createElement('table');
    renderTable(table, albums, ['album', 'performer', 'genre', 'year']);
  });

  it('has to leave table as it is if no filters provided', () => {
    filterTable(table, {});
    expect(getVisibleRows(table).length).toBe(98);
    checkIndexation();
    checkZebra();
  });

  it('has to leave only 3 rows for year 2007', () => {
    filterTable(table, { year: 2007 });
    expect(getVisibleRows(table).length).toBe(3);
    checkIndexation(table);
    checkZebra(table);
  });

  it('has to filter by several columns', () => {
    filterTable(table, { year: 19, genre: 'rock music' });
    expect(getVisibleRows(table).length).toBe(10);
    checkIndexation(table);
    checkZebra(table);
  });

  it('has to show previously hidden rows if filters are reset', () => {
    filterTable(table, { year: 19, genre: 'rock music' });
    filterTable(table, { year: 2007 });
    expect(getVisibleRows(table).length).toBe(3);
    filterTable(table, {});
    expect(getVisibleRows(table).length).toBe(98);
    checkIndexation(table);
    checkZebra(table);
  });
});
