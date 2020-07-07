export const dataToShow=(_number)=>{
  if(isNaN(_number) && isNaN(_number * 1)) return _number;
  _number=_number* 1;
  if(_number <1000){
    return _number
  }
  if(_number <10000){
    _number=_number/1000 +'k+';
    return _number;
  }

  if(_number < 100000){
    _number=_number/10000 +'W+';
    return _number;
  }
  return '10W+';
}


export const sort=(params,key)=>{
  return Array.prototype.sort.call(params,(pre,next)=>{
    return  pre[key]-next[key]
  })
}
export const getUUid=() =>{
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
}

export const deepClone = (obj) =>{
  return JSON.parse(JSON.stringify(obj))
};
