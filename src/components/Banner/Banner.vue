<template>
    <div class='row banner'>
        <div class='banner-text'>
            <h1 class='responsive-headline'
                v-on:mouseover="mouseOver"
                v-on:mouseleave="mouseLeave"
                v-bind:style="styleObject">
                {{basics.name}}</h1>
            <br/>
            <hr/>
            <SocialMedia :ul-class="'social'"/>
        </div>
    </div>
</template>

<script>
	import {serverBus} from '../../main';
	import SocialMedia from '../SocialMedia/SocialMedia';

	export default {
		name: 'Banner',
		components: {SocialMedia},
		data() {
			return {
				styleObject: {
					color: '#FFFFFF'
				},
				basics: {}
			};
		},
		methods: {
			mouseOver: function () {
				this.styleObject.color = '#157DEC';
			},
			mouseLeave: function () {
				this.styleObject.color = '#FFFFFF';
			}
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.basics = data.basics;
			});
		}
	};
</script>
