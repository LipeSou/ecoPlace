import AreiaCimento from './assets/img/icons8-saco-de-cimento-48.png'
import Roof from './assets/img/icons8-roof-tiles-48.png'
import Madeira from './assets/img/icons8-madeira-48.png'
import Gesso from './assets/img/icons8-pilar-grego-capital-48.png'
import Cimento from './assets/img/icons8-parede-de-tijolo-48.png'
import Sacos from './assets/img/icons8-saco-de-entulho.png'
import Image2 from './assets/img/image2.png'
import Image4 from './assets/img/image4.png'
import Image7 from './assets/img/image7.png'

export const ProdutosDados = [
    {   
        img: Image2, 
        title: '30 Ripas Maciça Eucalipito 45 cm x 2,5 cm x 2 cm de espessura',
        code: '1125486',
        valor: 29.90,
        desc: 'Ripas Maciça Eucalipito 45 cm x 2,5 cm x 2 cm de espessura oferecem qualidade, sofisticação e durabilidade em um só produto. Sua composição é 100% natural, livre de componentes que agridem o meio ambiente. Sua textura amadeirada proporciona elegância e fácil adaptação à decoração do ambiente.',
        typeMaterial: 'Eucalipito',
        category: 'Madeiramento',
        nota: [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3]],
    },
    {   
        img: Image4, 
        title: '50 Ripas Maciça Pinus 45 cm x 2,5 cm x 3 cm de espessura',
        code: '1125634',
        valor: 49.90,
        desc: 'Ripas Maciça Maciça 45 cm x 2,5 cm x 2 cm de espessura oferecem qualidade, sofisticação e durabilidade em um só produto. Sua composição é 100% natural, livre de componentes que agridem o meio ambiente. Sua textura amadeirada proporciona elegância e fácil adaptação à decoração do ambiente.',
        typeMaterial: 'Maciça',
        category: 'Madeiramento',
        nota: [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3]],
    },
    {   
        img: Image7, 
        title: 'Ripa Maciça Jatobá 45 cm x 2,5 cm x 2 cm de espessura',
        code: '1129876',
        valor: 29.90,
        desc: 'Ripas Maciça Jatobá 45 cm x 2,5 cm x 2 cm de espessura oferecem qualidade, sofisticação e durabilidade em um só produto. Sua composição é 100% natural, livre de componentes que agridem o meio ambiente. Sua textura amadeirada proporciona elegância e fácil adaptação à decoração do ambiente.',
        typeMaterial: 'Jatobá',
        category: 'Madeiramento',
        nota: [[5],[5],[5],[5],[5],[5],[5],[5],[5],[5],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3]],
    },
]


export const CategoriasDados = [
    {
        img: AreiaCimento,
        title: "Areia e Pedra",
    },
    {
        img: Madeira,
        title: "Madeiramento",
    },
    {
        img: Gesso,
        title: "Gessos",
    },
    {
        img: Roof,
        title: "Telhas, calhas e rufos",
    },
    {
        img: Cimento,
        title: "Cimento e argamassa",
    },
    {
        img: Sacos,
        title: "Sacos para entulho",
    },
]

export default {CategoriasDados, ProdutosDados};