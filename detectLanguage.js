/* global chrome */

const languagesList = function (matchStr) {
  const strArray = {
    sh: '塞尔维亚克罗地亚语',
    rm: '罗曼语族语',
    ht: '海地克里奥尔语',
    lb: '卢森堡语',
    gd: '苏格兰盖尔语',
    nn: '挪威语',
    rw: '卢旺达语',
    ie: '中间语',
    ia: '国际语',
    kl: '格陵兰语',
    az: '阿塞拜疆语',
    vi: '越南语',
    pt: '葡萄牙语',
    mk: '马其顿语',
    lt: '立陶宛语',
    id: '印度尼西亚语',
    be: '白俄罗斯语',
    uk: '乌克兰语',
    su: '巽他语',
    sl: '斯洛文尼亚语',
    si: '僧伽罗语',
    nb: '挪威语',
    mn: '蒙语',
    mo: '摩尔多瓦语',
    ml: '马拉雅拉姆语',
    iu: '因纽特语',
    is: '冰岛语',
    hu: '匈牙利语',
    eo: '世界语',
    bg: '保加利亚语',
    af: '南非荷兰语',
    ab: '阿布哈兹语',
    ti: '提格雷语',
    sa: '梵文',
    ro: '罗马尼亚语',
    mg: '马尔加什语',
    lo: '老挝人语',
    ks: '克什米尔语',
    jw: '爪哇语',
    ja: '日语',
    gu: '古吉拉特语',
    ka: '格鲁吉亚语',
    gl: '加利西亚语',
    et: '爱沙尼亚语',
    dz: '宗喀语',
    hr: '克罗地亚语',
    co: '科西嘉岛语',
    as: '阿萨姆语',
    hy: '亚美尼亚语',
    sq: '阿尔巴尼亚语',
    yi: '意第绪语',
    vo: '沃拉普克语',
    tk: '土库曼语',
    tr: '土耳其语',
    bo: '藏语',
    sv: '瑞典语',
    sw: '斯瓦希里语',
    es: '西班牙语',
    ss: '西旺语',
    st: '塞索托语',
    sr: '塞尔维亚语',
    ru: '俄语',
    qu: '盖丘亚语',
    pa: '旁遮普语',
    fa: '波斯语',
    oc: '欧西坦语',
    mr: '马拉地语',
    mt: '马耳他语',
    ln: '林加拉语',
    lv: '拉脱维亚语',
    ku: '库尔德语',
    kn: '卡纳达语',
    it: '意大利语',
    ik: '因努皮亚克语',
    gn: '瓜拉尼语',
    fy: '弗里斯兰语',
    fi: '芬兰语',
    fo: '法罗语',
    en: '英语',
    dv: '迪维希语',
    zh: '中文',
    ca: '加泰罗尼亚语',
    my: '缅甸语',
    bs: '波斯尼亚语',
    bi: '比斯拉马语',
    bn: '孟加拉语',
    ba: '巴什基尔语',
    am: '阿姆哈拉语',
    za: '壮语',
    yo: '约鲁巴语',
    ug: '维吾尔语',
    tn: '茨瓦纳语',
    ts: '聪加语',
    te: '泰卢固语',
    so: '索马里语',
    sk: '斯洛伐克语',
    sd: '信德语',
    sm: '萨摩亚语',
    pl: '波兰语',
    ps: '普什图语',
    ne: '尼泊尔语',
    ky: '吉尔吉斯斯坦语',
    ko: '韩语',
    kk: '哈萨克语',
    he: '希伯来语',
    de: '德语',
    fr: '法语',
    fj: '斐济语',
    da: '丹麦语',
    bh: '比哈里语',
    eu: '巴斯克语',
    ay: '艾马拉语',
    ar: '阿拉伯语',
    xh: '科萨语',
    wo: '沃尔夫语',
    cy: '威尔士语',
    uz: '乌兹别克语',
    to: '汤加语',
    tt: '韃靼语',
    ta: '泰米尔语',
    tg: '塔吉克语',
    sn: '绍纳语',
    sg: '桑戈语',
    rn: '基隆迪语',
    om: '奥罗莫语',
    or: '奥里亚语',
    na: '瑙鲁语',
    mi: '毛利语',
    ms: '马来语',
    la: '拉丁语',
    km: '高棉语',
    ga: '爱尔兰语',
    hi: '印地语',
    ha: '豪萨语',
    el: '希腊语',
    nl: '荷兰语',
    cs: '捷克语',
    zu: '祖鲁语',
    ur: '乌尔都语',
    th: '泰语',
    gv: '马克斯语',
    aa: '阿法尔语',
    tw: '特威语',
    jv: '爪哇语'
  }
  return strArray[matchStr]
}

