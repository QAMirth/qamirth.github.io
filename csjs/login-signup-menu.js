
document.write(`
<div id="textSizeFilter" style="position: relative;">
    <button id="eyeButton" style="font-size: 24px;">👁</button>
    <ul id="sizeOptions" style="display: none; list-style-type: none; padding: 0; margin: 0; position: absolute; background-color: white; border: 1px solid #ccc;">
        <li><button data-size="small">Small</button></li>
        <li><button data-size="normal">Normal</button></li>
        <li><button data-size="large">Large</button></li>
    </ul>
</div>

<a title="Add tool" class="addd" href="/99/add.html">Add tool</a>
`);
