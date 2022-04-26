let optionConfig = [
  {
    text: "末期運動神經元",
    status: 0,
    unique: false
  },
  {
    text: "老年期及初老期器質性精神病態(失智症)",
    status: 0,
    unique: false
  },
  {
    text: "其他腦變質(腦中風、腦出血、帕金森、多發性硬化症)",
    status: 0,
    unique: false
  },
  {
    text: "心臟衰竭",
    status: 0,
    unique: false
  },
  {
    text: "慢性氣道阻塞，他處未歸類者",
    status: 0,
    unique: false
  },
  {
    text: "肺部其他疾病",
    status: 0,
    unique: false
  },
  {
    text: "慢性肝病及肝硬化",
    status: 0,
    unique: false
  },
  {
    text: "急性腎衰竭",
    status: 0,
    unique: false
  },
  {
    text: "慢性腎衰竭及腎衰竭",
    status: 0,
    unique: false
  },
  {
    text: "無",
    status: 0,
    unique: true
  },
  {
    text: "其他",
    status: 0,
    unique: true
  },
  {
    text: "不清楚",
    status: 0,
    unique: true
  },
  {
    text: "癌症",
    status: 0,
    unique: false
  },
  {
    text: "是",
    status: 1,
    unique: true
  },
  {
    text: "否",
    status: 1,
    unique: true
  },
  {
    text: "醫療需求(醫師探視、開立藥物、侵入性治療)",
    status: 2,
    unique: false
  },
  {
    text: "各種管路更換",
    status: 2,
    unique: false
  },
  {
    text: "轉介社工師、心理師",
    status: 2,
    unique: false
  },
  {
    text: "緩解症狀(含疼痛、呼吸困難、噁心嘔吐等末期症狀之處置)",
    status: 2,
    unique: false
  },
  {
    text: "舒適性照護(包括美手美足護理、口腔護理、床上洗頭、洗澡、會陰沖洗等)",
    status: 2,
    unique: false
  },
  {
    text: "傷口換藥",
    status: 2,
    unique: false
  },
  {
    text: "柯氏量表3級以上",
    status: 3,
    unique: false
  },
  {
    text: "只能維持有限自我照顧能力，即清醒時間超過50%以上，活動限制在床上或椅子上",
    status: 3,
    unique: false
  },
  {
    text: "服務區域：申請收案之特約醫事服務機構所在地 10 公里(或車程30分鐘)之範圍為原則，但山地離島地區與醫療資源缺乏地區，及報經保險人分區業務組認定之特殊情形，不在此限。",
    status: 3,
    unique: false
  },
  {
    text: "巴氏量表60分以下(嚴重依賴) => 重症",
    status: 3,
    unique: false
  },
  {
    text: "有明確之醫療與護理服務項目需要服務者。=> 重症",
    status: 3,
    unique: false
  },
  {
    text: "病情穩定能在家中進行醫護措施者。=> 重症",
    status: 3,
    unique: false
  },
  {
    text: "鼻胃管",
    status: 4,
    unique: false
  },
  {
    text: "尿管",
    status: 4,
    unique: false
  },
  {
    text: "人工血管",
    status: 4,
    unique: false
  },
  {
    text: "PICC",
    status: 4,
    unique: false
  },
  {
    text: "胃造廔管",
    status: 4,
    unique: false
  },
  {
    text: "腸造口",
    status: 4,
    unique: false
  },
  {
    text: "喜克曼導管",
    status: 4,
    unique: false
  },
  {
    text: "洗腎管",
    status: 4,
    unique: false
  },
  {
    text: "氣管內管(嘴巴/鼻子)",
    status: 4,
    unique: false
  },
  {
    text: "氣切管",
    status: 4,
    unique: false
  },
  {
    text: "壓損性傷口(褥瘡)",
    status: 5,
    unique: false
  },
  {
    text: "失禁性皮膚炎",
    status: 5,
    unique: false
  },
  {
    text: "腫瘤傷口",
    status: 5,
    unique: false
  },
  {
    text: "其他傷口",
    status: 5,
    unique: false
  },
  {
    text: "正壓呼吸器",
    status: 6,
    unique: false
  },
  {
    text: "呼吸器",
    status: 6,
    unique: false
  },
  {
    text: "抽痰機",
    status: 6,
    unique: false
  },
  {
    text: "氧氣製造機",
    status: 6,
    unique: false
  },
  {
    text: "60-生活有時需要協助，但大多數時間可自理",
    status: 8,
    unique: true
  },
  {
    text: "50-生活需要別人協助，且經常需要醫療照護",
    status: 8,
    unique: true
  },
  {
    text: "40-臥床時間超過50%",
    status: 8,
    unique: true
  },
  {
    text: "30-幾乎完全臥床",
    status: 8,
    unique: true
  },
  {
    text: "20-完全臥床，需要專業人員或家屬照護",
    status: 8,
    unique: true
  },
  {
    text: "10-昏迷或是幾乎叫不醒",
    status: 8,
    unique: true
  },
  {
    text: "無法繼續工作，則考慮轉 介至相關醫事人員",
    status: 9
,
  unique: false},
  {
    text: "檢視照護計畫，提供輔 具，及照顧者評估",
    status: 9
,
  unique: false},
  {
    text: "慮跨團隊會議和檢視",
    status: 9
,
  unique: false},
  {
    text: "照護計畫，可能需要進一步的支持，需要時提供適當的輔具設備",
    status: 9
,
  unique: false},
  {
    text: "開始末期照護計畫,若近日可能死亡，則進入臨終階段",
    status: 9
,
  unique: false},
  {
    text: "醫療需求(醫師探視、開立藥物、侵入性治療)",
    status: 11,
    unique: false
  },
  {
    text: "各種管路更換",
    status: 11,
    unique: false
  },
  {
    text: "轉介社工師、心理師(安寧)",
    status: 11,
    unique: false
  },
  {
    text: "緩解症狀(含疼痛、呼吸困難、噁心嘔吐等末期症狀之處置)",
    status: 11,
    unique: false
  },
  {
    text: "舒適性照護(包括美手美足護理、口腔護理、床上洗頭、洗澡、會陰沖洗、淋巴按摩等)",
    status: 11,
    unique: false
  },
  {
    text: "傷口換藥",
    status: 11,
    unique: false
  },
  {
    text: "居家整合照護",
    status: 12,
    unique: false
  },
  {
    text: "重症居家",
    status: 12,
    unique: false
  }
];

