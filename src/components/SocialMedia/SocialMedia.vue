<template>
    <ul :class="ulClass">
                <li v-for="profile in profiles" v-bind:key="profile.network">
                    <a :href="profile.url">
                        <i v-if="profile.network.toLowerCase() === 'email'" class="fa fa-envelope"></i>
                        <i v-else-if="profile.network.toLowerCase() === 'quora'" class="fa fa-fw"><strong class="fa-quora">Q</strong></i>
                        <i v-else :class="'fa fa-'+ profile.network.toLowerCase()"></i>
                    </a>
                </li>
    </ul>
</template>

<script>
	import {serverBus} from '../../main';

	export default {
		name: 'SocialMedia',
		props: ['ulClass'],
        data() {
		return {
			profiles: []
        }
        },
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.profiles = data.basics.profiles;
			});
		}
	};
</script>
