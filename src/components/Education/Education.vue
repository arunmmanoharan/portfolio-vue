<template>
    <section id='education'>
        <div class='row education'>
            <div class='two columns header-col'>
                <h1>
                    <span>Education</span>
                </h1>
            </div>
            <div class='ten columns main-col'>
                <EducationEntry v-for="(entry, index) in educationData" :key="`education-${index}`" :entry="entry"/>
            </div>
        </div>
    </section>
</template>

<script>
	import {serverBus} from '../../main';
	import EducationEntry from './EducationEntry';

	export default {
		name: 'Education',
		components: {EducationEntry},
		data() {
			return {
				educationData: []
			};
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.educationData = data.education;
			});
		}
	};
</script>
