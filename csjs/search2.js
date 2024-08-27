document.write(`
<div id="header_mb_search" class="header-search">
<button class="header-mobile-button js-mb-search-btn">
<svg class="header-mobile-icon">

<use xlink:href="../csjs/icons.svg#search_icon"></use>

</svg>
</button>
<div id="header_mb_search_panel" class="header-search-panel">
<div class="header-search-overlay js-header-search-overlay"></div>
<form class="header-search-form" onsubmit="return validateSearch()" method="get"
action="/99/search.html">
<input type="hidden" name="t" value="0">
<input
class="header-search-input js-mb-search-input"
placeholder="Search"
type="text"
name="q"
maxlength="30"
size="20"
autocomplete="off">
<button class="header-search-button" type="submit"></button>
</form>
</div>
</div>
`);
