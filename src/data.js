
import accessPants from './images/access-cargo-pants-blue.jpg';
import CargoPants from './images/CargoPants.jpg';
import LevonPants from './images/Levon-Pant-Arbour.jpg';
import LoungeKnitPant from './images/LoungeKnitPant.jpg';
import NotionPants from './images/NotionPants.jpg';
import PullOnLinePants from './images/pullonlinepants.jpg';
import NeonJacket from './images/neon-jacket.jpg';
import LightVelvetJacket from './images/Light-Velvet-jacket.jpg';
import IvoryJacket from './images/ivory_jacket.jpg';
import Bomber from './images/bomber.jpg';
import Hoodie from './images/hoodie.jpg';
import Corduroy from './images/corduroyJacket.jpg';

import DrawStringHoodie from './images/Drawstring_Hoodie.jpg'
import PinkCatCute from './images/pink-cat-cute-t-shirt.jpg'
import avocado_Tshirt from './images/avocado_Tshirt.png'
import SleeveTshirt from './images/Sleeve_Tshirt.jpg'
import BBQBuddysTshirt from './images/BBQ_Buddys_Tshirt.jpg'
import Cute_Penguin_T_shirt from './images/Cute_Penguin_T_shirt.jpg'

import BUCKET_HAT_addidas from './images/BUCKET_HAT_addidas.jpg'
import MarvelHat from './images/Marvel_hat.jpg'
import Bucket_Hat from './images/Bucket_Hat.jpg'
import lv_hat from './images/lv-hat.jpg'
import Fine_knit_hat from './images/Fine_knit_hat.jpg'
import KnittedHat from './images/Knittedhat.jpg'
const data={
    products:[{
         id:'P123',
         name:'Pink Cat Cute shirt',
         brand:'BOO',
         price:80,
         rate:4.5,
         review: 10,
         img:PinkCatCute,
         status:'hot'
    },
    { id:'L242',
        name:'Neon Logo Jacket',
        brand:'Adidas',
        price:60,
        rate:5,
        review: 11,
        img:NeonJacket,
        status:'new'
   },
    { id: 'H243',
        name:'Drawstring Hoodie T-shirt',
        brand:'Nike',
        price:255,
        rate:4,
        review: 40,
        img:DrawStringHoodie,
        status:'new'
    },
    { id:'654',
        name:'Pull On Linen Blend Pants',
        brand:'Nike',
        price:565,
        rate:3,
        review: 43,
        img:PullOnLinePants,
        status:'hot'
    },
    {  id:'548',
        name:'Avocado T-shirt',
        brand:'Nike',
        price:150,
        rate:3.5,
        review: 53,
        img:avocado_Tshirt,
        status:'new'
   },
   { id:'238',
        name:'Access Cargo Pants',
        brand:'Lafuma',
        price:860,
        rate:3.5,
        review: 43,
        img:accessPants,
        status:'hot'
    },
    { id:'433',
    name:'Cargo Pants',
    brand:'H&M',
    price:147,
    rate:3,
    review: 43,
    img:CargoPants,
    status:'hot'
},
{ id:'341',
        name:'Levon Pants Arbour',
        brand:'Arc`teryx',
        price:265,
        rate:3,
        review: 43,
        img:LevonPants,
        status:'hot'
    },
    { id:'L604',
        name:' Lounge Knit Pants',
        brand:'Nike',
        price:505,
        rate:3,
        review: 43,
        img:LoungeKnitPant,
        status:'new'
    },
    { id:'T54',
        name:'Notion Pants',
        brand:'Nike',
        price:465,
        rate:3,
        review: 43,
        img:NotionPants,
        status:'new'
    },
    { id:'L245',
        name:'Light Velvet Jacket',
        brand:'Gucci',
        price:405,
        rate:5,
        review: 11,
        img:LightVelvetJacket,
        status:'new'
   },
   { id:'I215',
        name:'Ivory Jacket',
        brand:'Gucci',
        price:1435,
        rate:5,
        review: 11,
        img:IvoryJacket,
        status:'new'
   },
    { id:'B215',
        name:'Bomber Jacket',
        brand:'H&M',
        price:1035,
        rate:5,
        review: 11,
        img:Bomber,
        status:'new'
   },
    { id:'J215',
        name:'Hoodie Jacket',
        brand:'H&M',
        price:125,
        rate:5,
        review: 11,
        img:Hoodie,
        status:'new'
   },
    { id:'C215',
        name:'Corduroy Jacket',
        brand:'H&M',
        price:1235,
        rate:5,
        review: 11,
        img:Corduroy,
        status:'new'
   },
   {
    id:'ST123',
    name:'Sleeve Tshirt',
    brand:'BOO',
    price:180,
    rate:2.5,
    review: 10,
    img:SleeveTshirt,
    status:'hot'
},
{
    id:'BBQ3',
    name:'BBQ Buddys Tshirt',
    brand:'BOO',
    price:182,
    rate:4.5,
    review: 10,
    img:BBQBuddysTshirt,
    status:'new'
},
{
    id:'CUTE1',
    name:'Cute Penguain Tshirt',
    brand:'BOO',
    price:162,
    rate:4.5,
    review: 34,
    img:Cute_Penguin_T_shirt,
    status:'new'
},
{
    id:'HAT1',
    name:'BUCKET Hat addidas',
    brand:'BOO',
    price:50,
    rate:4.5,
    review: 34,
    img:BUCKET_HAT_addidas,
    status:'new'
},
{
    id:'HAT13',
    name:'Marvel Hat',
    brand:'BOO',
    price:12,
    rate:4.5,
    review: 34,
    img:MarvelHat,
    status:'new'
},
{
    id:'HAT10',
    name:'Bucket Hat',
    brand:'BOO',
    price:19,
    rate:4.5,
    review: 34,
    img:Bucket_Hat,
    status:'new'
},
{
    id:'HA31',
    name:'Louis Vuitton Hat',
    brand:'Louis Vuitton',
    price:16,
    rate:3.5,
    review: 34,
    img:lv_hat,
    status:'new'
},
{
    id:'AT31',
    name:'Fine Knit Hat',
    brand:'BOO',
    price:32,
    rate:4.5,
    review: 34,
    img:Fine_knit_hat,
    status:'hot'
},
{
    id:'HT4',
    name:'Knitted Hat',
    brand:'BOO',
    price:22,
    rate:3.5,
    review: 34,
    img:KnittedHat,
    status:'new'
}

]
}
export default data