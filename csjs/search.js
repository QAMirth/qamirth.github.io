document.write(`
<div class="sidebar-block-content sidebar-search-content">
							
		<div class="searchForm">
			<form onsubmit="this.sfSbm.disabled=true" method="get" style="margin:0" action="/search/">
				<div align="center" class="schQuery">
					<input type="text" name="q" maxlength="30" size="20" class="queryField">
				</div>
				<div align="center" class="schBtn">
					<input type="submit" class="searchSbmFl" name="sfSbm" value="Sear">
				</div>
				<input type="hidden" name="t" value="0">
			</form>
		</div>
							<svg class="svg-icon search-form-icon"><use xlink:href="../csjs/icons.svg#search_icon"></use></svg>
						</div>
  `);
