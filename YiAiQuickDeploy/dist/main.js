'use strict';const _0x546fa5=_0x2f01;(function(_0x117d8d,_0x5589b5){const _0x56b854=_0x2f01,_0x31a365=_0x117d8d();while(!![]){try{const _0x2f441e=parseInt(_0x56b854(0x134))/0x1+parseInt(_0x56b854(0x129))/0x2+parseInt(_0x56b854(0x128))/0x3*(parseInt(_0x56b854(0x117))/0x4)+parseInt(_0x56b854(0x12e))/0x5*(parseInt(_0x56b854(0x10d))/0x6)+-parseInt(_0x56b854(0x12c))/0x7+-parseInt(_0x56b854(0x135))/0x8+parseInt(_0x56b854(0x11a))/0x9;if(_0x2f441e===_0x5589b5)break;else _0x31a365['push'](_0x31a365['shift']());}catch(_0x10705d){_0x31a365['push'](_0x31a365['shift']());}}}(_0x4a21,0x695e0));Object[_0x546fa5(0x10a)](exports,_0x546fa5(0x10b),{'value':!![]});const Dotenv=require('dotenv');Dotenv[_0x546fa5(0x12b)]({'path':_0x546fa5(0x114)});const core_1=require(_0x546fa5(0x121)),app_module_1=require(_0x546fa5(0x110)),swagger_1=require(_0x546fa5(0x133)),allExceptions_filter_1=require(_0x546fa5(0x11d)),typeOrmQueryFailed_filter_1=require('./common/filters/typeOrmQueryFailed.filter'),common_1=require('@nestjs/common'),transform_interceptor_1=require('./common/interceptors/transform.interceptor'),main_1=require(_0x546fa5(0x11e)),initDatabase_1=require(_0x546fa5(0x116)),compression=require(_0x546fa5(0x136)),xmlBodyParser=require(_0x546fa5(0x10e)),path_1=require(_0x546fa5(0x111));function _0x4a21(){const _0x2ffa81=['useGlobalFilters','APIPREFIX','createSwagger','view\x20engine','./common/swagger','558629CjkQKp','6638024VAetmk','compression','resolve','PORT','defineProperty','__esModule','setGlobalPrefix','725454MqsTHk','express-xml-bodyparser','create','./app.module','path','useGlobalInterceptors','Main','.env','log','./modules/database/initDatabase','6012FfdAXY','set','useGlobalPipes','3365136fwkbnd','listen','Logger','./common/filters/allExceptions.filter','./config/main','hbs','use','@nestjs/core','getHttpAdapter','AppModule','enableCors','TransformInterceptor','views','/nineai/swagger/docs','603xscXej','611238ZLNtrY','templates/pages','config','4491515rfCJtV','NestFactory','15GubEjx'];_0x4a21=function(){return _0x2ffa81;};return _0x4a21();}function _0x2f01(_0xb04a71,_0x2f5856){const _0x4a21f9=_0x4a21();return _0x2f01=function(_0x2f016d,_0x270128){_0x2f016d=_0x2f016d-0x108;let _0x538a62=_0x4a21f9[_0x2f016d];return _0x538a62;},_0x2f01(_0xb04a71,_0x2f5856);}async function bootstrap(){const _0x608618=_0x546fa5;await(0x0,initDatabase_1['initDatabase'])();const _0x42faf0=await core_1[_0x608618(0x12d)][_0x608618(0x10f)](app_module_1[_0x608618(0x123)]);_0x42faf0[_0x608618(0x120)](compression());const _0x2d2cfe=(0x0,path_1[_0x608618(0x108)])(__dirname,'./public');_0x42faf0[_0x608618(0x120)](xmlBodyParser()),_0x42faf0[_0x608618(0x124)](),_0x42faf0[_0x608618(0x10c)](main_1[_0x608618(0x130)]),_0x42faf0[_0x608618(0x112)](new transform_interceptor_1[(_0x608618(0x125))]()),_0x42faf0[_0x608618(0x12f)](new typeOrmQueryFailed_filter_1['TypeOrmQueryFailedFilter']()),_0x42faf0[_0x608618(0x12f)](new allExceptions_filter_1['AllExceptionsFilter']()),_0x42faf0[_0x608618(0x119)](new common_1['ValidationPipe']()),_0x42faf0[_0x608618(0x122)]()['getInstance']()['set'](_0x608618(0x126),_0x608618(0x12a)),_0x42faf0[_0x608618(0x122)]()['getInstance']()[_0x608618(0x118)](_0x608618(0x132),_0x608618(0x11f)),(0x0,swagger_1[_0x608618(0x131)])(_0x42faf0);const _0x399443=await _0x42faf0[_0x608618(0x11b)](main_1[_0x608618(0x109)],()=>{const _0x36b7a5=_0x608618;common_1[_0x36b7a5(0x11c)][_0x36b7a5(0x115)]('服务启动成功:\x20http://localhost:'+main_1[_0x36b7a5(0x109)]+_0x36b7a5(0x127),_0x36b7a5(0x113));});_0x399443['timeout']=0x5*0x3c*0x3e8;}bootstrap();