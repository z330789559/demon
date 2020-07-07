import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import {DemonTools} from '@issue/primary'
import ElementProperty from '../element-property/ElementProperty'
import { AtNavBar,AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/formItem'
import './issue-lib.scss'
const $$element={
  issueType:{
    primary:[{
      title:'',
      type:'text',
      must:true,
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
       name:'文本',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACbklEQVRoQ+2aMWgUQRSGv7dGLwraCGKhWOTUJJ3WFtporXBe1EZBQYiKXmchiJVVIhhBSEAbNeeB1tpokVq7I8odKFpIwEYhuWi8Jwuubo7b292wNxmX2XZ3Zt/3/nnMP7wRcv5IzvlwgP+7wk7B3CtYeqob3j7nHEoJGFVlOzAIxutXgZYIX4E6Qu3AcR7UTsqvXiL0XKKjZ3XncosayiErlRTmCoOU6g/lS1R8kYC+cm+e8dpauIBImDt4gsNRSkYCFk/peW0zbaVyHUGJx4XGE5npFms04Ji+UOXov0TxagAuruzgY+OuLJsGV1XZe4VNAwvsWYH7Ckf+xia8bMzKsbSAn1TZFQzaCPvnq/LeNFi3/w2Xdd9PeBcC/NyYld2pAIfKughsDgYVRijUb8oPGwCLl7WgC7RCsSw1q7IlLWA7vBU0q2KVKRgqq79tBI82q+KlBQxPgOWAkfFFqtKRIQdoujaTCuAUDJRxNWh4jbol+ifhrgaT1uD4pF4X5YaG3M9aVq3AEnBrqiK3e403vkTHJ/QbsHUtUF3GfL9XkW1WAV6a0EcKp7MAFHg8VZEzVgH6x5lrdxhue3Q1vUnBvTaLk1eZF5FVVrFzvPElmhQgq+8coNsmVp+33Gkiq9pKOo+rwaxrMKmTSepU4pQ0rmBKJxPrVKwDTONkkjgV6wCTOpmkTsU6wLiAsn5vvAazBoibzwFmvU3EZTzr905Bp2BZc998yXf7rDim+W6AFiNa2N4IH9arEeo3PrNrYef9EkLur5H420iuLwIFziPXV7mytlfrMZ9VNyf6kQAH2I+smpzTKWgy2/341292LtNIIhxligAAAABJRU5ErkJggg==',
},{
      title:'',
      type:'radio',
      must:true,
      value:[''],
      correntValue:[''],
      selectList:[],
      score:'未设置',
      name:'单选',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFKklEQVRoQ+2aX4hUZRTAf+fORg+pFELUkj04s2o9B5VmaLiRWGH/nOtqBkEGseYuoU8FQj0ZsWsuQfsQpLnesdKopMBIadUKei7XnetDG5sEovgHinbuiTvdWe/Ozv07d2Uddt6G+53znd93zne+8/0RWvwnLc7HHODN7uE5D855sMEIqKp0bOZBrbBOYDHQrtAuSjugKvwpMA6MK5yTHEdHP+FnEdGsBzTTEO3o0jWOwwsoTwN3JTT2PMKXhsGno0PyXULZwOaZABY26UNaYTfKykwME4Ylx87yAfmpWX1NAXZ06WLH4V2UZ5s1pKG8cNgw2DE6JOfS6k8N6IXjIZQ7Aoy7KHBUDY6Jw+9tyrixkPHK34hc4+4JoV0N7hWHToV1YXoMgw1pwzYVYH6jbsOhD8hNgxOOYLB30RKGT+ySiTgjv2qXto2dZSUO21CeaSBTwaDXPih74+jzt0kMmN+o/Thsb9DRKYSdtiWnkxrhb583dTnKbmDFND0Ge+yD0pNEfyJAz3Pv13VQMeCN0ZLsSdJxVNuOom534L1pUWLwehJPxgaszrkK39Z1eKk6Pw7KsSiD03wvFPVxhRJwu0++YuR4Iu6cjAXoZctf6hLBJQOWj5bktzTGx5XpKOp9Drhhfx1SuGgYPBAnu8YCzJv6ed1SUDEM1s6U5+rhOzZqp+PwzZToEQ7bljwXNVCRgNVFfIIf/YoM6Ml6zkUZ6s3J/ikZso2Ho4qBSMC8qcMoj/gUn7JL4v8fZVtm3/NFPTkluwonbUtCq6dQQC+xTE0gwopml4K0xN4ScmpKNOXoDEs4oYAFUwdVeWVSoXDEtmRmyrKY1HlTD08pBoRB25JXg8QDAd0tT8Gsbmmu7wpyPGYPyfGYtsxIs3yXrqbC9z7l58sW7UFbrUDAaclFuLhoGXfGLb+S0nX36XqgVoptHegVN2tO+1XLujP85V+yJCTZBALmTX0b5c1aDyLsL1uyJanhcdp392tRlQPo/7WtCH8M9MqiINmCqftUedE3dd6xLXmrUftgD5p6QJUuH+CWsiX74xicpE09XBzAfJduocLHPtuGypZsSgp4XJVVPiWry5acSGJ8VNtGcAgVgecHeuWLEA+uUmUyF4hwomzJ6kSAeVNHUJbUhG6BpWdKcjao0+4+XQsMet+3hRnotgmEEzYN9Ihbfwb+lhV1yb8w4gvRs7YlSxMBFop6RWFeTejWhcz/9QO5GgI4pso91e+uF0IMbQbOVX//azrvnwtcmYwuuFouyfykgJcVJoXabmPByEcyqbReWXefXgcMgWwWzlW99GWdP3GNyz7AK+WSLEgEmCJE1yt8VsuEjTyZBZyrN5sQNTVxkgkDcA3zLwVxQnlGk0yhbpkgx0v2kOxLmxmrct461wycK5vJMtHMQt/Qk/6RiUhCUYNYMHW/Kpt9WTTFQl+/D0xYqgVCNgmXWamWRbE9DbJJOC88sym2q8pM/RBlqy8UEm+X6oroyAIgKjwz2y65HbX8htfz4g91lyqz6chi2Lbk0TCvR57JtPyhk+fF1j029Oaie03Wuge/voTTmkf3tUnc0pcvPsjWvT6r82RrXoDWIGNeYX8NuCfjY7UrbFfeuUC77wp7jcKTs+oK2wfZuo8Q/NWD94zEfW2RzaWMcFJy7Ii6OYqqW93vkZVMHCX+sFWHDao8leYhkAhficGhuLe3cWzLFLDWYcRTLlQYvymfcsUZ0RvdZkY8eKMhmtpNzCZj09gy58E0ozabZFreg/8B+576V7N2mC8AAAAASUVORK5CYII=',
    },{
      type:'checkbox',
      title:'',
      must:true,
      value:[''],
      correntValue:[''],
      selectList:[],
      score:'未设置',
      name:'多选',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACpElEQVRoQ+2aPW8TQRCG33ECDrRIiAJEERNIOqgpoAHRBYRxUBqQAqJwEP4H/AMjxQUCpNAgchiRdAgaUqQOnQXIlkBJgSLRggNJBq11Sw7r9s4nn/fWq732PnaeeWd2dm+WYPlFlvPBAQ67wk5B6xUsvuKRj8u4DUYRwBQzjgAYA7TnLwNoE+EHgAYI9bNXsVi/QbtRIkSG6NQtPrbdRh2M80YqSVjLj6HYeE7fVfYpAYVy62+waiycJCKsnbuGCyollYCFmzzHe3hqpHJdRlEOd5ov6VmYrWrAGX7HjEv7jsKHUeDezlF8ay7Qtm5wZqZT93FwdAsnd4DHDFz8ZxvhfXOJLicF3GDGcfnSAeD0J4++6AYLG+9MiSf+AJ8DgJvNJTqRCHC8xD8BHJIv5SeRbzyk3yYAFuY5z1toB2z51fLocFLAvWApaHlk1KJgvMSibMiLWx7lkgIGPwDDAZX2KVXp8pAD1J2bvQrgFJTKuBzUHKMuRH2HuxzUlYPlKk8DWPDHu1ur0NuoqB+qEC0/YrEueQHGiIAiwmatEr62lNBDA9gNZxVgGBwIuwRcr1VoxagQLVf5CoAnvlHzcQYq4QiztQfkxVUd7SFarvL+/lGoEGFov3ACPlvATiKFQ6YBlxXgNAOv5UzYCbEuyLTgMgEUg0YBiPvBUhDmgLi8C97XHqJycBVk575f5/qFy0zBSMig+2MmoV6UzEzBWMgU4DJXUAmZEpwxgJ2J5/9FdOwCoJfwNAqwV4OTPpd5DiY1OOnzDtD3mNvRy9Bxf9WSJlGfz6eRg9Y3X+xunxVmAhtYANY1QAuKFnZuEl+zaoSKxmd6LWzbDyFYf4xEzOJWHwSSZcrqo1x91mIjXjfq5MQgPOIAB+FVnd90Cur09iDG+gsjsTFXET2whwAAAABJRU5ErkJggg==',
    },{
      title:'',
      must:true,
      type:'score',
      name:'评分',
      score:'未设置',
      rank:5,
      leftText:'非常不高兴',
      rightText:'非常高兴',
      value:[''],
      correntValue:[''],
      icon:'data:image/png;base64,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',
    },{
      type:'address',
      name:'地址',
      icon:'data:image/png;base64,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',
    },{
      title:'点击后编辑名称',
      type:'position',
      name:'定位',
      icon:'data:image/png;base64,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',
    },{
      type:'image',
      title:'显示图片',
      name:'显示图片',
      imageSrc:'',
      style:{width:'100px',left:'0',height:'100px'},
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEWElEQVRoQ+2aXWgcVRTH/2e2WqyCiBXR+AVVfNFCq09SMcUPEB980Rg/WkULW9xJdieC1hdZfDE+NDPZ3YhRihotpFHBl2pRJIqlVLCttE+iEW2tIkZE0IZod/4yG3czM51JZ6Z7ZzZh53Fn7j3nd8+5/3NybwQr/JEVzocu4HKPcDeCKzaCusl7AbxG4ioVkCL4CcBAzZAPVMzfnDM0RXWTJ1TBtYAEdRE8WivJHlWQoYCFEVKVUc+8iiGzB3RoFUJGBhwbkrYprm7xIRK7QeRUp2smgA5UWpCZAaYFmSlgGpChgA+XyWPfA3P/AEhHT+OLtsAGcEKAJ76blM+CJggFvGkrOTcf32YmIwQ/zkzKdbEA1/WzDkLLxOG4RgX2zKQsKrJrfGgE1zlCvoyemT3BZSwyYNgEWa2BPwBdQH8koq5QN4KKViBqABLvwfIUz//9JF4ksHWhX8bEpT14odwnTuVU/igHHDA5bBPPuUk0wctVQ3YopwOgHFA3+TOJK9wwIvilZsiVcQALFu+GjdchoEbkq0PycZTxywKwaPHy0za+AXDx/2n+t5bDhkpRvj0bpHLAdqRoweQEiC2+LPjq5jW4LZ+Xf5eCVA54riIzaHFT3cYXgf2jhuFaSZ7PFDDM+IDJ+wi8CjQ6/WLQqdnUFHOfn8RhEOtDGmRby+GuSlGmw+woj2CQ4YLJjULsJ3BB433IWYs+wiIByzfHLIC1zd+cY8WLVmP98NPyR5Ct1AGfGefa+VM4ROIaj0M+SL+wNNZBMAHgDRCfEot/wQjwfm1IHsgcsDzNVbNf4xMSvYEp5YIMEJY/V2m4cbQkv+oWX6INTx0VDdtqJdmVtJVM3Mm4DeomLRLFJaXdgQR2knjW0xxoKFZLUnF+Gx/necdO4QCJW1upCgSWjtRSVLf4GG287YOb1gS7bOAtz9GgfwUER+/owca+Pqk3Xw2O8ga7jiMELnTtxzNKRyqAZ4jKwn46vnoNbtmZl9nAo0EXZE7D7ZWS7PdzD5h80iY8aSm+0qEcMEhUBJijYNOYIYebTodBOsJSM+TxsLQumHwXREtgxCk7gjtrxsLhklJAR1R+OwKnZ9zs6UI0bKmV5B2/0wGQLWEJA9zxCi/5ax5H3RdA7tKhFDBIVDSBVTXECHN4cIT314FREYimIV8pyr4lRck5/TbZ6y8dELw3ZsiDygD1UT7COnb7ReWyDbinvFlOn83puO+DSocmeOrDg9492rYzmcIIjwO42qVwLVGJ63yU74NKh3PYu+/LRR+cedoJ6NzM9jQ6kABRieJ03G/8pcPZix8d9N48tw3QudomMe7sJQG2Vw3ZG9fhJN83m3gSzOWwfe8BeOy2DTCJcyrGKBMZFc4mmbPtgEmcSHNM/BRd8Zcv/fwBxLVpRiGxrSTXZ9f3s5fAm42a16nXaOdyAZp4NTtsYNv+NaTDuFrudAE7NTJR/epGMOpKdep33Qh2amSi+vUfNmGtV7uxIm4AAAAASUVORK5CYII=',
    },{
      title:'',
      type:'date',
      name:'日期时间',
      value:[''],
      defaultValue:'',
      must:true,
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFRElEQVRoQ+2aXWxURRSAv3O3xgeBaEiMNuIDuwX02UQFMWCokaDGX/a2ICYmYqJFqAaeNCHRJ4wWpJrIg4kg5S5qMSrRBAPEgj+Jz0rpXh6sqcSElPCTaOzeY+6yW+5ud/f+7NCUTfepzZ05c745Z86cOTNCi/+kxfmYBbzeLTxrwVkL1pgBVZWO9dyrBdYILATaFdpFaQdUhb8ExoAxhTOS4vDIp/wiImp6Qo26aEe3rvI8nkV5HLgtprJnEb6yLD4bGZDvY/at29wIYGad3qcFdqAsN6KYMCQptuX3y8/NymsKsKNbF3oe76A81awiNfsLg5bF1pEBOZNUfmLAkjseRLmljnLjAofV4oh4/NGmjFnzGSv8g8hlbp8Q2tXiTvHoVFjTSI5lsTap2yYCTHfpJjz6gNQUOOEQFrsXLGLo+HaZiDLzK7Zr2+hpluOxCeXJGn0KWPS6B2R3FHnBNrEB0126E4/NNQY6ibDNdeTHuEoE26dtXYqyA1g2RY7FLveAbIkjPxZgyXLvVw1QsOD1kZzsijNwWNuOrG724N0pXmLxahxLRgYsrrkC31UNeL64Pg7IkTCFe/p0NbCn1G5jf698G9Ynk9WHFXLAzYG2BSvFI1HXZCTAUrT8tSoQnLdg6UhOfg9T1P/e06ejqtzh/y3Cn/29siBKv46s3uWB7/ZXIYVxy+KeKNE1EmDa1i+qtoKCZbE6iuXKEK+8pxVZygevSaSx/f4dXdrpefgWvxrUhEHXkafDJil0kOImPsFPQUEWbIm75poBLEJeWZM7KyJkG/eHJQOhgGlbh1AeCAg+6eYk+H/YJBa/Nwvoy0hn9URFdBVOuI40zJ4aApYCS2UAEZYl2QqMAF7ZQk5WeFOKzkYBpyFgxtY9qrw4KVA45DqSKC0zAVi0oq2DFcmAsMd15KV6blQX0D/yZOzikebqqSDFQ+6AHIvkk1WNjAF260oKHA2IP5t3aK931KoLOCW4COMLlnBr1PSrehJMARbTulP8HdyypEGwqQuYtvUtlDfKioqwL+/IhiTWMxVkymNnbN2rynOBpfO268ibtXSrb0Fb96vSHQDckHdk30wATHfrBgp8EtBtIO/IuriAx1RZERCyMu/I8ZkAmLF1hSqTsUCE43lHVsYCTNs6jLKo3OkGWHwqJ6dnAuCSrC76D4YDLnradWRxLMBMVi8qzCl3unE+c3/7UC6ZAhQLu3+L+Il07N/dL+ucf89xcdK74FI+J3PjAl5QmOzUdhPzhj+WSaFxtQom28W+QkGEdUkgF7+gcycucyEAeDGfk3mxAE27aE+fPqHwOVqRMCeCNOOithoNMv7s9uzUrCr7m4U0EmQyVdsEKZ53B2RvXNesbm8C0sg2YXqjD4LWhYRn+nvly7BJzNi6T5X1zW301efAJlO1KJaMctI3lqqZTrZrWaXaklEA06aSbV+htK0foWwMuELi41I9t/OjK1Cud4YWo4wdl3yFTB54w9ZVlO+lmqm5A2/Jij9UXaokKllEAQhrU6NkMeQ68mCjfqE1GVNFpzDlw75fs6JTyYpNlw3DABp9v6Zlw9Ja9K/Jmir8JgWclsJvIOAkLt0nAZy20n1ZuZa+fAlAtu71WZUlW/MCtAwZ8Qr7G8CvjI+Wr7D9/t452gNX2KsUHp1RV9gByNZ9hBCMiqVnJP5ri9iXMjWjq3BCUmwNuzmKEplDM5koQoJuqx5rVXksyUMgEb4Wi4NRb2+j6GYUsDxgyFMuVBi7Lp9yRZnR6W5zTSw43RBNnSZmkrJJdJm1YJJZm0l9Wt6C/wNS4t9XFFfWVAAAAABJRU5ErkJggg==',
    },{
      title:'点击后编辑名称',
      type:'upload',
      muster:true,
      name:'上传',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
    }
    ,{
      type:'page',
      name:'分页',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACaklEQVRoQ+2au0srQRTGv2PMBS1VtDGCGBTb6y1voSAX/Avis7XRwlhbWFjfWHib2/rMXyCIoIWl2oqSIGgaRW0FYzwywYSNJtmZ7COz62w7jzO/+c58M7s7hJA/FHI+GMCgK2wU/FYKDs1xfyGPNQbGwegEEPFiAqgFc5ld2nKjb+kULcK94JSBDjcC2/TxTFH8zmzRudNY0oDxSd5mxrTTgArtbyItGLnapQeFNl+qSgMOTPIdGN1Ogqm2JeCodxh/jlfpVbVtqb48YIJFkPKaiw0j6iRwtQHHE5xiYMlaRsB6Jk1JPwDZGiSbJunJkR3c6Cq35i5wwMBYBaQD05Ee5ECCPQcUUINT3FV4wxmAPgtkw6ajHaCAis/yT87jBECbBbIh09ESsAg5xbP8hs1P61HZdLQFLEK6YDpaA7phOloD1jOdbJraZdxZe0CL6QhnLT+y21QgAAVVo9uUb4CLKZ4A8P9DgvmNJO3LpFipThAAb5nRKwZMhNxGkmKhAlz4W3kS+resdtTTXkEDaJOvRsEaE+SbiwY+RUvbQMkpVRyy4kBNyAH4so00PUUXU1zeBhqFK39mqLKNGECv12DoU9QuLQNvMgbQHNXq50DTXdSkqEnRgKeo9aQTyhfe0H+ysDMhu3LtXdQOwK7cAHp92LZTwGm5UdAFBT3/hV1LZfET5vYCeUt5IZumVpmskP8m04RLCDUBCPfZPepxFbAJ10hq8xF2Mns04yqgzxeB6oiHp8gP/LrcpGtXAUVnfl3lqjLwAgiPBBxGoliRhRP9SK9BmdnSsY4B1FEVlTEZBVVmS8e6oVfwHYog60gL7UeJAAAAAElFTkSuQmCC',
    }
      ,{
      type:'select',
      name:'下拉框',
      must:true,
      value:[''],
      correntValue:[''],
      selectList:[],
      score:'未设置',
      icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
    },
      {
        type:'section',
        name:'段落',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
        content:''
      },{
        type:'button',
        name:'按钮',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACk0lEQVRoQ+1ZPWsUURQ9NyaFlmKCBAPChmBv5R8wpLMQZsUiqdIYi/UX5BdkC2NjFQtxFizsBP+Alb1IBgKKgQiWWiTmyts469thdu7eefO1k7fVLu/jnnPPeffN3CW0/EMt5wdPcNYV9gpeCgXvdPn2KbALxjoBNxiYr4M4AWdM+AHgwwKw+zmkIwmHaFFD7ozxiYHr0mZVjhPwc55wVyIpEux0+QCMzSrBTx2L8CoKaStrvkww4GMAN6cOWuVEwnEU0rITwdWAT+0zt7SMax/79LtKHnGsez2+evIdv+Lf5kweDmjBiWAnYLY3iAYkql4meS0eEax2wzLJmb21eDxBbcbWAt44J7w02WbC0+gNvctStfOIHxDjuZkzx9j+MqD3mfOVR6ZwBVe7/JUZt/6B/APC4yikQRroTpcDMF4DuGLGifDtMKSVWSJosKaSTJKbGYLGcjjH21iVNCXTyA0TMYeHoqXrtuiw0iWsZ5McfrdsOY2Vbctqa0LhZzAGM5HkxYThmdOSa9w1MYGkLUhmEUotTE2w6Jil0u06sfhkVdDGKZhhV7Vyo72apuAImHWhT/MAMEnJxhQZyWp5xz3BROZKuybyKiStK1zBy/DC2+6WReubTq1vG5pDP2r8AveJsdiqxq9U1Zo+Ll4TTScg4VMT3OnzBnDRcwGwvd/L7qFIAKRx13h5CI56LqaHst/L7qFIBKTxnf7/Hk+eeGqCT/bGG8EvnpXbCHaN5wkmLeSaUcmSRcfzChadUa9gIgOuR8Jb1FvU34PasjI+v/Yz6AZfv1r75ORcZPQQ3VaUTtB++HWDql9dycN2/Ppi/YurR5pjhSGX5/VMbdEc2Gpd4gnWmv4CgnsFC0hirVu0XsG/gFa/SMRq1LUAAAAASUVORK5CYII=',
        title:'按钮',
        action:['AJAX','PAGE','WIN'],
        currentAction:'AJAX',
        preStyles:{},
        clickStyles:{},
        ajax:{},
        page:{},
        win:{},
      }
    ],
    special:[
      {
        title:'你的姓名?',
        type:'text',
        must:true,
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
      },
      {
        title:'请选择性别',
        type:'radio',
        must:true,
        value:[''],
        correntValue:[''],
        selectList:[
          {key:'男',value:'1'},
          {key:'女',value:'2'}
        ],
        score:'未设置',
        name:'性别',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFXUlEQVRoQ+2az2sUZxjHP89sqlSUttgcKlaEpCYo9dRiTz0IFVNBK5RmxVwKVrC7CTu59VLXXnpzg9lU0IAXxQ0UrAUNeOgfISjGbkBa60WklHjRuvOUd90fM5OZ3ZlJNrsN2ePu+77zft7nx/s831lhnX9knfOxAfh/t/CGBTcs2OMnsOGiQQYaPKk7qXBM4QgwIMoOM06FJ8CiwC1S3Cxfk8dJDZwt6A8o31XnCz8Wbfk+yVqxLDiU1h0V5ZzC10CqzQMrAldSwtmFkhjwyJ/slI6qch2tXWOCinCimJO5yIvUBkYGHEzrUZSrCtviPERgCWGsXJJfo8yrwV1DfQcoVEQ4GRcyEuAHaZ1woIBiRdnksjGCY4H9e0kutJofCleflACyLaCxnCq/VCPB9RHhHsIsFnc2vcUf5qeX/7ALh0Mop1TZ54ERHIHjYZZsC5cQsiVgLeYeuN1S4CXC5NgwF/N5cYIsks+rdfUBZ1DOK2xq7o2llDDsj8nIcAkgWwIOjuplhVOuDb5MWYwsXJfforjq0Ak9WHGY90HOlufkm/r8QDihEhSDnu8iumsooLkK9BWP3NlShGy5JDNR4OpjBtOaUaXomlORPnabKyQMziQTdSh5QsIirYo3+USADAf0bczE3Ngw+8PcMgy65q533TFpDurwAf5S+DnMKpnzqu41ZyZFQg8EvizaYvJEQH4L2dlAWm+jjDTc08IuX5epONZrWPGE5tSh0JgrzI8c4ENVdrq+81wDQYBmbBCkCI+LtrwfF3ABZU8DsI995WtyPxHgSd2rr7jngnk4coAtDcAAVwsDDIJMBDg4qksKW+ub2rydbfd/kudJAPd+q1tfPGPJlayeH/6Er4BLte/G/S7WCrAKWdAvgOna/NNFW+ZjWbDTgOU5aVkRtQOMetChSWYgrR110cWSDLXa5FoAdjTJLJbk864C+u+v1b4m2t2nHbfgWlz0XbWgefhalGphkB23oHnwWhXbdcjxC7rTqXBM4Ii6igzzu0i1pr1lpbg5PRFdKYjWLsENfy+4mu1Sdlp3yCvOOUYp8De6fhMLFQuuaB9ni+PtlYK2gGb9Tja82Sk9qg5XiakUAEtiMVbMtVYKIgFW47EDksX4lE6YGlVJphQIOGJhT+fClYLIgK6YXBXRqWo5oxTUhaVmHWdq1lkrxZ3tqddKwbMKu5wKhzC9qU8pMJBYHA+zZCzARnfglg19yQBhvp1saGJO/+WB2y2NUqDCZH+Oi3kJUQpUradTnBGfUlB11zcYDorJRIDuuB8wAp/rszgnbdccL+hlR71KAcJI0Y6mFGQLehD1KgWWMDttN5UCV2EftWwNHhcXsHYVPPI1utkZO55SkCloBrdSYLJrit3+KyT0tPeM6ogjXPI0pSs7i+rs3e/x9/Au3mksJdzrz7E/zC3DHpl/7a53PTEpLDuoVpLFn6sNZzb70RC8+7Zr24I9YydTCjIFzaFNpcAUA0XbW8SvOeCn+2HLm01Aq4990xPJlILxC7rXcSkFAg+Lk942bM1d9LOPcVJW897r38y2fCaZUpCf0a1PXzSVAoTnM7a3kW6b8dqFXdwkkynoEtqUQtYdYPa8LihNMatrLtrOcvXf41owW9Dbnk6hW0mmU4AB91d3rolOAfbMRd8pQLPuui7VDOC6L7arkFN6FIcby3pB82K12+3SSruJ+vyea3iD4jLuNeFfo2cki7CkM5jWRlFu3vKUS8GvsVolra6LTq02V2+rzBhLOf1wLvgtT5Ss7JYNUQZUXv/BSJQnCIsdkQ2jbKyXx6y42O5luKr1e32DK93fBuBKT7Db89e9Bf8DOChyZmIMDfgAAAAASUVORK5CYII=',
      }, {
        title:'你的年龄?',
        type:'text',
        must:true,
        value:[''],
        correntValue:[''],
        score:'未设置',
        limit:'NumberValid',
        limitOption:[
          {key:'字符串',value:'StringValid'},
          {key:'数字',value:'NumberValid'},
          {key:'最小长度',value:'min'},
          {key:'最大长度',value:'max'},
        ],
        name:'年龄',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABkklEQVRoQ+1XO07DQBB9IzgBHShUoecKtJyAX09DmlBwCArShIY+EE5AyxXocUVEOk4AGhSJwl7J8o7Huw7RS+uZffM+3nEEG/6TDecHEvzvDtNBOrjmCjCisQaNJnoM4OGv/nI6lpdyr/d57BxhXWcOjib6oYrBCkAEi+lY9gOCrue9E7y6Uy0PcX8tFfG8z0mwRoHOIup1qKmfDnbp4MGFDvQHtwCOoNhtq25Un2AJ4FW2cPM+k0VUT6nIHNEVOXzjTYEdK5inXoAvbOPQStJMcHiqj1CceYZt3St4KuZybulvQ/AzeSzrGAiWxVz20hI8qe674rm67yzgMbVDJ57dQSdgDKlyDQk2KEYHQ4G8kWFEAwW8gjKijCj3oPVaqdb3/g76xrd3W7+c3JeMfURfBwkG+tFBrgmuCd+l0vuasN5qVrokyP+DNQqE0bBGK3d93atSuwdJMLdFDXh0cM0M6Wwc87doZ8iZDiLBTEIng6GDyaTNdDAdzCR0Mhg6mEzaTAfTwUxCJ4Ohg8mkzXTwL9XcEkiCOLkBAAAAAElFTkSuQmCC',
      }
    ],
    views:[
      {
        type:'ptext',
        name:'单行文本',
        content:'',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACaklEQVRoQ+2au0srQRTGv2PMBS1VtDGCGBTb6y1voSAX/Avis7XRwlhbWFjfWHib2/rMXyCIoIWl2oqSIGgaRW0FYzwywYSNJtmZ7COz62w7jzO/+c58M7s7hJA/FHI+GMCgK2wU/FYKDs1xfyGPNQbGwegEEPFiAqgFc5ld2nKjb+kULcK94JSBDjcC2/TxTFH8zmzRudNY0oDxSd5mxrTTgArtbyItGLnapQeFNl+qSgMOTPIdGN1Ogqm2JeCodxh/jlfpVbVtqb48YIJFkPKaiw0j6iRwtQHHE5xiYMlaRsB6Jk1JPwDZGiSbJunJkR3c6Cq35i5wwMBYBaQD05Ee5ECCPQcUUINT3FV4wxmAPgtkw6ajHaCAis/yT87jBECbBbIh09ESsAg5xbP8hs1P61HZdLQFLEK6YDpaA7phOloD1jOdbJraZdxZe0CL6QhnLT+y21QgAAVVo9uUb4CLKZ4A8P9DgvmNJO3LpFipThAAb5nRKwZMhNxGkmKhAlz4W3kS+resdtTTXkEDaJOvRsEaE+SbiwY+RUvbQMkpVRyy4kBNyAH4so00PUUXU1zeBhqFK39mqLKNGECv12DoU9QuLQNvMgbQHNXq50DTXdSkqEnRgKeo9aQTyhfe0H+ysDMhu3LtXdQOwK7cAHp92LZTwGm5UdAFBT3/hV1LZfET5vYCeUt5IZumVpmskP8m04RLCDUBCPfZPepxFbAJ10hq8xF2Mns04yqgzxeB6oiHp8gP/LrcpGtXAUVnfl3lqjLwAgiPBBxGoliRhRP9SK9BmdnSsY4B1FEVlTEZBVVmS8e6oVfwHYog60gL7UeJAAAAAElFTkSuQmCC',
      },
      {
        type:'tag',
        name:'行内文字',
        content:'',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACaklEQVRoQ+2au0srQRTGv2PMBS1VtDGCGBTb6y1voSAX/Avis7XRwlhbWFjfWHib2/rMXyCIoIWl2oqSIGgaRW0FYzwywYSNJtmZ7COz62w7jzO/+c58M7s7hJA/FHI+GMCgK2wU/FYKDs1xfyGPNQbGwegEEPFiAqgFc5ld2nKjb+kULcK94JSBDjcC2/TxTFH8zmzRudNY0oDxSd5mxrTTgArtbyItGLnapQeFNl+qSgMOTPIdGN1Ogqm2JeCodxh/jlfpVbVtqb48YIJFkPKaiw0j6iRwtQHHE5xiYMlaRsB6Jk1JPwDZGiSbJunJkR3c6Cq35i5wwMBYBaQD05Ee5ECCPQcUUINT3FV4wxmAPgtkw6ajHaCAis/yT87jBECbBbIh09ESsAg5xbP8hs1P61HZdLQFLEK6YDpaA7phOloD1jOdbJraZdxZe0CL6QhnLT+y21QgAAVVo9uUb4CLKZ4A8P9DgvmNJO3LpFipThAAb5nRKwZMhNxGkmKhAlz4W3kS+resdtTTXkEDaJOvRsEaE+SbiwY+RUvbQMkpVRyy4kBNyAH4so00PUUXU1zeBhqFK39mqLKNGECv12DoU9QuLQNvMgbQHNXq50DTXdSkqEnRgKeo9aQTyhfe0H+ysDMhu3LtXdQOwK7cAHp92LZTwGm5UdAFBT3/hV1LZfET5vYCeUt5IZumVpmskP8m04RLCDUBCPfZPepxFbAJ10hq8xF2Mns04yqgzxeB6oiHp8gP/LrcpGtXAUVnfl3lqjLwAgiPBBxGoliRhRP9SK9BmdnSsY4B1FEVlTEZBVVmS8e6oVfwHYog60gL7UeJAAAAAElFTkSuQmCC',
      },
      {
        title:'点击后编辑名称',
        type:'download',
        muster:true,
        url:'',
        name:'下载',
        rightIcon:'',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
      },{
        type:'slider',
        name:'轮播图',
        muster:true,

      }
    ],
    container:[
      {
        type:'modal',
        name:'模块',
        content:'',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACaklEQVRoQ+2au0srQRTGv2PMBS1VtDGCGBTb6y1voSAX/Avis7XRwlhbWFjfWHib2/rMXyCIoIWl2oqSIGgaRW0FYzwywYSNJtmZ7COz62w7jzO/+c58M7s7hJA/FHI+GMCgK2wU/FYKDs1xfyGPNQbGwegEEPFiAqgFc5ld2nKjb+kULcK94JSBDjcC2/TxTFH8zmzRudNY0oDxSd5mxrTTgArtbyItGLnapQeFNl+qSgMOTPIdGN1Ogqm2JeCodxh/jlfpVbVtqb48YIJFkPKaiw0j6iRwtQHHE5xiYMlaRsB6Jk1JPwDZGiSbJunJkR3c6Cq35i5wwMBYBaQD05Ee5ECCPQcUUINT3FV4wxmAPgtkw6ajHaCAis/yT87jBECbBbIh09ESsAg5xbP8hs1P61HZdLQFLEK6YDpaA7phOloD1jOdbJraZdxZe0CL6QhnLT+y21QgAAVVo9uUb4CLKZ4A8P9DgvmNJO3LpFipThAAb5nRKwZMhNxGkmKhAlz4W3kS+resdtTTXkEDaJOvRsEaE+SbiwY+RUvbQMkpVRyy4kBNyAH4so00PUUXU1zeBhqFK39mqLKNGECv12DoU9QuLQNvMgbQHNXq50DTXdSkqEnRgKeo9aQTyhfe0H+ysDMhu3LtXdQOwK7cAHp92LZTwGm5UdAFBT3/hV1LZfET5vYCeUt5IZumVpmskP8m04RLCDUBCPfZPepxFbAJ10hq8xF2Mns04yqgzxeB6oiHp8gP/LrcpGtXAUVnfl3lqjLwAgiPBBxGoliRhRP9SK9BmdnSsY4B1FEVlTEZBVVmS8e6oVfwHYog60gL7UeJAAAAAElFTkSuQmCC',
      },
      {
        type:'container',
        name:'容器',
        content:'',
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACaklEQVRoQ+2au0srQRTGv2PMBS1VtDGCGBTb6y1voSAX/Avis7XRwlhbWFjfWHib2/rMXyCIoIWl2oqSIGgaRW0FYzwywYSNJtmZ7COz62w7jzO/+c58M7s7hJA/FHI+GMCgK2wU/FYKDs1xfyGPNQbGwegEEPFiAqgFc5ld2nKjb+kULcK94JSBDjcC2/TxTFH8zmzRudNY0oDxSd5mxrTTgArtbyItGLnapQeFNl+qSgMOTPIdGN1Ogqm2JeCodxh/jlfpVbVtqb48YIJFkPKaiw0j6iRwtQHHE5xiYMlaRsB6Jk1JPwDZGiSbJunJkR3c6Cq35i5wwMBYBaQD05Ee5ECCPQcUUINT3FV4wxmAPgtkw6ajHaCAis/yT87jBECbBbIh09ESsAg5xbP8hs1P61HZdLQFLEK6YDpaA7phOloD1jOdbJraZdxZe0CL6QhnLT+y21QgAAVVo9uUb4CLKZ4A8P9DgvmNJO3LpFipThAAb5nRKwZMhNxGkmKhAlz4W3kS+resdtTTXkEDaJOvRsEaE+SbiwY+RUvbQMkpVRyy4kBNyAH4so00PUUXU1zeBhqFK39mqLKNGECv12DoU9QuLQNvMgbQHNXq50DTXdSkqEnRgKeo9aQTyhfe0H+ysDMhu3LtXdQOwK7cAHp92LZTwGm5UdAFBT3/hV1LZfET5vYCeUt5IZumVpmskP8m04RLCDUBCPfZPepxFbAJ10hq8xF2Mns04yqgzxeB6oiHp8gP/LrcpGtXAUVnfl3lqjLwAgiPBBxGoliRhRP9SK9BmdnSsY4B1FEVlTEZBVVmS8e6oVfwHYog60gL7UeJAAAAAElFTkSuQmCC',
      },
    ]
  },
  issueLib:[{
    title:'副标题模块',
    type:'modal',
    muster:true,
    icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEHElEQVRoQ+2aX2hbVRzHP780TdrKGFgnc6uu0vqnw+Gfpz2ozBen4ItC28lAJ7pl0mQmgkxxuDB9mKK7G03FzsGGyFxSUMQHUYSJFAQfHCiWKSlW7Wyt3YvOrDFtfnKhibchN20095pec1/vPef8Pr/vOed37u93BI8/4nE+GoCrXeGGgp5XsDelTefe4zGUXmCzKu1AC7i+fhWYE+EiMIYwcvuDnBzpk4VKIlScopt36frsHCMod9alksJosIXesVMybWefLaCp3Jfv8mndwhWIhNE7HmKbnZK2gN0P6xOa5826VK7EKPGxO/2OnChnqz3gDv1IlXv/dhRn/bB3/mp+SA9K1m1wVZUb9hHwz7BpHt5QuKdom/Bx+oxsrxbwJ1U6Co2a4abzSfnObbBy493crzfm4FsL4GT6jFxbFWBXv2aA1kKjYA/Bsbj8WQ+A3REN6gxzFlsujyelrVrAvDUUjCelrg4FXf1qho3Co+NJ8VULaO2AOge0tc9WlRIP/f8A4ykNXLzAIYVHzKkh8Fb7Rl6I97mzTlcqwD9WMGLo4byy3zrvfcLLgzF51o2NyHHAsKE/q3KNFUaEqURMNtQCMGzo/cDxxb72JGLyobVfLwAW47AIk4nY0jjnOKCTU/SZIV2fyTJlUWx26GlZ56qCTm4yEUN35ZWTRSBhdCgmd7kKWIt1Vq6PWEpbcxf4WpWu4nsfB4eicsgTgGFDT6nyqOWcmW1p4bpXn5SZVQ8YMdTIK9ElO7OPw4moPFeqtuObTC2n6P5hXXspw3GUviVwcO6qDraWOzysCkDzH+8pg94FeAXYVBpTmwPcbQxIupwz6xbQVCub4fp55T6EnarcUgZg2u9j27GoFP/56mqKRg3tXBC255VbBXoUOgXWoKxRCFSa3gJf+IX+ozGZqPSd6wrGh7VtNsPjwB4bVSovWyEnYGxp40AoJLnl1rirgOEjuhfhpcWc6XK2LX0vmHnN0+LnYCIi36+0sSuAsRN6Ze53TqtSNuFTzlgRfgN+VBgX4YNgK++/FpLZlYIVvnMccCCh7eT4BOW2ssYJ3wgkEc5Lnml/kKm1MB0fkEvVwri+i6ZS2vTZJKMKW0vi1h8Kr/t9vH0sKl/VAsSuD0cVjBzVA/k8L5bErc/xs7OadfRvHOAYYHhQN+g8EyjNFgPPrruCB+IhMVONrjzOARpq7pbPFyhE+EWa2DK4T351hWxxEMcAB47oJLCxCCOEhmJSSC24xugW4Eygg06jTy67Rua0gmYySJVhwCfC7tJkkFugjinoFsBy4zQAFz1UKfHr+eKLt8tn3TvU2wXQbpsStq+Hif+qEGoWPmtXwvb6JQTPXyMxd1lPXwQqBFpPX+Va7jSxGt7X1c0JJxzWAHTCq2722VDQTW87MdZfC3iIV45J/h4AAAAASUVORK5CYII=',
    style:'display:flex',
    childrens:[
      {
        id:20,
        title:'显示图片',
        name:'显示图片',
        imageSrc:'',
        style:{width:'100px',position:'absolute',left:'0',height:'100px'},
        type:'image',
      },
      {
        id:40,
        type:'ptext',
        content:'华为智能制造科技项目',
        style:{fontSize:'34px',color:'#070D16'}
      }
    ]

  }]
}

@connect(state => state.formItem, { ...actions })
export default class IssueLib extends Component{
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      projectType:0,
      page:"main",
      element:{},
    }
  }
  handleTabClick (value) {
    this.setState({
      current: value
    })
  }
  addElement=(element)=>{
    const { currentParent }=this.props;
    if(element.type==='modal' && currentParent!==0){
      return alert('模块的父级必须是顶级容器')
    }
    if(element.type==='container' && currentParent===0){
      return alert('容器的父级不能是顶级容器')
    }
    this.setState({
      element:element,
      page:"properties"
    })
  }
  handleClick=()=>{
    Taro.navigateBack();
}

  deleteElement=(element)=>{
    if(element.id>0){
      this.props.dispatchDeleteElement(element)
    }

    Taro.navigateTo({
      url:this.getUrl(),
    })
  }

  getUrl=()=>{
   const {projectType} =this.state
    console.log(projectType)
   return ['/pages/form-item/form-item','/pages/create/sence-detail'][projectType]
  }
