import { Product } from "../model/Product";

export const PRODUCTS: Product[] = [
    { id: 1, name: 'Hamburguesa con extra queso', description: '', price: 99, image: 'https://i.pinimg.com/originals/be/22/ab/be22ab5a37937dc3c93098350a275906.jpg', category: 1},
    { id: 2, name: 'Hamburguesa vegana', description: '', price: 135, image: 'https://media.metrolatam.com/2020/10/06/hamburguesa-f665b0e74023003c4d9aaaf8b7abc3f1-1200x0.jpg', category: 1},
    { id: 3, name: 'Gajos de papa', description: '', price: 49.50, image: 'https://3.bp.blogspot.com/-Wi68iCsSON4/VdxHZn_20_I/AAAAAAAAIRA/7l-44qwz94s/s1600/P8230131.JPG', category: 1},
    { id: 4, name: 'Enchiladas rojas o verdes', description: '', price: 80, image: 'https://i.pinimg.com/originals/d4/3f/53/d43f53aeeeb6b40c09fba3f050a8488b.jpg', category: 1},
    { id: 5, name: 'Frappe', description: '', price: 58, image: 'https://www.milesteaandcoffee.com/userfiles/article/5f5769209697b-frappe.jpg', category: 2},
    { id: 6, name: 'Capuchino', description: '', price: 32, image: 'https://th.bing.com/th/id/R.500976350bfcb79f20db27d9809c7849?rik=Bk59s9E4FWFmwA&riu=http%3a%2f%2ftrv-checkin.s3-eu-central-1.amazonaws.com%2fwp-content%2fuploads%2fsites%2f10%2f2015%2f10%2fzeal3.jpg&ehk=s1OBFUGI93sjxdU1HEviVjSMkiJSMRx6tkXfF1lS5G0%3d&risl=&pid=ImgRaw&r=0', category: 2},
    { id: 7, name: 'Naranjada', description: '', price: 45, image: 'https://th.bing.com/th/id/R.05b4a0f242403a4257680d2490857ab0?rik=V7WTXmSvOMqr8g&riu=http%3a%2f%2fcdn2.cocinadelirante.com%2fsites%2fdefault%2ffiles%2fstyles%2fgallerie%2fpublic%2fimages%2f2016%2f09%2fnaranjada.jpg&ehk=RMMpO3t%2bPNoBQ8qmo6GriYxc%2fFh1vfreIGnYqTME9x0%3d&risl=&pid=ImgRaw&r=0', category: 2},
    { id: 8, name: 'Horchata', description: '', price: 12, image: 'https://th.bing.com/th/id/R.fca94215598c70fbdedebdc38044aa21?rik=dmlKG1bAXCR6eQ&riu=http%3a%2f%2fres.cloudinary.com%2fculturemap-com%2fimage%2fupload%2far_4%3a3%2cc_fill%2cg_faces%3acenter%2cw_1200%2fv1509032913%2fphotos%2f73123_original.jpg&ehk=%2fvrWTsDjEpdJ1pkISCqbgIZ95PYg7LrILxIgooiUqGk%3d&risl=&pid=ImgRaw&r=0', category: 2},
    { id: 9, name: 'Flan napolitano con cajeta', description: '', price: 25, image: 'https://www.rebanando.com/uploads/article/87/a1/0b/8f/creamy-caramel-flan_exps2197_gpw2337930a12_09_2bc_rms.jpg?1509028429', category: 3},
    { id: 10, name: 'Pastel de chocolate', description: '', price: 40, image: 'https://th.bing.com/th/id/R.38aad42226d7a6ed76fa4028e09ff548?rik=hAjITNfVcdpdvw&pid=ImgRaw&r=0', category:3},
    { id: 11, name: 'Tiramisú', description: '', price: 28, image: 'https://th.bing.com/th/id/OIP.AV1m7tcxJ9xfh9SIYfWA4wHaHa?pid=ImgDet&rs=1', category: 3},
    { id: 12, name: 'Cheesecake de frutos rojos', description: '', price: 27, image: 'https://th.bing.com/th/id/OIP.Ps4LNicSKzD9lcTJYvOpwwHaFB?pid=ImgDet&rs=1', category: 3},
    { id: 13, name: 'Casco de motociclista', description: '', price: 599, image: 'https://i.ebayimg.com/images/i/173643389567-0-1/s-l1000.jpg', category: 4},
    { id: 14, name: 'Chaqueta de cuero', description: '', price: 329, image: 'https://telechollos.com/wp-content/uploads/2017/05/Australian-Bikers-Gear.jpg', category: 4},
    { id: 15, name: 'Guantes racing', description: '', price: 189, image: 'https://th.bing.com/th/id/OIP.aQjbbEFt1pv7UzsNkQzW0QHaHa?pid=ImgDet&rs=1', category: 4}
]


/*
1 = comida,
2 = bebida,
3 = postre,
4 = accesorio
*/