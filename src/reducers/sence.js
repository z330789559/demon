import {
  SENCE_DETAIL_LOAD,SENCE_ADD_ELEMENT
} from '@constants/sence'

const INITIAL_STATE = {
  header:{
    imageUrl:'',title:'默认标题',description:'默认描述', videoUrl:''
  },
  pageKey:0,
  body:[{
    id:1,
    title:'你的姓名?',
    type:'text',
    must:false,
    order:1,
    value:[''],
    correntValue:[''],
    score:'未设置',
    limit:'StringValid',
    limitOption:[
      {key:'字符串',value:'StringValid'},
      {key:'数字',value:'NumberValid'},
      {key:'最小长度',value:'min'},
      {key:'最大长度',value:'max'},
      {key:'email',value:'email'},
      {key:'手机号码',value:'ceil'},
    ],
    name:'姓名',
    icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAD00lEQVRoQ+2a34tUZRjHP8+Z1bHQK9kI0RR2U1tBqOsurIvCAsNg2w26MFihmJllxn+g6R9whp0ZClzQi6DZFrKCkrwoL7wuCFxUZiBTJBSvVmpXd84TZ/JMZ7dxzpwf77ge5r2d9/0+z+d5nvfnHCHhTRLOxxDwac+w0Qzm5nS33eIdgbdRxlTY5QRMlNsITYXvrRTfVmbllqlAGgHMVnSXrPGpDR+ipHo6L7QsOKsjfFLNye24QWMHzJb1mNp8AewI6OyyWHxQzct3Acf5xC9GtVxZZ9WmpGCFkRWwxaJQyctcmPHdxsSWwXbmlG/QDSuzcAWYt1Jc3JniD8eJey1esFu8AcygHPI65kBicTyuTMYC6Mw5fchVb1kKPFDh1Giez4oidrfoFlWtu2U+FuW0wlZPn2XZwsE45mQsgLmSnrGVGddBBw7haLUgP/VTatmSvo5ywQtpCfOVgpzsZ3yvPpEBH20Fv69bLYVsrSC1IM5lSppBqXbGOKtrin1Rt5DIgF0cuzKa5/DjyvJx0I/K9bd1czJEoDbqRwbMlvQHVY56Il+oFaQcJHtu30xJ8yilTqkLF6oFeSuMlme6RBkO2dN6TWG/q2KNcKgyK0thVHNzOmGvtVfddhO4Xj0lB8JoxQaYKekyynZXcDTNjmJG7odxqljT7XdXWfZUw/1aQYIeGNaZjlyiiQdMfIkmfpFJ/DaR+I3eWbISfVRzABN/2G5DlvUYNuf/dxdMwnXJ3VkTfeF1IRP9ZNGBTPKjk/cgmNhnwzAHbVNjIh+2TTkWl27fgJNfaerX8+2H3ElgQpWdwLZ/r21GmwIrItwDlhAWXz7O2cX3pNWP1b6cmzihz6+usIjyaj+ixvsIl9PbmFw6J3/62fIFdDL3y9dc2jRw/13VL7/yLkf8MukLOP6+zqjNGb9IPYnfxeJk40uZ72XbH3Baf1Rtv0K3m8DPI/DR2nPcaFRk1TSYqsqLs2wducPeNfhc4bWOL8LFRl3ejAp4U5XdrsgWOHB1Qa6bBuumf3BK9z+Eax7AW4267IkEODalfwHPuCLpl0gvFeXBkwAcz2la77Disf13c0GejQro/K/QKeXmgviWtUn4sSl1tg23aXNBev6T5evsBkE2GaCvP0PAYQZNTrgu2kEDPizRoBEzndCg/gwzGDRiT30GTQME1ffbl/1LdFpbaLjvXoI6G7i/YDfr0vNLqn4AnQ8M9gY2PogBwo1mXfZFOouOT+sRhXPAnk2TScE5H98UONGoy6VIgINIhEkbviVq0vggtIeAg4iySRvDDJqM7iC0/wHgT/5ImL6QWwAAAABJRU5ErkJggg==',
  },{
    id:2,
    title:'你的年龄?',
    type:'text',
    must:true,
    order:0,
    value:[''],
    correntValue:[''],
    score:'未设置',
    limit:'StringValid',
    limitOption:[
      {key:'字符串',value:'StringValid'},
      {key:'数字',value:'NumberValid'},
      {key:'最小长度',value:'min'},
      {key:'最大长度',value:'max'},
      {key:'email',value:'email'},
      {key:'手机号码',value:'ceil'},
    ],
    name:'姓名',
    icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAD00lEQVRoQ+2a34tUZRjHP8+Z1bHQK9kI0RR2U1tBqOsurIvCAsNg2w26MFihmJllxn+g6R9whp0ZClzQi6DZFrKCkrwoL7wuCFxUZiBTJBSvVmpXd84TZ/JMZ7dxzpwf77ge5r2d9/0+z+d5nvfnHCHhTRLOxxDwac+w0Qzm5nS33eIdgbdRxlTY5QRMlNsITYXvrRTfVmbllqlAGgHMVnSXrPGpDR+ipHo6L7QsOKsjfFLNye24QWMHzJb1mNp8AewI6OyyWHxQzct3Acf5xC9GtVxZZ9WmpGCFkRWwxaJQyctcmPHdxsSWwXbmlG/QDSuzcAWYt1Jc3JniD8eJey1esFu8AcygHPI65kBicTyuTMYC6Mw5fchVb1kKPFDh1Giez4oidrfoFlWtu2U+FuW0wlZPn2XZwsE45mQsgLmSnrGVGddBBw7haLUgP/VTatmSvo5ywQtpCfOVgpzsZ3yvPpEBH20Fv69bLYVsrSC1IM5lSppBqXbGOKtrin1Rt5DIgF0cuzKa5/DjyvJx0I/K9bd1czJEoDbqRwbMlvQHVY56Il+oFaQcJHtu30xJ8yilTqkLF6oFeSuMlme6RBkO2dN6TWG/q2KNcKgyK0thVHNzOmGvtVfddhO4Xj0lB8JoxQaYKekyynZXcDTNjmJG7odxqljT7XdXWfZUw/1aQYIeGNaZjlyiiQdMfIkmfpFJ/DaR+I3eWbISfVRzABN/2G5DlvUYNuf/dxdMwnXJ3VkTfeF1IRP9ZNGBTPKjk/cgmNhnwzAHbVNjIh+2TTkWl27fgJNfaerX8+2H3ElgQpWdwLZ/r21GmwIrItwDlhAWXz7O2cX3pNWP1b6cmzihz6+usIjyaj+ixvsIl9PbmFw6J3/62fIFdDL3y9dc2jRw/13VL7/yLkf8MukLOP6+zqjNGb9IPYnfxeJk40uZ72XbH3Baf1Rtv0K3m8DPI/DR2nPcaFRk1TSYqsqLs2wducPeNfhc4bWOL8LFRl3ejAp4U5XdrsgWOHB1Qa6bBuumf3BK9z+Eax7AW4267IkEODalfwHPuCLpl0gvFeXBkwAcz2la77Disf13c0GejQro/K/QKeXmgviWtUn4sSl1tg23aXNBev6T5evsBkE2GaCvP0PAYQZNTrgu2kEDPizRoBEzndCg/gwzGDRiT30GTQME1ffbl/1LdFpbaLjvXoI6G7i/YDfr0vNLqn4AnQ8M9gY2PogBwo1mXfZFOouOT+sRhXPAnk2TScE5H98UONGoy6VIgINIhEkbviVq0vggtIeAg4iySRvDDJqM7iC0/wHgT/5ImL6QWwAAAABJRU5ErkJggg==',
  }]
}

export default function sence(state=INITIAL_STATE,action) {
  switch (action.type) {
    case SENCE_DETAIL_LOAD:
      return {
        ...state,
        ...action.payload
      }
      case SENCE_ADD_ELEMENT:
        debugger
        const body=state.body
        if(!action.playLoad ||!action.playLoad.id ){
          return state;
        }
        if(!body || body.length===0){
          action.playLoad.order=0;
          return {
            ...state,
            body:[action.playLoad]
          }
        }
        const index= body.findIndex((item)=>item.id==action.playLoad.id);
        if(index > -1){
          action.playLoad.order=body.length;
          return {
            ...state,
            body: [...body.slice(0,index),action.playLoad,...body.slice(index+1,body.length)]
          }
        }

        return {
          ...state,
          body:[...body,action.playLoad]
        }
    default:
      return state

  }



}

