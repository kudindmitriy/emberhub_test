import db from '../../../firebase';

export default {
    actions: {
        async fetchFields({commit}) {
            const res = await db.collection('fields').get();
            let fields = {};

            res.docs.forEach(function (doc) {
                fields[doc.data().name] = doc.data().value
            })

            commit('updateFields', fields)
            commit('loadingStop')
        },
        async saveField({commit}, {name, value}) {

            commit('loadingStart')
            await db.collection('fields').doc(name).set({
                name,
                value
            });

            commit('loadingStop')
        },
        async delCollection({commit}) {
            commit('loadingStart')

            await db.collection('fields').get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref.update({
                        value: ''
                    });
                });
            });

            commit('emptyFields')
            commit('loadingStop')
        }
    },
    mutations: {
        updateFields(state, fields) {
            state.fields = fields
        },
        emptyFields(state) {
            state.fields = {}
        },
        loadingStop(state) {
            state.loading = false
        },
        loadingStart(state) {
            state.loading = true
        }
    },
    state: {
        fields: {},
        loading: true
    },
    getters: {
        allFields(state) {
            return state.fields
        },
        loading(state) {
            return state.loading
        }
    }
}