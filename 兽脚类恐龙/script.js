const dinoData = [
  {
    genus: "暴龙",
    latinGenus: "Tyrannosaurus",
    aliases: ["霸王龙", "T-Rex", "君王暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "君王暴龙",
        latin: "Tyrannosaurus rex",
        size: "12m | 8t",
        period: "68-66Ma",
        periodKey: "cretaceous",
        region: "北美洲，兰斯组、地狱溪组等",
        clue: "'tyrant lizard'  “暴君蜥蜴”",
      },
      {
        name: "麦克雷暴龙",
        latin: "Tyrannosaurus mcraeensis",
        size: "12m | 8t",
        period: "~73-71Ma",
        periodKey: "cretaceous",
        region: "美国新墨西哥州，霍尔湖组。",
        clue: "霸王龙最亲近的“长辈”",
        notes: "2024年新命名。",
      },
    ],
  },
  {
    genus: "特暴龙",
    latinGenus: "Tarbosaurus",
    aliases: ["勇士特暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "勇士特暴龙",
        latin: "Tarbosaurus bataar",
        size: "10m | 5t",
        period: "~70Ma",
        periodKey: "cretaceous",
        region: "蒙古与北中国；纳摩盖吐组、园圃组、秋扒组等",
        clue: "'alarming lizard'  “令人惊恐的蜥蜴”",
      },
    ],
  },
  {
    genus: "诸城暴龙",
    latinGenus: "Zhuchengtyrannus",
    aliases: ["巨型诸城暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "巨型诸城暴龙",
        latin: "Zhuchengtyrannus magnus",
        size: "10.5m | 5.5t",
        period: "~73Ma",
        periodKey: "cretaceous",
        region: "中国山东，王氏群组",
        clue: "“诸城的暴君”",
      },
    ],
  },
  {
    genus: "惧龙",
    latinGenus: "Daspletosaurus",
    aliases: ["恶霸龙", "可畏龙", "强健惧龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "强健惧龙",
        latin: "Daspletosaurus torosus",
        size: "9m | 3t",
        period: "77-76Ma",
        periodKey: "cretaceous",
        region: "加拿大艾伯塔；老人组",
        clue: "'frightful lizard'  “可怕的蜥蜴”",
      },
      {
        name: "霍氏惧龙",
        latin: "D. horneri",
        size: "9m | 3t",
        period: "~76.5Ma",
        periodKey: "cretaceous",
        region: "加拿大蒙大拿州，上双麦迪逊组",
        clue: "'frightful lizard'  “可怕的蜥蜴”",
      }, //这个年代只包括了CMN8506，CMN350可能也是或是惧龙，时间在75-75.6Ma之间
      //威尔逊惧龙Daspletosaurus wilsoni有效性存疑，惧龙似乎有一个未命名种来自恐龙公园组化石
    ],
  },
  {
    genus: "白熊龙",
    latinGenus: "Nanuqsaurus",
    aliases: ["霍氏白熊龙", "北极熊龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "霍氏白熊龙",
        latin: "Nanuqsaurus hoglundi",
        size: "8-9m | 2-3t", //曾经认为是5-6米，但是现在被认为是未成年个体
        period: "~73Ma",
        periodKey: "cretaceous",
        region: "阿拉斯加，王子溪组",
        clue: "'polar bear lizard' “北极熊蜥蜴”",
      },
    ],
  },
  {
    genus: "力怖龙",
    latinGenus: "Dynamoterror",
    aliases: ["惧力龙", "蛮霸龙", "强惧龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "统治者力怖龙",
        latin: "Dynamoterror dynastes",
        size: "9m | 2.5t",
        period: "~78Ma",
        periodKey: "cretaceous",
        region: "新墨西哥州，梅尼菲组",
        clue: "力量+恐怖",
      },
    ],
  },
  {
    genus: "血王龙",
    latinGenus: "Lythronax",
    aliases: ["西南血王龙", "血腥之王"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "西南血王龙",
        latin: "Lythronax argestes",
        size: "6-8m | 0.6-2.5t", // 普林斯顿给出5米，500千克。但是经过调查认为正模是未成年体，基于此的评估过于保守
        period: "~80.6-79.9Ma",
        periodKey: "cretaceous",
        region: "美国犹他州，瓦威普组",
        clue: "'king of gore' “血腥之王”",
      },
    ],
  },
  {
    genus: "怪猎龙",
    latinGenus: "Teratophoneus",
    aliases: ["柯氏怪猎龙", "锯齿暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "柯氏怪猎龙",
        latin: "Teratophoneus curriei",
        size: "8m | 2.5t", // 6米为亚成年标本，成年推测可达8米以上
        period: "~77-76Ma",
        periodKey: "cretaceous",
        region: "美国犹他州，凯帕罗维兹组",
        clue: "'monstrous murderer' “怪兽凶手”",
      },
    ],
  },
  {
    genus: "虐龙",
    latinGenus: "Bistahieversor",
    aliases: ["希氏虐龙", "比斯提毁灭龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"], //这个分类有争议。可能属于暴龙类。骨骼证据尚不足以复原。
    species: [
      {
        name: "希氏虐龙",
        latin: "Bistahieversor sealeyi",
        size: "8m | 2.5t",
        period: "~74.5Ma",
        periodKey: "cretaceous",
        region: "美国新墨西哥州，科特兰组。",
        clue: "'destroyer of Bisti' “比斯提的毁灭者”",
      },
    ],
  },
  {
    genus: "死神龙",
    latinGenus: "Thanatotheristes",
    aliases: ["希格斯死神龙", "死掠龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "希格斯死神龙",
        latin: "Thanatotheristes degrootorum",
        size: "8m | 2t",
        period: "~79.5Ma",
        periodKey: "cretaceous",
        region: "加拿大艾伯塔省",
        clue: "'reaper of death' “死亡收割者”",
      },
    ],
  },
  {
    genus: "分支龙",
    latinGenus: "Alioramus",
    aliases: ["歧龙", "阿利奥拉龙", "遥远分支龙", "阿尔泰分支龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "遥远分支龙",
        latin: "Alioramus remotus",
        size: "5-6m | 0.7t",
        period: "~70Ma",
        periodKey: "cretaceous",
        region: "蒙古，纳摩盖吐组",
        clue: "'different branch' “不同的分支”",
      },
      {
        name: "阿尔泰分支龙",
        latin: "Alioramus altai",
        size: "5-6m | 0.7t",
        period: "~70Ma",
        periodKey: "cretaceous",
        region: "蒙古，纳摩盖吐组",
        clue: "以发现地阿尔泰山命名",
      },
    ],
  },
  {
    genus: "虔州龙",
    latinGenus: "Qianzhousaurus",
    aliases: ["中华虔州龙", "匹诺曹暴龙", "长吻暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "中华虔州龙",
        latin: "Qianzhousaurus sinensis",
        size: "8m | 0.8-1t", //正模6.3是亚成年
        period: "72-66Ma",
        periodKey: "cretaceous",
        region: "中国江西，南雄组",
        clue: "'Qianzhou tyrant' “赣州的暴君”",
      },
    ],
  },
  {
    genus: "亚洲暴龙",
    latinGenus: "Asiatyrannus",
    aliases: ["徐氏亚洲暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "徐氏亚洲暴龙",
        latin: "Asiatyrannus xui",
        size: "4m | 0.5t",
        period: "~69-66Ma",
        periodKey: "cretaceous",
        region: "中国江西，南雄组",
        clue: "2024年新命名，以古生物学家徐星命名",
      },
    ],
  },
  {
    genus: "屿峡龙",
    latinGenus: "Labocania",
    aliases: ["拉博坎龙", "异常龙", "异常屿峡龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "异常屿峡龙",
        latin: "Labocania anomala",
        size: "7-8m | 1.5-2t",
        period: "~73Ma",
        periodKey: "cretaceous",
        region: "墨西哥下加利福尼亚州，红河口组",
        clue: "来自红色河口的“异常”掠食者",
      },
      {
        name: "阿氏屿峡龙",
        latin: "Labocania aguillonae",
        size: "10m | 3.5t",
        period: "~72.5Ma",
        periodKey: "cretaceous",
        region: "墨西哥科阿韦拉州，普韦布洛山组",
        clue: "2024年新种，墨西哥发现的最大暴龙类",
      },
    ],
  },
  {
    genus: "矮暴龙",
    latinGenus: "Nanotyrannus",
    aliases: ["兰斯矮暴龙", "简", "克利夫兰暴龙"],
    taxonomy: ["暴龙超科", "暴龙科", "暴龙亚科"],
    species: [
      {
        name: "兰斯矮暴龙",
        latin: "Nanotyrannus lancensis",
        size: "5m | 0.6-0.9t",
        period: "68-66Ma",
        periodKey: "cretaceous",
        region: "北美洲，兰斯组、地狱溪组",
        clue: "'dwarf tyrant' “矮小的暴君”",
      },
    ],
  },
  {
    genus: "阿尔伯塔龙",
    latinGenus: "Albertosaurus",
    aliases: ["亚伯达龙", "肉食艾伯塔龙", "艾伯塔龙"],
    taxonomy: ["暴龙超科", "暴龙科", "阿尔伯塔龙亚科"], //曾经蛇发女怪龙被人归入阿尔伯塔龙
    species: [
      {
        name: "肉食艾伯塔龙",
        latin: "Albertosaurus sarcophagus",
        size: "8-9m | 1.7-2.5t",
        period: "71-68Ma",
        periodKey: "cretaceous",
        region: "加拿大艾伯塔省，马蹄峡谷组",
        clue: "因发现于加拿大艾伯塔省而得名",
      },
    ],
  },
  {
    genus: "蛇发女怪龙",
    latinGenus: "Gorgosaurus",
    aliases: ["戈尔贡龙", "平衡艾伯塔龙"],
    taxonomy: ["暴龙超科", "暴龙科", "阿尔伯塔龙亚科"],
    species: [
      {
        name: "平衡蛇发女怪龙",
        latin: "Gorgosaurus libratus",
        size: "8-9m | 2-2.5t",
        period: "76.6-75.1Ma",
        periodKey: "cretaceous",
        region: "北美西部，恐龙公园组",
        clue: "'fierce lizard' “凶猛的蜥蜴”,名字源于希腊神话",
      },
    ],
  },
  //金刚口龙可能也该放在暴龙科，但是其分类实在是不确定，现在先不加入
  {
    genus: "阿巴拉契亚龙",
    latinGenus: "Appalachiosaurus",
    aliases: ["蒙氏阿巴拉契亚龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    species: [
      {
        name: "蒙氏阿巴拉契亚龙",
        latin: "Appalachiosaurus montgomeriensis",
        size: "7-8m | 1.8-2t",
        period: "~77Ma",
        periodKey: "cretaceous",
        region: "美国阿拉巴马州，迪莫波利斯白垩岩组",
        clue: "来自“阿巴拉契亚”大陆的暴龙类",
      },
    ],
  },
  {
    genus: "伤龙",
    latinGenus: "Dryptosaurus",
    aliases: ["异鹰爪龙", "鹰爪龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    species: [
      {
        name: "鹰爪伤龙",
        latin: "Dryptosaurus aquilunguis",
        size: "7.5m | 1.5t",
        period: "~67Ma",
        periodKey: "cretaceous",
        region: "美国新泽西州，新埃及组",
        clue: "'tearing lizard' “撕裂蜥蜴”，以巨大的指爪闻名",
      },
    ],
  },
  {
    genus: "雄关龙",
    latinGenus: "Xiongguanlong",
    aliases: ["白魔雄关龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    species: [
      {
        name: "白魔雄关龙",
        latin: "Xiongguanlong baimoensis",
        size: "4-5m | 270-300kg",
        period: "112-105Ma",
        periodKey: "cretaceous",
        region: "中国甘肃省，新民堡群下沟组",
        clue: "'Grand Pass dragon' “来自雄关（嘉峪关）的龙”",
      },
    ],
  },
  {
    genus: "晋北龙",
    latinGenus: "Jinbeisaurus",
    aliases: ["王氏晋北龙", "晋北之龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    //在最新的关于王子龙和纳米暴龙有效性的研究中（Voris 等人），晋北龙的正模标本可能是一个更衍生（进步）的暴龙亚科的未成年个体。
    // 如果这一观点被广泛接受，它的分类可能会进一步向暴龙科靠拢。
    species: [
      {
        name: "王氏晋北龙",
        latin: "Jinbeisaurus wangi",
        size: "5-6m | 0.8-1.2t",
        period: "99-71Ma",
        periodKey: "cretaceous",
        region: "中国山西省，灰泉堡组",
        clue: "'Northern Shanxi lizard' “山西北部的蜥蜴”",
      },
    ],
  },
  {
    genus: "郊狼暴龙",
    latinGenus: "Suskityrannus",
    aliases: ["苏斯基暴龙", "祖尼暴龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    species: [
      {
        name: "哈氏郊狼暴龙",
        latin: "Suskityrannus hazelae",
        size: "2.7-3m | 20-40kg",
        period: "92Ma",
        periodKey: "cretaceous",
        region: "美国新墨西哥州，莫雷诺山组", //Moreno Hill Formation棕山组
        clue: "'Coyote tyrant' “郊狼般的暴君”",
      },
    ],
  },
  {
    genus: "帖木儿龙",
    latinGenus: "Timurlengia",
    aliases: ["帖木儿龙", "帖木儿暴龙"],
    taxonomy: ["暴龙超科", "真暴龙类"],
    species: [
      {
        name: "真谛帖木儿龙",
        latin: "Timurlengia euotica",
        size: "3-4m | 170-270kg",
        period: "92-90Ma",
        periodKey: "cretaceous",
        region: "乌兹别克斯坦，比塞克地层",
        clue: "'Tamerlane's dragon' “帖木儿的龙”",
      },
    ],
  },
  {
    genus: "金刚口龙",
    latinGenus: "Chingkankousaurus",
    aliases: ["金刚山龙"],
    taxonomy: ["暴龙超科", "泛暴龙类", "真暴龙类?"], // 传统上视为基干暴龙超科，现代研究倾向于真暴龙类
    species: [
      {
        name: "江氏金刚口龙",
        latin: "Chingkankousaurus fragilis",
        size: "5m | 0.7t", // 推测体型，与独龙、王子龙相当
        period: "73-70Ma", // 晚白垩世坎帕阶至马斯特里赫特阶
        periodKey: "cretaceous",
        region: "中国山东省，王氏群", //Wangshi Group
        clue: "'Chingkankou lizard' “来自莱阳金刚口的龙”",
        //1958年由杨钟健先生命名。化石材料主要为部分下颌骨和牙齿。长期以来因化石破碎被视为‘疑名’，但随着莱阳地区新化石的发现，研究者开始重新审视它。
        // 它代表了晚白垩世东亚地区中型真暴龙类的多样性，可能与独龙或王子龙具有较近的亲缘关系。
      },
    ],
  },
  {
    genus: "史托龙",
    latinGenus: "Stokesosaurus",
    aliases: ["斯托克斯龙"],
    taxonomy: ["暴龙超科", "史托龙科"],
    species: [
      {
        name: "克里夫兰史托龙",
        latin: "Stokesosaurus clevelandi",
        size: "3-4m | 150-200kg",
        period: "155-150Ma",
        periodKey: "jurassic",
        region: "美国犹他州，莫里逊组",
        clue: "“威廉·史托克的蜥蜴”",
      },
    ],
  },
  {
    genus: "侏罗暴龙",
    latinGenus: "Juratyrant",
    aliases: ["兰氏侏罗暴龙"],
    taxonomy: ["暴龙超科", "史托龙科"],
    species: [
      {
        name: "兰氏侏罗暴龙",
        latin: "Juratyrant langhami",
        size: "5m | 300kg",
        period: "~149Ma",
        periodKey: "jurassic",
        region: "英国，基默里奇黏土组",
        clue: "“侏罗纪的暴君”",
      },
    ],
  },
  {
    genus: "始暴龙",
    latinGenus: "Eotyrannus",
    aliases: ["黎明暴龙"],
    taxonomy: ["暴龙超科", "史托龙科"],
    species: [
      {
        name: "朗氏始暴龙",
        latin: "Eotyrannus lengi",
        size: "4-4.5m | 0.2t",
        period: "130Ma",
        periodKey: "cretaceous",
        region: "英国怀特岛，威塞克斯组",
        clue: "'dawn tyrant' “黎明的暴君”",
      },
    ],
  },
  {
    genus: "祖母暴龙",
    latinGenus: "Aviatyrannis",
    aliases: ["始祖暴龙"],
    taxonomy: ["暴龙超科", "泛暴龙类", "史托龙科?"],
    species: [
      {
        name: "侏罗祖母暴龙",
        latin: "Aviatyrannis jurassica",
        size: "1m | 5kg",
        period: "155-152Ma",
        periodKey: "jurassic",
        region: "葡萄牙，阿尔科巴萨组",
        clue: "'grandmother tyrant' “暴龙的祖母”",
      },
    ],
  },
  {
    genus: "独龙",
    latinGenus: "Alectrosaurus",
    aliases: ["阿莱克特龙", "单身龙", "阿莱龙"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "奥氏独龙",
        latin: "Alectrosaurus olseni",
        size: "5-6m | 0.6-1t",
        period: "95-85Ma",
        periodKey: "cretaceous",
        region: "蒙古、中国内蒙古，二连组",
        clue: "'unmarried lizard' “独身的蜥蜴”",
      },
    ],
  },
  {
    genus: "帝龙",
    latinGenus: "Dilong",
    aliases: ["奇异帝龙"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "奇异帝龙",
        latin: "Dilong paradoxus",
        size: "1.6m | 15kg",
        period: "126-123Ma",
        periodKey: "cretaceous",
        region: "中国辽宁省，义县组",
        clue: "'emperor dragon' “奇异的帝王之龙”",
      },
    ],
  },
  {
    genus: "桑塔纳盗龙",
    latinGenus: "Santanaraptor",
    aliases: ["桑塔纳掠夺者"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "普氏桑塔纳盗龙",
        latin: "Santanaraptor placidus",
        size: "1.5m | 25kg",
        period: "112-108Ma",
        periodKey: "cretaceous",
        region: "巴西塞阿腊州，罗穆阿尔多组",
        clue: "'Santana Formation robber' “桑塔纳地层的盗贼”",
      },
    ],
  },
  {
    genus: "小掠龙",
    latinGenus: "Bagaraatan",
    aliases: ["巴嘎拉坦龙"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "奥氏小掠龙",
        latin: "Bagaraatan ostromi",
        size: "3-4m | 200kg",
        period: "~70Ma",
        periodKey: "cretaceous",
        region: "蒙古南戈壁省，纳摩盖吐组",
        clue: "'small hunter' “小猎人”",
      },
    ],
  },
  {
    genus: "王子龙",
    latinGenus: "Khankhuuluu",
    aliases: ["罕库鲁龙", "蒙古王子龙"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "蒙古王子龙",
        latin: "Khankhuuluu mongoliensis",
        size: "4-5m | 750kg",
        period: "96-86Ma",
        periodKey: "cretaceous",
        region: "蒙古东南部，巴彦思楞组",
        clue: "'Dragon Prince' “蒙古的龙之王子”",
      },
    ],
  },
  {
    genus: "厄兆龙",
    latinGenus: "Moros",
    aliases: ["莫罗斯龙", "恶兆龙", "噩兆龙", "摩罗斯龙", "无畏莫罗斯龙"],
    taxonomy: ["暴龙超科", "泛暴龙类"],
    species: [
      {
        name: "无畏厄兆龙",
        latin: "Moros intrepidus",
        size: "1.2m | 78kg",
        period: "96Ma",
        periodKey: "cretaceous",
        region: "美国犹他州，雪松山组",
        clue: "'Harbinger of doom' “末日的预兆”",
      },
    ],
  },
  {
    genus: "似提姆龙",
    latinGenus: "Timimus",
    aliases: ["提姆龙"],
    taxonomy: ["暴龙超科?", "泛暴龙类?"], //有可能在似鸟龙类
    species: [
      {
        name: "隐士似提姆龙",
        latin: "Timimus hermani",
        size: "2.5-3m | 60kg",
        period: "122-109Ma",
        periodKey: "cretaceous",
        region: "澳大利亚维多利亚州，奥特韦群",
        clue: "'Tim's mimic' “提姆的模仿者”",
      },
    ],
  },
  {
    genus: "冠龙",
    latinGenus: "Guanlong",
    aliases: ["五彩冠龙", "五彩龙", "五彩冠恐龙"],
    taxonomy: ["暴龙超科", "原角鼻龙科"],
    species: [
      {
        name: "五彩冠龙",
        latin: "Guanlong wucaii",
        size: "3m | 70-100kg",
        period: "161-159Ma",
        periodKey: "jurassic",
        region: "中国新疆，石树沟组",
        clue: "'Crowned dragon'，头顶有着极其夸张的空心骨冠",
      },
    ],
  },
  {
    genus: "哈卡斯龙",
    latinGenus: "Kileskus",
    aliases: ["奇利斯库龙", "大底哈卡斯龙", "蜥状龙"],
    taxonomy: ["暴龙超科", "原角鼻龙科"],
    species: [
      {
        name: "宝贵哈卡斯龙",
        latin: "Kileskus aristotocus",
        size: "3m | 100kg",
        period: "167Ma",
        periodKey: "jurassic",
        region: "俄罗斯西伯利亚，伊塔特组",
        clue: "'Lizard' 来自西伯利亚的“蜥蜴”",
      },
    ],
  },
  {
    genus: "原角鼻龙",
    latinGenus: "Proceratosaurus",
    aliases: ["前角鼻龙", "布氏原角鼻龙"],
    taxonomy: ["暴龙超科", "原角鼻龙科"],
    species: [
      {
        name: "布氏原角鼻龙",
        latin: "Proceratosaurus bradleyi",
        size: "3m | 100kg",
        period: "166Ma",
        periodKey: "jurassic",
        region: "英国，大卵石灰岩组",
        clue: "'Before Ceratosaurus' “角鼻龙之前”",
      },
    ],
  },
  {
    genus: "中国暴龙",
    latinGenus: "Sinotyrannus",
    aliases: ["华南龙", "大王中国暴龙"],
    taxonomy: ["暴龙超科", "原角鼻龙科"],
    species: [
      {
        name: "喀左中国暴龙",
        latin: "Sinotyrannus kazuoensis",
        size: "9-10m | 2.5t",
        period: "120Ma",
        periodKey: "cretaceous",
        region: "中国辽宁，九佛堂组",
        clue: "'Chinese tyrant' “中国的暴君”",
      },
    ],
  },
  {
    genus: "羽王龙",
    latinGenus: "Yutyrannus",
    aliases: ["羽暴龙"],
    taxonomy: ["暴龙超科", "原角鼻龙科"],
    species: [
      {
        name: "华丽羽王龙",
        latin: "Yutyrannus huali",
        size: "9m | 1.4t",
        period: "125Ma",
        periodKey: "cretaceous",
        region: "中国辽宁，义县组",
        clue: "'Feathered tyrant' “披羽毛的暴君”",
      },
    ],
  },
];

