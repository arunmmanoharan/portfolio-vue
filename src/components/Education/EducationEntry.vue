<template>
    <div class='row item'>
        <div class='twelve columns'>
            <h3>{{entry.institution}}</h3>
            <p class='info'>
                {{entry.area}}
                <span> &bull; </span>
                <span class='info-summary'>{{entry.summary}}</span>
                <span> &bull; </span>
                <em class='date'>{{startDate}} - {{endDate}}</em>
            </p>
        </div>
    </div>
</template>

<script>
	import Datetime from '../../constants/dateTime';

	export default {
		name: 'EducationEntry',
		props: ['entry'],
		data() {
			return {
				startDate: Datetime.getDisplayFromDate(this.entry.startDate),
				endDate: Datetime.getDisplayFromDate(this.entry.endDate)
			};
		}
	};
</script>
