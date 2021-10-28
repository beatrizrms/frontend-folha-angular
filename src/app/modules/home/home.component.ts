import { Component, OnInit } from '@angular/core';
import { IGroupNews, INew } from '../../models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsCarousel: INew[] = [
    {
      img: "../assets/images/image_rotate.png",
      title: "Mussum ipsum cacilds",
      description: "Pra lá, depois divoltis porris, paradis. Paisis, filhis, espiritis santis",
      imgdescription: "Descrição da imagem"
    }
  ];

  topNews: IGroupNews[] = [
    {
      name: "top cacilds",
      news: [
        {
          img: "../assets/images/highlight-01.png",
          title: "pindureta",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/highlight-02.png",
          title: "bolis",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/highlight-03.png",
          title: "sapien",
          imgdescription: "Descrição da imagem"
        },
      ]
    }
  ];

  sections: IGroupNews[] = [
    {
      name: "divoltis porris",
      news: [
        {
          img: "../assets/images/divoltis_porris-01.png",
          title: "consetis",
          description: "Manduma pindureta quium dia nois paga. Sapien in monti palavris ",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/divoltis_porris-02.png",
          title: "aenean",
          description: "Quem num gosta di mé, boa gentis num é. Praesent vel viverra nisi. ",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/divoltis_porris-03.png",
          title: "matis",
          description: "Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/divoltis_porris-04.png",
          title: "divinis",
          description: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.",
          imgdescription: "Descrição da imagem"
        }
      ]
    }
  ];

  otherNews: IGroupNews[] = [
    {
      name: "paisis, filhis, espiritis santis",
      type: "article",
      news: [
        {
          img: "",
          title: "",
          description: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipisings elites"
        },
        {
          img: "",
          title: "",
          description: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipisings elites"
        },
        {
          img: "",
          title: "",
          description: "Mussum ipsum cacilds, vidis litro abertis"
        },
        {
          img: "",
          title: "",
          description: "Mussum ipsum cacilds, vidis litro abertis. Consetis adipisings elites"
        },
        {
          img: "",
          title: "",
          description: "Mussum ipsum cacilds, vidis litro abertis"
        }
      ]
    },
    {
      name: "se pirulitá",
      type: "related",
      news: [
        {
          img: "../assets/images/se_pirulita-01.png",
          title: "NAM LIBER",
          description: "Casamentis faiz malandris se pirulitá",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/se_pirulita-02.png",
          title: "GOSTIS",
          description: "Aenean ut ante turpis. Pellentesque laoreet mé",
          imgdescription: "Descrição da imagem"
        },
      ]
    },
    {
      name: "suco de cevadiss",
      type: "related",
      news: [
        {
          img: "../assets/images/suco_de_cevadiss-01.png",
          title: "INTERAGI",
          description: "É um leite divinis, qui tem lupuliz, matis, aguis e fermentis",
          imgdescription: "Descrição da imagem"
        },
        {
          img: "../assets/images/suco_de_cevadiss-02.png",
          title: "GOSTIS",
          description: "Aenean ut ante turpis.Pellentesque laoreet mé",
          imgdescription: "Descrição da imagem"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
