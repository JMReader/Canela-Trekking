import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Style } from '../models/style';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // circuitos: Circuito[] = [];
  styles: Style[] = [];
  all: Style = new Style(
    'Todos',
    'rgba(120, 134, 169, 0.95)',
    'rgb(179, 216, 255)',
    'rgb(37, 115, 153)',
    'rgba(209, 229, 248, 0.8)',
    '#9fb9c5',
    'rgb(150, 153, 231)',
    'rgba(37, 114, 153, 0.8)',
    'rgba(54, 135, 175, 0.8)',
    'url("../../../assets/backgroundAll.webp")'
  );
  puna: Style = new Style(
    'Puna',
    'rgba(213, 165, 76, .95)',
    'rgb(90, 74, 20)',
    'rgb(181, 166, 129)',
    'rgba(223, 202, 164, 0.8)',
    '#ffffff',
    'rgb(44, 44, 44)',
    'rgb(181, 166, 129, .8)',
    'rgba(197, 166, 87, 0.8)',
    'url(https://t1.ev.ltmcdn.com/es/posts/5/8/7/puna_que_es_caracteristicas_flora_y_fauna_2785_orig.jpg)'
  );
  valle: Style = new Style(
    'Valle',
    'rgba(71, 150, 63, .95)',
    'rgb(90, 74, 20)',
    'rgb(143, 114, 44)',
    'rgba(169, 139, 47, 0.8)',
    '#077200',
    'rgb(99, 189, 0)',
    'rgb(143, 114, 44, .8)',
    'rgba(46, 188, 39, 0.8)',
    'url(https://leerdelviaje.com/wp-content/uploads/2017/06/20200922_162852-scaled.jpg)'
  );
  yunga: Style = new Style(
    'Yungas',
    'rgba(90, 250, 82, 0.95)',
    'olive',
    'rgb(43, 153, 37)',
    'rgba(191, 252, 188, 0.8)',
    '#edba2d',
    'rgb(128, 240, 137)',
    'rgba(43, 153, 37, .8)',
    'rgba(46, 188, 39, 0.8)',
    'url(https://cdn.agroempresario.com/images/posts/e01609cbea4d79d78388fb811fbef50068f23577103c9af6_840.jpg)'
  );
  quebrada: Style = new Style(
    'Quebrada',
    'rgba(218, 83, 30, 0.95)',
    'rgb(90, 74, 20)',
    'rgb(191, 124, 54)',
    'rgba(229, 146, 113, 0.8)',
    '#b9d7ff',
    'rgb(249, 78, 40)',
    'rgb(191, 124, 54, .8)',
    'rgba(200, 127, 48, 0.8)',
    'url(https://www.norte.com/img/2018/09/purmamarca.jpg)'
  );
  //private _http: HttpClient
  constructor() {}
  public getStyles(): any {
    this.styles.push(this.all);
    this.styles.push(this.puna);
    this.styles.push(this.valle);
    this.styles.push(this.yunga);
    this.styles.push(this.quebrada);
    return this.styles;
  }
//   public getCircuits(): any {
//     this.circuitos = [
//       {
//         id: '0',
//         name: 'De Tilcara a San Francisco: Travesia entre dos Secretos Naturales ',
//         descripcion:
//           "  aaaaaaaaaa"
//       ,


//         preview:
//           'Disfruta de los colores de la Quebrada de Humahuaca en este circuito de senderismo.',
//         dificultad: 'alta',
//         desnivel: 500,
//         duracion: 96,
//         create_date: new Date('2022-10-01'),
//         operable: true,
//         distancia: 64,
//         region: 'Quebrada',
//         photos: [
//           'assets/TIL-SF/horizontal (4).jpg',
//           'assets/TIL-SF/horizontal (5).jpg',
//           'assets/TIL-SF/horizontal (6).jpg',
//           'assets/TIL-SF/horizontal (7).jpg',
//           'assets/TIL-SF/horizontal (8).jpg',
//           'assets/TIL-SF/horizontal (9).jpg',
//         ],
//       },
//       {
//         id: '2',
//         name: 'Cascada del Río Yala',
//         descripcion:
//           'Un circuito que te lleva a través de la selva de las Yungas hasta la impresionante cascada del Río Yala.',
//         preview:
//           'Descubre la belleza de la selva de las Yungas y la cascada del Río Yala en este circuito de senderismo.',
//         dificultad: 'Difícil',
//         desnivel: 800,
//         duracion: 8,
//         create_date: new Date('2022-11-15'),
//         operable: false,
//         distancia: 18,
//         region: 'Yungas',
//         photos: [
//           'https://wallpapercave.com/wp/wp4815672.jpg',
//           'https://img.freepik.com/foto-gratis/puesta-sol-siluetas-arboles-montanas-ia-generativa_169016-29371.jpg',
//           'https://marketplace.canva.com/EAFGKWZ7S3c/1/0/1600w/canva-fondo-de-pantalla-caritas-felices-aesthetic-gradiente-morado-y-rosa-yuWW9A_crYQ.jpg',
//         ],
//       },
//       {
//         id: '3',
//         name: 'Cerro Chañi',
//         descripcion:
//           'Un circuito que te lleva a la cima del Cerro Chañi, la montaña más alta de la provincia de Jujuy.',
//         preview:
//           'Desafía tus límites y llega a la cima del Cerro Chañi en este circuito de senderismo.',
//         dificultad: 'Muy difícil',
//         desnivel: 1200,
//         duracion: 12,
//         create_date: new Date('2022-12-20'),
//         operable: true,
//         distancia: 24,
//         region: 'Puna',
//         photos: [
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-7TURNaT5eAWqyS1Y-kOqr3z8gEon5iQhb18_x6P1g&s',
//           'https://wallpapers.com/images/hd/horizontal-pictures-1920-x-1200-7ne2qtwzubx64ssl.jpg',
//           'https://wallpapercave.com/wp/wp5219551.jpg',
//         ],
//       },
//     ];

//     return this.circuitos;
//   }
 }
