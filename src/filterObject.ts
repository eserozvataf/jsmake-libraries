import objectAssign from 'ponyfills/objectAssign';

function filterObject(instance: any, predicate: (value: any, key?: any, instance?: any) => any): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (predicate(instance[itemKey], itemKey, obj)) {
                return objectAssign({}, obj, {
                    [itemKey]: instance[itemKey],
                });
            }

            return obj;
        },
        {},
    );
}

export {
    filterObject as default,
};
