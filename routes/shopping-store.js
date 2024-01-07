const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');
const User = require('../models/User')
const PerchaseRecord = require('../models/PerchaseRecord');
const OrderRecord = require('../models/OrderRecord');
const HotCommodity = require('../models/HotCommodity');
const { isLoggedIn } = require('../middleware');
const Buyer = require('../models/Buyer');
const Store = require('../models/Store');
const ControllerManagementSystem = require('../models/ControllerManagementSystem');
const { route } = require('./users');

//router.get('/', async (req, res) => {
//    res.render('shopping-store/index');
//})
const ReturnDeleteloveNum = async (commodity, buyer) => {
    let i = 0;
    for (let item of buyer.lovelist) {
        if (commodity._id === item._id) {
            return i;
        }
        i++;
    }
    return i;

}


const ReturnDeleteshopcarNum = (perchaseRecord, buyer) => {
    let i = 0;
    for (let item of buyer.shopCar) {
        if (perchaseRecord.equals(item._id)) {
            return i;
        }

        i++;
    }
    return i;

}

const SortHotCommodityclick_num = (hotCommoditylist) => {
    hotCommoditylist.sort(function (x, y) {
        let click_num1 = x.click_num;
        let click_num2 = y.click_num;
        if (click_num1 > click_num2) return -1;
        if (click_num1 < click_num2) return 1;
        else return 0;
    });
    return hotCommoditylist;
}

const SortHotCommodityperchase_num = (hotCommoditylist) => {
    hotCommoditylist.sort(function (x, y) {
        let perchase_num1 = x.perchase_num;
        let perchase_num2 = y.perchase_num;
        if (perchase_num1 > perchase_num2) return -1;
        if (perchase_num1 < perchase_num2) return 1;
        else return 0;
    });
    return hotCommoditylist;
}


const SortHotCommodityLove_num = (hotCommoditylist) => {
    hotCommoditylist.sort(function (x, y) {
        let Love_num1 = x.Love_num;
        let Love_num2 = y.Love_num;
        if (Love_num1 > Love_num2) return -1;
        if (Love_num1 < Love_num2) return 1;
        else return 0;
    });
    return hotCommoditylist;
}


router.get('/web', async (req, res) => {
    let hotCommoditylist = await HotCommodity.find({}).populate('commodity');
    const hotCommoditylistclick_num = SortHotCommodityclick_num(hotCommoditylist).splice(0, 8);
    let hotCommoditylist2 = await HotCommodity.find({}).populate('commodity');
    const hotCommoditylistperchase_num = SortHotCommodityperchase_num(hotCommoditylist2).splice(0, 8);
    let hotCommoditylist3 = await HotCommodity.find({}).populate('commodity');
    const hotCommoditylistLove_num = SortHotCommodityLove_num(hotCommoditylist3).splice(0, 8);
    res.render('shopping-store/web', { hotCommoditylistclick_num, hotCommoditylistperchase_num, hotCommoditylistLove_num });
})

router.get('/new', async (req, res) => {
    res.render('shopping-store/new');
})

router.post('/new', async (req, res) => {

})

router.get('/cap', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'cap' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/shoes', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'shoes' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/cloth', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'cloth' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/toy', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'toy' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/food', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'food' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/card', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'card' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/3c_product', async (req, res) => {
    const commoditys = await Commodity.find({ type: '3c_product' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/book', async (req, res) => {
    const commoditys = await Commodity.find({ type: 'book' });
    res.render('shopping-store/index', { commoditys });
})

router.get('/shopCar', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('shopCar');
    const shopcars = [];
    let record = new PerchaseRecord({});
    for (let purchaseRecord of buyer.shopCar) {
        record = await PerchaseRecord.findById(purchaseRecord._id).populate('commoditys');
        shopcars.push(record);
    }
    //console.log(shopcars)
    res.render('shopping-store/shopcar', { shopcars });
})

router.get('/lovelist', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('lovelist');
    const lovelist = [];
    let commodity = new Commodity({});
    for (let love of buyer.lovelist) {
        commodity = await Commodity.findById(love._id);
        lovelist.push(commodity);
    }
    res.render('shopping-store/lovelist', { lovelist });

})

