import{r as s}from"./index.f0166be9.js";class e{static postSetBasicInfo(e){return s({url:"/api/setting/basicInfo",method:"post",json:!0,data:e}).then((s=>0===s.status?Promise.resolve(s):Promise.reject(s)))}static getPersonTags(){return s({url:"/api/personal/tags",method:"get",json:!0}).then((s=>0===s.status?Promise.resolve(s):Promise.reject(s)))}}export{e as S};