

export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'fName',
            type: 'string',
            title: 'FirstName',
        },
        {
            name: 'surName',
            type: 'string',
            title: 'LastName',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',

        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'zipCode',
            type: 'string',
            title: 'ZipCode',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
    {
        name: 'phone',
        type: 'string',
        title: 'Phone',
    },
    {
        name: 'discount',
        type: 'number',
        title: 'Discount',
    },
    {
        name: 'cartItems',
        type: 'array',  
        title: 'CartItems',
        of: [{type: 'reference', to: {type: 'product'}}]
    },
    {
        name: 'total',
        type: 'number',
        title: 'TotalPrice',
    },
    {
        name: 'status',
        type: 'string',
        title: 'OrderStatus',
        options:{
            list: [
                {title: 'Processing', value: 'Processing'},
                {title: 'Shipped', value: 'Shipped'},
                {title: 'Delivered', value: 'Delivered'},
                {title: 'Cancelled', value: 'Cancelled'},
            ],
            layout: 'radio'
        },
initialValue : 'Pending',
        },
        
    
    ]
}