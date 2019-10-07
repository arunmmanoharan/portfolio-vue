<template>
    <div id="app">
        <Header/>
        <Sections/>
        <Footer/>
    </div>
</template>

<script>
	import ResumeService from './services/ResumeService';
	import Header from './components/Header/Header';
	import {serverBus} from './main';
	import Sections from './components/Sections/Sections';
	import Footer from './components/Footer/Footer';

	export default {
		name: 'App',
		components: {
			Footer,
			Sections,
			Header,
		},
		data() {
			return {
				resumeData: [],
				errors: []
			};
		},
		mounted() {
			this.getResumeData();
		},
		methods: {
			async getResumeData() {
				const response = await ResumeService.getResumeData();
				this.resumeData = response.data;
				serverBus.$emit('resumeData', this.resumeData);
			},
		}
	};
</script>
