export const ADMIN_FULL = {
    username: "admin1",
    password: "123456",
    permission: [
        {
            tab: "Home",
            path: "/",
            type: "item"
        },
        {
            tab: "List bill",
            path: "/bill",
            type: "item",

        },
        {
            tab: "Food manage",
            path: "/food",
            type: "submenu",
            child: [
                {
                    tab: "List food",
                    path: "list-food",
                    type: "item"
                },
                {
                    tab: "Add food",
                    path: "add-food",
                    type: "item"
                }
            ]
        },
        {
            tab: "Category manage",
            path: "/category",
            type: "submenu",
            child: [
                {
                    tab: "List category",
                    path: "list-category",
                    type: "item"
                },
                {
                    tab: "Add category",
                    path: "add-category",
                    type: "item"
                }
            ]
        },
    ]
}

export const KPI = [
    {
        month: 1,
        target: 50000000,
        total: 2000000
    },
    {
        month: 2,
        target: 50000000,
        total: 3000000
    },
    {
        month: 3,
        target: 50000000,
        total: 2500000
    },
    {
        month: 4,
        target: 50000000,
        total: 4000000
    },
    {
        month: 5,
        target: 50000000,
        total: 3500000
    },
    {
        month: 6,
        target: 50000000,
        total: 1500000
    },
    {
        month: 7,
        target: 50000000,
        total: 4500000
    }
];

export const ListBillDummy = [
    {
        idBill: "1",
        customerName: "A",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    },
    {
        idBill: "2",
        customerName: "B",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    },
    {
        idBill: "2",
        customerName: "B",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    },
    {
        idBill: "2",
        customerName: "B",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    },
    {
        idBill: "2",
        customerName: "B",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    },
    {
        idBill: "2",
        customerName: "B",
        product : [
            {
                idProduct: 10,
                productName: "X",
                price: 50000,
                quantity: 1,
                image: ""
            },
            {
                idProduct: 11,
                productName: "Y",
                price: 50000,
                quantity: 1,
                image: ""
            }
        ],
        total: 100000,
        address: "123 abc",
        phoneNum: "123456789"
    }
]
