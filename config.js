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
  },
  {
    text: "台北市",
    status: 13,
    unique: true
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
  },
  {
    id: 13,
    text: "場所",
    parent: true,
    root: 10
  },
];