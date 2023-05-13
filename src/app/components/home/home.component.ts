import { Component, OnInit } from '@angular/core';
import { Circuito } from 'src/app/models/circuito';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo:String = 'Circuitos de Senderismo';
  circuitos: Circuito[] = [
    {
      id: '1',
      name: 'Cerro de los Siete Colores',
      descripcion: 'Un circuito que te lleva a través de los paisajes más coloridos de la Quebrada de Humahuaca.',
      preview: 'Disfruta de los colores de la Quebrada de Humahuaca en este circuito de senderismo.',
      dificultad: 'Moderado',
      desnivel: 500,
      duracion: 6,
      create_date: new Date('2022-10-01'),
      operable: true,
      distancia: 12,
      region: 'Quebrada de Humahuaca',
      fotos: ['https://example.com/foto1.jpg', 'https://example.com/foto2.jpg', 'https://example.com/foto3.jpg']
    },
    {
      id: '2',
      name: 'Cascada del Río Yala',
      descripcion: 'Un circuito que te lleva a través de la selva de las Yungas hasta la impresionante cascada del Río Yala.',
      preview: 'Descubre la belleza de la selva de las Yungas y la cascada del Río Yala en este circuito de senderismo.',
      dificultad: 'Difícil',
      desnivel: 800,
      duracion: 8,
      create_date: new Date('2022-11-15'),
      operable: false,
      distancia: 18,
      region: 'Yungas',
      fotos: ['https://example.com/foto4.jpg', 'https://example.com/foto5.jpg', 'https://example.com/foto6.jpg']
    },
    {
      id: '3',
      name: 'Cerro Chañi',
      descripcion: 'Un circuito que te lleva a la cima del Cerro Chañi, la montaña más alta de la provincia de Jujuy.',
      preview: 'Desafía tus límites y llega a la cima del Cerro Chañi en este circuito de senderismo.',
      dificultad: 'Muy difícil',
      desnivel: 1200,
      duracion: 12,
      create_date: new Date('2022-12-20'),
      operable: true,
      distancia: 24,
      region: 'Puna',
      fotos: ['https://example.com/foto7.jpg', 'https://example.com/foto8.jpg', 'https://example.com/foto9.jpg']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
