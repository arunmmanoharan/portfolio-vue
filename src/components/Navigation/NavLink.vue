<template>
    <a :id="'navigationLink'"
       class="smoothscroll"
       v-on:mouseover="mouseOver"
       v-on:mouseleave="mouseLeave"
       v-bind:style="styleObject"
       :href="navigateURL(link)">
        {{name}}
    </a>
</template>

<script>
	import {startsWith} from 'lodash';

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
			},
			navigateURL: function (url) {
				return startsWith(url, 'http') ? url : `#${url}`;
			}
		}
	};
</script>
