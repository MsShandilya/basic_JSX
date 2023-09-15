// npm install lodash
import { debounce } from "lodash";

export default debounce = (callback) => {
    clearTimeout();
    setTimeout(()=>{
        callback();
    }, 3000);
};