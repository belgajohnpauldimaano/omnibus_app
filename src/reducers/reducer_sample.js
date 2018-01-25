import {SAMPLE_ACTION} from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case 'SAMPLE_ACTION':
            console.log(action.payload);
            return action.payload;
        default:
            return {
                sample_id   : 'x',
                sample_text : 'x'
            };
    }
}
