const forms = [
    {
        label: 'Email',
        placeholder: 'Enter your Email',
        name: 'email',
        type: 'email',
        fields: [
            {
                label: 'Email',
                name: 'Email',
                type: 'email',
                required: true,
            },
        ],
    },
    {
        label: 'Password',
        placeholder: 'Enter your Password',
        name: 'Password',
        type: 'password',
        fields: [
            {
                label: 'Password',
                name: 'Password',
                type: 'password',
                required: true,
            },
        ],
    },
    {
        label: 'Confirm Password',
        placeholder: 'Confirm your Password',
        name: 'Confirm Password',
        type: 'password',
        fields: [
            {
                label: 'Confirm Password',
                name: 'Confirm Password',
                type: 'password',
                required: true,
            },
        ],
    },
    {
        label: 'WhatsApp Number',
        placeholder: 'Enter your WhatsApp Number',
        name: 'WhatsappNumber',
        type: 'number',
        fields: [
            {
                label: 'WhatsApp Number',
                name: 'WhatsappNumber',
                type: 'number',
                required: true,
            },
        ],
    },
    {
        name: 'role',
        placeholder: 'Role',
        type: 'select',
        options: ['STUDENT', 'TASKER'],
        fields: [
            {
                label: 'Role',
                name: 'role',
                type: 'select',
                required: true,
            },
        ],
    },
];

export default forms;
