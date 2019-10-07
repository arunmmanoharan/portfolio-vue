<template>
    <nav id="nav-wrap" class="opaque" v-bind:style="{background: '#313131'}">
        <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
            <li v-for="navigationItem in navigation" v-bind:key="navigationItem.name">
                <NavLink :name="navigationItem.name" :link="navigationItem.link"></NavLink>
            </li>
        </ul>
        <button id="goToAngular" :class="{ 'hidden-button': !showButton }" style="margin-right: 20px"
                v-on:click="goToAngular"> Switch to Angular Version
        </button>
        <button id="goToReact" :class="{ 'hidden-button': !showButton }" v-on:click="goToReact"> Switch to React
            Version
        </button>
    </nav>
</template>

<script>
	import navigation from '../../constants/navigationConstants';
	import NavLink from './NavLink';
	import {keys, map} from 'lodash';
	import {ANGULAR_URL, REACT_URL} from '../../constants/URL_Constants';

	const OFFSET = 60;

	export default {
		name: 'NavBar',
		components: {NavLink},
		data() {
			return {
				navigation: map(keys(navigation), (link) => {
						const name = navigation[link];
						return {
							link,
							name
						};
					}
				),
				showButton: false,
				lastScrollPosition: 0,
				scrollValue: 0
			};
		},
		mounted() {
			this.lastScrollPosition = window.pageYOffset;
			window.addEventListener('scroll', this.onScroll);
			const viewportMeta = document.createElement('meta');
			viewportMeta.name = 'viewport';
			viewportMeta.content = 'width=device-width, initial-scale=1';
			document.head.appendChild(viewportMeta);
		},

		beforeDestroy() {
			window.removeEventListener('scroll', this.onScroll);
		},

		methods: {
			onScroll() {
				if (window.pageYOffset < 0) {
					return;
				}
				if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
					return;
				}
				this.showButton = window.pageYOffset > this.lastScrollPosition;
				this.lastScrollPosition = window.pageYOffset;
			},
			goToAngular() {
				window.open(ANGULAR_URL, '_self');
			},
			goToReact() {
				window.open(REACT_URL, '_self');
			}
		}
	};
</script>

<style>
    .hidden-button {
        display: none;
    }
</style>
