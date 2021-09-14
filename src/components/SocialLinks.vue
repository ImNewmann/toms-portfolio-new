<template>
    <div class="social-links">
        <a href="https://www.instagram.com/tompnewman/" target="_blank">
            <InstagramIcon class="social-links__icon" />
        </a>
        <span>/</span>
        <a href="https://twitter.com/TomD1abloNewman" target="_blank">
            <TwitterIcon class="social-links__icon" />
        </a>
    </div>
</template>

<script>
import InstagramIcon from '@/assets/svg/instagram.svg';
import TwitterIcon from '@/assets/svg/twitter.svg';

export default {
    name: 'SocialLinks',
    components: {
        InstagramIcon,
        TwitterIcon,
    },
};
</script>

<style lang="scss">
.social-links {
    display: flex;
    text-align: center;
    cursor: pointer;

    a,
    span {
        display: flex;
        flex-direction: column;
    }

    &__icon {
        width: 20px;
        margin-top: 2px;
        fill: $white;
        transition: all 0.3s ease;

        .page & {
            fill: $black;
        }

        &:hover {
            transform: scale(1.05);
            fill: $pink;
        }
    }
}
</style>
