<template>
<div>
    <p class='point' v-for="(point, index) in points" :key="`point-${index}`">
        <span class='bullet-point'>&bull; </span>
        {{point}}
    </p>
</div>
</template>

<script>
	export default {
		name: 'Bulletpoints',
		props: ['points']
	};
</script>
