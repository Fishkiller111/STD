'use strict';const _0x5e2aba=_0x54d7;(function(_0x414b20,_0x10e90f){const _0x370f60=_0x54d7,_0xbb444c=_0x414b20();while(!![]){try{const _0x2ad7b7=parseInt(_0x370f60(0x144))/0x1*(parseInt(_0x370f60(0x13c))/0x2)+parseInt(_0x370f60(0x14e))/0x3*(-parseInt(_0x370f60(0x13a))/0x4)+parseInt(_0x370f60(0x154))/0x5+-parseInt(_0x370f60(0x137))/0x6+-parseInt(_0x370f60(0x134))/0x7+-parseInt(_0x370f60(0x136))/0x8+parseInt(_0x370f60(0x152))/0x9;if(_0x2ad7b7===_0x10e90f)break;else _0xbb444c['push'](_0xbb444c['shift']());}catch(_0x34dc53){_0xbb444c['push'](_0xbb444c['shift']());}}}(_0x5068,0xd697b));function _0x5068(){const _0x385557=['@nestjs/schedule','11125152fzuqbZ','4855554jxQmCL','metadata','design:returntype','4ZEPEqx','find','8VdFHQJ','forEach','modelsService','update','CronExpression','__metadata','getOwnPropertyDescriptor','Logger','200410hVGJfX','defineProperty','handleCron','Repository','function','@nestjs/common','ModelsService','Injectable','TaskService','globalConfigService','1736103cIbdZW','getWechatAccessToken','EVERY_5_MINUTES','debug','15244002WNshWX','then','8412300DRbpQM','design:type','InjectRepository','design:paramtypes','../userBalance/userBalance.entity','checkUserMemerExpire','__esModule','会员已到期、清空所有余额并移除会员身份！','object','../models/models.service','length','GlobalConfigService','EVERY_HOUR','decorate','prototype','userBalanceEntity','3642121WZrXlE'];_0x5068=function(){return _0x385557;};return _0x5068();}var __decorate=this&&this['__decorate']||function(_0x28c493,_0x63d1b1,_0x5d4111,_0x2167cf){const _0x19d040=_0x54d7;var _0x287f3b=arguments[_0x19d040(0x15e)],_0x5c9a29=_0x287f3b<0x3?_0x63d1b1:_0x2167cf===null?_0x2167cf=Object[_0x19d040(0x142)](_0x63d1b1,_0x5d4111):_0x2167cf,_0x5c3805;if(typeof Reflect===_0x19d040(0x15c)&&typeof Reflect[_0x19d040(0x131)]===_0x19d040(0x148))_0x5c9a29=Reflect['decorate'](_0x28c493,_0x63d1b1,_0x5d4111,_0x2167cf);else{for(var _0x29d594=_0x28c493[_0x19d040(0x15e)]-0x1;_0x29d594>=0x0;_0x29d594--)if(_0x5c3805=_0x28c493[_0x29d594])_0x5c9a29=(_0x287f3b<0x3?_0x5c3805(_0x5c9a29):_0x287f3b>0x3?_0x5c3805(_0x63d1b1,_0x5d4111,_0x5c9a29):_0x5c3805(_0x63d1b1,_0x5d4111))||_0x5c9a29;}return _0x287f3b>0x3&&_0x5c9a29&&Object[_0x19d040(0x145)](_0x63d1b1,_0x5d4111,_0x5c9a29),_0x5c9a29;},__metadata=this&&this[_0x5e2aba(0x141)]||function(_0x1cac66,_0x448ef2){const _0x49bd78=_0x5e2aba;if(typeof Reflect===_0x49bd78(0x15c)&&typeof Reflect[_0x49bd78(0x138)]===_0x49bd78(0x148))return Reflect['metadata'](_0x1cac66,_0x448ef2);},__param=this&&this['__param']||function(_0x29373f,_0x2afa27){return function(_0x1b2acb,_0x4bcac4){_0x2afa27(_0x1b2acb,_0x4bcac4,_0x29373f);};};Object[_0x5e2aba(0x145)](exports,_0x5e2aba(0x15a),{'value':!![]}),exports[_0x5e2aba(0x14c)]=void 0x0;const globalConfig_service_1=require('./../globalConfig/globalConfig.service'),common_1=require(_0x5e2aba(0x149)),schedule_1=require(_0x5e2aba(0x135)),userBalance_entity_1=require(_0x5e2aba(0x158)),typeorm_1=require('@nestjs/typeorm'),typeorm_2=require('typeorm'),models_service_1=require(_0x5e2aba(0x15d));function _0x54d7(_0x46b8c0,_0x16fbf6){const _0x5068b9=_0x5068();return _0x54d7=function(_0x54d71c,_0x1891f1){_0x54d71c=_0x54d71c-0x131;let _0x1eee96=_0x5068b9[_0x54d71c];return _0x1eee96;},_0x54d7(_0x46b8c0,_0x16fbf6);}let TaskService=class TaskService{constructor(_0x1430ce,_0x208335,_0x1a1e61){const _0x3d4d5f=_0x5e2aba;this[_0x3d4d5f(0x133)]=_0x1430ce,this['globalConfigService']=_0x208335,this[_0x3d4d5f(0x13e)]=_0x1a1e61;}['handleCron'](){const _0x89b4f9=_0x5e2aba;common_1[_0x89b4f9(0x143)][_0x89b4f9(0x151)]('Automatically\x20refresh\x20WeChat\x20access\x20every\x20hour\x20Token',_0x89b4f9(0x14c)),this[_0x89b4f9(0x14d)][_0x89b4f9(0x14f)]();}async[_0x5e2aba(0x159)](){const _0x1e3612=_0x5e2aba,_0x277394=await this[_0x1e3612(0x133)][_0x1e3612(0x13b)]({'where':{'expirationTime':(0x0,typeorm_2['LessThanOrEqual'])(new Date())}});if(!_0x277394||!_0x277394['length'])return;_0x277394[_0x1e3612(0x13d)](_0x7981e0=>{const _0x3a8e13=_0x1e3612;this[_0x3a8e13(0x133)][_0x3a8e13(0x13f)]({'id':_0x7981e0['id']},{'expirationTime':null,'packageId':0x0,'memberModel3Count':0x0,'memberModel4Count':0x0,'memberDrawMjCount':0x0})[_0x3a8e13(0x153)](_0x1ab31a=>{const _0x40bdc7=_0x3a8e13;common_1[_0x40bdc7(0x143)][_0x40bdc7(0x151)](_0x7981e0['id']+_0x40bdc7(0x15b),_0x40bdc7(0x14c));});});}};__decorate([(0x0,schedule_1['Cron'])(schedule_1[_0x5e2aba(0x140)][_0x5e2aba(0x160)]),__metadata('design:type',Function),__metadata(_0x5e2aba(0x157),[]),__metadata(_0x5e2aba(0x139),void 0x0)],TaskService[_0x5e2aba(0x132)],_0x5e2aba(0x146),null),__decorate([(0x0,schedule_1['Cron'])(schedule_1['CronExpression'][_0x5e2aba(0x150)]),__metadata(_0x5e2aba(0x155),Function),__metadata('design:paramtypes',[]),__metadata(_0x5e2aba(0x139),Promise)],TaskService['prototype'],_0x5e2aba(0x159),null),TaskService=__decorate([(0x0,common_1[_0x5e2aba(0x14b)])(),__param(0x0,(0x0,typeorm_1[_0x5e2aba(0x156)])(userBalance_entity_1['UserBalanceEntity'])),__metadata('design:paramtypes',[typeorm_2[_0x5e2aba(0x147)],globalConfig_service_1[_0x5e2aba(0x15f)],models_service_1[_0x5e2aba(0x14a)]])],TaskService),exports['TaskService']=TaskService;