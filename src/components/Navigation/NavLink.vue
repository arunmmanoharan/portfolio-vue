<template>
    <a :id="'navigationLink'"
       class="smoothscroll"
       v-on:mouseover="mouseOver"
       v-on:mouseleave="mouseLeave"
       v-bind:style="styleObject"
       :href="'#' + link">
        {{name}}
    </a>
</template>

<script>
	export default {
		name: 'NavLink',
		props: {
			name: String,
			link: String
		},
		data() {
			return {
				styleObject: {
					color: '#FFFFFF'
				}
			};
		},
		methods: {
			mouseOver: function () {
				this.styleObject.color = '#157DEC';
			},
			mouseLeave: function () {
				this.styleObject.color = '#FFFFFF';
			}
		}
	};
</script>
