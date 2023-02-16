"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(((0, cors_1.default)()));
app.use('/static', express_1.default.static('public'));
app.get('/', (req, res) => {
    res.json([{
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup6.png',
            imgSrc1: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup1.png',
            imgSrc2: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup2.jpg',
            imgSrc3: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup3.jpg',
            imgSrc4: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup4.jpg',
            imgSrc5: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup5.jpg',
            imgSrc6: 'http://localhost:5000/static/image/Sliders/id1/MaskGroup6.jpg',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup.png',
            imgSrc1: 'http://localhost:5000/static/image/Sliders/id2/MaskGroup1.png',
            imgSrc2: 'http://localhost:5000/static/image/Sliders/id2/MaskGroup2.jpg',
            imgSrc3: 'http://localhost:5000/static/image/Sliders/id2/MaskGroup3.jpg',
            imgSrc4: 'http://localhost:5000/static/image/Sliders/id2/MaskGroup4.jpg',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup3.png',
            imgSrc1: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup1.png',
            imgSrc2: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup2.jpg',
            imgSrc3: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup3.jpg',
            imgSrc4: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup4.jpg',
            imgSrc5: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup5.jpg',
            imgSrc6: 'http://localhost:5000/static/image/Sliders/id3/MaskGroup6.jpg',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        },
        {
            id: 4,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup.png',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        },
        {
            id: 5,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup.png',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        },
        {
            id: 6,
            imgSrc: 'http://localhost:5000/static/image/MaskGroup.png',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...',
            textTitle: '4-комн. апартаменты на Грушевке ',
            descriptOther: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
        }
    ]);
});
app.get('/articles', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/imageCards/ban1.jpg',
            title: 'Баня Русская С душой',
            description: 'В Бане С душой вы можете посетить традиционную баню на дровах - проверенную веками и особенно любимую жителями больших городов. Уютный звук сгорающих в печи дров, запах натурального дерева рождают у нас добрые чувства.',
            altTitle: 'Фото бани'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/imageCards/ban.jpg',
            title: ' Банька с веничком на двоих',
            description: 'В сауну Банька с веничком на двоих вы можете прийти веселой компанией, арендовать парную на всех, пообщаться и отдохнуть. У нас вы сможете найти : бодрящую купель, пахучие веники, бильярд, уютную комнату отдыха ',
            altTitle: 'Фото бани'
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/imageCards/ban2.jpeg',
            title: 'Баня На Волге',
            description: 'К Вашим услугам представлены: парная с немецкой дровяной печью (топиться дубовыми дровами). Самый большой бассейн (Саратовское водохранилище).',
            altTitle: 'Фото бани'
        },
        {
            id: 4,
            imgSrc: 'http://localhost:5000/static/image/imageCards/home1.jpeg',
            title: 'Коттеджный комплекс «Ручеёк»',
            description: 'Коттеджный Банный комплекс «Ручеёк» предлагает снять дом/коттедж в Люберцах недорого на сутки. Во дворе мангал, беседка, купель.',
            altTitle: 'Фото Коттеджа'
        },
        {
            id: 5,
            imgSrc: 'http://localhost:5000/static/image/imageCards/home2.jpg',
            title: ' Прованс',
            description: 'Предлагаем вам отдохнуть в атмосферном загородном доме в стиле французского прованса. В коттедже вы найдете все необходимое, чтобы провести тихий уютный вечер с друзьями или устроить веселую вечеринку ',
            altTitle: 'Фото Коттеджа'
        },
        {
            id: 6,
            imgSrc: 'http://localhost:5000/static/image/imageCards/home3.jpeg',
            title: 'Гостевой дом-вилла',
            description: 'Комфортный, уютный двухэтажный коттедж в стиле Вилла - отдых на природе с городским комфортом.',
            altTitle: 'Фото Коттеджа'
        },
        {
            id: 7,
            imgSrc: 'http://localhost:5000/static/image/imageCards/Manor1.jpg',
            title: 'Усадьба Чапских',
            description: 'Чапские – прославленный графский род, который владел на территории Беларуси несколькими прекрасными резиденциями. Одна из них находится совсем близко к Минску.',
            altTitle: 'Фото Усадьбы'
        },
        {
            id: 8,
            imgSrc: 'http://localhost:5000/static/image/imageCards/Manor2.jpeg',
            title: 'Дворец Огинского',
            description: 'Дворцово-парковая территория открыта для прогулок, экскурсий и чаепитий в уютном кафе с плетенными столиками. ',
            altTitle: 'Фото Усадьбы'
        },
        {
            id: 9,
            imgSrc: 'http://localhost:5000/static/image/imageCards/Manor3.jpg',
            title: 'Дворец Потемкиных и Голынских',
            description: 'Известно, что дворец был построен для Григория Потемкина, фаворита Екатерины II, по проекту Ивана Старова, который работал над Таврическим дворцом в Санкт-Петербурге...',
            altTitle: 'Фото Усадьбы'
        },
    ]);
});
app.get('/articlDefaultManor', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы'
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы'
        }
    ]);
});
app.get('/minsk', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы',
            city: 'Минск',
            rooms: '1 комн.',
            place: '',
            MinPrice: 50,
            MaxPrice: ''
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы',
            city: 'Минск',
            rooms: '2 комн.',
            MinPrice: 60,
            MaxPrice: ''
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы',
            city: 'Минск',
            rooms: '3 комн.',
            MinPrice: 70,
            MaxPrice: ''
        },
        {
            id: 4,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы',
            city: 'Минск',
            rooms: '4 комн.',
            MinPrice: 80,
            MaxPrice: ''
        },
        {
            id: 5,
            imgSrc: 'http://localhost:5000/static/image/room.png',
            title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
            description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
            altTitle: 'Фото Усадьбы',
            city: 'Минск',
            rooms: '5 комн.',
            MinPrice: 80,
            MaxPrice: ''
        }
    ]);
});
app.get('/minsk/roomsOne', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsOne/1.jpg',
            title: 'Сдается 1-комнатная квартира, г. Минск, пр-т Партизанский',
            description: 'Квартира после ремонта. Полностью оборудованная всей необходимой мебелью и бытовой техникой. Имеется высокоскоростной интернет. Коммунальные платежи небольшие...',
            altTitle: 'Фото квартиры',
            city: 'Минск,  пр-т Партизанский, д.23',
            textPeople: '1',
            rooms: '1 комн.',
            place: 'Односпальные',
            coffeMashins: '',
            cookMashins: '',
            electOver: 'Микроволновая печь',
            metro: 'Грушевка',
            area: 'Заводской',
            MinPrice: '30',
            MaxPrice: '76',
            stove: '',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsOne/2.jpg',
            title: 'Сдается 1-комнатная квартира с ремонтом в Серебрянке',
            description: '. Квартира после хорошего ремонта, с практически новой мебелью. Есть необходимая бытовая техника. Инфраструктура развита - до остановки общественного транспорта 5 минут пешком...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Малинина, д.14',
            textPeople: '1',
            rooms: '1 комн.',
            place: 'Односпальные',
            coffeMashins: '',
            cookMashins: '',
            electOver: 'Микроволновая печь',
            metro: 'Первомайская',
            area: 'Ленинский',
            MinPrice: '23',
            MaxPrice: '76',
            stove: 'Духовка',
            cook: 'Посуда',
            gaz: ''
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsOne/3.jpg',
            title: 'Новая студия от собственника - первое заселение!',
            description: 'Качественный современный ремонт, есть гардеробная, оборудованный санузел и кухонная зона. Новая мебель и техника. Все делалось для себя...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Щорса 2-я, д.1',
            textPeople: '1',
            rooms: '1 комн.',
            place: 'Полуторные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Вокзальная',
            area: 'Московский',
            MinPrice: '24',
            MaxPrice: '80',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
    ]);
});
app.get('/minsk/roomsTwo', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsTwo/1.jpg',
            title: 'Снять 2-комнатную квартиру, г. Минск, ул. Восточная, 44',
            description: 'Сдаётся уютная 2-х комнатная квартира в аренду на длительный срок. В квартире есть все необходимое для проживания..',
            altTitle: 'Фото квартиры',
            city: 'Минскб ул. Восточная, 44',
            textPeople: '2 (1+1)',
            rooms: '2 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Октябрьская',
            area: 'Партизанский',
            MinPrice: '24',
            MaxPrice: '80',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsTwo/2.jpg',
            title: '2-ная VIP кв с гардеробной ком.на Маркса от собственника',
            description: 'VIP квартира в стиле современного минимализма. Расположена к `золотом квадрате` Минска. Стены отделаны кирпичом и выкрашены в белый цвет..',
            altTitle: 'Фото квартиры',
            city: 'Минск ул. Ленина, д.21',
            textPeople: '2 (1+1)',
            rooms: '2 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Первомайская',
            area: 'Ленинский',
            MinPrice: '40',
            MaxPrice: '90',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
        {
            id: 3,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsTwo/3.jpg',
            title: 'Двухкомнатная квартира на 28 этаже по ул. Кальварийская 16.',
            description: 'В квартире есть всё для проживания. Подземная парковка включена в стоимость. Здается только на длительный срок...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Кальварийская 16',
            textPeople: '2 (1+1)',
            rooms: '2 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Грушевка',
            area: 'Фрунзенский',
            MinPrice: '40',
            MaxPrice: '90',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
    ]);
});
app.get('/minsk/roomsThree', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsThree/1.jpg',
            title: 'Аренда 3-комнатной квартиры ул. Щорса д. 1',
            description: ' Квартира комфортной планировки, две изолированные спальни, просторная гостиная с полностью оборудованной кухней, раздельный санузел...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Щорса д. 1',
            textPeople: '3 (1+2)',
            rooms: '3 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Октябрьская',
            area: 'Московский',
            MinPrice: '40',
            MaxPrice: '90',
            cook: '',
            gaz: 'Газовая плита'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsThree/2.jpg',
            title: 'Элитная 3-х комнатная квартира в аренду на длительный срок',
            description: 'В шаговой доступности расположены крупнейшие магазины, развлекательные и увеселительные заведения белорусской столицы...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Ратомская, д.7',
            textPeople: '3 (1+2)',
            rooms: '3 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Грушевка',
            area: 'Центральный',
            MinPrice: '40',
            MaxPrice: '90',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
    ]);
});
app.get('/minsk/roomsFour', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsFour/1.jpg',
            title: 'Снять 4-комнатную квартиру, г. Минск',
            description: 'Сдаётся в аренду на длительный срок 4-комнатная квартира. Рядом Стелла, парк Победы, школа, детский сад...',
            altTitle: 'Фото квартиры',
            city: 'Минск, пр. Машерова, д. 76',
            textPeople: '4 (2+2)',
            rooms: '4 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Фрунзенская',
            area: 'Центральный',
            MinPrice: '40',
            MaxPrice: '90',
            cook: 'Посуда',
            gaz: 'Газовая плита'
        },
        {
            id: 2,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsFour/2.jpg',
            title: 'Снять 4-комнатную квартиру, г. Минск',
            description: 'Собственное газовое отопление, система водоподготовки, сауна, душ Шарко, оптика, французская печка...',
            altTitle: 'Фото квартиры',
            city: 'Минск, ул. Гамарника, д.21',
            textPeople: '4 (2+2)',
            rooms: '4 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: 'Микроволновая печь',
            metro: 'Фрунзенская',
            area: 'Советский',
            MinPrice: '40',
            MaxPrice: '90',
            cook: '',
            gaz: 'Газовая плита'
        },
    ]);
});
app.get('/minsk/roomsFive', (req, res) => {
    res.json([
        {
            id: 1,
            imgSrc: 'http://localhost:5000/static/image/MinskRooms/roomsFive/1.jpg',
            title: 'Снять 5-комнатную квартиру, г. Минск',
            description: ' В непосредственной близости находятся культурно-деловой центр столицы, крупнейшие парки и торговые центры...',
            altTitle: 'Фото квартиры',
            city: 'Минск,  просп. Победителей, д.115',
            textPeople: '5 (2+3)',
            rooms: '5 комн.',
            place: 'Двухместные',
            cookMashins: 'Посудомоечная машина',
            electOver: '',
            metro: 'Фрунзенская',
            area: 'Центральный',
            MinPrice: '40',
            MaxPrice: '90',
            cook: '',
            gaz: 'Газовая плита'
        },
    ]);
});
app.listen(PORT, () => { console.log(`server is listening on port ${PORT}`); });
//# sourceMappingURL=server.js.map