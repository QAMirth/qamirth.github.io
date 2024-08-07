document.write(`
<div id="filters-filters">
    <select id="format-filter" onchange="filterMaterials()">
        <option value="">- All Formats</option>
    </select>
    <select id="freepaid-filter" onchange="filterMaterials()">
        <option value="">- All Free/Paid</option>
    </select>
</div>
`);
