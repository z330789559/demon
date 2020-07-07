import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading, Tab,FooterTabBars } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/formItem'
import {sort} from '@utils/tools'
import {Header} from '../form-element/index'
import {ContentHocElement} from '@HocUi'
import { AtButton } from 'taro-ui'
import './form-item.scss'
import '@issue/primary/index.scss'

let data=[{
  src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAADVklEQVRoQ+2aTWjUQBTH/y9RTyqICtJjD3oVVFRQUTYFwU2FijVtvXhQD34LetKTnhT89mA9eLFtWrFgs4LQLIotqKjgVQ891oJKwXpSkyeTNetm3d3Mbja2UwwsCztv3rxf5s28N2+WoPhDituPpgAwM7W1798I8naB0QpGC4AWJhbfTEwfAUyCgs8EWH88OnL/FRFx0heYCCCzu9sg39/LzO0AVtVpzBQRjbCmPcg/6nfr7FsUbwjAMHs2MXuXAN7a6MDRfjRGpJ91nb6X9eqrCyDT0d1KP/zLzNxR70Ay8kQ0zAu1M/nh/gkZeSEjDSDcBZ4/BPAyWeWNydE0dK1T1q2kAAyz6xjgX2WG3phR9fUiggdop1xn4GZcz1iATLbrGuCfiFOUTrt2PZ8bOFlLd00A8eaZ/RvpGCenlUg7XmsmqgIUtkjvyb9ym2o4wp1Y03dWWxMVAcRug+/+m/QXrNwsADSNRdr6SrtTRQDDtB4m3So3rFuL00cPBhZeuXUXr9++k7W2opzYYl3H3lPe+BdAIUj9fJFoNAAD925j5YrlgZpPn7+g68CRpCpBtGBzebCrAGCNMfOWpKO5jh1RYZhWUpUgonHXsSPRPwJQCFbeaOKRAKQBENil622lCzoCYGStXgYXHDfhkxYAEfW6jn04NK8IIFJiw7QmG8gqK6KmBQBgynXsljAVLwI0a/GGNCkCRBbzH4B26wL7fC6h5xS7pwqg0UV3xD4vBiuZAauPmbuVACDqdx27JwqQtZ4yeLsSAKBnbs7eUQ7wnsGr4wDCCBsGqTh52XYR7GQjNoE+uDl7TQQgY+6bAWNx3IClETZOtt526YhN+JZ3BpeUA3wFI/ix1jNHAGbyzuDS+eVChvKL2FR9G1U/kDXnHDBrqYTyyZx4c4Zp3WHmQ3FbqUx7WrlQ1XRaGKX8gSaAyFrPm1G0TWcGaCyfs7eVesD8O9T/XgvqllUCN1K9sBUuaGVLi+EiUbq4G0IoXV4vnQllLziKM6HyFVMRQuVLvtLoJ4pggCduKxMXgYNjIdE4oJ9J/Zq1PIkLbnE8v5PBZgMlySkCOaxrQ7I3kpWSyNhLPpnMM+avBiAmUXOde381kIFLW6YpM5C2kbX0/weYzbcvxv4FTZ/xQhtII2kAAAAASUVORK5CYII=',
  title:'题目'
},{
  src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAC70lEQVRoQ+2Zy2sTURTGv3MntU21lWZR1G6atdKFUhcKPmj6sk0saGjaKBTRZRf+F+5cdOFGENGmCcUHSWtom6KIK18rBXcVRFqqGKyavjJzZCKRJE3MDM5MkjKzSeBe7jm/851z7p07hBp/qMb9hw1QaQV1K+D3X3d+21g9QpK81wrnpbRjTbhb3scnJjaL2dMF4PEFBljBPYBbrHA+x8aKJKTh+WjoeaFdzQADo6Mtm2vyEgP7LXY+a25lj7u1vVAJzQB9vpGObeYbVjlPyDSYDmY+lLXpQN2xuZn7b3N90AxgleO5dny+K00pTn3IQpCDziYeh5/VDIDqqMcbiDNzn/pfF4Ca81trcieTaLIi+gJKSmpofB2fvvMl116XN/AEzP26ANRuA4UnrS5YIqQAupaIhUNZCN0AmT6/vvy5Aq0y47MKUdfQ2J5VQjdAlzfYCU6/tCJtStmQCOfmY5G4Oq4bwDMUOMNpflpJACJxMRGbemADVEoFW4HdVwOEnwDChMyvYQ8DTmL4GXDlHQ+MLmIiCuZuLoYRAOgeHO5RgDlzAQQuJKKRh0Y6nl2r2ztyWmEl/4BmtAIg+kqg24BiaAoBwsmsjAFoM1UBMyL/rzXtNrr72qjFOWSnUGEKEWiZBW4R0w8jxSBwI4OvMsNtahcSgs4vRMNRI53/uw/4gicVJf3CVAAIMbYYnbprBsCfyzKeMReAsE6gRzD4LATAyeAhMPIuDuwitveB/yyWUikEchxfjE2+yquXQlvV+1JPSZfzYNv09M31mgMg5hMQFExEw7OFAd9xuVttCqi34tI++jQbCiWLZWbVA5Qrp90H0Dt46Wga22/KkZs5LoDehZnIvBYbOxToHx+v31pa/QjggJYFjJ5DwPf6ZsldKufLFrE6occ3ekpW5Ij1EJQkgcvFuk2pQJX8xKQqoSwlD8uOdLPRUS62HsvSL1dD67vCPl/OdlV/IyvnvDpuA2iJkplzbAXMjK6WtWtegd/mUVVRvuCPtgAAAABJRU5ErkJggg==',
  title:'排序/复制'
},
  {
    src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAGSUlEQVRoQ+1ae4hUZRT/nXt3191NraCs1OxlqFQgUvambGZ2M/aOuiE7M+uLyIpSMLQiQ0szIzLtoYWRsWY6Mxi2O3fQnEdPgp5IUmEPU8rKKHpouu7OzP3FtV2d553XBRGcP+895/c7v+983/nO990RnOQ/Ocnjh60CXLf7LmWvsYDASIBZ2EIhdrOWK+JvBr+1a+BsE+Bye4YaBr4EeKZVcAL8U1tXc/m2LRv32SHCNgFOzTuPNFaVEpSIPBDTAytKsS1mY5sAR0vbUwAeLEZovlcUZWU05J9fim0xm1MC+kfopM7AxLlzByT2/r6eZFuxlJvvRbC59sIh07e98EJPKfZFikLh182TfeOTSfogPIQars8uf5Mnzzrj31T3fSTmADi3zGD2i2D1QLVhTWdnx9/pvmY5NnqNWaCcpqr0R7oCHxfCLrgGnJN8zUylwgBq+pyTfYRLTEKH23urkOtIDi0z8AxzgfwqqnJntGvTVufUu07HkQOPEpgDsrYvWykF0CJ6cFs+nrwCpk69v+GvI7/sIjEix0nkDwHfI3F7NYFn+4rIFpA3Ejg7F1f2NcrgUbr+8uEcv3xBuLS2xQaxxM4Aq8YSZWlc9z9aVMDE1vbhiUTyGxKNVZPaCSDoFtaNjoU3/JgOmzOFnJpnI0mfndx2YYlIMKYHPAUFOLT2q8DkJ7YRQg4AJIHT7cJUVbkmvSplZMCpeVaSvL8qMkGnAB2NctrbodCrB00st/uOQd04PIHETJKtVeFDeS4e9s/rx8gW8DTJBZURyD5FUT3R0MYPrfwdLd5rRRgkeX4lPNl9VIaAW93TRiWY+BTEoHLARbCnrr7huq2bO/aX4ud2e885ZPBDgJeUYn/MRvCvCuWqiO7flTcD5kPnpPYrYKTWkry2FHAR9KpQxm3X/V+VYt9v45zSNgYJ7CAwoBQ/EXxUI8rdb4X8Oy2rkPmSpDgntftgpMwWeZgVgQiejenBitaNo6XNPBNYttUi8ouIPBTp2rRRRFh0H0g3cLo9d9DgOssRqsWoSo+Ize5pI5NG4jsrfAXK7GjY/0ohG8vzgEvzLDTIJwo6C/bE9ODFpUyBQjaOFs/3VmtBIIti4cCyigQ4tbbnScwt7CzvxsKBCVUJ0DxxkLdYDNKLMT14X6UC1pC4tzC4xGN6wFmlgAhIV0EMwdq4HrynIgEOt2cRDC61AP8mrgdHVyPA2eL5muAYiyw/FgsHCjaWlmvA6fbMpsGXLQJkXV3NiEqvSP6/iqF5vVIwDkWUe6K6f23ZGXC526+nkVxNYKzlCCuyOB4KPF5JFooViT7ML2pUmbu9K/BBPo4c5X2j8gyAjK7PYhodbKgfMCa8+bWfyxHR3DrtvFRvchfBwaX4mZ1ofX3d/GyeDAEtU2cM6+7uMc+flptXzmYi8lkDBt+U78SULzhNu6vxMA+8A3B8KcH325jHT0XF1ZGuwE/Hn6UhuFo8Sw1wUTmgx4BEdtSoaH2rM7DXyv+2Vt8FPYnUFhDjKuFRIE9Gw4GFeQUUq/vFCeUIwDVqbV1H5M0NX6bbN2vey1JittPGHBANxbHyW4ggY1/ImELNbt+EpJF6u1LwdD8BfofIPoIUyHCSQ+zAVRWlKRLyR/NmwHzo0DxbQU60g8x2DJFoXA80ZQ1UJk2T5h2dAnf238vYHkTlgMkaUcZmt+15NxCn1raKxLFjW+Wc9nkKZHUsHMjpy/IKMK8MD6aOfAfyrNySiV5AdpK80r7wjiJ9LsDl+Q44AvypNgy8dPvmdX/mxFMoCIfb1w4j9XrGfBPpqlU5f1tncLdL895twFgBYmA1QgRyCAofiIWCLzlafRej11gBcEoGpqLMiof86/PxWJ8HJnmm0MBMAIcVyCsR3Z9RoZq06RcZTDxMYDrA+nKECNBDkddRqyyPb9n0Q7qvc7LnZqQw2xwcRcWGSFfgjULYtnzgaJoyfUgqmegotXqJSKRRZEYo5P+tHNFlZ6Ac8JP6A8fR/ePUN7Jy8n3c1pY1YMK53N4HDcMwr2GK/hSRR6J6YHlRwxIM7BNgfhbqMXYWq0Zm9VFEGZt+u1ZCnAVNbBNgMjhbvDdAuAjESEjWXw0oZle3WxVlWSS06f1qgs7Ym+wCOlE4tmbgRIg4JeBEjHo653+tQXZRscNNkAAAAABJRU5ErkJggg==',
    title:'设置'
  },
  {
    src:'data:image/png;base64,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',
    title:'预览/发布'
  }]
