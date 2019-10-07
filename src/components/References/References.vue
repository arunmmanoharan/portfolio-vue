<template>
    <section id='references'>
        <div class='text-container'>
            <div class='flexslider'>
                <carousel :navigationEnabled="true" :loop="true" :perPage="1" :perPageCustom="[[480, 1], [768, 2]]" paginationActiveColor="#157DEC" easing="linear" autoplay="true">
                    <slide v-for="(entry, index) in referencesData" :key="`entry-${index}`">
                        <ReferencesEntry :entry="entry"/>
                    </slide>
                </carousel>
            </div>
        </div>
    </section>
</template>

<script>
	import {serverBus} from '../../main';
	import ReferencesEntry from './ReferencesEntry';

	export default {
		name: 'References',
		components: {ReferencesEntry},
		data() {
			return {
				referencesData: []
			};
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.referencesData = data.references;
			});
		}
	};
</script>