componentDidMount() {
  const params= this.$router.params;

  if(params && params.id && params.page){
    const {body} = this.props
   let _index =body.findIndex(item=>item.id==params.id)
    this.setState({
      element: body[_index],
      projectType:params.projectType||this.state.projectType,
      page: params.page
    })

    this.props.dispatchProjectType({projectType:params.projectType});

  }else{
    this.setState({
      projectType:params.projectType||this.state.projectType,
    })
    this.props.dispatchProjectType({projectType:params.projectType});
  }
  }

  getElementCollectionPage=()=>{
  return (<View><AtNavBar
      title='选择组件'
      leftText='返回'
      onClickRgIconSt={this.handleClick}
    >
    </AtNavBar>
    <AtTabs current={this.state.current} tabList={[{title:'组件'},{title:"模块"}]} onClick={this.handleTabClick.bind(this)}>
      <AtTabsPane current={this.state.current} index={0} >
      <View  className='issue-weui-card' >
      <View className='issue-weui-primary'>基础组件</View>
    <View className=' '>
      <View className='issue-weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
        {$$element.issueType.primary.map((item)=><DemonTools  className='issue-weui-tabbar__item' addElement={this.addElement.bind(this)} element={item}/>)}
      </View>
    </View>

        <View className='issue-weui-special'>视图组件</View>
        <View className=' '>
          <View className='issue-weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
            {$$element.issueType.views.map((item)=><DemonTools  className='issue-weui-tabbar__item' addElement={this.addElement.bind(this)} element={item}/>)}
          </View>
        </View>
    <View className='issue-weui-special'>业务组件</View>
    <View className=' '>
      <View className='issue-weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
        {$$element.issueType.special.map((item)=><DemonTools  className='issue-weui-tabbar__item' addElement={this.addElement.bind(this)} element={item}/>)}
      </View>
    </View>
        <View className='issue-weui-special'>容器</View>
        <View className=' '>
          <View className='issue-weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
            {$$element.issueType.container.map((item)=><DemonTools  className='issue-weui-tabbar__item' addElement={this.addElement.bind(this)} element={item}/>)}
          </View>
        </View>

      </View>
        </AtTabsPane>
  <AtTabsPane current={this.state.current} index={1}>
    <View  className='issue-weui-card' >
    <View className='issue-weui-modal'>现有模块</View>
    <View className=' '>
      <View className='issue-weui-tabbar taro-tabbar__border-black' style='background-color: rgb(255, 255, 255);'>
        {$$element.issueLib.map((item)=><DemonTools  className='issue-weui-tabbar__item' addElement={this.addElement.bind(this)} element={item}/>)}
      </View>
    </View>
    </View>
  </AtTabsPane>
  </AtTabs></View>)
}

  getSettingPage=()=>{
    return <View>settingPage</View>
  }
  settingProperties=(element)=>{
    this.props.dispatchAddElement(element)
    Taro.navigateTo({
      url:this.getUrl(),
    })
  }

  getPropertiesPage=()=>{
    return (<View style='min-height:100vh'>
      <ElementProperty deleteElement={this.deleteElement.bind(this)} settingProperties={this.settingProperties.bind(this)}  element={this.state.element}/>
    </View>)
  }
  getcurrentPage=()=>{
  switch (this.state.page) {
    case  "main":
      return this.getElementCollectionPage();
    case "setting":
      return this.getSettingPage();
    case "properties":
      return this.getPropertiesPage();
  }
}
  render() {
    return <View style='min-height:100vh'>
      {this.getcurrentPage()}
       </View>
  }
}
