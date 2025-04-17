export const formFile = [
    {
        id: '1',
        type: 'text',
        value: 'Abhay',
        condition: {
            minLength: 5
        },
        action: null,
        required: true,
        items: []
    },
    {
        id: '2',
        type: 'text',
        value: 'Gupta',
        condition: {
            minLength: 5
        },
        action: null,
        required: true,
        items: []
    },
    {
        id: '3',
        type: 'singleSelect',
        value: 'Choose Item',
        condition: {},
        action: () => {
            console.log('single select is changed')
        },
        required: true,
        items: ['value 1', 'value 2', 'value 3', 'value 4', 'value 5']
    },
    {
        id: '6',
        type: 'singleSelect',
        value: 'Select any option',
        condition: {},
        action: () => {
            console.log('single select is changed')
        },
        required: true,
        items: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5']
    },
    {
        id: '4',
        type: 'multiSelect',
        value: 'Choose Multiple Items',
        condition: {
            minItems: 2
        },
        action: () => {
            console.log('multi select is changed')
        },
        required: true,
        items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
    },
    {
        id: '7',
        type: 'multiSelect',
        value: 'Choose Multiple Items',
        condition: {},
        action: null,
        required: true,
        items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
    },
    {
        id: '5',
        type: 'button',
        value: 'Submit',
        action: () => {
            alert('Form has been submitted succcessfully!!!')
        },
        required: false,
        items: []
    }
];