router.get('/purchaseRecordlist', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('purchaseRecord');
    const perchaseRecords = [];
    let record = new PerchaseRecord({});
    for (let purchaseRecord of buyer.purchaseRecord) {
        record = await PerchaseRecord.findById(purchaseRecord._id).populate('commoditys');
        perchaseRecords.push(record);
    }
    res.render('shopping-store/purchaseRecordlist', { perchaseRecords });
})



router.get('/:id', async (req, res) => {
    const commodity = await Commodity.findById(req.params.id).populate("store");
    const store = await Store.findById(commodity.store._id);
    const controllerSystem = await ControllerManagementSystem.find({});
    const AuthorcontrollerSystem = await ControllerManagementSystem.findById(controllerSystem[0]._id).populate('hotCommodity');
    for (let hotCommodity of AuthorcontrollerSystem.hotCommodity) {
        if (hotCommodity.commodity.equals(commodity._id)) {
            hotCommodity.click_num = hotCommodity.click_num + 1;
            await hotCommodity.save();
            break;
        }
    }


    res.render('shopping-store/show', { commodity, store });
})


router.post('/search', async (req, res) => {
    //const { q } = req.query;
    const { searchData } = req.body;
    //res.send(searchData);
    const commoditys = await Commodity.find({ type: searchData });
    res.render('shopping-store/index', { commoditys });
})

router.post('/:id/addToLovelist', isLoggedIn, async (req, res) => {
    req.flash('success', '成功加入最愛!');
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const commodity = await Commodity.findById(id);
    const controllerSystem = await ControllerManagementSystem.find({});
    const AuthorcontrollerSystem = await ControllerManagementSystem.findById(controllerSystem[0]._id).populate('hotCommodity');
    for (let hotCommodity of AuthorcontrollerSystem.hotCommodity) {
        if (hotCommodity.commodity.equals(commodity._id)) {
            hotCommodity.Love_num = hotCommodity.Love_num + 1;
            await hotCommodity.save();
            break;
        }
    }

    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('lovelist');
    buyer.lovelist.push(commodity);
    await buyer.save();
    res.redirect(`/shoppingstore/${id}`);
})


router.post('/:id/DeleteLove', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const commodity = await Commodity.findById(id);
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('lovelist');
    let i = ReturnDeleteloveNum(commodity, buyer);
    buyer.lovelist.splice(i, 1);
    await buyer.save();
    res.redirect("/shoppingstore/lovelist");
})


router.post('/:id/addToshopcar', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const { num, size } = req.body;
    const commodity = await Commodity.findById(id);
    const perchaseRecord = new PerchaseRecord({
        number: num,
        size: size,
        status: '未出貨'
    })
    perchaseRecord.commoditys = commodity;
    await perchaseRecord.save();
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('shopCar');
    buyer.shopCar.push(perchaseRecord);
    await buyer.save();
    res.redirect(`/shoppingstore/${id}`);

})

router.post('/:id/RemoveToShopcar', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const perchaseRecord = await PerchaseRecord.findById(id).populate('commoditys');
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate({
        path: 'shopCar',
        populate: {
            path: 'commoditys'
        }
    });

    let i = ReturnDeleteshopcarNum(perchaseRecord, buyer);
    buyer.shopCar.splice(i, 1);
    await buyer.save();
    await PerchaseRecord.findByIdAndDelete(id);
    res.redirect("/shoppingstore/shopCar");
})

router.post('/:id/addToPerchaseRecord', isLoggedIn, async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const perchaseRecord = await PerchaseRecord.findById(id);
    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('purchaseRecord');
    buyer.purchaseRecord.push(perchaseRecord);
    let i = ReturnDeleteshopcarNum(perchaseRecord, buyer);
    buyer.shopCar.splice(i, 1);
    await buyer.save();
    const orderRecord = new OrderRecord({ buyer: buyer, record: perchaseRecord });
    await orderRecord.save();
    const controllerSystem = await ControllerManagementSystem.find({});
    controllerSystem[0].orderRecord.push(orderRecord);
    await controllerSystem[0].save();
    res.redirect('/shoppingstore/shopCar');
    //res.redirect("javascript:history.back()");
})


router.post('/:id/determineBuy', isLoggedIn, async (req, res) => {

})

router.get('/', async (req, res) => {
    const commoditys = await Commodity.find({});
    res.render('shopping-store/index', { commoditys });
})


module.exports = router;
