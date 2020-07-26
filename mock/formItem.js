const Mock=require('mockjs')
module.exports.page=Mock.mock({
  templateId:2,
  userId:2,
  pageId:1,
  currentParent: 0, //0标示body
  header:{
    imageUrl:'',title:'默认eqw标题',description:'默认描述', videoUrl:'',
    showTitle:false,
    showDes: false,

  },
  defineState:{
    applied:'false',
  },
  projectType:0,//0表单，1场景
  pageKey:0,
  hideWrap: false,
  itemStyles:{paddingTop:'12px',paddingBottom:'12px'},
  body:[
    {
      id:5,
      catalog:0,
      type:'modal',
      muster:true,
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
      style:'display:flex',
      childrens:[
        {
          catalog:1,
          id:20,
          title:'显示图片',
          name:'显示图片',
          imageSrc:'https://www.xforceplus.com/img/imgItem_1.png',
          style:{width:'100px',left:'0',height:'100px'},
          type:'image',
        },
        {
          id:6,
          catalog:1,
          type:'container',
          style:{display:'flex',flexDirection:'column'},
          childrens:[ {
            id:40,
            catalog:1,
            type:'ptext',
            content:'华为智能制造科技项目',
            style:{fontSize:'34px',color:'#070D16'}
          },{
            id:7,
            catalog:1,
            title:'下面',
            type:'container',
            style:'display:flex',
            childrens:[{
              catalog:1,
              id:41,
              type:'tag',
              content:'融',
              style:{fontSize:'34px',color:'#fff',backgroundColor:'#2357FF',padding:'0px 10px',margin:'0 5px',border:'1px solid #2357FF',borderRadius:'2px'}
            },{
              catalog:1,
              id:42,
              type:'tag',
              content:'护航项目',
              style:{fontSize:'34px',color:'#2357FF',backgroundColor:'#fff',padding:'0px 10px',margin:'0 5px',border:'1px solid #2357FF',borderRadius:'2px'}
            },
              {
                catalog:1,
                id:43,
                type:'tag',
                content:'智能制造',
                style:{fontSize:'34px',color:'#2357FF',backgroundColor:'#fff',padding:'0px 10px',margin:'0 5px',border:'1px solid #2357FF',borderRadius:'2px'}
              },{
                catalog:1,
                id:44,
                type:'score',
                style:{display:'inline-block',verticalAlign:'middle'},
                size:1,
                rank:5,
                value:[3],
              }
            ]
          }
          ]
        }

      ]

    },
    {
      title:'附件一：华为智能制造科技项目',
      type:'download',
      rightStyle:{width:'40px',height:'40px',verticalAlign:'middle',float:'right',marginRight:'20px'},
      muster:true,
      url:'',
      name:'下载',
      rightIcon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
    },
    {type:'ptext',
      style:{fontSize:'28px',textIndent:'56px',color:'#070D16'},
      id:7,
      name:'单行文本',
      content:'华为智能制造解决方案，通过边缘计算物联网关的丰富的接口和协议，实现设备统一接入，帮助智能工厂构建工业互联；通过边缘计算物联网关的开放计算能力，实现控制App的云化统一管理，快速调整产线生产控制，促进传统制造企业向智能制造发展，大幅度提升生产效率。'},
    {type:'ptext',
      id:8,
      style:{fontSize:'28px',textIndent:'56px',color:'#070D16'},
      name:'单行文本',
      content:' 华为智能制造解决方案，通过边缘计算物联网关的丰富的接口和协议，实现设备统一接入，帮助智能工厂构建工业互联；通过边缘计算物联网关的开放计算能力，实现控制App的云化统一管理，快速调整产线生产控制，促进传统制造企业向智能制造发展，大幅度提升生产效率。'},
    {
      id:9,
      catalog:1,
      type:'modal',
      style:{display:'flex',position:'fixed',bottom:0,width:'100vw'},
      childrens:[{
        id:10,
        catalog:1,
        type:'container',
        showVar:'applied',
        showVarValue:'false',
        style:{display:'flex',flexDirection:'row',flex: 1},
        childrens:[
          {
            id:31,
            type:'button',
            name:'按钮',
            icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
            title:'不感兴趣',
            action:['AJAX','PAGE','WIN'],
            commonStyles:{flex:1,backgroundColor:'#EBEFFF',color:'#2357FF'},
            currentAction:'',
            preStyles:{},
            full: true,
            theme:'',
            clickStyles:{},
            ajax:{},
            page:{},
            win:{}
          },{
            id:32,
            type:'button',
            name:'按钮',
            theme:'',
            full: true,
            icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
            title:'感兴趣请发资料',
            commonStyles:{flex:3,backgroundColor:'#1BB937'},
            action:['AJAX','PAGE','WIN'],
            currentAction:'AJAX',
            preStyles:{},
            clickStyles:{backgroundColor:'#1BB937'},
            ajax:{
              url:'/opus/getFile',
              type: 'get',
              stateChanges:[{
                key:'applied',
                value:'true'
              }],
            },
            page:{},
            win:{},
          }

        ]

      },{
        id:11,
        catalog:1,
        type:'container',
        showVar:'applied',
        showVarValue:'true',
        style:{display:'flex',flexDirection:'row',flex: 1},
        childrens:[
          {
            id:33,
            type:'button',
            name:'按钮',
            icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
            title:'已申请资料',
            theme:'',
            action:['AJAX','PAGE','WIN'],
            commonStyles:{backgroundColor:'#1BB937',color:'#fff',fontSize:'34px',width:'100%',flex:'1'},
            currentAction:'',
            full: true,
            preStyles:{},
            clickStyles:{},
            ajax:{},
            page:{},
            win:{}
          }
        ]
      }]

    }
  ]
})


