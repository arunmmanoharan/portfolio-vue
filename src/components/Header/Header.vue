<template>
    <header :id="'home'">
        <NavBar/>
        <Banner/>
        <Scrolldown />
    </header>
</template>
<script>
	import NavBar from '../Navigation/NavBar';
	import Banner from '../Banner/Banner';
	import Scrolldown from '../Scrolldown/Scrolldown';

	export default {
		name: 'Header',
		components: {
			Scrolldown,
			Banner,
			NavBar
		}
	};
</script>
