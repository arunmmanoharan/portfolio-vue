<template>
    <fragment>
        <About/>
        <Work/>
        <Education/>
        <Skills/>
        <Portfolio/>
        <References/>
    </fragment>
</template>

<script>
	import About from '../About/About';
	import Work from '../Work/Work';
	import Education from '../Education/Education';
	import Skills from '../Skills/Skills';
	import Portfolio from '../Portfolio/Portfolio';
	import References from '../References/References';

	export default {
		name: 'Sections',
		components: {References, Portfolio, Skills, Education, Work, About}
	};
</script>
