import { fail, type Actions } from '@sveltejs/kit';

// these actions should work on every page within the current file tree
export const actions: Actions = {
    async subscribeNews() {
        if (Math.random() > 0.8) {
            return fail(400, { success: false });
        }
        return { success: true };
    },
};
