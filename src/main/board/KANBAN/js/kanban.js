const columns = document.querySelectorAll(".column");
columns.forEach((column) => {
  new Sortable(column, {
    group: "shared", animation: 150
  });
});