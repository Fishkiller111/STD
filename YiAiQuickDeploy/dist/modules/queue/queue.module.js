'use strict';const _0x52ebda=_0x186e;(function(_0x5bd388,_0x178233){const _0x59eeca=_0x186e,_0x3e12d6=_0x5bd388();while(!![]){try{const _0x34d8c8=parseInt(_0x59eeca(0x191))/0x1*(-parseInt(_0x59eeca(0x18e))/0x2)+parseInt(_0x59eeca(0x1a2))/0x3*(parseInt(_0x59eeca(0x1a4))/0x4)+-parseInt(_0x59eeca(0x1a1))/0x5+parseInt(_0x59eeca(0x190))/0x6*(-parseInt(_0x59eeca(0x198))/0x7)+parseInt(_0x59eeca(0x19c))/0x8*(parseInt(_0x59eeca(0x18c))/0x9)+parseInt(_0x59eeca(0x195))/0xa+parseInt(_0x59eeca(0x18b))/0xb;if(_0x34d8c8===_0x178233)break;else _0x3e12d6['push'](_0x3e12d6['shift']());}catch(_0x3c6308){_0x3e12d6['push'](_0x3e12d6['shift']());}}}(_0x3327,0xabf90));var __decorate=this&&this[_0x52ebda(0x1a7)]||function(_0x249edb,_0x41eaee,_0x515b99,_0x49e25d){const _0x568a09=_0x52ebda;var _0x386f8b=arguments['length'],_0x186173=_0x386f8b<0x3?_0x41eaee:_0x49e25d===null?_0x49e25d=Object[_0x568a09(0x1a3)](_0x41eaee,_0x515b99):_0x49e25d,_0x2e3bc4;if(typeof Reflect===_0x568a09(0x196)&&typeof Reflect[_0x568a09(0x197)]==='function')_0x186173=Reflect[_0x568a09(0x197)](_0x249edb,_0x41eaee,_0x515b99,_0x49e25d);else{for(var _0x2c9fb1=_0x249edb['length']-0x1;_0x2c9fb1>=0x0;_0x2c9fb1--)if(_0x2e3bc4=_0x249edb[_0x2c9fb1])_0x186173=(_0x386f8b<0x3?_0x2e3bc4(_0x186173):_0x386f8b>0x3?_0x2e3bc4(_0x41eaee,_0x515b99,_0x186173):_0x2e3bc4(_0x41eaee,_0x515b99))||_0x186173;}return _0x386f8b>0x3&&_0x186173&&Object[_0x568a09(0x199)](_0x41eaee,_0x515b99,_0x186173),_0x186173;};Object[_0x52ebda(0x199)](exports,_0x52ebda(0x18f),{'value':!![]}),exports[_0x52ebda(0x1aa)]=void 0x0;function _0x186e(_0x572c91,_0x2f93a3){const _0x3327b9=_0x3327();return _0x186e=function(_0x186e2b,_0x4a6ebc){_0x186e2b=_0x186e2b-0x18b;let _0x4d8c40=_0x3327b9[_0x186e2b];return _0x4d8c40;},_0x186e(_0x572c91,_0x2f93a3);}const common_1=require(_0x52ebda(0x1a0)),queue_controller_1=require(_0x52ebda(0x192)),queue_service_1=require('./queue.service'),bull_1=require(_0x52ebda(0x194)),queue_process_1=require(_0x52ebda(0x18d));let QueueModule=class QueueModule{};function _0x3327(){const _0x4318d6=['30ZlwpAK','getOwnPropertyDescriptor','55592WlhWeX','password','env','__decorate','BullModule','REDIS_HOST','QueueModule','8096407pZlGOv','45iZeVux','./queue.process','331430KLxwXS','__esModule','6LmcKRB','1ZtaKQx','./queue.controller','QueueService','@nestjs/bull','796220gmXOEI','object','decorate','4816021oeUTpe','defineProperty','registerQueueAsync','MJDRAW','1277512VLttUE','Module','QueueProcessor','REDIS_PASSWORD','@nestjs/common','974830lWHilQ'];_0x3327=function(){return _0x4318d6;};return _0x3327();}QueueModule=__decorate([(0x0,common_1[_0x52ebda(0x19d)])({'imports':[bull_1[_0x52ebda(0x1a8)][_0x52ebda(0x19a)]({'name':_0x52ebda(0x19b),'useFactory':()=>{const _0x495ab2=_0x52ebda,_0x1d30eb={'port':+process[_0x495ab2(0x1a6)]['REDIS_PORT'],'host':process[_0x495ab2(0x1a6)][_0x495ab2(0x1a9)]};return process['env'][_0x495ab2(0x19f)]&&(_0x1d30eb[_0x495ab2(0x1a5)]=process[_0x495ab2(0x1a6)][_0x495ab2(0x19f)]),{'redis':_0x1d30eb};}})],'controllers':[queue_controller_1['QueueController']],'providers':[queue_service_1[_0x52ebda(0x193)],queue_process_1[_0x52ebda(0x19e)]]})],QueueModule),exports[_0x52ebda(0x1aa)]=QueueModule;