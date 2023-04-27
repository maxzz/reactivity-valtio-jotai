export type FieldInForm = {
    type: string;
    disp: string;
    value: string;
};

export type FormVjInputs = {
    name: string,
    firstName: string,
    lastName: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
    details: string;
    fields: FieldInForm[];
};

export const formVjDefaultValues: FormVjInputs = {
    name: 'Max Z.',
    firstName: 'Max',
    lastName: '',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
    details: 'Some additional details',
    fields: [],
};

//

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export const selectOptions: SelectOption[] = [
    { label: 'Mr', value: 'Mr' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' },
    { label: 'Dr', value: 'Dr' },
];

