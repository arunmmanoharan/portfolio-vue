<template>
    <section id='skill'>
        <div class='row skill'>
            <div class='two columns header-col'>
                <h1>
                    <span>Skills</span>
                </h1>
            </div>
            <div class='ten columns main-col'>
                <Skill :title="'Programming Languages'" :content="programmingSkills" :summary="programmingSummary"/>
            </div>
        </div>
    </section>
</template>

<script>
	import {serverBus} from '../../main';
	import {reduce} from 'lodash';
	import Skill from './Skill';

	const filterSkills = (input, filter) => {
		const reduced = reduce(input, (previousValue, currentValue) => {
			return {
				output: currentValue.keywords.indexOf(filter) === -1 ? previousValue.output : previousValue.output.concat(currentValue),
				filter
			};
		}, {
			output: [],
			filter
		});
		return reduced.output;
	};

	export default {
		name: 'Skills',
		components: {Skill},
		data() {
			return {
				skillsData: [],
				programmingSummary: [
					'Worked primarily with JavaScript and its related frameworks like React.js, Angular, AngularJS and Node.js',
					'Interested in functional programming and serverless architectures, exploring with new JavaScript frameworks respectively.'
				],
				programmingSkills: {}
			};
		},
		created() {
			// Using the server bus
			serverBus.$on('resumeData', (data) => {
				this.skillsData = data.skills;
				this.programmingSkills = filterSkills(this.skillsData, 'programming');
			});
		}
	};
</script>
