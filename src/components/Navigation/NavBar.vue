<template>
    <nav id="nav-wrap" class="opaque" v-bind:style="{background: '#313131'}">
        <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
        <ul id="nav" class="nav">
            <li v-for="navigationItem in navigation" v-bind:key="navigationItem.name">
                <NavLink :name="navigationItem.name" :link="navigationItem.link"></NavLink>
            </li>
        </ul>
        <!--  {isButtonVisible && <button id="goToAngular" onClick={handleGoToAngular}> Switch to Angular Version</button>}-->
    </nav>
</template>

<script>
	import navigation from '../../constants/navigationConstants';
	import NavLink from './NavLink';
	import {keys, map} from 'lodash';

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
				)
			};
		}
	};
</script>