// 2. 演化树数据 (Phylogenetic Tree Data)
// 注意：这里的 name 必须与 dinoData 中的 genus 一致，才能实现联动
const evolutionData = {
  name: "暴龙超科",
  children: [
    {
      name: "原角鼻龙科",
      children: [
        { name: "哈卡斯龙" },
        { name: "原角鼻龙" },
        { name: "冠龙" },
        { name: "羽王龙" },
        { name: "中国暴龙" },
      ],
    },
    {
      name: "泛暴龙类",
      children: [
        { name: "祖母暴龙" },
        { name: "似提姆龙" },
        { name: "帝龙" },
        { name: "厄兆龙" },
        { name: "桑塔纳盗龙" },
        { name: "王子龙" },
        { name: "小掠龙" },
        { name: "独龙" },
        {
          name: "史托龙科",
          children: [
            { name: "史托龙" },
            { name: "侏罗暴龙" },
            { name: "始暴龙" },
          ],
        },
        {
          name: "真暴龙类", // Eutyrannosauria
          children: [
            { name: "雄关龙" },
            { name: "晋北龙" },
            { name: "郊狼暴龙" },
            { name: "帖木儿龙" },
            { name: "阿巴拉契亚龙" },
            { name: "伤龙" },
            { name: "金刚口龙" },
            {
              name: "暴龙科",
              children: [
                {
                  name: "阿尔伯塔龙亚科",
                  children: [{ name: "蛇发女怪龙" }, { name: "阿尔伯塔龙" }],
                },
                {
                  name: "暴龙亚科",
                  children: [
                    { name: "虔州龙" },
                    { name: "分支龙" },
                    { name: "血王龙" },
                    { name: "怪猎龙" },
                    { name: "屿峡龙" },
                    { name: "死神龙" },
                    { name: "惧龙" },
                    { name: "力怖龙" },
                    { name: "虐龙" },
                    { name: "特暴龙" },
                    { name: "诸城暴龙" },
                    { name: "亚洲暴龙" },
                    { name: "矮暴龙" },
                    { name: "白熊龙" },
                    { name: "暴龙" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let solvedCount = 0;
let timerInterval;
let seconds = 0;
let gameActive = true;

function toggleTreeModal(show) {
  const modal = document.getElementById("tree-modal");
  if (show) {
    modal.classList.add("open");
    if (document.querySelector("#tree-container svg") === null) {
      initTree();
    }
  } else {
    modal.classList.remove("open");
  }
}

// 3. D3 演化树渲染逻辑 (修复高度和计数逻辑)
function initTree() {
  const container = document.getElementById("tree-container");
  container.innerHTML = "";

  // --- 配置 ---
  const fixedDepthWidth = 160; // 横向间距
  const nodeVerticalSpacing = 10; // 修复：每个节点纵向占用的高度，防止太挤

  const root = d3.hierarchy(evolutionData);

  // 计算叶子数 (分母) 并初始化状态
  root.eachAfter((d) => {
    // 初始化解锁状态，用于防止重复计数
    d.data.isUnlocked = false;

    if (!d.children) {
      d.totalLeaves = 1;
    } else {
      d.totalLeaves = d.children.reduce(
        (sum, child) => sum + child.totalLeaves,
        0,
      );
    }
    d.foundLeaves = 0;
  });

  // 1. 计算最大深度 (决定 SVG 宽度)
  let maxDepth = 0;
  root.each((d) => {
    if (d.depth > maxDepth) maxDepth = d.depth;
  });
  const dynamicWidth = maxDepth * fixedDepthWidth + 300;

  // 2. 修复：计算总叶子节点数 (决定 SVG 高度)
  // 如果树很大，这个高度会超过容器高度，从而触发 CSS 的竖向滚动条
  const totalLeaves = root.leaves().length;
  const dynamicHeight = Math.max(550, totalLeaves * nodeVerticalSpacing);

  // 创建树布局
  const treeLayout = d3.tree().size([dynamicHeight - 60, dynamicWidth]);
  treeLayout(root);

  const svg = d3
    .select("#tree-container")
    .append("svg")
    .attr("width", dynamicWidth)
    .attr("height", dynamicHeight) // 应用动态高度
    .append("g")
    .attr("transform", "translate(60, 20)");

  // 强制修改横向坐标
  root.each((d) => {
    d.y = d.depth * fixedDepthWidth;
  });

  // 绘制连线
  svg
    .selectAll(".link")
    .data(root.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("id", (d) => `link-${d.target.data.name}`)
    .attr(
      "d",
      d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x),
    );

  // 绘制节点
  const node = svg
    .selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr(
      "class",
      (d) => "node " + (d.children ? "node-internal" : "node-leaf"),
    )
    .attr("id", (d) => `node-${d.data.name}`)
    .attr("transform", (d) => `translate(${d.y},${d.x})`);

  node.append("circle").attr("r", 3.5);

  node
    .append("text")
    .attr("dy", 3)
    .attr("x", (d) => (d.children ? -8 : 8))
    .style("text-anchor", (d) => (d.children ? "end" : "start"))
    .text((d) => d.data.name);

  // 进度条
  const internalNodes = node.filter((d) => d.children);
  const barWidth = 40;
  const barHeight = 4;

  internalNodes
    .append("rect")
    .attr("class", "progress-bar-bg")
    .attr("x", -barWidth)
    .attr("y", 8)
    .attr("width", barWidth)
    .attr("height", barHeight);

  internalNodes
    .append("rect")
    .attr("class", "progress-bar-fill")
    .attr("id", (d) => `progress-fill-${d.data.name}`)
    .attr("x", -barWidth)
    .attr("y", 12)
    .attr("width", 0)
    .attr("height", barHeight);

  internalNodes
    .append("text")
    .attr("class", "progress-text")
    .attr("id", (d) => `progress-text-${d.data.name}`)
    .attr("x", -barWidth / 2)
    .attr("y", 20)
    .style("text-anchor", "middle")
    .text((d) => `0/${d.totalLeaves}`);
}

// 修复：点亮节点的逻辑 (防止重复计数)
function unlockTreeNode(genusName) {
  const nodeSelection = d3.select(`#node-${genusName}`);

  if (!nodeSelection.empty()) {
    // 获取 D3 绑定的数据对象
    const currentNodeData = nodeSelection.datum();

    // 关键修复：如果这个节点已经被点亮过，直接返回，不做任何操作
    if (currentNodeData.data.isUnlocked) {
      return;
    }

    // 标记为已解锁
    currentNodeData.data.isUnlocked = true;
    nodeSelection.classed("active", true);

    // 向上遍历父节点并更新计数
    let pointer = currentNodeData;
    while (pointer.parent) {
      // 点亮连线
      d3.select(`#link-${pointer.data.name}`).classed("active", true);

      const parentData = pointer.parent;
      d3.select(`#node-${parentData.data.name}`).classed("active", true);

      // 增加计数 (因为有前面的 return 保护，这里只会在该属第一次被发现时执行)
      parentData.foundLeaves = (parentData.foundLeaves || 0) + 1;

      // 确保不超过分母 (兜底)
      if (parentData.foundLeaves > parentData.totalLeaves)
        parentData.foundLeaves = parentData.totalLeaves;

      // 更新进度条 UI
      const barWidth = 40;
      const progressRatio = parentData.foundLeaves / parentData.totalLeaves;
      d3.select(`#progress-fill-${parentData.data.name}`).attr(
        "width",
        barWidth * progressRatio,
      );
      d3.select(`#progress-text-${parentData.data.name}`).text(
        `${parentData.foundLeaves}/${parentData.totalLeaves}`,
      );

      pointer = pointer.parent;
    }
  }
}

// init() 函数和其他逻辑保持不变
// ...
// 确保 window.onload = init; 在最后
function init() {
  const grid = document.getElementById("dino-grid");
  grid.innerHTML = "";

  // 预先初始化树，这样 isUnlocked 状态会被重置
  initTree();

  solvedCount = 0;
  seconds = 0;
  gameActive = true;
  document.getElementById("score").textContent = "0";
  document.getElementById("dino-input").disabled = false;

  let totalCount = 0;
  dinoData.forEach((genusEntry) => {
    genusEntry.species.forEach((s) => {
      totalCount++;
      const card = document.createElement("div");
      card.className = "dino-card locked";
      card.id = `dino-${s.name}`;
      card.dataset.match = [
        genusEntry.genus,
        genusEntry.latinGenus,
        ...genusEntry.aliases,
      ]
        .join("|")
        .toLowerCase();

      // 这里之前的 .period-dot 逻辑是正确的，只要 CSS 变量回来了就能显示
      card.innerHTML = `
            <div class="taxonomy-tags">${genusEntry.taxonomy.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
            <div class="dino-header">
                <div style="flex:1">
                    <div class="hidden-placeholder">??????</div>
                    <div class="dino-name">${s.name}</div>
                    <div class="dino-latin">${s.latin}</div>
                </div>
                <div class="dino-img-box">
                    <img src="images/${genusEntry.genus}.png" class="dino-photo" id="img-${s.name}" onerror="tryNextFormat(this, '${genusEntry.genus}')">
                </div>
            </div>
            <div class="clues">
                <div style="margin-bottom:5px"><span class="period-dot" style="background:var(--${s.periodKey})"></span>${s.period} | ${s.region}</div>
                <div>📏 ${s.size}</div>
                <div style="margin-top:8px; border-top:1px solid #444; padding-top:8px; color:#888; font-style:italic">“${s.clue}”</div>
            </div>`;
      grid.appendChild(card);
    });
  });
  document.getElementById("total").textContent = totalCount;
  startTimer();
}

// 监听器等保持不变...
// ...
document.getElementById("dino-input").addEventListener("input", function (e) {
  if (!gameActive) return;
  const val = e.target.value.trim().toLowerCase();
  if (!val) return;
  document.querySelectorAll(".dino-card.locked").forEach((card) => {
    const matches = card.dataset.match.split("|");
    if (matches.includes(val)) {
      card.classList.remove("locked");
      card.classList.add("solved");
      solvedCount++;
      document.getElementById("score").textContent = solvedCount;
      e.target.value = "";
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      const genusName = matches[0];
      const genusData = dinoData.find(
        (d) =>
          d.genus.toLowerCase() === genusName ||
          d.aliases.some((a) => a.toLowerCase() === val),
      );
      if (genusData) unlockTreeNode(genusData.genus);
    }
  });
});

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    seconds++;
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    document.getElementById("timer").textContent = `${m}:${s}`;
  }, 1000);
}
function endGame() {
  gameActive = false;
  clearInterval(timerInterval);
  document.getElementById("dino-input").disabled = true;
  document.querySelectorAll(".dino-card.locked").forEach((card) => {
    card.classList.remove("locked");
    card.classList.add("missed");
  });
  alert(
    `挑战结束！你一共发现了 ${solvedCount} 种恐龙，用时 ${document.getElementById("timer").textContent}`,
  );
}
function restartGame() {
  if (confirm("确定要重新开始吗？")) init();
}
function tryNextFormat(imgElement, genus) {
  const currentSrc = imgElement.src;
  if (currentSrc.endsWith(".png")) imgElement.src = `images/${genus}.webp`;
  else if (currentSrc.endsWith(".webp")) imgElement.src = `images/${genus}.jpg`;
  else {
    imgElement.src =
      "https://img.icons8.com/ios-filled/50/c9a063/dinosaur-skull.png";
    imgElement.style.padding = "20px";
    imgElement.style.opacity = "0.2";
  }
}

window.onload = init;
