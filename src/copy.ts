import assign from 'ponyfills/assign';

function copy(instance: any): any {
    const Type: any = instance.constructor;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                return assign(new Type(), obj, {
                    [itemKey]: copy(instance[itemKey]),
                });
            }

            return assign(new Type(), obj, {
                [itemKey]: instance[itemKey],
            });
        },
        new Type(),
    );
}

export {
    copy as default,
};
