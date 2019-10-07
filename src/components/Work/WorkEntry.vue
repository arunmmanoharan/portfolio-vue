<template>
    <div class='row item'>
        <div class='twelve columns'>
            <h3>
                <a href="entry.website">{{entry.company}}</a>
            </h3>
            <p class='info'>
                {{entry.position}}
                <span> &bull; </span>
                <span class='info-summary'>{{entry.summary}}</span>
                <span> &bull; </span>
                <em class='date'>{{startDate}} - {{endDate}}</em>
            </p>
            <p class="info ">{{entry.description}}</p>
            <Bulletpoints :points="entry.highlights"></Bulletpoints>
        </div>
        <br v-if="indexProperty === total"/>
        <hr v-if="indexProperty !== total"/>
    </div>
</template>

<script>
	import Bulletpoints from './Bulletpoints';
	import Datetime from '../../constants/dateTime';

	export default {
		name: 'WorkEntry',
		props: ['index', 'total', 'entry'],
		components: {Bulletpoints},
		data: function () {
			return {
				startDate: Datetime.getDisplayFromDate(this.entry.startDate),
				endDate: Datetime.getDisplayFromDate(this.entry.endDate),
				indexProperty: this.index + 1
			};
		},
	};
</script>
