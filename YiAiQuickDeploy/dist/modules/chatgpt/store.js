'use strict';const _0x4bf46d=_0x47c1;(function(_0x4c09b0,_0x211a58){const _0x4430a6=_0x47c1,_0x352f4a=_0x4c09b0();while(!![]){try{const _0x5b79b2=parseInt(_0x4430a6(0x116))/0x1+-parseInt(_0x4430a6(0x114))/0x2*(-parseInt(_0x4430a6(0xf7))/0x3)+parseInt(_0x4430a6(0x103))/0x4*(-parseInt(_0x4430a6(0x123))/0x5)+parseInt(_0x4430a6(0x107))/0x6*(parseInt(_0x4430a6(0x121))/0x7)+-parseInt(_0x4430a6(0x129))/0x8*(-parseInt(_0x4430a6(0x10b))/0x9)+-parseInt(_0x4430a6(0xf6))/0xa*(-parseInt(_0x4430a6(0x106))/0xb)+-parseInt(_0x4430a6(0x110))/0xc;if(_0x5b79b2===_0x211a58)break;else _0x352f4a['push'](_0x352f4a['shift']());}catch(_0x16fe03){_0x352f4a['push'](_0x352f4a['shift']());}}}(_0x41d0,0xebb99));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x4bf46d(0x10d)]=void 0x0;const uuid_1=require(_0x4bf46d(0x12b)),tiktoken_1=require(_0x4bf46d(0x111)),tokenizer=(0x0,tiktoken_1[_0x4bf46d(0x125)])(_0x4bf46d(0x11b));class NineStore{constructor(_0x5b7b74){const _0x24bb16=_0x4bf46d,{store:_0x537ce9,namespace:_0x2b047e,expires:_0x170df0}=this[_0x24bb16(0x10c)](_0x5b7b74);this[_0x24bb16(0x12f)]=_0x537ce9,this[_0x24bb16(0x11e)]=_0x2b047e,this['expires']=_0x170df0;}['formatOptions'](_0x4167ef){const _0x4e37dd=_0x4bf46d,{store:_0x3daf6f,expires:expires=0x3e8*0x3c*0x3c*0x18*0x3,namespace:namespace=_0x4e37dd(0x120)}=_0x4167ef;return{'store':_0x3daf6f,'namespace':namespace,'expires':expires};}[_0x4bf46d(0xff)](_0x28a269){const _0x2fde=_0x4bf46d;return this[_0x2fde(0x11e)]?this[_0x2fde(0x11e)]+'-'+_0x28a269:_0x28a269;}async[_0x4bf46d(0x12a)](_0xdda7b5){const _0x55ffee=_0x4bf46d,_0x832c1b=await this[_0x55ffee(0x12f)][_0x55ffee(0x128)](_0xdda7b5);return _0x832c1b;}async[_0x4bf46d(0x124)](_0x438728,_0x4baa19=this[_0x4bf46d(0x108)]){const _0x5e91b1=_0x4bf46d;await this[_0x5e91b1(0x12f)]['set'](_0x438728['id'],_0x438728,_0x4baa19);}async[_0x4bf46d(0x11a)](_0x5ef23b,_0x48324a){const _0x48993c=_0x4bf46d;let {maxRounds:_0x2b639a,maxModelToken:_0x5e28e0,maxResponseTokens:_0x28fa6f,systemMessage:systemMessage='',name:_0xb618a1,imageUrl:_0x1bfe73,model:_0x5eb0f1,activeModel:_0x17ceac}=_0x48324a,{parentMessageId:_0xff314}=_0x48324a,_0x449701=[],_0x1d69c8=0x0;if(systemMessage){const _0x565a85=[_0x48993c(0x118),_0x48993c(0x12c),_0x48993c(0x101)],_0x26c2c6=_0x17ceac&&_0x565a85[_0x48993c(0x127)](_0x35358b=>_0x17ceac[_0x48993c(0xfe)](_0x35358b));_0x26c2c6?(_0x449701[_0x48993c(0xfc)]({'role':_0x48993c(0x109),'content':systemMessage,'name':_0xb618a1}),_0x449701['push']({'role':'assistant','content':'好的','name':_0xb618a1})):_0x449701[_0x48993c(0xfc)]({'role':_0x48993c(0x10e),'content':systemMessage,'name':_0xb618a1});}const _0x21e59a=_0x449701[_0x48993c(0x12e)];let _0x51e1a2=0x0;if(_0x17ceac==='gpt-4-vision-preview'&&_0x1bfe73){const _0x329037=[{'type':_0x48993c(0xf8),'text':_0x5ef23b},{'type':'image_url','image_url':{'url':_0x1bfe73}}];_0x449701[_0x48993c(0xfc)]({'role':_0x48993c(0x109),'content':_0x329037,'name':_0xb618a1});}else _0x5eb0f1===_0x48993c(0xfd)&&_0x1bfe73&&(_0x5ef23b=_0x1bfe73+'\x0a'+_0x5ef23b),_0x449701[_0x48993c(0xfc)]({'role':_0x48993c(0x109),'content':_0x5ef23b,'name':_0xb618a1});let _0x353ff7=_0x449701;do{if(!_0xff314)break;const _0x4d2661=await this[_0x48993c(0x12a)](_0xff314);if(!_0x4d2661)break;const {text:_0x3e5073,name:_0x39bb29,role:_0x314997,imageUrl:_0x1f1ce1}=_0x4d2661;let _0x5da39c=_0x3e5073;_0x1f1ce1&&(_0x17ceac===_0x48993c(0x11f)&&(_0x5da39c=[{'type':_0x48993c(0xf8),'text':_0x3e5073},{'type':_0x48993c(0xfb),'image_url':{'url':_0x1f1ce1}}]));_0x353ff7=_0x353ff7['slice'](0x0,_0x21e59a)[_0x48993c(0x105)]([{'role':_0x314997,'content':_0x5da39c,'name':_0x39bb29},..._0x353ff7[_0x48993c(0x119)](_0x21e59a)]),_0x51e1a2++;if(_0x2b639a&&_0x51e1a2>=_0x2b639a)break;if(_0x5e28e0&&_0x28fa6f){const _0x31f484=_0x5e28e0-_0x28fa6f;_0x1d69c8=await this[_0x48993c(0x104)](_0x353ff7);const _0x56f916=_0x1d69c8+0xc8<=_0x31f484;!_0x56f916&&(_0x353ff7=this[_0x48993c(0x102)](_0x353ff7,_0x31f484,systemMessage));}_0xff314=_0x4d2661[_0x48993c(0x100)];}while(!![]);const _0xc59391=Math[_0x48993c(0x11d)](0x1,Math['min'](_0x5e28e0-_0x1d69c8,_0x28fa6f));return console[_0x48993c(0x126)](_0x48993c(0x112),_0x353ff7[_0x48993c(0x12e)],_0x1d69c8),{'context':_0x353ff7,'round':_0x353ff7[_0x48993c(0x12e)],'historyToken':_0x1d69c8};}[_0x4bf46d(0x104)](_0x3a47d7){const _0x54313f=_0x4bf46d;let _0x91c5e3=_0x3a47d7[_0x54313f(0x10a)]((_0x5c80ab,_0x16fe53)=>{const _0x47810d=_0x54313f;if(Array[_0x47810d(0xf9)](_0x16fe53['content'])){const _0x270141=_0x16fe53[_0x47810d(0x11c)][_0x47810d(0x12d)](_0x30a5bd=>_0x30a5bd[_0x47810d(0x10f)]===_0x47810d(0xf8))['map'](_0x4d9624=>_0x4d9624['text'])[_0x47810d(0x115)]('\x20');return _0x5c80ab+_0x270141;}else return _0x5c80ab+(_0x16fe53[_0x47810d(0x11c)]||'');},'');return _0x91c5e3=_0x91c5e3[_0x54313f(0xfa)](/<\|endoftext\|>/g,''),tokenizer[_0x54313f(0x113)](_0x91c5e3)[_0x54313f(0x12e)];}[_0x4bf46d(0x102)](_0x53bfae,_0x4f2b3c,_0x249b62){const _0x59d55d=_0x4bf46d,_0x4f38b4=this[_0x59d55d(0x104)](_0x53bfae);if(_0x4f38b4<=_0x4f2b3c)return _0x53bfae;return _0x53bfae[_0x59d55d(0x122)](_0x249b62?0x1:0x0,0x1),this[_0x59d55d(0x102)](_0x53bfae,_0x4f2b3c,_0x249b62);}[_0x4bf46d(0x117)](){return(0x0,uuid_1['v4'])();}}function _0x47c1(_0x25bd0a,_0x4efd68){const _0x41d033=_0x41d0();return _0x47c1=function(_0x47c1ce,_0x34faa9){_0x47c1ce=_0x47c1ce-0xf6;let _0x279090=_0x41d033[_0x47c1ce];return _0x279090;},_0x47c1(_0x25bd0a,_0x4efd68);}exports[_0x4bf46d(0x10d)]=NineStore;function _0x41d0(){const _0x5f3364=['isArray','replace','image_url','push','gpt-4-all','includes','generateKey','parentMessageId','hunyuan','_recursivePruning','698756YRkSRI','_getTokenCount','concat','1025343ouGShX','10050078WkMliA','expires','user','reduce','24813GtXBPc','formatOptions','NineStore','system','type','26388360PeuwdP','@dqbd/tiktoken','本次携带上下文的长度','encode','2372UORLHL','join','334891vlhxhL','getUuid','gemini-pro','slice','buildMessageFromParentMessageId','cl100k_base','content','max','namespace','gpt-4-vision-preview','chat','7jjrOVU','splice','35nAfeIV','setData','get_encoding','log','some','get','5048VBhnke','getData','uuid','ERNIE','filter','length','store','30GZBwpp','906MtYKPL','text'];_0x41d0=function(){return _0x5f3364;};return _0x41d0();}