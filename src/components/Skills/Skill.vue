<template>
    <div class='row inside'>
        <h3>{{title}}</h3>
        <p v-for="(point, index) in summary" :key="`summary-${index}`" class='skill-summary'>{{point}}</p>
        <div class='bars'>
            <ul class='skills'>
                <SkillEntry v-for="(entry, index) in content" :key="`entry-${index}`" :entry="entry"/>
            </ul>
        </div>
    </div>
</template>

<script>
	import SkillEntry from './SkillEntry';

	export default {
		name: 'Skill',
		components: {SkillEntry},
		props: ['content', 'summary', 'title']
	};
</script>
