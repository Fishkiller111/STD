'use strict';function _0x509d(){var _0x98908c=['提款备注','function','__metadata','提现金额','class-validator','prototype','@nestjs/swagger','958809DNghwv','1010hmqkwO','design:type','5009868xNYWzf','length','提款联系方式','decorate','提现金额必须大于0','ApiProperty','IsNumber','145189lRwhrm','__esModule','defineProperty','withdrawalChannels','839880mupkmZ','91rtzokm','提现渠道','5NKkapo','5178822xiUXUY','AppForMoneyDto','metadata','42QTluba','remark','74769LXEXYA','9320EuNONS','object'];_0x509d=function(){return _0x98908c;};return _0x509d();}var _0x39e86f=_0x14b4;(function(_0x4dac26,_0x55a5a2){var _0x4bde74=_0x14b4,_0x490b02=_0x4dac26();while(!![]){try{var _0x2e41f5=parseInt(_0x4bde74(0x135))/0x1+-parseInt(_0x4bde74(0x129))/0x2*(parseInt(_0x4bde74(0x12b))/0x3)+parseInt(_0x4bde74(0x143))/0x4+parseInt(_0x4bde74(0x125))/0x5*(-parseInt(_0x4bde74(0x126))/0x6)+-parseInt(_0x4bde74(0x144))/0x7*(parseInt(_0x4bde74(0x12c))/0x8)+-parseInt(_0x4bde74(0x138))/0x9+-parseInt(_0x4bde74(0x136))/0xa*(-parseInt(_0x4bde74(0x13f))/0xb);if(_0x2e41f5===_0x55a5a2)break;else _0x490b02['push'](_0x490b02['shift']());}catch(_0x3c4e64){_0x490b02['push'](_0x490b02['shift']());}}}(_0x509d,0x84b49));var __decorate=this&&this['__decorate']||function(_0x1de8da,_0x1083b5,_0x3192ba,_0x2132cc){var _0x3d3099=_0x14b4,_0x57ffff=arguments[_0x3d3099(0x139)],_0x5b1384=_0x57ffff<0x3?_0x1083b5:_0x2132cc===null?_0x2132cc=Object['getOwnPropertyDescriptor'](_0x1083b5,_0x3192ba):_0x2132cc,_0x3d3789;if(typeof Reflect==='object'&&typeof Reflect[_0x3d3099(0x13b)]===_0x3d3099(0x12f))_0x5b1384=Reflect['decorate'](_0x1de8da,_0x1083b5,_0x3192ba,_0x2132cc);else{for(var _0x5e0b26=_0x1de8da[_0x3d3099(0x139)]-0x1;_0x5e0b26>=0x0;_0x5e0b26--)if(_0x3d3789=_0x1de8da[_0x5e0b26])_0x5b1384=(_0x57ffff<0x3?_0x3d3789(_0x5b1384):_0x57ffff>0x3?_0x3d3789(_0x1083b5,_0x3192ba,_0x5b1384):_0x3d3789(_0x1083b5,_0x3192ba))||_0x5b1384;}return _0x57ffff>0x3&&_0x5b1384&&Object[_0x3d3099(0x141)](_0x1083b5,_0x3192ba,_0x5b1384),_0x5b1384;},__metadata=this&&this[_0x39e86f(0x130)]||function(_0x515963,_0x1bed93){var _0x545823=_0x39e86f;if(typeof Reflect===_0x545823(0x12d)&&typeof Reflect[_0x545823(0x128)]==='function')return Reflect[_0x545823(0x128)](_0x515963,_0x1bed93);};Object[_0x39e86f(0x141)](exports,_0x39e86f(0x140),{'value':!![]}),exports[_0x39e86f(0x127)]=void 0x0;const class_validator_1=require(_0x39e86f(0x132)),swagger_1=require(_0x39e86f(0x134));function _0x14b4(_0x1e8f2b,_0x1056ff){var _0x509d0f=_0x509d();return _0x14b4=function(_0x14b49c,_0x46ba53){_0x14b49c=_0x14b49c-0x125;var _0x4748b4=_0x509d0f[_0x14b49c];return _0x4748b4;},_0x14b4(_0x1e8f2b,_0x1056ff);}class AppForMoneyDto{}__decorate([(0x0,swagger_1['ApiProperty'])({'example':0xa,'description':_0x39e86f(0x131),'required':!![]}),(0x0,class_validator_1[_0x39e86f(0x13e)])({},{'message':'提现金额必须为数字'}),(0x0,class_validator_1['Min'])(0x0,{'message':_0x39e86f(0x13c)}),__metadata(_0x39e86f(0x137),Number)],AppForMoneyDto[_0x39e86f(0x133)],'withdrawalAmount',void 0x0),__decorate([(0x0,swagger_1[_0x39e86f(0x13d)])({'example':0x1,'description':_0x39e86f(0x145),'required':!![]}),(0x0,class_validator_1['IsIn'])([0x1,0x2],{'message':'提现渠道非法'}),__metadata(_0x39e86f(0x137),Number)],AppForMoneyDto['prototype'],_0x39e86f(0x142),void 0x0),__decorate([(0x0,swagger_1['ApiProperty'])({'example':0xa,'description':_0x39e86f(0x13a),'required':!![]}),__metadata(_0x39e86f(0x137),String)],AppForMoneyDto['prototype'],'contactInformation',void 0x0),__decorate([(0x0,swagger_1[_0x39e86f(0x13d)])({'example':0xa,'description':_0x39e86f(0x12e),'required':![]}),(0x0,class_validator_1['IsOptional'])(),__metadata(_0x39e86f(0x137),String)],AppForMoneyDto['prototype'],_0x39e86f(0x12a),void 0x0),exports[_0x39e86f(0x127)]=AppForMoneyDto;