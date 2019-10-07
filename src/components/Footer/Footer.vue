<template>
    <footer>
        <div class='row'>
            <div class='twelve columns'>
                <SocialMedia :ulClass="'social-links'"/>
            </div>
            <div id='go-top'>
                <a class='smoothscroll' title='Back to Top' href='#home'>
                    <i class='icon-up-open'></i>
                </a>
            </div>
        </div>
    </footer>
</template>
<script>
	import SocialMedia from '../SocialMedia/SocialMedia';

	export default {
		name: 'Footer',
		components: {SocialMedia}
	};
</script>
