/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  // USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx99275d2be1b3d83e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1c72acfc29fa9989a42da8a5ee4e2697',

  PROVINCE: '福建',
  CITY: '莆田',

  USERS: [
    {
      // 想要发送的人的名字
      name: '朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTHbO6b4VExhySFqVer4nkJ59RwI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '6qUzEPRjps8Ugg7hRpMjrCCbUQCzSF_Gy-V2fyvpCgU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '距离过年的时间', year: '2024', date: '01-09',
        },
        {
          type: '节日', name: '相识的日子', year: '2023', date: '11-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        // { keyword: 'love_day', date: '2099-12-12' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2024-05-01' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '郭',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTHbO6eqigraJQGfYGcU37ojBEV4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '6qUzEPRjps8Ugg7hRpMjrCCbUQCzSF_Gy-V2fyvpCgU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '距离过年的时间', year: '2024', date: '01-09',
        },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'JJPUfnFfwsEMsCSXh80Dq3fJRKh3uWvUIo-D4YJ6g1o',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTHbO6b4VExhySFqVer4nkJ59RwI',
    }
  ],

}

module.exports = USER_CONFIG

