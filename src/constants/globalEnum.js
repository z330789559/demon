//首页tabs分类
import study from '@assets/image/study.png'
import train from '@assets/image/train.png'
import wealth from '@assets/image/wealth.png'
import promotion from '@assets/image/promotion.png'
import fash from '@assets/image/fash.png'

export const Tabs_Cate = {
  //收藏
  LIKE: 'LIKE',
  //遇见
  OCCURE: 'OCCURE',
  //H5
  H5: 'H5',
  //视频
  VIDEO: 'VIDEO',
  //表单
  FORM: 'FORM',
  // 海报
  POST: 'POST',
  //更多
  SCENE: 'SCENE'
}

export const Tabs_Cate_List=[
  {
    id:1,
    code: 'LIKE',
    title: '收藏'
  },
  {
    id:2,
    code: 'OCCURE',
    title: '遇见'
  },
  {
    id:3,
    code: 'H5',
    title: 'H5'
  },
  {
    id:4,
    code: 'VIDEO',
    title: '视频'
  },
  {
    id:5,
    code: 'FORM',
    title: '表单'
  },
  {
    id:6,
    code: 'POST',
    title: '海报'
  },
  {
    id:7,
    code: 'SCENE',
    title: '场景'
  },
]

export const SENCE_CATALOGS=[
  {
    id:0,
    code: 'INVITATION',
    title: '邀请'
  },
  {
    id:1,
    code: 'DRAW',
    title: '抽奖'
  },
  {
    id:2,
    code: 'ACTIVE',
    title: '活动'
  },
  {
    id:3,
    code: 'integral',
    title: '积分'
  },
  {
    id:4,
    code: 'STORE',
    title: '商城'
  },
  {
    id:5,
    code: 'INVEST',
    title: '投顾'
  },
  {
    id:6,
    code: 'IMITATE',
    title: '模拟'
  },
  {
    id:7,
    code: 'PROJECT',
    title: '项目'
  },
  {
    id:8,
    code: 'OTHER',
    title: '其他'
  },

]

export const images={
  'study': study,
  'train': train,
  'wealth': wealth,
  'fash':fash,
  'promotion':promotion
}

export const formType=['free','draw']

export const pageType={
  single:"single",
  all:"all",
}


export const PAGEKEY={
  text:'text',
  radio:"radio",
  checkbox:"checkbox",
  score:"score",
  address:"address",
  position:'position',
  image:"image",
  date:"date",
  upload:"upload",
  page:"page",
  select:"select",
  download:'download',
  slider:'slider',
  section:'section',
  modal:'modal',
  ptext:'ptext',
  tag:'tag',
  container:'container',
  button:'button',
}

export const PAGESTATUS={
  isPreview:'isPreview',
  development:'development',
  publish:'publish'
}

export const PAGEACTION={
  AJAX:'AJAX',
  PAGE:'PAGE',
  WIN:'WIN'
}

export const ENVENT_TYPE={
  MODEL_ADD_ELEMNT_START: "MODEL_ADD_ELEMNT_START",
  MODEL_ADD_ELEMNT:"MODEL_ADD_ELEMNT",
  MODEL_ADD_ELEMNT_START_END:"MODEL_ADD_ELEMNT_START_END"
}
