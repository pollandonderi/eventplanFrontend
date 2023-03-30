export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    offer:boolean;
    url:any;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Journal',
      price: 799,
      description: 'EXCECUTIVE NOTEBOOK',
      url:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      offer:true
    },
    {
      id: 2,
      name: 'HEELS',
      price: 699,
      description: 'A great phone with one of the best cameras',
      url:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      offer:false
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'A great phone with a good camera',
      url:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      offer:true
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: 'A great phone with a good camera',
      url:"https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      offer:true
    }
  ];