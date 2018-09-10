<template>
	<div id="about">
		<div class="row">
			<div class="col-8">
				<ul>
					<li><router-link to='/about/one'>one</router-link></li>
					<li><router-link  to='/about/two'>two</router-link></li>
					<li><router-link to='/about/three'>three</router-link></li>
					<li><router-link to='/about/four'> four</router-link></li>
				</ul>
			</div>
			<div class="col-4">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>