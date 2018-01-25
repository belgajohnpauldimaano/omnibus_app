
export const SAMPLE_ACTION = 'SAMPLE_ACTION';

export const SampleAction = (sample_params) => {
    return {
        type : 'SAMPLE_ACTION',
        // data : 'helllllloooooo'
        payload : {
            sample_id   : '123',
            sample_text : sample_params
        }
    };
}

export const SELECT_PROJECT_ACTION = 'SELECT_PROJECT_ACTION';

export const SelectProjectAction = (project) => {
    return {
        type : 'SELECT_PROJECT_ACTION',
        payload : { project : project }
    };
}
