export const test = (fail: boolean = true) => {
    return new Promise((resolve, reject) => {
        if (fail) {
            reject();
        } else {
            resolve('this was a test');
        }
    });
};
