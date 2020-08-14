<template>
  <form @submit.prevent="submit">
    <progress-bar
        :options="options"
        :value="percent"
    />
    <input type="text" placeholder="title" v-model="formState.title" @blur="updateField('title', formState.title)">
    <input type="text" placeholder="body" v-model="formState.body" @blur="updateField('body', formState.body)">
    <input type="text" placeholder="name" v-model="formState.name" @blur="updateField('name', formState.name)">
    <input type="text" placeholder="surname" v-model="formState.surname" @blur="updateField('surname', formState.surname)">
    <input type="text" placeholder="patronymic" v-model="formState.patronymic" @blur="updateField('patronymic', formState.patronymic)">

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import db from '../../firebase.js';

export default {
  data() {
    return {
      formState: {
        title: "",
        body: "",
        name: "",
        surname: "",
        patronymic: ""
      }
    };
  },
  methods: {
    submit() {
      this.formState.title = this.formState.body = this.formState.name = this.formState.surname = this.formState.patronymic = "";
    },
    updateField(name, value) {
      if (value.trim()) {
        db.collection('fields').doc(name).set({
          name,
          value
        })
      }
    }
  },
  computed: {
    percent() {
      const formLength = Object.keys(this.formState).length;
      const fillFieldsCount = Object.values(this.formState).filter(field => field !== "").length;

      return ( fillFieldsCount / formLength ) * 100
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
          width: 400,
          verticalTextAlign: 71,
          horizontalTextAlign: 49,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: 'line'
        }
      }
    },
  }
};
</script>

<style scoped>
input {
  display: block;
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
}
</style>

