<template>
    <li>
			<span
                    :class="'bar-expand percentage' + entry.level"
                    v-on:mouseover="mouseOver"
                    v-on:mouseleave="mouseLeave"
                    v-bind:style="styleObject"></span>
        <em>{{entry.name}}</em>
    </li>
</template>

<script>
	export default {
		name: 'SkillEntry',
		props: ['entry'],
		data() {
			return {
				styleObject: {
					backgroundColor: '#313131',
                    cursor: 'pointer'
				},
			};
		},
		methods: {
			mouseOver: function () {
				this.styleObject.backgroundColor = '#157DEC';
			},
			mouseLeave: function () {
				this.styleObject.backgroundColor = '#313131';
			}
		},
	};
</script>
