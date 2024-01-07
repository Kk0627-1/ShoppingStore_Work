const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');
const User = require('../models/User')
const PerchaseRecord = require('../models/PerchaseRecord');
const HotCommodity = require('../models/HotCommodity');
const ControllerManagementSystem = require('../models/ControllerManagementSystem');
const { isLoggedIn } = require('../middleware');
const Buyer = require('../models/Buyer');
const Store = require('../models/Store');
const OrderRecord = require('../models/OrderRecord');
const { route } = require('./users');




const ReturnDeleteRecordNum = (perchaseRecord, buyer) => {
    let i = 0;
    for (let item of buyer.purchaseRecord) {
        if (perchaseRecord.equals(item._id)) {
            return i;
        }

        i++;
    }
    return i;

}



router.get('/', async (req, res) => {
    const controllerSystem = await ControllerManagementSystem.find({});
    const AuthorcontrollerSystem = await ControllerManagementSystem.findById(controllerSystem[0]._id)
        .populate({
            path: 'orderRecord',
            populate: {
                path: 'record',
                populate: {
                    path: 'commoditys'
                }
            }

        });

    //const orderRecord = await OrderRecord.findById(controllerSystem[0].orderRecord[0]._id);
    //console.log(AuthorcontrollerSystem);
    //res.send(AuthorcontrollerSystem);
    res.render('management-controller/index', { AuthorcontrollerSystem });
})

router.get('/:id/ConfirmSended', async (req, res) => {
    const { id } = req.params;
    const orderRecord = await OrderRecord.findById(id).populate('record');
    orderRecord.record.status = '已出貨';
    //res.send(orderRecord);
    await orderRecord.record.save();
    await orderRecord.save();
    res.redirect('/shoppingstore/controller');
    //res.send(id);
})

router.post('/:id/HandelTheDeal', async (req, res) => {
    const { id } = req.params;
    const { select } = req.body;
    const record = await PerchaseRecord.findById(id);
    record.status = select;
    await record.save();
    if (select === '確認收到') {
        res.redirect(`/shoppingstore/controller/${record._id}/AchiveTheDeal`);
    } else {
        res.redirect(`/shoppingstore/controller/${record._id}/FailTheDeal`);
    }

})

router.get('/:id/AchiveTheDeal', async (req, res) => {
    const { _id: _id } = res.locals.currentUser;
    const user = await User.findById(_id).populate('Authorbuyer');
    const { id } = req.params;
    const perchaseRecord = await PerchaseRecord.findById(id);
    const controllerSystem = await ControllerManagementSystem.find({});
    const AuthorcontrollerSystem = await ControllerManagementSystem.findById(controllerSystem[0]._id).populate('hotCommodity');
    for (let hotCommodity of AuthorcontrollerSystem.hotCommodity) {
        if (hotCommodity.commodity.equals(perchaseRecord.commoditys._id)) {
            hotCommodity.perchase_num = hotCommodity.perchase_num + 1;
            await hotCommodity.save();
            break;
        }
    }

    const buyer = await Buyer.findById(user.Authorbuyer._id).populate('purchaseRecord');
    let i = ReturnDeleteRecordNum(perchaseRecord, buyer);
    buyer.purchaseRecord.splice(i, 1);
    await buyer.save();
    res.redirect('/shoppingstore/purchaseRecordlist');

})

router.get('/:id/FailTheDeal', async (req, res) => {
    res.redirect('/shoppingstore/purchaseRecordlist');
})

router.get('/:id/DeleteRecord', async (req, res) => {
    const { id } = req.params;
    const orderRecord = await OrderRecord.findById(id);
    const record = await PerchaseRecord.findByIdAndDelete(orderRecord.record._id);
    await OrderRecord.findByIdAndDelete(id);
    res.redirect('/shoppingstore/controller');
})

module.exports = router;
