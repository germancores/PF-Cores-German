export const products = [
    {
      id: 1,
      name: 'Consola Sony Playstation 5 Edición Fisica (con lectora) Bundle GOW Digital PS5',
      stock: 10,
      price: 1000000,
      category: 'console',
      description: 'Experimentá una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de increíbles juegos de PlayStation®.',
      img: 'https://arsonyb2c.vtexassets.com/arquivos/ids/362074/PlayStation-5-DualShock.jpg?v=638162215101070000',
    },
    {
      id: 2,
      name: 'Joystick Sony Playstation 5 Dualsense Gray Camouflage PS5',
      stock: 15,
      category: 'joystick',
      price: 150000,
      description:
        'Descubre una experiencia de juego más intensa e inmersiva con el innovador control de PS5™',
      img: 'https://outtec.com.ar/wp-content/uploads/2023/11/61nWgbb29L._AC_SL1500_.jpg',
    },
    {
      id: 3,
      name: 'Juego Playstation 5 Baldurs Gate 3 PS5',
      stock: 20,
      category: 'game',
      price: 100000,
      description:
        'Deja tu marca en los Reinos Olvidados en esta aventura cinemática por turnos al mejor estilo de Calabozos y Dragones.',
      img: 'https://nextgames.com.ar/img/Public/1040/47412-producto-untitled.jpg',
    },
  ];
  export const productosFail = [];
    
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error('Products is empty'));
      }
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          products.find((product) => product.id.toString() === id.toString())
        );
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
      }, 2000);
    });
  };
  