// 添加css
const paraCss = document.createElement('style')
const nodeCss = document.createTextNode('#detect-language{border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#46bd62;bottom:auto;left:auto;top:40px;right:30px;auto;z-index:9999;position:fixed;font-size:16px;max-width:300px}#detect-language table tbody tr td{font-size:16px}.like-count{padding-right:5px;border-right:1px solid #dedede;color:white;text-align:left}')
paraCss.appendChild(nodeCss)
const elementCss = document.querySelector('head')
elementCss.appendChild(paraCss)

const paraAlert = document.createElement('p')
const elementAlert = document.querySelector('body')
elementAlert.appendChild(paraAlert)
paraAlert.setAttribute('id', 'detect-language')
paraAlert.setAttribute('ondblclick', 'document.getElementById("detect-language").style="display:none"')

// run
detectLanguage()
setInterval(function () {
  detectLanguage()
}, 1500)

function postDate () {
  let result = []
  const getDate = document.getElementsByClassName('du4w35lb k4urcfbm l9j0dhe7 sjgh65i0')
  // 只显示前15个帖子的时间
  if (getDate.length < 15) {
    loopLength = getDate.length
  } else {
    loopLength = 15
  }
  let postLikeCount = []
  for (let i = 0; i < loopLength; i++) {
    try {
      postLikeCount = getDate[i].getElementsByClassName('gpro0wi8 pcp91wgn')[0].outerText
    } catch {
      postLikeCount = 0
    }
    const postLink = getDate[i].getElementsByClassName('oajrlxb2')[0].href.replace(/\?__cft.+/g, '')
    const postDate = getDate[i].getElementsByClassName('j1lvzwm4 stjgntxs ni8dbmo4 q9uorilb gpro0wi8')[0].outerText.replace(/=/g, '')
    result += `<tr><td class="like-count">${postLikeCount}</td><td> ${postDate}</td>`
  }
  return `<hr><table style="font-size:16px;"><tbody>${result}</tbody></table>`
}

function detectLanguage () {
  chrome.i18n.detectLanguage(document.documentElement.outerText, function (result) {
    let languages = '\n'
    for (let i = 0; i < result.languages.length; i++) {
      languages += result.languages[i].language + ' '
      languages += result.languages[i].percentage + '%<br>'
    }
    document.getElementById('detect-language').innerHTML = languages.replace(/sh|rm|ht|lb|gd|nn|rw|ie|ia|kl|az|vi|pt|mk|lt|id|be|uk|su|sl|si|nb|mn|mo|ml|iu|is|hu|eo|bg|af|ab|ti|sa|ro|mg|lo|ks|jw|ja|gu|ka|gl|et|dz|hr|co|as|hy|sq|yi|vo|tk|tr|bo|sv|sw|es|ss|st|sr|ru|qu|pa|fa|oc|mr|mt|ln|lv|ku|kn|it|ik|gn|fy|fi|fo|en|dv|zh|ca|my|bs|bi|bn|ba|am|za|yo|ug|tn|ts|te|so|sk|sd|sm|pl|ps|ne|ky|ko|kk|he|de|fr|fj|da|bh|eu|ay|ar|xh|wo|cy|uz|to|tt|ta|tg|sn|sg|rn|om|or|na|mi|ms|la|km|ga|hi|ha|el|nl|cs|zu|ur|th|gv|aa|tw|jv/g, languagesList) + postDate()
  })
}
