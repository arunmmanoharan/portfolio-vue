<template>
    <div class="centerReferences">
        <h3 :style="{color: 'white'}">{{entry.name}}</h3>
        <h4 :style="{color: 'white'}">{{entry.company}}</h4>
        <p>{{entry.reference}}</p>
    </div>
</template>

<script>
	export default {
		name: 'ReferencesEntry',
		props: ['entry']
	};
</script>