let statusConfig = [
  {
    id: 0,
    text: "診斷",
    parent: false,
    hasParent: false
  },
  {
    id: 1,
    text: "是否有任一項為末期",
    parent: false,
    hasParent: false
  },
  {
    id: 2,
    text: "需求",
    parent: false,
    hasParent: false
  },
  {
    id: 3,
    text: "身份",
    parent: false,
    hasParent: false
  },
  {
    id: 4,
    text: "身上管路",
    parent: false,
    hasParent: false
  },
  {
    id: 5,
    text: "身上傷口",
    parent: false,
    hasParent: false
  },
  {
    id: 6,
    text: "特殊儀器",
    parent: false,
    hasParent: false
  },
  {
    id: 7,
    text: "功能狀態評估表AKPS",
    parent: false,
    hasParent: true
  },
  {
    id: 8,
    text: "個案身體功能整體表現",
    parent: true,
    root: 7
  },
  {
    id: 9,
    text: "臨床回應",
    parent: true,
    root: 7
  },
  {
    id: 10,
    text: "收案原因",
    parent: false,
    hasParent: true
  },
  {
    id: 11,
    text: "轉借需求",
    parent: true,
    root: 10
  },
  {
    id: 12,
    text: "轉介團隊",
    parent: true,
    root: 10
  }
];

