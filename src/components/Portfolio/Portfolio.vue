<template>
    <section id='projects'>
        <div class='row work'>
            <div class='header-col'>
                <div>
                    <h1>
                        <span>Projects</span>
                    </h1>
                </div>
                <div id='portfolio-wrapper' class='ten columns main-col'>
                    <PortfolioEntry v-for="(entry, index) in portfolioData" :key="`entry-${index}`" :entry="entry"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	import {serverBus} from '../../main';
	import PortfolioEntry from './PortfolioEntry';

	export default {
		name: 'Portfolio',
		components: {PortfolioEntry},
		data() {
			return {
				portfolioData: []
			};
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.portfolioData = data.publications;
			});
		}
	};
</script>
