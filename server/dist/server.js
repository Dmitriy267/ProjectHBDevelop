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
            imgSrc: 'http://localhost:5000/static/image/room.png',
            altDescript: 'Изображение квартиры',
            price: '65.00 BYN',
            text1: 'Минск, б-р Мулявина, д. 10',
            text2: 'Грушевка',
            text3: 'Шабаны',
            descript: 'Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
        }]);
});
app.listen(PORT, () => { console.log(`server is listening on port ${PORT}`); });
//# sourceMappingURL=server.js.map