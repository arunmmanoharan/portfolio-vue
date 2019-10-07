<template>
    <section id='work'>
        <div class='row work'>
            <div class='two columns header-col'>
                <h1>
                    <span>Work</span>
                </h1>
            </div>
            <div class='ten columns main-col'>
                <WorkEntry v-for="(work, index) in workData" :key="`work-${index}`" :index="index" :entry="work"
                           :total="workData.length"/>
            </div>
        </div>
    </section>
</template>
<script>
	import WorkEntry from './WorkEntry';
	import {serverBus} from '../../main';

	export default {
		name: 'Work',
		components: {WorkEntry},
		data() {
			return {
				workData: []
			};
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.workData = data.work;
			});
		}
	};
</script>
