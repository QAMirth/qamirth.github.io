document.write(`


<div id="filters">
    <select id="sort-filter" onchange="sortMaterials()">
        <option value="title-asc">Titleа (A)</option>
        <option value="title-desc">Title (D)</option>
    </select>
    <select id="format-filter" onchange="filterMaterials()">
        <option value="">All Formats</option>
    </select>
    <select id="freepaid-filter" onchange="filterMaterials()">
        <option value="">All Free/Paid</option>
    </select>
</div>
`);
