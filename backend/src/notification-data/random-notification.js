const notification = [
    {
        id:1,
        type: 'Admin',
        recipient:'643e86c2845f782297eafe47', // Jant
        sender:'643e86c2845f782297eafe4b', //Jiewen
        patient:'643e86c2845f782297eafe3b',
        entity: 'New Patient',
    },
    {
        id:2,
        type: 'Supervisor',
        recipient:'643e86c2845f782297eafe47',
        sender:'643e86c2845f782297eafe51', // Kevin
        patient:'643e86c2845f782297eafe3b',
        entity: 'Blood test needed',
    },
    {
        id:3,
        type: 'Admin',
        recipient:'643e86c2845f782297eafe49', //Zhiyan
        sender:'643e86c2845f782297eafe4b',
        patient: '643e86c2845f782297eafe3d',
        entity: 'Patient removed',
    },
    {
        id:4,
        type: 'Supervisor',
        recipient:'643e86c2845f782297eafe49', //Zhiyan
        sender:'643e86c2845f782297eafe51',
        patient: '643e86c2845f782297eafe3f',
        entity: 'Blood test done',
    },
    {
        id:5,
        type: 'Admin',
        recipient:'643e86c2845f782297eafe47', // Jant
        sender:'643e86c2845f782297eafe4b', //Jiewen
        patient:'643e86c2845f782297eafe3b',
        entity: 'Patient removed',
    },
]

export { notification };