let city = [
  {
    id: 0,
    name: "台北市",
    areas: [
      {
        id: 0,
        name: "汐止區"
      },
      {
        id: 1,
        name: "萬華區"
      },
      {
        id: 2,
        name: "士林區"
      }
    ]
  },
  {
    id: 1,
    name: "新北市",
    areas: [
      {
        id: 0,
        name: "淡水區"
      },
      {
        id: 1,
        name: "永和區"
      }
    ]
  }
];

let hospitalType = [
  {
    id: 0,
    description: "醫院"
  },
  {
    id: 1,
    description: "居護所"
  },
  {
    id: 2,
    description: "安養護機構"
  },
  {
    id: 3,
    description: "居家醫療團隊"
  },
  {
    id: 4,
    description: "一般重症居家"
  }
]

let hospitals = [
  {
    id: 0,
    name: "三軍總醫院",
    address: "",
    location: [0],
    url: "www.hospital.com",
    phone: [
      {
        number: "02-87923311\n 分機17912",
        description: "病房電話"
      },
      {
        number: "02-87923311分機88200\n 〈白天上班時間〉",
        description: "居家電話"
      }
    ],
    hospitalType: [0],
    comment: "家醫科許馨文、蔡秉芸醫師"
  },
  {
    id: 1,
    name: "永和耕莘醫院",
    address: "",
    location: [1, 1],
    url: "http://newreg.cthyh.org.tw/new_CthWebReg/frame05.html",
    phone: [
      {
        number: "(02)66373658或59；先電話跟居家交班後，傳真資料給居家護理師。",
        description: "病房電話"
      },
      {
        number: "89253023",
        description: "病房電話(傳真)"
      }
    ],
    hospitalType: [0, 3],
    comment: "家醫科許馨文、蔡秉芸醫師"
  },
  {
    id: 2,
    name: "私立愛愛院",
    address: "臺北市萬華區大理街175巷27號",
    location: [0, 1],
    url: "",
    phone: [
      {
        number: "02-2306-0493",
        description: "電話"
      },
      {
        number: "02-2308-4057",
        description: "傳真"
      }
    ],
    hospitalType: [2],
    comment: "就地善終"
  },
  {
    id: 3,
    name: "耘霈居家護理所",
    address: "淡水區學府路136巷16號1樓",
    location: [1, 0],
    url: "",
    phone: [
      {
        number: "02-87923311\n 分機17912",
        description: "病房電話"
      },
      {
        number: "02-87923311分機88200\n 〈白天上班時間〉",
        description: "居家電話"
      }
    ],
    hospitalType: [2],
    comment: "安寧?"
  },
  {
    id:4,
    name:"新光醫療財團法人新光吳火獅紀念醫院",
    address:"臺北市士林區文昌路95號及士商路51號1至7樓53、55號",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02 -28332211",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:5,
    name:"士林錦禾中醫診所",
    address:"臺北市士林區士東路16號（實際使用：1樓）、18號2樓",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02 -88665128",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:6,
    name:"悅展中醫診所",
    address:"臺北市士林區延平北路五段243號",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02 -28128132",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:7,
    name:"李世澤小兒科內科診所",
    address:"臺北市士林區社子街67號",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02 -28111472",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:8,
    name:"宜寧居家護理所",
    address:"臺北市士林區中正路436號11樓",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02-28353449",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:9,
    name:"新光醫療財團法人附設新",
    address:"臺北市士林區文昌路95號",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02-28332211轉2600、2601、2483",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:10,
    name:"臺北市立聯合醫院附設陽",
    address:"\"臺北市士林區雨聲街105號9樓/6樓",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02-28353456轉6372、5211",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:11,
    name: "不明診所",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:12,
    name:"可馨居家護理所",
    address:"\"臺北市大安區忠孝東路四段162號9",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"978278750",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:13,
    name: "不明診所",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  },
  {
    id:14,
    name:"粱耳鼻喉科診所",
    address:"臺北市士林區社正路12－1號",
    location:[
      0,
      2
    ],
    url:"",
    phone:[
      {
        number:"02 -28168456",
        description:"電話"
      }
    ],
    hospitalType:[
      0,
      4
    ],
    comment:""
  }
];