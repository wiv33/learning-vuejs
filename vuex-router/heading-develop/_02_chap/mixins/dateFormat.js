export const dateFormat = {
    created() {
        window.console.log(`i am mixin`);
    },
    data() {
        return {
            mixinData: `i'm Mixin`
        }
    },
    methods: {
        getDateAndTime(dateParam) {
            if (dateParam === null) {
                return null;
            }
            let hour = dateParam.getHours();
            let minutes = dateParam.getMinutes();
            const fullDate = `${dateParam.getFullYear()}-${dateParam.getMonth() + 1}-${dateParam.getDate()}`;
            return `${fullDate} ${hour}:${minutes}`
        }
    }
};