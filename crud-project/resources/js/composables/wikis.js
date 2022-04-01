import {ref} from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useWikis() {
    const wikis = ref( [] );
    const wiki = ref([]);
    const router = useRouter();
    const errors = ref('');

    const getWikis = async() => {
        let response = await axios.get( '/api/wikis' );
        wikis.value = response.data.data;
    };

    const getWiki = async (id) => {
        let response = await axios.get('/api/wikis/' + id);
        wiki.value = response.data.data;
    };

    const storeWiki = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/wikis', data);
            await router.push({name: 'wikis.index'});
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const updateWiki = async (id) => {
        errors.value = '';
        try {
            await axios.put('/api/wikis/' + id, wiki.value);
            await router.push({name: 'wikis.index'});
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyWiki = async (id) => {
        await axios.delete('/api/wikis/' + id);
    };

    return {
        wikis,
        wiki,
        errors,
        getWikis,
        getWiki,
        storeWiki,
        updateWiki,
        destroyWiki
    };
}
