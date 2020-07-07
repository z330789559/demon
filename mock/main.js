

const Mock=require('mockjs')
 module.exports.initData=Mock.mock({
  message: '@cparagraph',
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  'channals': [{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id': 1,
    // 属性 userId 是一个5位的随机码
    'icon': '',
    'name': '教育培训',
    'code': 'train'
  },{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id': 2,
    'icon': '',
    // 属性 userId 是一个5位的随机码
    'name': '问卷调研',
    'code': 'study'
  },{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id': 3,
    'icon': '',
    // 属性 userId 是一个5位的随机码
    'name': '营销推广',
    'code': 'promotion'
  },{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id': 4,
    'icon': '',
    // 属性 userId 是一个5位的随机码
    'name': '时尚设计',
    'code': 'fash'
  },{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'id': 5,
    'icon': '',
    // 属性 userId 是一个5位的随机码
    'name': '财富投顾',
    'code': 'wealth'
  }],
  'recommends|20': [{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'sid|+1': 1,
    // 属性 userId 是一个5位的随机码
    'src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg',
    'name': '民众新服问卷调查',
    'like': 155,
    'ownerName': '星群传媒',
    'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACwklEQVRIS72WT0gUcRTHv9+ZnS1aNYoiNKUo+oNWpBF1C7oEEWUFdSnIOkSXooSIXRdH1lkisKhLdCiDuhSEFhF0CboVkUallFEUmhJFkbpROzvzYkZXtnVdZxa3321+877v896b937zIwpYEtbWOzLGzRd+5fQrcOwlErjgAo3USb9630C5skHDp+7PLmhJ7WIefW76gfoHRtRdEOl0IWQ9DetucYFhtQOQ+nFgBw1rT9GAopcuQDIxCEAbh5gIhiqoj3zzCvVVUokoxyG4+I9z4gQN+1KxgF0Q1GYBu2nYdTMOlGhwLazUy5yO1cA6xpKvvEApesUcmF92g1ICQQhACaCEIBIC3eexPZHlAFZO4bQP5HsAowASECRAJgA74e7R2eMotEUd7jeUiLoXkOsQB1aERScQHqJh3ZloGtGD1TBTnRCsmFEk8Q5aoJ56stcd3UzncnbeXIwM34TIjhmBkvdRWnaAZ378TPubNBYiQjRpOsSOZgfkIwgBlRhaTZ2kZOqmnENpUndC5AYEZT5ATs2GQR5kq3Uvly7v4EvTrFWwzQcAlnmEfoCibWfrn7dT2U970khYfQLIJm9APmXc2pzPNn+Getl8mKNfIVA8AQkbWslC6sPfC8pQouo+WHLLEyxtpHI/Y9btwoAR9SpEDk8SO5m4J0aOzMlrNKwjhQHDSj+AyizxG1BtGANa7QBWZ70fYNyu8g2UaLAGVup1htAClTZolc3UP/52efrS2TAHWiB2IwB1wlYNrGEs2eNrLCSinIKgzRURPVDUBsbMZ7mcSFTbCNtqh6Bm3L6Rhn3eJ1B9CMhWQDkHbWUL9d5kvuYRvToIs68ZsE8DfETD2uYZOFaq/scQ5RjjZpefLpWwVgfal6FVbUmXPlOfcw7df2R5uen3Cph27F4lh4Y06oO/soOd9qTxk50X2/8O/AvoifbA6HkrXQAAAABJRU5ErkJggg=='
  }]
})
module.exports.recommend=Mock.mock({
  'recommends|100': [{
    // 属性 sid 是一个自增数，起始值为 1，每次增 1
    'sid|+1': 1,
    // 属性 userId 是一个5位的随机码
    'src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg',
    'name': '民众新服问卷调查',
    'like': 155,
    'ownerName': '星群传媒',
    'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACwklEQVRIS72WT0gUcRTHv9+ZnS1aNYoiNKUo+oNWpBF1C7oEEWUFdSnIOkSXooSIXRdH1lkisKhLdCiDuhSEFhF0CboVkUallFEUmhJFkbpROzvzYkZXtnVdZxa3321+877v896b937zIwpYEtbWOzLGzRd+5fQrcOwlErjgAo3USb9630C5skHDp+7PLmhJ7WIefW76gfoHRtRdEOl0IWQ9DetucYFhtQOQ+nFgBw1rT9GAopcuQDIxCEAbh5gIhiqoj3zzCvVVUokoxyG4+I9z4gQN+1KxgF0Q1GYBu2nYdTMOlGhwLazUy5yO1cA6xpKvvEApesUcmF92g1ICQQhACaCEIBIC3eexPZHlAFZO4bQP5HsAowASECRAJgA74e7R2eMotEUd7jeUiLoXkOsQB1aERScQHqJh3ZloGtGD1TBTnRCsmFEk8Q5aoJ56stcd3UzncnbeXIwM34TIjhmBkvdRWnaAZ378TPubNBYiQjRpOsSOZgfkIwgBlRhaTZ2kZOqmnENpUndC5AYEZT5ATs2GQR5kq3Uvly7v4EvTrFWwzQcAlnmEfoCibWfrn7dT2U970khYfQLIJm9APmXc2pzPNn+Getl8mKNfIVA8AQkbWslC6sPfC8pQouo+WHLLEyxtpHI/Y9btwoAR9SpEDk8SO5m4J0aOzMlrNKwjhQHDSj+AyizxG1BtGANa7QBWZ70fYNyu8g2UaLAGVup1htAClTZolc3UP/52efrS2TAHWiB2IwB1wlYNrGEs2eNrLCSinIKgzRURPVDUBsbMZ7mcSFTbCNtqh6Bm3L6Rhn3eJ1B9CMhWQDkHbWUL9d5kvuYRvToIs68ZsE8DfETD2uYZOFaq/scQ5RjjZpefLpWwVgfal6FVbUmXPlOfcw7df2R5uen3Cph27F4lh4Y06oO/soOd9qTxk50X2/8O/AvoifbA6HkrXQAAAABJRU5ErkJggg=='
  }]
})