@connect(state => state.formItem, { ...actions })
export default class extends Component{
  state={
    mode:'development'
  }
  config = {
    navigationBarTitleText: '创建表单',

  }
  componentDidMount() {
    const params= this.$router.params
    if(params && params.itemId){
      this.props.dispatchFormItemLoad(params)
    }
  }
  onAddIssue=()=>{
    Taro.navigateTo({
      url:'/pages/issue-lib/issue-lib'
    })
  }
  onSort=()=>{

  }
  onSetting=()=>{

  }
  onPreView=()=>{
    Taro.navigateTo({
      url:'/pages/form-preview/form-preview'
    })

  }
  changeCurrentElement=(id)=>{
    Taro.navigateTo({
      url:'/pages/issue-lib/issue-lib?page=properties&id='+id
    })
  }
  changeHeader=(header)=>{
    this.props.dispatchChangeHeader(header);
  }
//onSort,onSetting,onPreView
  render() {
    const {header,body} =this.props
    const sortBody=sort(body,'order');
    return <View className='form'>
             <View className='form-frame'>
               <View className='form-frame-content'>
               <Header  header={header} mode={this.state.mode} changeHeader={this.changeHeader.bind(this)}/>
                 <View>
                   {sortBody.map((item,index)=><ContentHocElement element={item} changeCurrentElement={this.changeCurrentElement}/>)}
                 </View>
               </View>
               {this.state.mode  ==='development'?<AtButton className={'form-add-btn'} onClick={this.onAddIssue}>添加题目</AtButton>:null}
               {this.state.mode  ==='development'?<FooterTabBars className={'form-weui-tabbar__item'}
                                                                 onAddIssue={this.onAddIssue}
                                                                 onSort={this.onSort}
                                                                 onSetting={this.onSetting}
                                                                 onPreView={this.onPreView}
                                                                 data={data}/>:null}
             </View>

            </View>
  }
}
