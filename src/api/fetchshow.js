import axios from 'axios';

export const fetchShow = async () => {
    try {
        const res = await axios
            .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes");
        return res;
    }
    catch (err) {
        console.log('fetching api', err);
        return err;
    }
  };