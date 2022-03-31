export default {
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },

    mounted() {
        // console.log('миксины')
    }
}
