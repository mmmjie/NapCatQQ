const _0x2656be=_0x3cfd;(function(_0x4d8e8a,_0x31ed54){const _0x27120b=_0x3cfd,_0xfe54a6=_0x4d8e8a();while(!![]){try{const _0x3d9d5b=-parseInt(_0x27120b(0x1a6))/0x1+-parseInt(_0x27120b(0x1cd))/0x2*(-parseInt(_0x27120b(0x19e))/0x3)+parseInt(_0x27120b(0x1cb))/0x4*(-parseInt(_0x27120b(0x1ba))/0x5)+parseInt(_0x27120b(0x1dc))/0x6*(-parseInt(_0x27120b(0x181))/0x7)+-parseInt(_0x27120b(0x1d6))/0x8+parseInt(_0x27120b(0x183))/0x9*(parseInt(_0x27120b(0x1aa))/0xa)+-parseInt(_0x27120b(0x1da))/0xb*(-parseInt(_0x27120b(0x1a7))/0xc);if(_0x3d9d5b===_0x31ed54)break;else _0xfe54a6['push'](_0xfe54a6['shift']());}catch(_0x1c7a12){_0xfe54a6['push'](_0xfe54a6['shift']());}}}(_0xb8d3,0xc48df));function _0x3cfd(_0x1c53c2,_0x2c4d4c){const _0xb8d30a=_0xb8d3();return _0x3cfd=function(_0x3cfd25,_0x565009){_0x3cfd25=_0x3cfd25-0x170;let _0x27c93d=_0xb8d30a[_0x3cfd25];return _0x27c93d;},_0x3cfd(_0x1c53c2,_0x2c4d4c);}import{ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';function _0xb8d3(){const _0x4c27f6=['fileUuid','clearCacheDataByKeys','elementId','filePath','getStorageCleanService','error','md5HexStr','basename','removeKernelMsgListener','PIC','scanCache','picElement','SSgko','获取图片rkey失败','646513GzDrIP','uploadFile','27fXhmLN','destroy','now','sBRXw','addCacheScanedPaths','elements','originImageUrl','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/58.0.3029.110\x20Safari/537.36','bytes=0-0','BWwxQ','VMiqL','getDesktopTmpPath','chHOz','getChatCacheList','fileTypeFromFile','setCacheSilentScan','MtxDy','Check\x20rkey\x20request\x20time:','find','qgdwF','oqLCe','yCsfd','GVqzl','wwjRi','session','YaIVK','request','807006FQKHhB','end','Llevu','getMsgService','图片rkey获取成功','JKJCM','indexOf','abBCI','941693OoBQwn','7248ZwDplI','addListener','sourcePath','4200090VADykA','getFileSize','RfpMc','获取rkey失败','statusCode','clearCache','Check\x20rkey\x20headers:\x20','SziHF','CysIt','qfJoG','nDGuB','defaultFileDownloadPath','获取图片rkey...','BipPP','GtcTq','getChatCacheInfo','3085uPNYQe','peerUid','Check\x20rkey\x20request\x20timed\x20out','msgId','headers','hotUpdate','clearChatCache','nbPlc','getRKey','zdtFL','*/*','&rkey=','toUpperCase','stringify','getImageUrl','copyFile','dqxMX','6596dlMjTV','CiBVG','4BmcZGH','getImageSize','The\x20image\x20URL\x20is\x20not\x20accessible.','zgcfW','downloadMedia','onRichMediaDownloadComplete','/download','setTimeout','startsWith','3670928NjmqPi','jlszD','getFileType','pathname','32681HiBSzI','isAvailable','24QzDOkG','host','existsSync','Problem\x20with\x20rkey\x20request:\x20','sVted','getCacheSessionPathList','unlinkSync','includes','getHotUpdateCachePath','util','Sdyax','lCNKL','getRichMediaFilePathForGuild','message','CyhIJ','/gchatpic_new/0/0-0-','GET'];_0xb8d3=function(){return _0x4c27f6;};return _0xb8d3();}import _0x55892f from'path';import _0x24c401 from'fs';import{logDebug,logError}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x547bc3 from'file-type';import{MsgListener}from'@/core/listeners';import _0x59bc95 from'image-size';import{sessionConfig}from'@/core/sessionConfig';import _0x57fa38 from'http';import{hookApi}from'@/core/external/hook';import{sleep}from'@/common/utils/helper';let privateImageRKey='',groupImageRKey='';export class NTQQFileApi{static async[_0x2656be(0x1d8)](_0x22efa3){const _0x11a606=_0x2656be;return _0x547bc3[_0x11a606(0x191)](_0x22efa3);}static async[_0x2656be(0x1c9)](_0x2a78ba,_0x470025){const _0x1082b9=_0x2656be;await napCatCore['util'][_0x1082b9(0x1c9)](_0x2a78ba,_0x470025);}static async[_0x2656be(0x1ab)](_0x3e9a90){const _0x3c064f=_0x2656be;return await napCatCore[_0x3c064f(0x1e5)][_0x3c064f(0x1ab)](_0x3e9a90);}static async[_0x2656be(0x182)](_0x298896,_0x16130b=ElementType[_0x2656be(0x17c)],_0x2ae6eb=0x0){const _0x3f2fe2=_0x2656be,_0x217ec4={'SziHF':function(_0x3b565d,_0x3f61de){return _0x3b565d(_0x3f61de);},'qfJoG':function(_0x391d19,_0x2611d1){return _0x391d19+_0x2611d1;}},_0x461e17=await _0x217ec4[_0x3f2fe2(0x1b1)](calculateFileMD5,_0x298896);let _0x490160=(await NTQQFileApi[_0x3f2fe2(0x1d8)](_0x298896))?.['ext']||'';_0x490160&&(_0x490160=_0x217ec4[_0x3f2fe2(0x1b3)]('.',_0x490160));let _0x2afb70=''+_0x55892f[_0x3f2fe2(0x17a)](_0x298896);_0x2afb70[_0x3f2fe2(0x1a4)]('.')===-0x1&&(_0x2afb70+=_0x490160);const _0x579a34=napCatCore[_0x3f2fe2(0x19b)][_0x3f2fe2(0x1a1)]()[_0x3f2fe2(0x1e8)]({'md5HexStr':_0x461e17,'fileName':_0x2afb70,'elementType':_0x16130b,'elementSubType':_0x2ae6eb,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x3f2fe2(0x1c9)](_0x298896,_0x579a34);const _0x29c4ff=await NTQQFileApi['getFileSize'](_0x298896);return{'md5':_0x461e17,'fileName':_0x2afb70,'path':_0x579a34,'fileSize':_0x29c4ff,'ext':_0x490160};}static async['downloadMedia'](_0x5e424b,_0xafcc59,_0x4ae258,_0x20101d,_0x554360,_0x39fa0d,_0x5a8825=0x3e8*0x3c*0x2,_0x5d3010=![]){const _0x3e4b28=_0x2656be,_0x17d522={'CwMpi':function(_0x1faf0b,_0x5324f4){return _0x1faf0b===_0x5324f4;},'SSgko':function(_0xef660,_0x5a3ba1){return _0xef660(_0x5a3ba1);},'zgcfW':function(_0x386393,_0x399e6a,_0x35d778){return _0x386393(_0x399e6a,_0x35d778);}};if(_0x39fa0d&&_0x24c401[_0x3e4b28(0x1de)](_0x39fa0d)){if(_0x5d3010)_0x24c401[_0x3e4b28(0x1e2)](_0x39fa0d);else return _0x39fa0d;}const _0x52b057=new MsgListener();return new Promise((_0x1b3184,_0x58a2b2)=>{const _0x2c0f7c=_0x3e4b28;let _0x5c73e4=![];_0x52b057[_0x2c0f7c(0x1d2)]=_0x219eb5=>{const _0x2b9da4=_0x2c0f7c;if(_0x17d522['CwMpi'](_0x219eb5[_0x2b9da4(0x1bd)],_0x5e424b)){_0x5c73e4=!![];let _0x4f3667=_0x219eb5[_0x2b9da4(0x176)];if(_0x4f3667[_0x2b9da4(0x1d5)]('\x5c')){const _0x356c55=sessionConfig?.[_0x2b9da4(0x1b5)];_0x4f3667=_0x55892f['join'](_0x356c55,_0x4f3667);}_0x1b3184(_0x4f3667),napCatCore[_0x2b9da4(0x19b)][_0x2b9da4(0x1a1)]()[_0x2b9da4(0x17b)](_0x487a10);}};const _0x487a10=napCatCore[_0x2c0f7c(0x1a8)](_0x52b057);_0x17d522[_0x2c0f7c(0x1d0)](setTimeout,()=>{const _0x3acf1d=_0x2c0f7c;!_0x5c73e4&&(_0x17d522[_0x3acf1d(0x17f)](_0x58a2b2,new Error('下载超时')),napCatCore[_0x3acf1d(0x19b)][_0x3acf1d(0x1a1)]()[_0x3acf1d(0x17b)](_0x487a10));},_0x5a8825),napCatCore[_0x2c0f7c(0x19b)][_0x2c0f7c(0x1a1)]()['downloadRichMedia']({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x5e424b,'chatType':_0xafcc59,'peerUid':_0x4ae258,'elementId':_0x20101d,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x554360});});}static async[_0x2656be(0x1ce)](_0x2ec7ba){const _0x1e1d45={'CiBVG':function(_0x3e10f2,_0x1991ce,_0x6a8700){return _0x3e10f2(_0x1991ce,_0x6a8700);}};return new Promise((_0x5f230b,_0x5c7286)=>{const _0x5f22ea=_0x3cfd,_0x2dc659={'chHOz':function(_0x37657b,_0xadde99){return _0x37657b(_0xadde99);}};_0x1e1d45[_0x5f22ea(0x1cc)](_0x59bc95,_0x2ec7ba,(_0x163de7,_0x3254f8)=>{const _0x55cb99=_0x5f22ea;_0x163de7?_0x2dc659[_0x55cb99(0x18f)](_0x5c7286,_0x163de7):_0x2dc659[_0x55cb99(0x18f)](_0x5f230b,_0x3254f8);});});}static async[_0x2656be(0x1c8)](_0x3dc64f){const _0x21ac67=_0x2656be,_0xe0d27b={'nbPlc':function(_0x40a370,_0x1b65fe){return _0x40a370(_0x1b65fe);},'RDLgw':_0x21ac67(0x1b6),'CyhIJ':_0x21ac67(0x1a2),'qgdwF':function(_0x180209,_0x224924){return _0x180209(_0x224924);},'BWwxQ':function(_0x4848d8,_0x840d40){return _0x4848d8==_0x840d40;},'JKJCM':function(_0x10839c,_0x2a3a0c){return _0x10839c===_0x2a3a0c;},'PeaWc':function(_0x139a4e,_0x5bc908){return _0x139a4e(_0x5bc908);},'Sdyax':_0x21ac67(0x1cf),'qzgmc':_0x21ac67(0x172),'noacH':function(_0x8bfe78,_0x284c26){return _0x8bfe78+_0x284c26;},'GtcTq':_0x21ac67(0x18a),'sBRXw':_0x21ac67(0x178),'yCsfd':_0x21ac67(0x1d3),'RfpMc':'hookApi\x20is\x20not\x20available','eizSh':function(_0x2eae80,_0xb0d39d){return _0x2eae80!==_0xb0d39d;},'BipPP':'appid=1406','VMiqL':function(_0x345278){return _0x345278();},'Llevu':function(_0x460059,_0xed380e,_0x3253a0){return _0x460059(_0xed380e,_0x3253a0);},'wKsWx':_0x21ac67(0x180),'jlszD':function(_0x41df18,_0x283b77){return _0x41df18+_0x283b77;},'YaIVK':function(_0x572ec6,_0x544429){return _0x572ec6+_0x544429;},'MtxDy':_0x21ac67(0x194),'sVted':function(_0x592b9f,_0x827aa){return _0x592b9f+_0x827aa;},'GVqzl':function(_0x413232,_0x1dc048){return _0x413232+_0x1dc048;},'wwjRi':_0x21ac67(0x1ad),'zHxOC':function(_0x3b0e5c,_0x14379f){return _0x3b0e5c+_0x14379f;},'CysIt':function(_0xaca393,_0x41f287){return _0xaca393||_0x41f287;}},_0x1ff9fb=_0x3dc64f[_0x21ac67(0x188)][_0x21ac67(0x195)](_0x293cd8=>!!_0x293cd8[_0x21ac67(0x17e)]);if(!_0x1ff9fb)return'';const _0x330b59=_0x1ff9fb[_0x21ac67(0x17e)][_0x21ac67(0x189)],_0x2e9ba7=_0x1ff9fb[_0x21ac67(0x17e)][_0x21ac67(0x179)],_0x1c2aab=_0x1ff9fb[_0x21ac67(0x17e)][_0x21ac67(0x179)],_0x327153=_0x1ff9fb[_0x21ac67(0x17e)][_0x21ac67(0x173)];let _0x68eb2a='';if(_0x330b59){if(_0x330b59[_0x21ac67(0x1d5)](_0xe0d27b[_0x21ac67(0x198)])){if(_0x330b59[_0x21ac67(0x1e3)](_0x21ac67(0x1c5)))_0x68eb2a=IMAGE_HTTP_HOST_NT+_0x330b59;else{if(!hookApi[_0x21ac67(0x1db)]())return _0xe0d27b[_0x21ac67(0x196)](logDebug,_0xe0d27b[_0x21ac67(0x1ac)]),'';let _0xe3f1a6=![];_0xe0d27b['eizSh'](_0x330b59[_0x21ac67(0x1a4)](_0xe0d27b[_0x21ac67(0x1b7)]),-0x1)&&(_0xe3f1a6=!![]);let _0x5543be='';_0xe3f1a6?_0x5543be=privateImageRKey:_0x5543be=groupImageRKey;_0x5543be=_0x5543be||hookApi[_0x21ac67(0x1c2)]();const _0x5cecdd=async()=>{const _0x54c7ce=_0x21ac67;_0xe0d27b[_0x54c7ce(0x1c1)](logDebug,_0xe0d27b['RDLgw']),NTQQFileApi[_0x54c7ce(0x1d1)](_0x3dc64f[_0x54c7ce(0x1bd)],_0x3dc64f['chatType'],_0x3dc64f[_0x54c7ce(0x1bb)],_0x1ff9fb[_0x54c7ce(0x175)],'',_0x1ff9fb['picElement'][_0x54c7ce(0x1a9)],0x3e8,!![])['then']()['catch'](()=>{}),await sleep(0x12c);const _0x5d8d59=hookApi[_0x54c7ce(0x1c2)]();if(_0x5d8d59)return logDebug(_0xe0d27b[_0x54c7ce(0x170)],_0x5543be),_0x5543be=_0x5d8d59,_0x5543be;},_0x2baf9f=()=>{_0xe3f1a6?privateImageRKey=_0x5543be:groupImageRKey=_0x5543be;};if(!_0x5543be)try{await _0xe0d27b[_0x21ac67(0x18d)](_0x5cecdd);}catch(_0x19d421){return _0xe0d27b[_0x21ac67(0x1a0)](logError,_0xe0d27b['wKsWx'],_0x19d421),'';}_0x68eb2a=_0xe0d27b[_0x21ac67(0x1d7)](_0xe0d27b[_0x21ac67(0x19c)](IMAGE_HTTP_HOST_NT,_0x330b59),''+_0x5543be);const _0x1d985f=new Promise((_0x19bb4f,_0x50055a)=>{const _0x3ae868=_0x21ac67,_0x48ee76={'abBCI':function(_0x275029,_0x20cd64){const _0x3293ee=_0x3cfd;return _0xe0d27b[_0x3293ee(0x196)](_0x275029,_0x20cd64);},'oqLCe':function(_0x1f4ca1,_0x14d243){const _0x586326=_0x3cfd;return _0xe0d27b[_0x586326(0x196)](_0x1f4ca1,_0x14d243);},'lCNKL':function(_0x5b9429,_0x4eb4ac){const _0x298b47=_0x3cfd;return _0xe0d27b[_0x298b47(0x18c)](_0x5b9429,_0x4eb4ac);},'zdtFL':function(_0x1983b0,_0x2e159a){const _0x261c1b=_0x3cfd;return _0xe0d27b[_0x261c1b(0x1a3)](_0x1983b0,_0x2e159a);},'znSEr':function(_0x40a147,_0x5ab53d){return _0xe0d27b['PeaWc'](_0x40a147,_0x5ab53d);},'nDGuB':_0xe0d27b[_0x3ae868(0x1e6)],'dqxMX':function(_0x31b902,_0x5d5e99){return _0x31b902(_0x5d5e99);}},_0x30909a=new URL(_0x68eb2a),_0x341001={'method':_0xe0d27b['qzgmc'],'host':_0x30909a[_0x3ae868(0x1dd)],'path':_0xe0d27b['noacH'](_0x30909a[_0x3ae868(0x1d9)],_0x30909a['search']),'headers':{'User-Agent':_0xe0d27b[_0x3ae868(0x1b8)],'Accept':_0x3ae868(0x1c4),'Range':_0x3ae868(0x18b)}},_0x316e94=_0x57fa38[_0x3ae868(0x19d)](_0x341001,_0x30409c=>{const _0x16d193=_0x3ae868;_0x48ee76[_0x16d193(0x1a5)](logDebug,'Check\x20rkey\x20status:\x20'+_0x30409c[_0x16d193(0x1ae)]),_0x48ee76[_0x16d193(0x197)](logDebug,_0x16d193(0x1b0)+JSON[_0x16d193(0x1c7)](_0x30409c[_0x16d193(0x1be)])),_0x48ee76[_0x16d193(0x1e7)](_0x30409c[_0x16d193(0x1ae)],0xc8)||_0x48ee76[_0x16d193(0x1c3)](_0x30409c[_0x16d193(0x1ae)],0xce)?_0x48ee76['znSEr'](_0x19bb4f,'ok'):_0x50055a(_0x48ee76[_0x16d193(0x1b4)]);});_0x316e94[_0x3ae868(0x1d4)](0xbb8,()=>{const _0x21d70e=_0x3ae868;_0x316e94[_0x21d70e(0x184)](),_0x48ee76[_0x21d70e(0x1ca)](_0x50055a,_0x21d70e(0x1bc));}),_0x316e94['on'](_0xe0d27b[_0x3ae868(0x186)],_0x3793eb=>{const _0x3c6a48=_0x3ae868;console[_0x3c6a48(0x178)](_0x3c6a48(0x1df)+_0x3793eb[_0x3c6a48(0x1e9)]),_0x48ee76[_0x3c6a48(0x197)](_0x50055a,_0x3793eb[_0x3c6a48(0x1e9)]);}),_0x316e94[_0x3ae868(0x19f)]();});try{const _0x407c5e=Date[_0x21ac67(0x185)]();await _0x1d985f;const _0x3a8c02=Date[_0x21ac67(0x185)]();_0x2baf9f(),logDebug(_0xe0d27b[_0x21ac67(0x193)],_0x3a8c02-_0x407c5e);}catch(_0x336f4c){try{await _0xe0d27b[_0x21ac67(0x18d)](_0x5cecdd),_0x2baf9f(),_0x68eb2a=_0xe0d27b[_0x21ac67(0x1e0)](_0xe0d27b[_0x21ac67(0x199)](IMAGE_HTTP_HOST_NT,_0x330b59),''+_0x5543be);}catch(_0x573ec3){_0xe0d27b[_0x21ac67(0x1a0)](logError,_0xe0d27b[_0x21ac67(0x19a)],_0x573ec3);}}}}else _0x68eb2a=_0xe0d27b['zHxOC'](IMAGE_HTTP_HOST,_0x330b59);}else(_0x1c2aab||_0x2e9ba7)&&(_0x68eb2a=IMAGE_HTTP_HOST+_0x21ac67(0x171)+_0xe0d27b[_0x21ac67(0x1b2)](_0x1c2aab,_0x2e9ba7)[_0x21ac67(0x1c6)]()+'/0');return _0x68eb2a;}}export class NTQQFileCacheApi{static async[_0x2656be(0x192)](_0x7448ab=!![]){return'';}static[_0x2656be(0x1e1)](){return'';}static[_0x2656be(0x1af)](_0x2b5113=['tmp',_0x2656be(0x1bf)]){const _0x938eda=_0x2656be;return napCatCore['session'][_0x938eda(0x177)]()[_0x938eda(0x174)](_0x2b5113);}static['addCacheScannedPaths'](_0x54d783={}){const _0x3c377d=_0x2656be;return napCatCore[_0x3c377d(0x19b)][_0x3c377d(0x177)]()[_0x3c377d(0x187)](_0x54d783);}static[_0x2656be(0x17d)](){const _0x2550ba=_0x2656be;return napCatCore[_0x2550ba(0x19b)][_0x2550ba(0x177)]()['scanCache']();}static[_0x2656be(0x1e4)](){return'';}static[_0x2656be(0x18e)](){return'';}static[_0x2656be(0x190)](_0x40ae92,_0x3dbc0a=0x3e8,_0x287a4b=0x0){const _0x27f96c=_0x2656be;return napCatCore[_0x27f96c(0x19b)][_0x27f96c(0x177)]()[_0x27f96c(0x1b9)](_0x40ae92,_0x3dbc0a,0x1,_0x287a4b);}static['getFileCacheInfo'](_0x5736bb,_0xecd6bf=0x3e8,_0x156706){const _0x1f44a2=_0x156706?_0x156706:{'fileType':_0x5736bb};}static async[_0x2656be(0x1c0)](_0x1cea04=[],_0x4476a4=[]){const _0x2296b0=_0x2656be;return napCatCore[_0x2296b0(0x19b)][_0x2296b0(0x177)]()['clearChatCacheInfo'](_0x1cea04,_0x4476a4);}}