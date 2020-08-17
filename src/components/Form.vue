<template>
    <Loader v-if="loading"/>
    <form v-else @submit.prevent="submit">
        <progress-bar
                :options="options"
                :value="percent || 0"
        />
        <label>
            <input
                    type="text"
                    placeholder="title"
                    v-model="allFields.title"
                    @blur="saveField({name: 'title', value: allFields.title})"
            >
        </label>
        <label>
            <input
                    type="text"
                    placeholder="body"
                    v-model="allFields.body"
                    @blur="saveField({name: 'body', value: allFields.body})"
            >
        </label>
        <label>
            <input
                    type="text"
                    placeholder="name"
                    v-model="allFields.name"
                    @blur="saveField({name: 'name', value: allFields.name})"
            >
        </label>
        <label>
            <input
                    type="text"
                    placeholder="surname"
                    v-model="allFields.surname"
                    @blur="saveField({name: 'surname', value: allFields.surname})"
            >
        </label>
        <label>
            <input
                    type="text"
                    placeholder="patronymic"
                    v-model="allFields.patronymic"
                    @blur="saveField({name: 'patronymic', value: allFields.patronymic})"
            >
        </label>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Loader from '@/components/Loader'

export default {
    components: {
        Loader
    },
    mounted() {
        this.fetchFields()
    },
    methods: {
        ...mapActions(['saveField', 'fetchFields', 'delCollection']),
        submit() {
            this.delCollection();
        }
    },
    computed: {
        ...mapGetters(['allFields', 'loading']),
        percent() {
            const formLength = Object.keys(this.allFields).length;
            const fillFieldsCount = Object.values(this.allFields).filter(field => field !== "").length;

            return (fillFieldsCount / formLength) * 100
        },
        options() {
            return {
                text: {
                    color: '#FFFFFF',
                    shadowEnable: true,
                    shadowColor: '#000000',
                    fontSize: 14,
                    fontFamily: 'Helvetica',
                    dynamicPosition: false,
                    hideText: false
                },
                progress: {
                    color: '#2dbd2d',
                    backgroundColor: '#333333'
                },
                layout: {
                    height: 25,
                    width: 450,
                    verticalTextAlign: 71,
                    horizontalTextAlign: 49,
                    zeroOffset: 0,
                    strokeWidth: 30,
                    progressPadding: 0,
                    type: 'line'
                }
            }
        }
    }
};
</script>

<style scoped>
input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    width: 100%;
    margin: 10px auto 0 auto;
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 15px;
    border: 2px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
    cursor: pointer;
}

#progress-bar-line {
    width: 100%;
    margin-bottom: 15px;
}
</style>

