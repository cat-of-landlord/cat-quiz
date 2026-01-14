const universityData = [
  {
    "name": "北京大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国人民大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "清华大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京交通大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京工业大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京航空航天大学",
    "department": "工业和信息化部",
    "city": "北京市"
  },
  {
    "name": "北京理工大学",
    "department": "工业和信息化部",
    "city": "北京市"
  },
  {
    "name": "北京科技大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北方工业大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京化工大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京工商大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京服装学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京邮电大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京印刷学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京建筑大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京石油化工学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京电子科技学院",
    "department": "中央办公厅",
    "city": "北京市"
  },
  {
    "name": "中国农业大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京农学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京林业大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京协和医学院",
    "department": "国家卫生健康委员会",
    "city": "北京市"
  },
  {
    "name": "首都医科大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京中医药大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京师范大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "首都师范大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "首都体育学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京外国语大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京第二外国语学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京语言大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国传媒大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中央财经大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "对外经济贸易大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京物资学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "首都经济贸易大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "中国消防救援学院",
    "department": "应急管理部",
    "city": "北京市"
  },
  {
    "name": "外交学院",
    "department": "外交部",
    "city": "北京市"
  },
  {
    "name": "中国人民公安大学",
    "department": "公安部",
    "city": "北京市"
  },
  {
    "name": "国际关系学院",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京体育大学",
    "department": "国家体育总局",
    "city": "北京市"
  },
  {
    "name": "中央音乐学院",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国音乐学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "中央美术学院",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中央戏剧学院",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国戏曲学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京电影学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京舞蹈学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "中央民族大学",
    "department": "国家民委",
    "city": "北京市"
  },
  {
    "name": "中国政法大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "华北电力大学",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中华女子学院",
    "department": "中华妇女联合会",
    "city": "北京市"
  },
  {
    "name": "北京信息科技大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "中国矿业大学（北京）",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国石油大学（北京）",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "中国地质大学（北京）",
    "department": "教育部",
    "city": "北京市"
  },
  {
    "name": "北京联合大学",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京城市学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "中国青年政治学院",
    "department": "共青团中央",
    "city": "北京市"
  },
  {
    "name": "首钢工学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "中国劳动关系学院",
    "department": "中华全国总工会",
    "city": "北京市"
  },
  {
    "name": "首都师范大学科德学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "北京工商大学嘉华学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "北京邮电大学世纪学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "北京工业大学耿丹学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "北京警察学院",
    "department": "北京市",
    "city": "北京市"
  },
  {
    "name": "北京第二外国语学院中瑞酒店管理学院",
    "department": "北京市教委",
    "city": "北京市"
  },
  {
    "name": "中国科学院大学",
    "department": "中国科学院",
    "city": "北京市"
  },
  {
    "name": "中国社会科学院大学",
    "department": "中国社会科学院",
    "city": "北京市"
  },
  {
    "name": "南开大学",
    "department": "教育部",
    "city": "天津市"
  },
  {
    "name": "天津大学",
    "department": "教育部",
    "city": "天津市"
  },
  {
    "name": "天津科技大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津工业大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "中国民航大学",
    "department": "交通运输部（中国民用航空局）",
    "city": "天津市"
  },
  {
    "name": "天津理工大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津农学院",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津医科大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津中医药大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津师范大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津职业技术师范大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津外国语大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津商业大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津财经大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津体育学院",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津音乐学院",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津美术学院",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津城建大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津天狮学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津中德应用技术大学",
    "department": "天津市",
    "city": "天津市"
  },
  {
    "name": "天津外国语大学滨海外事学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津传媒学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津商业大学宝德学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津医科大学临床医学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "南开大学滨海学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津师范大学津沽学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津理工大学中环信息学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "北京科技大学天津学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津仁爱学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "天津财经大学珠江学院",
    "department": "天津市教委",
    "city": "天津市"
  },
  {
    "name": "河北大学",
    "department": "河北省",
    "city": "保定市"
  },
  {
    "name": "河北工程大学",
    "department": "河北省",
    "city": "邯郸市"
  },
  {
    "name": "河北地质大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "河北工业大学",
    "department": "河北省",
    "city": "天津市"
  },
  {
    "name": "华北理工大学",
    "department": "河北省",
    "city": "唐山市"
  },
  {
    "name": "河北科技大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "河北建筑工程学院",
    "department": "河北省",
    "city": "张家口市"
  },
  {
    "name": "河北水利电力学院",
    "department": "河北省",
    "city": "沧州市"
  },
  {
    "name": "河北农业大学",
    "department": "河北省",
    "city": "保定市"
  },
  {
    "name": "河北医科大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "河北北方学院",
    "department": "河北省",
    "city": "张家口市"
  },
  {
    "name": "承德医学院",
    "department": "河北省",
    "city": "承德市"
  },
  {
    "name": "河北师范大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "保定学院",
    "department": "河北省",
    "city": "保定市"
  },
  {
    "name": "河北民族师范学院",
    "department": "河北省",
    "city": "承德市"
  },
  {
    "name": "唐山师范学院",
    "department": "河北省",
    "city": "唐山市"
  },
  {
    "name": "廊坊师范学院",
    "department": "河北省",
    "city": "廊坊市"
  },
  {
    "name": "衡水学院",
    "department": "河北省",
    "city": "衡水市"
  },
  {
    "name": "石家庄学院",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "邯郸学院",
    "department": "河北省",
    "city": "邯郸市"
  },
  {
    "name": "邢台学院",
    "department": "河北省",
    "city": "邢台市"
  },
  {
    "name": "沧州师范学院",
    "department": "河北省",
    "city": "沧州市"
  },
  {
    "name": "石家庄铁道大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "燕山大学",
    "department": "河北省",
    "city": "秦皇岛市"
  },
  {
    "name": "河北科技师范学院",
    "department": "河北省",
    "city": "秦皇岛市"
  },
  {
    "name": "唐山学院",
    "department": "河北省",
    "city": "唐山市"
  },
  {
    "name": "华北科技学院",
    "department": "应急管理部",
    "city": "廊坊市"
  },
  {
    "name": "中国人民警察大学",
    "department": "公安部",
    "city": "廊坊市"
  },
  {
    "name": "河北体育学院",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "河北金融学院",
    "department": "河北省",
    "city": "保定市"
  },
  {
    "name": "北华航天工业学院",
    "department": "河北省",
    "city": "廊坊市"
  },
  {
    "name": "防灾科技学院",
    "department": "中国地震局",
    "city": "廊坊市"
  },
  {
    "name": "河北经贸大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "中央司法警官学院",
    "department": "司法部",
    "city": "保定市"
  },
  {
    "name": "河北传媒学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北工程技术学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北美术学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北科技学院",
    "department": "河北省教育厅",
    "city": "保定市"
  },
  {
    "name": "河北外国语学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北大学工商学院",
    "department": "河北省教育厅",
    "city": "保定市"
  },
  {
    "name": "华北理工大学轻工学院",
    "department": "河北省教育厅",
    "city": "唐山市"
  },
  {
    "name": "河北工业职业技术大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "河北师范大学汇华学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北经贸大学经济管理学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北医科大学临床学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北科技工程职业技术大学",
    "department": "河北省",
    "city": "邢台市"
  },
  {
    "name": "河北工程大学科信学院",
    "department": "河北省教育厅",
    "city": "邯郸市"
  },
  {
    "name": "河北石油职业技术大学",
    "department": "河北省",
    "city": "承德市"
  },
  {
    "name": "燕山大学里仁学院",
    "department": "河北省教育厅",
    "city": "秦皇岛市"
  },
  {
    "name": "石家庄铁道大学四方学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北地质大学华信学院",
    "department": "河北省教育厅",
    "city": "石家庄市"
  },
  {
    "name": "河北农业大学现代科技学院",
    "department": "河北省教育厅",
    "city": "保定市"
  },
  {
    "name": "华北理工大学冀唐学院",
    "department": "河北省教育厅",
    "city": "唐山市"
  },
  {
    "name": "保定理工学院",
    "department": "河北省教育厅",
    "city": "保定市"
  },
  {
    "name": "燕京理工学院",
    "department": "河北省教育厅",
    "city": "廊坊市"
  },
  {
    "name": "北京中医药大学东方学院",
    "department": "河北省教育厅",
    "city": "廊坊市"
  },
  {
    "name": "沧州交通学院",
    "department": "河北省教育厅",
    "city": "沧州市"
  },
  {
    "name": "河北东方学院",
    "department": "河北省教育厅",
    "city": "廊坊市"
  },
  {
    "name": "河北中医药大学",
    "department": "河北省",
    "city": "石家庄市"
  },
  {
    "name": "张家口学院",
    "department": "河北省",
    "city": "张家口市"
  },
  {
    "name": "河北环境工程学院",
    "department": "河北省",
    "city": "秦皇岛市"
  },
  {
    "name": "山西大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "太原科技大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "中北大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "太原理工大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西农业大学",
    "department": "山西省",
    "city": "晋中市"
  },
  {
    "name": "山西医科大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "长治医学院",
    "department": "山西省",
    "city": "长治市"
  },
  {
    "name": "山西师范大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "太原师范学院",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西大同大学",
    "department": "山西省",
    "city": "大同市"
  },
  {
    "name": "晋中学院",
    "department": "山西省",
    "city": "晋中市"
  },
  {
    "name": "长治学院",
    "department": "山西省",
    "city": "长治市"
  },
  {
    "name": "运城学院",
    "department": "山西省",
    "city": "运城市"
  },
  {
    "name": "忻州师范学院",
    "department": "山西省",
    "city": "忻州市"
  },
  {
    "name": "山西财经大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西中医药大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "吕梁学院",
    "department": "山西省",
    "city": "吕梁市"
  },
  {
    "name": "太原学院",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西警察学院",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西应用科技学院",
    "department": "山西省教育厅",
    "city": "太原市"
  },
  {
    "name": "山西工程科技职业大学",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西工学院",
    "department": "山西省",
    "city": "朔州市"
  },
  {
    "name": "晋中信息学院",
    "department": "山西省教育厅",
    "city": "晋中市"
  },
  {
    "name": "山西师范大学现代文理学院",
    "department": "山西省教育厅",
    "city": "临汾市"
  },
  {
    "name": "山西晋中理工学院",
    "department": "山西省教育厅",
    "city": "晋中市"
  },
  {
    "name": "山西科技学院",
    "department": "山西省",
    "city": "晋城市"
  },
  {
    "name": "山西医科大学晋祠学院",
    "department": "山西省教育厅",
    "city": "太原市"
  },
  {
    "name": "山西财经大学华商学院",
    "department": "山西省教育厅",
    "city": "太原市"
  },
  {
    "name": "山西工商学院",
    "department": "山西省教育厅",
    "city": "太原市"
  },
  {
    "name": "太原工业学院",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "运城职业技术大学",
    "department": "山西省教育厅",
    "city": "运城市"
  },
  {
    "name": "山西传媒学院",
    "department": "山西省",
    "city": "太原市"
  },
  {
    "name": "山西工程技术学院",
    "department": "山西省",
    "city": "阳泉市"
  },
  {
    "name": "山西能源学院",
    "department": "山西省",
    "city": "晋中市"
  },
  {
    "name": "内蒙古大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古科技大学",
    "department": "内蒙古自治区",
    "city": "包头市"
  },
  {
    "name": "内蒙古工业大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古农业大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古医科大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古师范大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古民族大学",
    "department": "内蒙古自治区",
    "city": "通辽市"
  },
  {
    "name": "赤峰学院",
    "department": "内蒙古自治区",
    "city": "赤峰市"
  },
  {
    "name": "内蒙古财经大学",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "呼伦贝尔学院",
    "department": "内蒙古自治区",
    "city": "呼伦贝尔市"
  },
  {
    "name": "集宁师范学院",
    "department": "内蒙古自治区",
    "city": "乌兰察布市"
  },
  {
    "name": "河套学院",
    "department": "内蒙古自治区",
    "city": "巴彦淖尔市"
  },
  {
    "name": "呼和浩特民族学院",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古大学创业学院",
    "department": "内蒙古自治区教育厅",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古鸿德文理学院",
    "department": "内蒙古自治区教育厅",
    "city": "呼和浩特市"
  },
  {
    "name": "内蒙古艺术学院",
    "department": "内蒙古自治区",
    "city": "呼和浩特市"
  },
  {
    "name": "鄂尔多斯应用技术学院",
    "department": "内蒙古自治区",
    "city": "鄂尔多斯市"
  },
  {
    "name": "辽宁大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "大连理工大学",
    "department": "教育部",
    "city": "大连市"
  },
  {
    "name": "沈阳工业大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "沈阳航空航天大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "沈阳理工大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "东北大学",
    "department": "教育部",
    "city": "沈阳市"
  },
  {
    "name": "辽宁科技大学",
    "department": "辽宁省",
    "city": "鞍山市"
  },
  {
    "name": "辽宁工程技术大学",
    "department": "辽宁省",
    "city": "阜新市"
  },
  {
    "name": "辽宁石油化工大学",
    "department": "辽宁省",
    "city": "抚顺市"
  },
  {
    "name": "沈阳化工大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "大连交通大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "大连海事大学",
    "department": "交通运输部",
    "city": "大连市"
  },
  {
    "name": "大连工业大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "沈阳建筑大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "辽宁工业大学",
    "department": "辽宁省",
    "city": "锦州市"
  },
  {
    "name": "沈阳农业大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "大连海洋大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "中国医科大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "锦州医科大学",
    "department": "辽宁省",
    "city": "锦州市"
  },
  {
    "name": "大连医科大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "辽宁中医药大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "沈阳药科大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "沈阳医学院",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "辽宁师范大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "沈阳师范大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "渤海大学",
    "department": "辽宁省",
    "city": "锦州市"
  },
  {
    "name": "鞍山师范学院",
    "department": "辽宁省",
    "city": "鞍山市"
  },
  {
    "name": "大连外国语大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "东北财经大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "中国刑事警察学院",
    "department": "公安部",
    "city": "沈阳市"
  },
  {
    "name": "沈阳体育学院",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "沈阳音乐学院",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "鲁迅美术学院",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "辽宁对外经贸学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "沈阳大学",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "大连大学",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "辽宁科技学院",
    "department": "辽宁省",
    "city": "本溪市"
  },
  {
    "name": "辽宁警察学院",
    "department": "辽宁省",
    "city": "大连市"
  },
  {
    "name": "沈阳工程学院",
    "department": "辽宁省",
    "city": "沈阳市"
  },
  {
    "name": "辽东学院",
    "department": "辽宁省",
    "city": "丹东市"
  },
  {
    "name": "大连民族大学",
    "department": "国家民委",
    "city": "大连市"
  },
  {
    "name": "辽宁理工职业大学",
    "department": "辽宁省教育厅",
    "city": "锦州市"
  },
  {
    "name": "大连理工大学城市学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "沈阳工业大学工程学院",
    "department": "辽宁省教育厅",
    "city": "辽阳市"
  },
  {
    "name": "沈阳航空航天大学北方科技学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "沈阳工学院",
    "department": "辽宁省教育厅",
    "city": "抚顺市"
  },
  {
    "name": "大连工业大学艺术与信息工程学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "大连科技学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "沈阳城市建设学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "大连医科大学中山学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "锦州医科大学医疗学院",
    "department": "辽宁省教育厅",
    "city": "锦州市"
  },
  {
    "name": "辽宁师范大学海华学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "辽宁理工学院",
    "department": "辽宁省教育厅",
    "city": "锦州市"
  },
  {
    "name": "大连财经学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "沈阳城市学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "大连艺术学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "辽宁中医药大学杏林学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "辽宁何氏医学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "沈阳科技学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "大连东软信息学院",
    "department": "辽宁省教育厅",
    "city": "大连市"
  },
  {
    "name": "辽宁财贸学院",
    "department": "辽宁省教育厅",
    "city": "葫芦岛市"
  },
  {
    "name": "辽宁传媒学院",
    "department": "辽宁省教育厅",
    "city": "沈阳市"
  },
  {
    "name": "营口理工学院",
    "department": "辽宁省",
    "city": "营口市"
  },
  {
    "name": "吉林大学",
    "department": "教育部",
    "city": "长春市"
  },
  {
    "name": "延边大学",
    "department": "吉林省",
    "city": "延边朝鲜族自治州"
  },
  {
    "name": "长春理工大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "东北电力大学",
    "department": "吉林省",
    "city": "吉林市"
  },
  {
    "name": "长春工业大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林建筑大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林化工学院",
    "department": "吉林省",
    "city": "吉林市"
  },
  {
    "name": "吉林农业大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "长春中医药大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "东北师范大学",
    "department": "教育部",
    "city": "长春市"
  },
  {
    "name": "北华大学",
    "department": "吉林省",
    "city": "吉林市"
  },
  {
    "name": "通化师范学院",
    "department": "吉林省",
    "city": "通化市"
  },
  {
    "name": "吉林师范大学",
    "department": "吉林省",
    "city": "四平市"
  },
  {
    "name": "吉林工程技术师范学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "长春师范大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "白城师范学院",
    "department": "吉林省",
    "city": "白城市"
  },
  {
    "name": "吉林财经大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林体育学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林艺术学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林外国语大学",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "吉林工商学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "长春工程学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "吉林农业科技学院",
    "department": "吉林省",
    "city": "吉林市"
  },
  {
    "name": "吉林警察学院",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "长春大学",
    "department": "吉林省",
    "city": "长春市"
  },
  {
    "name": "长春光华学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春工业大学人文信息学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春电子科技学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春财经学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "吉林建筑科技学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春建筑学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春科技学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "吉林动画学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "吉林师范大学博达学院",
    "department": "吉林省教育厅",
    "city": "四平市"
  },
  {
    "name": "长春大学旅游学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "长春人文学院",
    "department": "吉林省教育厅",
    "city": "长春市"
  },
  {
    "name": "吉林医药学院",
    "department": "吉林省",
    "city": "吉林市"
  },
  {
    "name": "黑龙江大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨工业大学",
    "department": "工业和信息化部",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨理工大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨工程大学",
    "department": "工业和信息化部",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江科技大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "东北石油大学",
    "department": "黑龙江省",
    "city": "大庆市"
  },
  {
    "name": "佳木斯大学",
    "department": "黑龙江省",
    "city": "佳木斯市"
  },
  {
    "name": "黑龙江八一农垦大学",
    "department": "黑龙江省",
    "city": "大庆市"
  },
  {
    "name": "东北农业大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "东北林业大学",
    "department": "教育部",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨医科大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江中医药大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "牡丹江医学院",
    "department": "黑龙江省",
    "city": "牡丹江市"
  },
  {
    "name": "哈尔滨师范大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "齐齐哈尔大学",
    "department": "黑龙江省",
    "city": "齐齐哈尔市"
  },
  {
    "name": "牡丹江师范学院",
    "department": "黑龙江省",
    "city": "牡丹江市"
  },
  {
    "name": "哈尔滨学院",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "大庆师范学院",
    "department": "黑龙江省",
    "city": "大庆市"
  },
  {
    "name": "绥化学院",
    "department": "黑龙江省",
    "city": "绥化市"
  },
  {
    "name": "哈尔滨商业大学",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨体育学院",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨金融学院",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "齐齐哈尔医学院",
    "department": "黑龙江省",
    "city": "齐齐哈尔市"
  },
  {
    "name": "黑龙江工业学院",
    "department": "黑龙江省",
    "city": "鸡西市"
  },
  {
    "name": "黑龙江东方学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨信息工程学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江工程学院",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "齐齐哈尔工程学院",
    "department": "黑龙江省教育厅",
    "city": "齐齐哈尔市"
  },
  {
    "name": "黑龙江外国语学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江财经学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨石油学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江工商学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨远东理工学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨剑桥学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "黑龙江工程学院昆仑旅游学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨广厦学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "哈尔滨华德学院",
    "department": "黑龙江省教育厅",
    "city": "哈尔滨市"
  },
  {
    "name": "黑河学院",
    "department": "黑龙江省",
    "city": "黑河市"
  },
  {
    "name": "哈尔滨音乐学院",
    "department": "黑龙江省",
    "city": "哈尔滨市"
  },
  {
    "name": "复旦大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "同济大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海交通大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "华东理工大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海理工大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海海事大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "东华大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海电力大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海应用技术大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海健康医学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海海洋大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海中医药大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "华东师范大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海师范大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海外国语大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海财经大学",
    "department": "教育部",
    "city": "上海市"
  },
  {
    "name": "上海对外经贸大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海海关学院",
    "department": "海关总署",
    "city": "上海市"
  },
  {
    "name": "华东政法大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海体育大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海音乐学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海戏剧学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海公安学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海工程技术大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海立信会计金融学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海电机学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海杉达学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海政法学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海第二工业大学",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海商学院",
    "department": "上海市",
    "city": "上海市"
  },
  {
    "name": "上海立达学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海建桥学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海兴伟学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海中侨职业技术大学",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海视觉艺术学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海外国语大学贤达经济人文学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海师范大学天华学院",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "上海科技大学",
    "department": "上海市",
    "city": "中国科学院"
  },
  {
    "name": "上海纽约大学",
    "department": "上海市教委",
    "city": "上海市"
  },
  {
    "name": "南京大学",
    "department": "教育部",
    "city": "南京市"
  },
  {
    "name": "苏州大学",
    "department": "江苏省",
    "city": "苏州市"
  },
  {
    "name": "东南大学",
    "department": "教育部",
    "city": "南京市"
  },
  {
    "name": "南京航空航天大学",
    "department": "工业和信息化部",
    "city": "南京市"
  },
  {
    "name": "南京理工大学",
    "department": "工业和信息化部",
    "city": "南京市"
  },
  {
    "name": "江苏科技大学",
    "department": "江苏省",
    "city": "镇江市"
  },
  {
    "name": "中国矿业大学",
    "department": "教育部",
    "city": "徐州市"
  },
  {
    "name": "南京工业大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "常州大学",
    "department": "江苏省",
    "city": "常州市"
  },
  {
    "name": "南京邮电大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "河海大学",
    "department": "教育部",
    "city": "南京市"
  },
  {
    "name": "江南大学",
    "department": "教育部",
    "city": "无锡市"
  },
  {
    "name": "南京林业大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "江苏大学",
    "department": "江苏省",
    "city": "镇江市"
  },
  {
    "name": "南京信息工程大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南通大学",
    "department": "江苏省",
    "city": "南通市"
  },
  {
    "name": "盐城工学院",
    "department": "江苏省",
    "city": "盐城市"
  },
  {
    "name": "南京农业大学",
    "department": "教育部",
    "city": "南京市"
  },
  {
    "name": "南京医科大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "徐州医科大学",
    "department": "江苏省",
    "city": "徐州市"
  },
  {
    "name": "南京中医药大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "中国药科大学",
    "department": "教育部",
    "city": "南京市"
  },
  {
    "name": "南京师范大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "江苏师范大学",
    "department": "江苏省",
    "city": "徐州市"
  },
  {
    "name": "淮阴师范学院",
    "department": "江苏省",
    "city": "淮安市"
  },
  {
    "name": "盐城师范学院",
    "department": "江苏省",
    "city": "盐城市"
  },
  {
    "name": "南京财经大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "江苏警官学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南京体育学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南京艺术学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "苏州科技大学",
    "department": "江苏省",
    "city": "苏州市"
  },
  {
    "name": "常熟理工学院",
    "department": "江苏省",
    "city": "苏州市"
  },
  {
    "name": "南京工业职业技术大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "淮阴工学院",
    "department": "江苏省",
    "city": "淮安市"
  },
  {
    "name": "常州工学院",
    "department": "江苏省",
    "city": "常州市"
  },
  {
    "name": "扬州大学",
    "department": "江苏省",
    "city": "扬州市"
  },
  {
    "name": "三江学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京工程学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南京审计大学",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南京晓庄学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "江苏理工学院",
    "department": "江苏省",
    "city": "常州市"
  },
  {
    "name": "江苏海洋大学",
    "department": "江苏省",
    "city": "连云港市"
  },
  {
    "name": "徐州工程学院",
    "department": "江苏省",
    "city": "徐州市"
  },
  {
    "name": "南京特殊教育师范学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "南通理工学院",
    "department": "江苏省教育厅",
    "city": "南通市"
  },
  {
    "name": "南京警察学院",
    "department": "公安部",
    "city": "南京市"
  },
  {
    "name": "东南大学成贤学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "泰州学院",
    "department": "江苏省",
    "city": "泰州市"
  },
  {
    "name": "无锡太湖学院",
    "department": "江苏省教育厅",
    "city": "无锡市"
  },
  {
    "name": "金陵科技学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "中国矿业大学徐海学院",
    "department": "江苏省教育厅",
    "city": "徐州市"
  },
  {
    "name": "南京大学金陵学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京理工大学紫金学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京航空航天大学金城学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京传媒学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京理工大学泰州科技学院",
    "department": "江苏省教育厅",
    "city": "泰州市"
  },
  {
    "name": "南京师范大学泰州学院",
    "department": "江苏省教育厅",
    "city": "泰州市"
  },
  {
    "name": "南京工业大学浦江学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "南京师范大学中北学院",
    "department": "江苏省教育厅",
    "city": "镇江市"
  },
  {
    "name": "南京医科大学康达学院",
    "department": "江苏省教育厅",
    "city": "连云港市"
  },
  {
    "name": "南京中医药大学翰林学院",
    "department": "江苏省教育厅",
    "city": "泰州市"
  },
  {
    "name": "无锡学院",
    "department": "江苏省",
    "city": "无锡市"
  },
  {
    "name": "苏州城市学院",
    "department": "江苏省",
    "city": "苏州市"
  },
  {
    "name": "苏州大学应用技术学院",
    "department": "江苏省教育厅",
    "city": "苏州市"
  },
  {
    "name": "苏州科技大学天平学院",
    "department": "江苏省教育厅",
    "city": "苏州市"
  },
  {
    "name": "江苏大学京江学院",
    "department": "江苏省教育厅",
    "city": "镇江市"
  },
  {
    "name": "扬州大学广陵学院",
    "department": "江苏省教育厅",
    "city": "扬州市"
  },
  {
    "name": "江苏师范大学科文学院",
    "department": "江苏省教育厅",
    "city": "徐州市"
  },
  {
    "name": "南京邮电大学通达学院",
    "department": "江苏省教育厅",
    "city": "扬州市"
  },
  {
    "name": "南京财经大学红山学院",
    "department": "江苏省教育厅",
    "city": "镇江市"
  },
  {
    "name": "江苏科技大学苏州理工学院",
    "department": "江苏省教育厅",
    "city": "苏州市"
  },
  {
    "name": "常州大学怀德学院",
    "department": "江苏省教育厅",
    "city": "泰州市"
  },
  {
    "name": "南通大学杏林学院",
    "department": "江苏省教育厅",
    "city": "南通市"
  },
  {
    "name": "南京审计大学金审学院",
    "department": "江苏省教育厅",
    "city": "南京市"
  },
  {
    "name": "宿迁学院",
    "department": "江苏省",
    "city": "宿迁市"
  },
  {
    "name": "江苏第二师范学院",
    "department": "江苏省",
    "city": "南京市"
  },
  {
    "name": "西交利物浦大学",
    "department": "江苏省教育厅",
    "city": "苏州市"
  },
  {
    "name": "昆山杜克大学",
    "department": "江苏省教育厅",
    "city": "昆山市"
  },
  {
    "name": "浙江大学",
    "department": "教育部",
    "city": "杭州市"
  },
  {
    "name": "杭州电子科技大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江工业大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江理工大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江海洋大学",
    "department": "浙江省",
    "city": "舟山市"
  },
  {
    "name": "浙江农林大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "温州医科大学",
    "department": "浙江省",
    "city": "温州市"
  },
  {
    "name": "浙江中医药大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江师范大学",
    "department": "浙江省",
    "city": "金华市"
  },
  {
    "name": "杭州师范大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "湖州师范学院",
    "department": "浙江省",
    "city": "湖州市"
  },
  {
    "name": "绍兴文理学院",
    "department": "浙江省",
    "city": "绍兴市"
  },
  {
    "name": "台州学院",
    "department": "浙江省",
    "city": "台州市"
  },
  {
    "name": "温州大学",
    "department": "浙江省",
    "city": "温州市"
  },
  {
    "name": "丽水学院",
    "department": "浙江省",
    "city": "丽水市"
  },
  {
    "name": "浙江工商大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "嘉兴学院",
    "department": "浙江省",
    "city": "嘉兴市"
  },
  {
    "name": "中国美术学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "中国计量大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江万里学院",
    "department": "浙江省",
    "city": "宁波市"
  },
  {
    "name": "浙江科技学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "宁波工程学院",
    "department": "浙江省",
    "city": "宁波市"
  },
  {
    "name": "浙江水利水电学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江财经大学",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江警察学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "衢州学院",
    "department": "浙江省",
    "city": "衢州市"
  },
  {
    "name": "宁波大学",
    "department": "浙江省",
    "city": "宁波市"
  },
  {
    "name": "浙江传媒学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江树人学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江越秀外国语学院",
    "department": "浙江省教育厅",
    "city": "绍兴市"
  },
  {
    "name": "宁波财经学院",
    "department": "浙江省教育厅",
    "city": "宁波市"
  },
  {
    "name": "浙大城市学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙大宁波理工学院",
    "department": "浙江省",
    "city": "宁波市"
  },
  {
    "name": "杭州医学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江广厦建设职业技术大学",
    "department": "浙江省教育厅",
    "city": "金华市"
  },
  {
    "name": "浙江工业大学之江学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江师范大学行知学院",
    "department": "浙江省教育厅",
    "city": "金华市"
  },
  {
    "name": "宁波大学科学技术学院",
    "department": "浙江省教育厅",
    "city": "宁波市"
  },
  {
    "name": "杭州电子科技大学信息工程学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江理工大学科技与艺术学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江农林大学暨阳学院",
    "department": "浙江省教育厅",
    "city": "绍兴市"
  },
  {
    "name": "温州医科大学仁济学院",
    "department": "浙江省教育厅",
    "city": "温州市"
  },
  {
    "name": "浙江中医药大学滨江学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "杭州师范大学钱江学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "湖州学院",
    "department": "浙江省",
    "city": "湖州市"
  },
  {
    "name": "绍兴文理学院元培学院",
    "department": "浙江省教育厅",
    "city": "绍兴市"
  },
  {
    "name": "温州理工学院",
    "department": "浙江省",
    "city": "温州市"
  },
  {
    "name": "浙江工商大学杭州商学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "嘉兴南湖学院",
    "department": "浙江省",
    "city": "嘉兴市"
  },
  {
    "name": "中国计量大学现代科技学院",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江财经大学东方学院",
    "department": "浙江省教育厅",
    "city": "嘉兴市"
  },
  {
    "name": "温州商学院",
    "department": "浙江省教育厅",
    "city": "温州市"
  },
  {
    "name": "同济大学浙江学院",
    "department": "浙江省教育厅",
    "city": "嘉兴市"
  },
  {
    "name": "上海财经大学浙江学院",
    "department": "浙江省教育厅",
    "city": "金华市"
  },
  {
    "name": "浙江外国语学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "浙江音乐学院",
    "department": "浙江省",
    "city": "杭州市"
  },
  {
    "name": "西湖大学",
    "department": "浙江省教育厅",
    "city": "杭州市"
  },
  {
    "name": "浙江药科职业大学",
    "department": "浙江省",
    "city": "宁波市"
  },
  {
    "name": "宁波诺丁汉大学",
    "department": "浙江省教育厅",
    "city": "宁波市"
  },
  {
    "name": "温州肯恩大学",
    "department": "浙江省教育厅",
    "city": "温州市"
  },
  {
    "name": "安徽大学",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "中国科学技术大学",
    "department": "中国科学院",
    "city": "合肥市"
  },
  {
    "name": "合肥工业大学",
    "department": "教育部",
    "city": "合肥市"
  },
  {
    "name": "安徽工业大学",
    "department": "安徽省",
    "city": "马鞍山市"
  },
  {
    "name": "安徽理工大学",
    "department": "安徽省",
    "city": "淮南市"
  },
  {
    "name": "安徽工程大学",
    "department": "安徽省",
    "city": "芜湖市"
  },
  {
    "name": "安徽农业大学",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "安徽医科大学",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "蚌埠医学院",
    "department": "安徽省",
    "city": "蚌埠市"
  },
  {
    "name": "皖南医学院",
    "department": "安徽省",
    "city": "芜湖市"
  },
  {
    "name": "安徽中医药大学",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "安徽师范大学",
    "department": "安徽省",
    "city": "芜湖市"
  },
  {
    "name": "阜阳师范大学",
    "department": "安徽省",
    "city": "阜阳市"
  },
  {
    "name": "安庆师范大学",
    "department": "安徽省",
    "city": "安庆市"
  },
  {
    "name": "淮北师范大学",
    "department": "安徽省",
    "city": "淮北市"
  },
  {
    "name": "黄山学院",
    "department": "安徽省",
    "city": "黄山市"
  },
  {
    "name": "皖西学院",
    "department": "安徽省",
    "city": "六安市"
  },
  {
    "name": "滁州学院",
    "department": "安徽省",
    "city": "滁州市"
  },
  {
    "name": "安徽财经大学",
    "department": "安徽省",
    "city": "蚌埠市"
  },
  {
    "name": "宿州学院",
    "department": "安徽省",
    "city": "宿州市"
  },
  {
    "name": "巢湖学院",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "淮南师范学院",
    "department": "安徽省",
    "city": "淮南市"
  },
  {
    "name": "铜陵学院",
    "department": "安徽省",
    "city": "铜陵市"
  },
  {
    "name": "安徽建筑大学",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "安徽科技学院",
    "department": "安徽省",
    "city": "滁州市"
  },
  {
    "name": "安徽三联学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "合肥学院",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "蚌埠学院",
    "department": "安徽省",
    "city": "蚌埠市"
  },
  {
    "name": "池州学院",
    "department": "安徽省",
    "city": "池州市"
  },
  {
    "name": "安徽新华学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "安徽文达信息工程学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "亳州学院",
    "department": "安徽省",
    "city": "亳州市"
  },
  {
    "name": "安徽外国语学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "蚌埠工商学院",
    "department": "安徽省教育厅",
    "city": "蚌埠市"
  },
  {
    "name": "安徽大学江淮学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "安徽信息工程学院",
    "department": "安徽省教育厅",
    "city": "芜湖市"
  },
  {
    "name": "马鞍山学院",
    "department": "安徽省教育厅",
    "city": "马鞍山市"
  },
  {
    "name": "合肥城市学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "合肥经济学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "安徽师范大学皖江学院",
    "department": "安徽省教育厅",
    "city": "芜湖市"
  },
  {
    "name": "安徽医科大学临床医学院",
    "department": "安徽省教育厅",
    "city": "合肥市"
  },
  {
    "name": "阜阳师范大学信息工程学院",
    "department": "安徽省教育厅",
    "city": "阜阳市"
  },
  {
    "name": "淮北理工学院",
    "department": "安徽省教育厅",
    "city": "淮北市"
  },
  {
    "name": "合肥师范学院",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "皖江工学院",
    "department": "安徽省教育厅",
    "city": "马鞍山市"
  },
  {
    "name": "安徽艺术学院",
    "department": "安徽省",
    "city": "合肥市"
  },
  {
    "name": "厦门大学",
    "department": "教育部",
    "city": "厦门市"
  },
  {
    "name": "华侨大学",
    "department": "中央统战部",
    "city": "泉州市"
  },
  {
    "name": "福州大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "福建理工大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "福建农林大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "集美大学",
    "department": "福建省",
    "city": "厦门市"
  },
  {
    "name": "福建医科大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "福建中医药大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "福建师范大学",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "闽江学院",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "武夷学院",
    "department": "福建省",
    "city": "南平市"
  },
  {
    "name": "宁德师范学院",
    "department": "福建省",
    "city": "宁德市"
  },
  {
    "name": "泉州师范学院",
    "department": "福建省",
    "city": "泉州市"
  },
  {
    "name": "闽南师范大学",
    "department": "福建省",
    "city": "漳州市"
  },
  {
    "name": "厦门理工学院",
    "department": "福建省",
    "city": "厦门市"
  },
  {
    "name": "三明学院",
    "department": "福建省",
    "city": "三明市"
  },
  {
    "name": "龙岩学院",
    "department": "福建省",
    "city": "龙岩市"
  },
  {
    "name": "福建商学院",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "福建警察学院",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "莆田学院",
    "department": "福建省",
    "city": "莆田市"
  },
  {
    "name": "仰恩大学",
    "department": "福建省教育厅",
    "city": "泉州市"
  },
  {
    "name": "厦门医学院",
    "department": "福建省",
    "city": "厦门市"
  },
  {
    "name": "厦门华厦学院",
    "department": "福建省教育厅",
    "city": "厦门市"
  },
  {
    "name": "闽南理工学院",
    "department": "福建省教育厅",
    "city": "泉州市"
  },
  {
    "name": "泉州职业技术大学",
    "department": "福建省教育厅",
    "city": "泉州市"
  },
  {
    "name": "闽南科技学院",
    "department": "福建省教育厅",
    "city": "泉州市"
  },
  {
    "name": "福州工商学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "厦门工学院",
    "department": "福建省教育厅",
    "city": "厦门市"
  },
  {
    "name": "阳光学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "厦门大学嘉庚学院",
    "department": "福建省教育厅",
    "city": "漳州市"
  },
  {
    "name": "福州大学至诚学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "集美大学诚毅学院",
    "department": "福建省教育厅",
    "city": "厦门市"
  },
  {
    "name": "福建师范大学协和学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "福州外语外贸学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "福建江夏学院",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "泉州信息工程学院",
    "department": "福建省教育厅",
    "city": "泉州市"
  },
  {
    "name": "福州理工学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "福建农林大学金山学院",
    "department": "福建省教育厅",
    "city": "福州市"
  },
  {
    "name": "福建技术师范学院",
    "department": "福建省",
    "city": "福州市"
  },
  {
    "name": "南昌大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "华东交通大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "东华理工大学",
    "department": "江西省",
    "city": "抚州市"
  },
  {
    "name": "南昌航空大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西理工大学",
    "department": "江西省",
    "city": "赣州市"
  },
  {
    "name": "景德镇陶瓷大学",
    "department": "江西省",
    "city": "景德镇市"
  },
  {
    "name": "江西农业大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西中医药大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "赣南医学院",
    "department": "江西省",
    "city": "赣州市"
  },
  {
    "name": "江西师范大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "上饶师范学院",
    "department": "江西省",
    "city": "上饶市"
  },
  {
    "name": "宜春学院",
    "department": "江西省",
    "city": "宜春市"
  },
  {
    "name": "赣南师范大学",
    "department": "江西省",
    "city": "赣州市"
  },
  {
    "name": "井冈山大学",
    "department": "江西省",
    "city": "吉安市"
  },
  {
    "name": "江西财经大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西科技学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "景德镇学院",
    "department": "江西省",
    "city": "景德镇市"
  },
  {
    "name": "萍乡学院",
    "department": "江西省",
    "city": "萍乡市"
  },
  {
    "name": "江西科技师范大学",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "南昌工程学院",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西警察学院",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "新余学院",
    "department": "江西省",
    "city": "新余市"
  },
  {
    "name": "九江学院",
    "department": "江西省",
    "city": "九江市"
  },
  {
    "name": "江西工程学院",
    "department": "江西省教育厅",
    "city": "新余市"
  },
  {
    "name": "南昌理工学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "江西应用科技学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "江西服装学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌职业大学",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌工学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌大学科学技术学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌大学共青学院",
    "department": "江西省教育厅",
    "city": "九江市"
  },
  {
    "name": "南昌交通学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "赣东学院",
    "department": "江西省",
    "city": "抚州市"
  },
  {
    "name": "南昌航空大学科技学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "赣南科技学院",
    "department": "江西省",
    "city": "赣州市"
  },
  {
    "name": "景德镇艺术职业大学",
    "department": "江西省教育厅",
    "city": "景德镇市"
  },
  {
    "name": "江西农业大学南昌商学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌医学院",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西师范大学科学技术学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "赣南师范大学科技学院",
    "department": "江西省教育厅",
    "city": "赣州市"
  },
  {
    "name": "南昌应用技术师范学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "江西财经大学现代经济管理学院",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "豫章师范学院",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "江西软件职业技术大学",
    "department": "江西省教育厅",
    "city": "南昌市"
  },
  {
    "name": "南昌师范学院",
    "department": "江西省",
    "city": "南昌市"
  },
  {
    "name": "山东大学",
    "department": "教育部",
    "city": "济南市"
  },
  {
    "name": "中国海洋大学",
    "department": "教育部",
    "city": "青岛市"
  },
  {
    "name": "山东科技大学",
    "department": "山东省",
    "city": "青岛市"
  },
  {
    "name": "中国石油大学（华东）",
    "department": "教育部",
    "city": "青岛市"
  },
  {
    "name": "青岛科技大学",
    "department": "山东省",
    "city": "青岛市"
  },
  {
    "name": "济南大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "青岛理工大学",
    "department": "山东省",
    "city": "青岛市"
  },
  {
    "name": "山东建筑大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "齐鲁工业大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东理工大学",
    "department": "山东省",
    "city": "淄博市"
  },
  {
    "name": "山东农业大学",
    "department": "山东省",
    "city": "泰安市"
  },
  {
    "name": "青岛农业大学",
    "department": "山东省",
    "city": "青岛市"
  },
  {
    "name": "潍坊医学院",
    "department": "山东省",
    "city": "潍坊市"
  },
  {
    "name": "山东第一医科大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "滨州医学院",
    "department": "山东省",
    "city": "滨州市"
  },
  {
    "name": "山东中医药大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "济宁医学院",
    "department": "山东省",
    "city": "济宁市"
  },
  {
    "name": "山东师范大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "曲阜师范大学",
    "department": "山东省",
    "city": "济宁市"
  },
  {
    "name": "聊城大学",
    "department": "山东省",
    "city": "聊城市"
  },
  {
    "name": "德州学院",
    "department": "山东省",
    "city": "德州市"
  },
  {
    "name": "滨州学院",
    "department": "山东省",
    "city": "滨州市"
  },
  {
    "name": "鲁东大学",
    "department": "山东省",
    "city": "烟台市"
  },
  {
    "name": "临沂大学",
    "department": "山东省",
    "city": "临沂市"
  },
  {
    "name": "泰山学院",
    "department": "山东省",
    "city": "泰安市"
  },
  {
    "name": "济宁学院",
    "department": "山东省",
    "city": "济宁市"
  },
  {
    "name": "菏泽学院",
    "department": "山东省",
    "city": "菏泽市"
  },
  {
    "name": "山东财经大学",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东体育学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东艺术学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "齐鲁医药学院",
    "department": "山东省教育厅",
    "city": "淄博市"
  },
  {
    "name": "青岛滨海学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "枣庄学院",
    "department": "山东省",
    "city": "枣庄市"
  },
  {
    "name": "山东工艺美术学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "青岛大学",
    "department": "山东省",
    "city": "青岛市"
  },
  {
    "name": "烟台大学",
    "department": "山东省",
    "city": "烟台市"
  },
  {
    "name": "潍坊学院",
    "department": "山东省",
    "city": "潍坊市"
  },
  {
    "name": "山东警察学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东交通学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东工商学院",
    "department": "山东省",
    "city": "烟台市"
  },
  {
    "name": "山东女子学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "烟台南山学院",
    "department": "山东省教育厅",
    "city": "烟台市"
  },
  {
    "name": "潍坊科技学院",
    "department": "山东省教育厅",
    "city": "潍坊市"
  },
  {
    "name": "山东英才学院",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "青岛恒星科技学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "青岛黄海学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "山东现代学院",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "山东协和学院",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "山东工程职业技术大学",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "烟台理工学院",
    "department": "山东省教育厅",
    "city": "烟台市"
  },
  {
    "name": "聊城大学东昌学院",
    "department": "山东省教育厅",
    "city": "聊城市"
  },
  {
    "name": "青岛城市学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "潍坊理工学院",
    "department": "山东省教育厅",
    "city": "潍坊市"
  },
  {
    "name": "山东财经大学燕山学院",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "山东石油化工学院",
    "department": "山东省",
    "city": "东营市"
  },
  {
    "name": "山东外国语职业技术大学",
    "department": "山东省教育厅",
    "city": "日照市"
  },
  {
    "name": "泰山科技学院",
    "department": "山东省教育厅",
    "city": "泰安市"
  },
  {
    "name": "山东华宇工学院",
    "department": "山东省教育厅",
    "city": "德州市"
  },
  {
    "name": "山东外事职业大学",
    "department": "山东省教育厅",
    "city": "威海市"
  },
  {
    "name": "青岛工学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "青岛农业大学海都学院",
    "department": "山东省教育厅",
    "city": "烟台市"
  },
  {
    "name": "齐鲁理工学院",
    "department": "山东省教育厅",
    "city": "济南市"
  },
  {
    "name": "山东财经大学东方学院",
    "department": "山东省教育厅",
    "city": "泰安市"
  },
  {
    "name": "烟台科技学院",
    "department": "山东省教育厅",
    "city": "烟台市"
  },
  {
    "name": "山东政法学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "齐鲁师范学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东青年政治学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "青岛电影学院",
    "department": "山东省教育厅",
    "city": "青岛市"
  },
  {
    "name": "山东管理学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "山东农业工程学院",
    "department": "山东省",
    "city": "济南市"
  },
  {
    "name": "华北水利水电大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "郑州大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南理工大学",
    "department": "河南省",
    "city": "焦作市"
  },
  {
    "name": "郑州轻工业大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南工业大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南科技大学",
    "department": "河南省",
    "city": "洛阳市"
  },
  {
    "name": "中原工学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南农业大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南科技学院",
    "department": "河南省",
    "city": "新乡市"
  },
  {
    "name": "河南牧业经济学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南中医药大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "新乡医学院",
    "department": "河南省",
    "city": "新乡市"
  },
  {
    "name": "河南大学",
    "department": "河南省",
    "city": "开封市"
  },
  {
    "name": "河南师范大学",
    "department": "河南省",
    "city": "新乡市"
  },
  {
    "name": "信阳师范大学",
    "department": "河南省",
    "city": "信阳市"
  },
  {
    "name": "周口师范学院",
    "department": "河南省",
    "city": "周口市"
  },
  {
    "name": "安阳师范学院",
    "department": "河南省",
    "city": "安阳市"
  },
  {
    "name": "许昌学院",
    "department": "河南省",
    "city": "许昌市"
  },
  {
    "name": "南阳师范学院",
    "department": "河南省",
    "city": "南阳市"
  },
  {
    "name": "洛阳师范学院",
    "department": "河南省",
    "city": "洛阳市"
  },
  {
    "name": "商丘师范学院",
    "department": "河南省",
    "city": "商丘市"
  },
  {
    "name": "河南财经政法大学",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "郑州航空工业管理学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "黄淮学院",
    "department": "河南省",
    "city": "驻马店市"
  },
  {
    "name": "平顶山学院",
    "department": "河南省",
    "city": "平顶山市"
  },
  {
    "name": "郑州工程技术学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "洛阳理工学院",
    "department": "河南省",
    "city": "洛阳市"
  },
  {
    "name": "新乡学院",
    "department": "河南省",
    "city": "新乡市"
  },
  {
    "name": "信阳农林学院",
    "department": "河南省",
    "city": "信阳市"
  },
  {
    "name": "河南工学院",
    "department": "河南省",
    "city": "新乡市"
  },
  {
    "name": "安阳工学院",
    "department": "河南省",
    "city": "安阳市"
  },
  {
    "name": "河南工程学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "河南财政金融学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "南阳理工学院",
    "department": "河南省",
    "city": "南阳市"
  },
  {
    "name": "河南城建学院",
    "department": "河南省",
    "city": "平顶山市"
  },
  {
    "name": "河南警察学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "黄河科技学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州警察学院",
    "department": "公安部",
    "city": "郑州市"
  },
  {
    "name": "郑州科技学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州工业应用技术学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州师范学院",
    "department": "河南省",
    "city": "郑州市"
  },
  {
    "name": "郑州财经学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "黄河交通学院",
    "department": "河南省教育厅",
    "city": "焦作市"
  },
  {
    "name": "商丘工学院",
    "department": "河南省教育厅",
    "city": "商丘市"
  },
  {
    "name": "河南开封科技传媒学院",
    "department": "河南省教育厅",
    "city": "开封市"
  },
  {
    "name": "中原科技学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "信阳学院",
    "department": "河南省教育厅",
    "city": "信阳市"
  },
  {
    "name": "安阳学院",
    "department": "河南省教育厅",
    "city": "安阳市"
  },
  {
    "name": "新乡医学院三全学院",
    "department": "河南省教育厅",
    "city": "新乡市"
  },
  {
    "name": "新乡工程学院",
    "department": "河南省教育厅",
    "city": "新乡市"
  },
  {
    "name": "郑州工商学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州经贸学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "商丘学院",
    "department": "河南省教育厅",
    "city": "商丘市"
  },
  {
    "name": "郑州商学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "河南科技职业大学",
    "department": "河南省教育厅",
    "city": "周口市"
  },
  {
    "name": "郑州升达经贸管理学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州西亚斯学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "郑州美术学院",
    "department": "河南省教育厅",
    "city": "郑州市"
  },
  {
    "name": "武汉大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "华中科技大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "武汉科技大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "长江大学",
    "department": "湖北省",
    "city": "荆州市"
  },
  {
    "name": "武汉工程大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "中国地质大学（武汉）",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "武汉纺织大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "武汉轻工大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "武汉理工大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "湖北工业大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "华中农业大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "湖北中医药大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "华中师范大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "湖北大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "湖北师范大学",
    "department": "湖北省",
    "city": "黄石市"
  },
  {
    "name": "黄冈师范学院",
    "department": "湖北省",
    "city": "黄冈市"
  },
  {
    "name": "湖北民族大学",
    "department": "湖北省",
    "city": "恩施土家族苗族自治州"
  },
  {
    "name": "汉江师范学院",
    "department": "湖北省",
    "city": "十堰市"
  },
  {
    "name": "湖北文理学院",
    "department": "湖北省",
    "city": "襄阳市"
  },
  {
    "name": "中南财经政法大学",
    "department": "教育部",
    "city": "武汉市"
  },
  {
    "name": "武汉体育学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "湖北美术学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "中南民族大学",
    "department": "国家民委",
    "city": "武汉市"
  },
  {
    "name": "湖北汽车工业学院",
    "department": "湖北省",
    "city": "十堰市"
  },
  {
    "name": "湖北工程学院",
    "department": "湖北省",
    "city": "孝感市"
  },
  {
    "name": "湖北理工学院",
    "department": "湖北省",
    "city": "黄石市"
  },
  {
    "name": "湖北科技学院",
    "department": "湖北省",
    "city": "咸宁市"
  },
  {
    "name": "湖北医药学院",
    "department": "湖北省",
    "city": "十堰市"
  },
  {
    "name": "江汉大学",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "三峡大学",
    "department": "湖北省",
    "city": "宜昌市"
  },
  {
    "name": "湖北警官学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "荆楚理工学院",
    "department": "湖北省",
    "city": "荆门市"
  },
  {
    "name": "武汉音乐学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "湖北经济学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "武汉商学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "武汉东湖学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "汉口学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武昌首义学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武昌理工学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉生物工程学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉晴川学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "湖北大学知行学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉城市学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "三峡大学科技学院",
    "department": "湖北省教育厅",
    "city": "宜昌市"
  },
  {
    "name": "武汉文理学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "湖北工业大学工程技术学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉工程大学邮电与信息工程学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉纺织大学外经贸学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武昌工学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉工商学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "荆州学院",
    "department": "湖北省教育厅",
    "city": "荆州市"
  },
  {
    "name": "长江大学文理学院",
    "department": "湖北省教育厅",
    "city": "荆州市"
  },
  {
    "name": "湖北商贸学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "湖北汽车工业学院科技学院",
    "department": "湖北省教育厅",
    "city": "十堰市"
  },
  {
    "name": "湖北医药学院药护学院",
    "department": "湖北省教育厅",
    "city": "十堰市"
  },
  {
    "name": "湖北恩施学院",
    "department": "湖北省教育厅",
    "city": "恩施土家族苗族自治州"
  },
  {
    "name": "湖北经济学院法商学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉体育学院体育科技学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "湖北师范大学文理学院",
    "department": "湖北省教育厅",
    "city": "黄石市"
  },
  {
    "name": "湖北文理学院理工学院",
    "department": "湖北省教育厅",
    "city": "襄阳市"
  },
  {
    "name": "湖北工程学院新技术学院",
    "department": "湖北省教育厅",
    "city": "孝感市"
  },
  {
    "name": "文华学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉工程科技学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉华夏理工学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉传媒学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "武汉设计工程学院",
    "department": "湖北省教育厅",
    "city": "武汉市"
  },
  {
    "name": "湖北第二师范学院",
    "department": "湖北省",
    "city": "武汉市"
  },
  {
    "name": "湘潭大学",
    "department": "湖南省",
    "city": "湘潭市"
  },
  {
    "name": "吉首大学",
    "department": "湖南省",
    "city": "湘西土家族苗族自治州"
  },
  {
    "name": "湖南大学",
    "department": "教育部",
    "city": "长沙市"
  },
  {
    "name": "中南大学",
    "department": "教育部",
    "city": "长沙市"
  },
  {
    "name": "湖南科技大学",
    "department": "湖南省",
    "city": "湘潭市"
  },
  {
    "name": "长沙理工大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南农业大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "中南林业科技大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南中医药大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南师范大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南理工学院",
    "department": "湖南省",
    "city": "岳阳市"
  },
  {
    "name": "湘南学院",
    "department": "湖南省",
    "city": "郴州市"
  },
  {
    "name": "衡阳师范学院",
    "department": "湖南省",
    "city": "衡阳市"
  },
  {
    "name": "邵阳学院",
    "department": "湖南省",
    "city": "邵阳市"
  },
  {
    "name": "怀化学院",
    "department": "湖南省",
    "city": "怀化市"
  },
  {
    "name": "湖南文理学院",
    "department": "湖南省",
    "city": "常德市"
  },
  {
    "name": "湖南科技学院",
    "department": "湖南省",
    "city": "永州市"
  },
  {
    "name": "湖南人文科技学院",
    "department": "湖南省",
    "city": "娄底市"
  },
  {
    "name": "湖南工商大学",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "南华大学",
    "department": "湖南省",
    "city": "衡阳市"
  },
  {
    "name": "长沙医学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "长沙学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南工程学院",
    "department": "湖南省",
    "city": "湘潭市"
  },
  {
    "name": "湖南城市学院",
    "department": "湖南省",
    "city": "益阳市"
  },
  {
    "name": "湖南工学院",
    "department": "湖南省",
    "city": "衡阳市"
  },
  {
    "name": "湖南财政经济学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南警察学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南工业大学",
    "department": "湖南省",
    "city": "株洲市"
  },
  {
    "name": "湖南女子学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南第一师范学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南医药学院",
    "department": "湖南省",
    "city": "怀化市"
  },
  {
    "name": "湖南涉外经济学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "湘潭大学兴湘学院",
    "department": "湖南省教育厅",
    "city": "湘潭市"
  },
  {
    "name": "湖南工业大学科技学院",
    "department": "湖南省教育厅",
    "city": "株洲市"
  },
  {
    "name": "湖南科技大学潇湘学院",
    "department": "湖南省教育厅",
    "city": "湘潭市"
  },
  {
    "name": "南华大学船山学院",
    "department": "湖南省教育厅",
    "city": "衡阳市"
  },
  {
    "name": "湘潭理工学院",
    "department": "湖南省教育厅",
    "city": "湘潭市"
  },
  {
    "name": "湖南师范大学树达学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "湖南农业大学东方科技学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "中南林业科技大学涉外学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "湖南文理学院芙蓉学院",
    "department": "湖南省教育厅",
    "city": "常德市"
  },
  {
    "name": "湖南理工学院南湖学院",
    "department": "湖南省教育厅",
    "city": "岳阳市"
  },
  {
    "name": "衡阳师范学院南岳学院",
    "department": "湖南省教育厅",
    "city": "衡阳市"
  },
  {
    "name": "湖南工程学院应用技术学院",
    "department": "湖南省教育厅",
    "city": "湘潭市"
  },
  {
    "name": "湖南中医药大学湘杏学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "吉首大学张家界学院",
    "department": "湖南省教育厅",
    "city": "张家界市"
  },
  {
    "name": "长沙理工大学城南学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "长沙师范学院",
    "department": "湖南省",
    "city": "长沙市"
  },
  {
    "name": "湖南应用技术学院",
    "department": "湖南省教育厅",
    "city": "常德市"
  },
  {
    "name": "湖南信息学院",
    "department": "湖南省教育厅",
    "city": "长沙市"
  },
  {
    "name": "湖南交通工程学院",
    "department": "湖南省教育厅",
    "city": "衡阳市"
  },
  {
    "name": "湖南软件职业技术大学",
    "department": "湖南省教育厅",
    "city": "湘潭市"
  },
  {
    "name": "中山大学",
    "department": "教育部",
    "city": "广州市"
  },
  {
    "name": "暨南大学",
    "department": "中央统战部",
    "city": "广州市"
  },
  {
    "name": "汕头大学",
    "department": "广东省",
    "city": "汕头市"
  },
  {
    "name": "华南理工大学",
    "department": "教育部",
    "city": "广州市"
  },
  {
    "name": "华南农业大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东海洋大学",
    "department": "广东省",
    "city": "湛江市"
  },
  {
    "name": "广州医科大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东医科大学",
    "department": "广东省",
    "city": "湛江市"
  },
  {
    "name": "广州中医药大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东药科大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "华南师范大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "韶关学院",
    "department": "广东省",
    "city": "韶关市"
  },
  {
    "name": "惠州学院",
    "department": "广东省",
    "city": "惠州市"
  },
  {
    "name": "韩山师范学院",
    "department": "广东省",
    "city": "潮州市"
  },
  {
    "name": "岭南师范学院",
    "department": "广东省",
    "city": "湛江市"
  },
  {
    "name": "肇庆学院",
    "department": "广东省",
    "city": "肇庆市"
  },
  {
    "name": "嘉应学院",
    "department": "广东省",
    "city": "梅州市"
  },
  {
    "name": "广州体育学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广州美术学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "星海音乐学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东技术师范大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "深圳大学",
    "department": "广东省",
    "city": "深圳市"
  },
  {
    "name": "广东财经大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东白云学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广州航海学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东警官学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "仲恺农业工程学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "五邑大学",
    "department": "广东省",
    "city": "江门市"
  },
  {
    "name": "广东金融学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "电子科技大学中山学院",
    "department": "广东省教育厅",
    "city": "中山市"
  },
  {
    "name": "广东石油化工学院",
    "department": "广东省",
    "city": "茂名市"
  },
  {
    "name": "东莞理工学院",
    "department": "广东省",
    "city": "东莞市"
  },
  {
    "name": "广东工业大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东外语外贸大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "佛山科学技术学院",
    "department": "广东省",
    "city": "佛山市"
  },
  {
    "name": "广东培正学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "南方医科大学",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "广东东软学院",
    "department": "广东省教育厅",
    "city": "佛山市"
  },
  {
    "name": "广州城市理工学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州软件学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州南方学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广东外语外贸大学南国商学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州华商学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "湛江科技学院",
    "department": "广东省教育厅",
    "city": "湛江市"
  },
  {
    "name": "华南农业大学珠江学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州理工学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "北京师范大学珠海分校",
    "department": "广东省教育厅",
    "city": "珠海市"
  },
  {
    "name": "广州华立学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州应用科技学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州商学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "北京理工大学珠海学院",
    "department": "广东省教育厅",
    "city": "珠海市"
  },
  {
    "name": "珠海科技学院",
    "department": "广东省教育厅",
    "city": "珠海市"
  },
  {
    "name": "广州工商学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广州科技职业技术大学",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广东科技学院",
    "department": "广东省教育厅",
    "city": "东莞市"
  },
  {
    "name": "广东理工学院",
    "department": "广东省教育厅",
    "city": "肇庆市"
  },
  {
    "name": "广东工商职业技术大学",
    "department": "广东省教育厅",
    "city": "肇庆市"
  },
  {
    "name": "东莞城市学院",
    "department": "广东省教育厅",
    "city": "东莞市"
  },
  {
    "name": "广州新华学院",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "广东第二师范学院",
    "department": "广东省",
    "city": "广州市"
  },
  {
    "name": "南方科技大学",
    "department": "广东省",
    "city": "深圳市"
  },
  {
    "name": "深圳技术大学",
    "department": "广东省",
    "city": "深圳市"
  },
  {
    "name": "北京师范大学-香港浸会大学联合国际学院",
    "department": "广东省教育厅",
    "city": "珠海市"
  },
  {
    "name": "香港科技大学（广州）",
    "department": "广东省教育厅",
    "city": "广州市"
  },
  {
    "name": "香港中文大学（深圳）",
    "department": "广东省教育厅",
    "city": "深圳市"
  },
  {
    "name": "深圳北理莫斯科大学",
    "department": "广东省教育厅",
    "city": "深圳市"
  },
  {
    "name": "广东以色列理工学院",
    "department": "广东省教育厅",
    "city": "汕头市"
  },
  {
    "name": "深圳职业技术大学",
    "department": "广东省",
    "city": "深圳市"
  },
  {
    "name": "广西大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "广西科技大学",
    "department": "广西壮族自治区",
    "city": "柳州市"
  },
  {
    "name": "桂林电子科技大学",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "桂林理工大学",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "广西医科大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "右江民族医学院",
    "department": "广西壮族自治区",
    "city": "百色市"
  },
  {
    "name": "广西中医药大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "桂林医学院",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "广西师范大学",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "南宁师范大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "广西民族师范学院",
    "department": "广西壮族自治区",
    "city": "崇左市"
  },
  {
    "name": "河池学院",
    "department": "广西壮族自治区",
    "city": "河池市"
  },
  {
    "name": "玉林师范学院",
    "department": "广西壮族自治区",
    "city": "玉林市"
  },
  {
    "name": "广西艺术学院",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "广西民族大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "百色学院",
    "department": "广西壮族自治区",
    "city": "百色市"
  },
  {
    "name": "梧州学院",
    "department": "广西壮族自治区",
    "city": "梧州市"
  },
  {
    "name": "广西科技师范学院",
    "department": "广西壮族自治区",
    "city": "来宾市"
  },
  {
    "name": "广西财经学院",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "南宁学院",
    "department": "广西壮族自治区教育厅",
    "city": "南宁市"
  },
  {
    "name": "北部湾大学",
    "department": "广西壮族自治区",
    "city": "钦州市"
  },
  {
    "name": "桂林航天工业学院",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "桂林旅游学院",
    "department": "广西壮族自治区",
    "city": "桂林市"
  },
  {
    "name": "贺州学院",
    "department": "广西壮族自治区",
    "city": "贺州市"
  },
  {
    "name": "广西警察学院",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "北海艺术设计学院",
    "department": "广西壮族自治区教育厅",
    "city": "北海市"
  },
  {
    "name": "广西农业职业技术大学",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "柳州工学院",
    "department": "广西壮族自治区教育厅",
    "city": "柳州市"
  },
  {
    "name": "广西民族大学相思湖学院",
    "department": "广西壮族自治区教育厅",
    "city": "南宁市"
  },
  {
    "name": "桂林学院",
    "department": "广西壮族自治区教育厅",
    "city": "桂林市"
  },
  {
    "name": "南宁师范大学师园学院",
    "department": "广西壮族自治区教育厅",
    "city": "南宁市"
  },
  {
    "name": "广西中医药大学赛恩斯新医药学院",
    "department": "广西壮族自治区教育厅",
    "city": "南宁市"
  },
  {
    "name": "桂林信息科技学院",
    "department": "广西壮族自治区教育厅",
    "city": "桂林市"
  },
  {
    "name": "南宁理工学院",
    "department": "广西壮族自治区教育厅",
    "city": "桂林市"
  },
  {
    "name": "广西外国语学院",
    "department": "广西壮族自治区教育厅",
    "city": "南宁市"
  },
  {
    "name": "北京航空航天大学北海学院",
    "department": "广西壮族自治区教育厅",
    "city": "北海市"
  },
  {
    "name": "广西城市职业大学",
    "department": "广西壮族自治区教育厅",
    "city": "崇左市"
  },
  {
    "name": "广西职业师范学院",
    "department": "广西壮族自治区",
    "city": "南宁市"
  },
  {
    "name": "海南大学",
    "department": "海南省",
    "city": "海口市"
  },
  {
    "name": "海南热带海洋学院",
    "department": "海南省",
    "city": "三亚市"
  },
  {
    "name": "海南师范大学",
    "department": "海南省",
    "city": "海口市"
  },
  {
    "name": "海南医学院",
    "department": "海南省",
    "city": "海口市"
  },
  {
    "name": "海口经济学院",
    "department": "海南省教育厅",
    "city": "海口市"
  },
  {
    "name": "琼台师范学院",
    "department": "海南省",
    "city": "海口市"
  },
  {
    "name": "三亚学院",
    "department": "海南省教育厅",
    "city": "三亚市"
  },
  {
    "name": "海南科技职业大学",
    "department": "海南省教育厅",
    "city": "海口市"
  },
  {
    "name": "海南比勒费尔德应用科学大学",
    "department": "海南省教育厅",
    "city": "陵水黎族自治县"
  },
  {
    "name": "重庆大学",
    "department": "教育部",
    "city": "重庆市"
  },
  {
    "name": "重庆邮电大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆交通大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆医科大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "西南大学",
    "department": "教育部",
    "city": "重庆市"
  },
  {
    "name": "重庆师范大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆文理学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆三峡学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "长江师范学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "四川外国语大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "西南政法大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "四川美术学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆科技学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆理工大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆工商大学",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆机电职业技术大学",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆工程学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆城市科技学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆警察学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆人文科技学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆外语外事学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆对外经贸学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆财经学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆工商大学派斯学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆移通学院",
    "department": "重庆市教委",
    "city": "重庆市"
  },
  {
    "name": "重庆第二师范学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "重庆中医药学院",
    "department": "重庆市",
    "city": "重庆市"
  },
  {
    "name": "四川大学",
    "department": "教育部",
    "city": "成都市"
  },
  {
    "name": "西南交通大学",
    "department": "教育部",
    "city": "成都市"
  },
  {
    "name": "电子科技大学",
    "department": "教育部",
    "city": "成都市"
  },
  {
    "name": "西南石油大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "成都理工大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "西南科技大学",
    "department": "四川省",
    "city": "绵阳市"
  },
  {
    "name": "成都信息工程大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "四川轻化工大学",
    "department": "四川省",
    "city": "自贡市"
  },
  {
    "name": "西华大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "中国民用航空飞行学院",
    "department": "交通运输部（中国民用航空局）",
    "city": "德阳市"
  },
  {
    "name": "四川农业大学",
    "department": "四川省",
    "city": "雅安市"
  },
  {
    "name": "西昌学院",
    "department": "四川省",
    "city": "凉山彝族自治州"
  },
  {
    "name": "西南医科大学",
    "department": "四川省",
    "city": "泸州市"
  },
  {
    "name": "成都中医药大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "川北医学院",
    "department": "四川省",
    "city": "南充市"
  },
  {
    "name": "四川师范大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "西华师范大学",
    "department": "四川省",
    "city": "南充市"
  },
  {
    "name": "绵阳师范学院",
    "department": "四川省",
    "city": "绵阳市"
  },
  {
    "name": "内江师范学院",
    "department": "四川省",
    "city": "内江市"
  },
  {
    "name": "宜宾学院",
    "department": "四川省",
    "city": "宜宾市"
  },
  {
    "name": "四川文理学院",
    "department": "四川省",
    "city": "达州市"
  },
  {
    "name": "阿坝师范学院",
    "department": "四川省",
    "city": "阿坝藏族羌族自治州"
  },
  {
    "name": "乐山师范学院",
    "department": "四川省",
    "city": "乐山市"
  },
  {
    "name": "西南财经大学",
    "department": "教育部",
    "city": "成都市"
  },
  {
    "name": "成都体育学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "四川音乐学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "西南民族大学",
    "department": "国家民委",
    "city": "成都市"
  },
  {
    "name": "成都大学",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "成都工业学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "攀枝花学院",
    "department": "四川省",
    "city": "攀枝花市"
  },
  {
    "name": "四川旅游学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "四川民族学院",
    "department": "四川省",
    "city": "甘孜藏族自治州"
  },
  {
    "name": "四川警察学院",
    "department": "四川省",
    "city": "泸州市"
  },
  {
    "name": "成都东软学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "成都艺术职业大学",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "电子科技大学成都学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "成都理工大学工程技术学院",
    "department": "四川省教育厅",
    "city": "乐山市"
  },
  {
    "name": "四川传媒学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "成都银杏酒店管理学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "成都文理学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "四川工商学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "四川外国语大学成都学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "成都医学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "四川工业科技学院",
    "department": "四川省教育厅",
    "city": "德阳市"
  },
  {
    "name": "成都锦城学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "西南财经大学天府学院",
    "department": "四川省教育厅",
    "city": "绵阳市"
  },
  {
    "name": "四川大学锦江学院",
    "department": "四川省教育厅",
    "city": "眉山市"
  },
  {
    "name": "四川文化艺术学院",
    "department": "四川省教育厅",
    "city": "绵阳市"
  },
  {
    "name": "绵阳城市学院",
    "department": "四川省教育厅",
    "city": "绵阳市"
  },
  {
    "name": "西南交通大学希望学院",
    "department": "四川省教育厅",
    "city": "南充市"
  },
  {
    "name": "成都师范学院",
    "department": "四川省",
    "city": "成都市"
  },
  {
    "name": "四川电影电视学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "吉利学院",
    "department": "四川省教育厅",
    "city": "成都市"
  },
  {
    "name": "贵州大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州医科大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "遵义医科大学",
    "department": "贵州省",
    "city": "遵义市"
  },
  {
    "name": "贵州中医药大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州师范大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "遵义师范学院",
    "department": "贵州省",
    "city": "遵义市"
  },
  {
    "name": "铜仁学院",
    "department": "贵州省",
    "city": "铜仁市"
  },
  {
    "name": "兴义民族师范学院",
    "department": "贵州省",
    "city": "黔西南布依族苗族自治州"
  },
  {
    "name": "安顺学院",
    "department": "贵州省",
    "city": "安顺市"
  },
  {
    "name": "贵州工程应用技术学院",
    "department": "贵州省",
    "city": "毕节市"
  },
  {
    "name": "凯里学院",
    "department": "贵州省",
    "city": "黔东南苗族侗族自治州"
  },
  {
    "name": "黔南民族师范学院",
    "department": "贵州省",
    "city": "黔南布依族苗族自治州"
  },
  {
    "name": "贵州财经大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州民族大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵阳学院",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "六盘水师范学院",
    "department": "贵州省",
    "city": "六盘水市"
  },
  {
    "name": "贵州商学院",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州警察学院",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州中医药大学时珍学院",
    "department": "贵州省教育厅",
    "city": "贵阳市"
  },
  {
    "name": "贵州黔南经济学院",
    "department": "贵州省教育厅",
    "city": "黔南布依族苗族自治州"
  },
  {
    "name": "贵州黔南科技学院",
    "department": "贵州省教育厅",
    "city": "黔南布依族苗族自治州"
  },
  {
    "name": "贵阳信息科技学院",
    "department": "贵州省教育厅",
    "city": "贵阳市"
  },
  {
    "name": "贵阳人文科技学院",
    "department": "贵州省教育厅",
    "city": "贵阳市"
  },
  {
    "name": "贵阳康养职业大学",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "遵义医科大学医学与科技学院",
    "department": "贵州省教育厅",
    "city": "遵义市"
  },
  {
    "name": "贵州医科大学神奇民族医药学院",
    "department": "贵州省教育厅",
    "city": "贵阳市"
  },
  {
    "name": "贵州师范学院",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "贵州理工学院",
    "department": "贵州省",
    "city": "贵阳市"
  },
  {
    "name": "茅台学院",
    "department": "贵州省教育厅",
    "city": "遵义市"
  },
  {
    "name": "云南大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "昆明理工大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "云南农业大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "西南林业大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "昆明医科大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "大理大学",
    "department": "云南省",
    "city": "大理白族自治州"
  },
  {
    "name": "云南中医药大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "云南师范大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "昭通学院",
    "department": "云南省",
    "city": "昭通市"
  },
  {
    "name": "曲靖师范学院",
    "department": "云南省",
    "city": "曲靖市"
  },
  {
    "name": "普洱学院",
    "department": "云南省",
    "city": "普洱市"
  },
  {
    "name": "保山学院",
    "department": "云南省",
    "city": "保山市"
  },
  {
    "name": "红河学院",
    "department": "云南省",
    "city": "红河哈尼族彝族自治州"
  },
  {
    "name": "云南财经大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "云南艺术学院",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "云南民族大学",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "玉溪师范学院",
    "department": "云南省",
    "city": "玉溪市"
  },
  {
    "name": "楚雄师范学院",
    "department": "云南省",
    "city": "楚雄彝族自治州"
  },
  {
    "name": "云南警官学院",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "昆明学院",
    "department": "云南省",
    "city": "昆明市"
  },
  {
    "name": "文山学院",
    "department": "云南省",
    "city": "文山壮族苗族自治州"
  },
  {
    "name": "云南经济管理学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "云南大学滇池学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "丽江文化旅游学院",
    "department": "云南省教育厅",
    "city": "丽江市"
  },
  {
    "name": "昆明理工大学津桥学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "昆明城市学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "昆明文理学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "昆明医科大学海源学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "云南艺术学院文华学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "云南工商学院",
    "department": "云南省教育厅",
    "city": "昆明市"
  },
  {
    "name": "滇西科技师范学院",
    "department": "云南省",
    "city": "临沧市"
  },
  {
    "name": "滇西应用技术大学",
    "department": "云南省",
    "city": "大理白族自治州"
  },
  {
    "name": "西藏农牧学院",
    "department": "西藏自治区",
    "city": "林芝市"
  },
  {
    "name": "西藏大学",
    "department": "西藏自治区",
    "city": "拉萨市"
  },
  {
    "name": "西藏民族大学",
    "department": "西藏自治区",
    "city": "咸阳市"
  },
  {
    "name": "西藏藏医药大学",
    "department": "西藏自治区",
    "city": "拉萨市"
  },
  {
    "name": "西北大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安交通大学",
    "department": "教育部",
    "city": "西安市"
  },
  {
    "name": "西北工业大学",
    "department": "工业和信息化部",
    "city": "西安市"
  },
  {
    "name": "西安理工大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安电子科技大学",
    "department": "教育部",
    "city": "西安市"
  },
  {
    "name": "西安工业大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安建筑科技大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安科技大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安石油大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "陕西科技大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安工程大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "长安大学",
    "department": "教育部",
    "city": "西安市"
  },
  {
    "name": "西北农林科技大学",
    "department": "教育部",
    "city": "咸阳市"
  },
  {
    "name": "陕西中医药大学",
    "department": "陕西省",
    "city": "咸阳市"
  },
  {
    "name": "陕西师范大学",
    "department": "教育部",
    "city": "西安市"
  },
  {
    "name": "延安大学",
    "department": "陕西省",
    "city": "延安市"
  },
  {
    "name": "陕西理工大学",
    "department": "陕西省",
    "city": "汉中市"
  },
  {
    "name": "宝鸡文理学院",
    "department": "陕西省",
    "city": "宝鸡市"
  },
  {
    "name": "咸阳师范学院",
    "department": "陕西省",
    "city": "咸阳市"
  },
  {
    "name": "渭南师范学院",
    "department": "陕西省",
    "city": "渭南市"
  },
  {
    "name": "西安外国语大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西北政法大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安体育学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安音乐学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安美术学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安文理学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "榆林学院",
    "department": "陕西省",
    "city": "榆林市"
  },
  {
    "name": "商洛学院",
    "department": "陕西省",
    "city": "商洛市"
  },
  {
    "name": "安康学院",
    "department": "陕西省",
    "city": "安康市"
  },
  {
    "name": "西安培华学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安财经大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安邮电大学",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安航空学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安医学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "西安欧亚学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安外事学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安翻译学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西京学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安思源学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "陕西国际商贸学院",
    "department": "陕西省教育厅",
    "city": "咸阳市"
  },
  {
    "name": "陕西服装工程学院",
    "department": "陕西省教育厅",
    "city": "咸阳市"
  },
  {
    "name": "西安交通工程学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安交通大学城市学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西北大学现代学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安建筑科技大学华清学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安财经大学行知学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "陕西科技大学镐京学院",
    "department": "陕西省教育厅",
    "city": "咸阳市"
  },
  {
    "name": "西安工商学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "延安大学西安创新学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安电子科技大学长安学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安汽车职业大学",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安明德理工学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安信息职业大学",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "长安大学兴华学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安理工大学高科学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "西安科技大学高新学院",
    "department": "陕西省教育厅",
    "city": "西安市"
  },
  {
    "name": "陕西学前师范学院",
    "department": "陕西省",
    "city": "西安市"
  },
  {
    "name": "兰州大学",
    "department": "教育部",
    "city": "兰州市"
  },
  {
    "name": "兰州理工大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "兰州交通大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "甘肃农业大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "甘肃中医药大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "西北师范大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "兰州城市学院",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "陇东学院",
    "department": "甘肃省",
    "city": "庆阳市"
  },
  {
    "name": "天水师范学院",
    "department": "甘肃省",
    "city": "天水市"
  },
  {
    "name": "河西学院",
    "department": "甘肃省",
    "city": "张掖市"
  },
  {
    "name": "兰州财经大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "西北民族大学",
    "department": "国家民委",
    "city": "兰州市"
  },
  {
    "name": "甘肃政法大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "甘肃民族师范学院",
    "department": "甘肃省",
    "city": "甘南藏族自治州"
  },
  {
    "name": "兰州文理学院",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "甘肃医学院",
    "department": "甘肃省",
    "city": "平凉市"
  },
  {
    "name": "兰州工业学院",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "兰州石化职业技术大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "兰州工商学院",
    "department": "甘肃省教育厅",
    "city": "兰州市"
  },
  {
    "name": "兰州资源环境职业技术大学",
    "department": "甘肃省",
    "city": "兰州市"
  },
  {
    "name": "兰州博文科技学院",
    "department": "甘肃省教育厅",
    "city": "兰州市"
  },
  {
    "name": "兰州信息科技学院",
    "department": "甘肃省教育厅",
    "city": "兰州市"
  },
  {
    "name": "青海大学",
    "department": "青海省",
    "city": "西宁市"
  },
  {
    "name": "青海师范大学",
    "department": "青海省",
    "city": "西宁市"
  },
  {
    "name": "青海民族大学",
    "department": "青海省",
    "city": "西宁市"
  },
  {
    "name": "青海大学昆仑学院",
    "department": "青海省教育厅",
    "city": "西宁市"
  },
  {
    "name": "宁夏大学",
    "department": "宁夏回族自治区",
    "city": "银川市"
  },
  {
    "name": "宁夏医科大学",
    "department": "宁夏回族自治区",
    "city": "银川市"
  },
  {
    "name": "宁夏师范学院",
    "department": "宁夏回族自治区",
    "city": "固原市"
  },
  {
    "name": "北方民族大学",
    "department": "国家民委",
    "city": "银川市"
  },
  {
    "name": "宁夏理工学院",
    "department": "宁夏回族自治区教育厅",
    "city": "石嘴山市"
  },
  {
    "name": "宁夏大学新华学院",
    "department": "宁夏回族自治区教育厅",
    "city": "银川市"
  },
  {
    "name": "银川能源学院",
    "department": "宁夏回族自治区教育厅",
    "city": "银川市"
  },
  {
    "name": "银川科技学院",
    "department": "宁夏回族自治区教育厅",
    "city": "银川市"
  },
  {
    "name": "新疆大学",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "塔里木大学",
    "department": "新疆生产建设兵团",
    "city": "阿拉尔市"
  },
  {
    "name": "新疆农业大学",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "石河子大学",
    "department": "新疆生产建设兵团",
    "city": "石河子市"
  },
  {
    "name": "新疆医科大学",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "新疆师范大学",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "喀什大学",
    "department": "新疆维吾尔自治区",
    "city": "喀什地区"
  },
  {
    "name": "伊犁师范大学",
    "department": "新疆维吾尔自治区",
    "city": "伊犁哈萨克自治州"
  },
  {
    "name": "新疆财经大学",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "新疆艺术学院",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "新疆工程学院",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "昌吉学院",
    "department": "新疆维吾尔自治区",
    "city": "昌吉回族自治州"
  },
  {
    "name": "新疆警察学院",
    "department": "新疆维吾尔自治区",
    "city": "乌鲁木齐市"
  },
  {
    "name": "新疆理工学院",
    "department": "新疆维吾尔自治区",
    "city": "阿克苏地区"
  },
  {
    "name": "新疆农业大学科学技术学院",
    "department": "新疆维吾尔自治区教育厅",
    "city": "乌鲁木齐市"
  },
  {
    "name": "新疆第二医学院",
    "department": "新疆维吾尔自治区",
    "city": "克拉玛依市"
  },
  {
    "name": "新疆科技学院",
    "department": "新疆维吾尔自治区",
    "city": "巴音郭楞蒙古自治州"
  },
  {
    "name": "新疆政法学院",
    "department": "新疆生产建设兵团",
    "city": "图木舒克市"
  },
  {
    "name": "新疆天山职业技术大学",
    "department": "新疆维吾尔自治区教育厅",
    "city": "乌鲁木齐市"
  }
];