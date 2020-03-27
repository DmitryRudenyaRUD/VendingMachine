const initialState = [
        {
            title: 'Cola',
            descriptor: 'Cold drink',
            coast: 130
        },
        {
            title: 'Evian',
            descriptor: 'Water',
            coast: 90,
        },
        {
            title: 'Durex',
            descriptor: 'Condoms',
            coast: 600,
        },
        {
            title: 'Snickers',
            descriptor: 'Choco bar',
            coast: 105,
        },
        {
            title: 'Wagon Wheels',
            descriptor: 'Choco cookies',
            coast: 165,
        },
        {
            title: 'WTF, Alice?',
            descriptor: 'I don\'t know',
            coast: 200,
        },
        {
            title: 'Fanta',
            descriptor: 'Cold drink',
            coast: 130,
        },
    ];

export const products = (state = initialState) => {
    return initialState;
};

export const prices = initialState.reduce( (obj, item, ind) => {
        obj[ind + 1] = item.coast;
        return obj;
    }, {});
