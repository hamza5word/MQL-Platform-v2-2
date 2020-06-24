/* Global data source table for HomeComponent */

let dbHomestats1 = [
    {
        title : 'Insertion Professionnelle entre 2015 et 2019',
        type : 'bar',
        labels : ['CAPGEMINI','CGI','CEGEDIM','UMANIS','ATOS','S2M','SGATS','ACCENTURE','SQLi','HPS','LNet Communication','Logic Group','Sopra Steria','BDSI Maroc','FEDASO'],
        dataSet :
            [
                {
                    label: 'Nombre/Société',
                    data:[71,44,7,7,6,3,1,1,1,1,1,1,1,1,1],
                    backgroundColor:'rgb(53, 69, 108)',
                    borderColor:'rgb(216, 49, 57)',
                    borderWidth: 1
                }
            ]
    },
    {
        title : 'Insertion définitive par rapport à l\'insertion en stage et le nombre des étudiatns',
        type : 'bar',
        labels : ['2009','2011','2012','2013','2014','2015','2016','2017'],
        dataSet : [
            {
                label:'Nombre d\'étudiants',
                data:[20,39,26,32,40,30,36,34],
            },
            {
                label:'Insertion en stage',
                data:[5,15,10,15,23,30,33,33],
                backgroundColor:'rgb(216, 49, 57)',
                borderColor:'rgb(53, 69, 108)',
            },
            {
                label:'Insertion Définitive',
                data:[4,13,9,12,22,27,32,31],
                backgroundColor:'rgb(53, 69, 108)',
                borderColor:'rgb(216, 49, 57)',
            }
        ],
    },
    {
        title:'',
        type:'pie',
        labels:['Contrat CDI',''],
        dataSet :[
            {
                label: 'Nombre/Société',
                data: [147,13],
                backgroundColor:'rgb(53, 69, 108)',
                borderColor:'rgb(216, 49, 57)',
                borderWidth: 1,
            }
        ]
    },
];

let dbHomeImages = [
    'resources/pictures/Home/presentationimage.png',
    'resources/pictures/App/mqlfam.jpg',
];

var dbStudents = [
    {
        promotion: 'M1',
        data: [
                {
                    id: 1,
                    firstName: 'jaouad',
                    lastName: 'ait assou',
                },
                {
                    id: 2,
                    firstName: 'ale',
                    lastName: 'ennouinou',
                },
                {
                    id: 3,
                    firstName: 'hamza',
                    lastName: 'ismaili alaoui',
                },
                {
                    id: 4,
                    firstName: 'bla bla',
                    lastName: 'bla bla bla',
                },
                {
                    id: 5,
                    firstName: 'jaouad',
                    lastName: 'ait assou',
                },
                {
                    id: 6,
                    firstName: 'alae',
                    lastName: 'ennouinou',
                },
                {
                    id: 7,
                    firstName: 'hamza',
                    lastName: 'ismaili alaoui',
                },
                {
                    id: 8,
                    firstName: 'bla bla',
                    lastName: 'bla bla bla',
                },
        ]

    },
    {
        promotion: 'M2',
        data: [
                {
                    id: 1,
                    firstName: 'm21',
                    lastName: 'm21 m21',
                },
                {
                    id: 2,
                    firstName: 'm22',
                    lastName: 'm22 m22',
                },
                {
                    id: 3,
                    firstName: 'm23',
                    lastName: 'm23 m23',
                },
                {
                    id: 4,
                    firstName: 'm24',
                    lastName: 'm24 m24',
                },
        ]

    }
];
