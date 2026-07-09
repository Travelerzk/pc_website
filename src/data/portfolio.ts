import {
  BarChart3,
  Boxes,
  ChartSpline,
  CircleGauge,
  Database,
  FileText,
  GitBranch,
  Layers3,
  LineChart,
  Network,
  Users
} from "lucide-react";

export const profile = {
  name: "陈梓康",
  englishName: "Zikang Chen",
  role: "数据产品经理",
  city: "深圳",
  email: "424043973@qq.com",
  headline: "专注海外营销经营分析、指标体系建设与数据平台从 0 到 1 落地。",
  summary:
    "现任美的集团家用空调事业部中级数据分析工程师，负责海外营销经营领域数据产品建设。擅长把复杂业务链路拆解成指标体系、数据结构和可落地的产品方案，推动跨部门项目从需求调研、原型方案到上线运营闭环。",
  tags: ["数据产品经理", "海外营销", "指标体系", "数据治理", "经营分析", "跨部门项目落地"]
};

export const metrics = [
  { label: "平台累计 PV", value: "35万+", note: "HUBBLE PRO 负责板块" },
  { label: "覆盖用户", value: "95%", note: "覆盖海外营销用户" },
  { label: "年节约工时", value: "5万+", note: "EPSI PSI 项目收益" },
  { label: "集团奖项", value: "2项", note: "年度优秀数字化项目" }
];

export const projects = [
  {
    id: "hubble",
    title: "HUBBLE PRO 经营决策中心",
    subtitle: "一站式海外营销数据运营解决方案",
    period: "2023.01 - 2023.10",
    role: "外销数据产品经理",
    icon: CircleGauge,
    problem:
      "海外营销经营数据分散，管理层、一线业务和职能团队缺少统一的经营监控、风险预警和分析入口。",
    actions: [
      "从 0 到 1 梳理以 KPI 为北极星指标的指标体系和底层数据结构",
      "覆盖客户管理、经营趋势、风险定位、应收库存、预算费用与因素分析",
      "输出分析方案并推动管理层到一线业务的日常使用"
    ],
    impact: ["累计 PV 35万+", "UV 490+", "覆盖海外营销 95% 用户", "减少 30min+/人天工作量"],
    keywords: ["指标体系", "经营分析", "风险预警", "财务在线化"]
  },
  {
    id: "epsi",
    title: "EPSI 海外营销 PSI 数据链路",
    subtitle: "订单与产品维度的端到端数据融合",
    period: "2023.11 - 至今",
    role: "外销数据产品经理",
    icon: GitBranch,
    problem:
      "海外营销订单流、产品、计划、财经等节点存在数据壁垒，PSI 链路缺少统一口径和端到端运营视角。",
    actions: [
      "横跨销售、产品、计划、财经等业务方完成场景调研与框架设计",
      "探查 15 个业务系统底层数据，覆盖 30+ 指标并制定口径统一规则",
      "输出销售运营日报、财经结算、零售运营分析等模块方案，推动 5 个子项目落地"
    ],
    impact: ["覆盖 300+ 用户", "节约工时 5万小时/年", "库存呆滞率降低 10%", "50+ 客户 PSI 数据线上化"],
    keywords: ["PSI", "数据融合", "口径治理", "端到端运营"]
  },
  {
    id: "midea-club",
    title: "Midea Club 运营决策平台",
    subtitle: "海外专业渠道突破的数据产品化",
    period: "2024.03 - 至今",
    role: "数据产品经理",
    icon: Users,
    problem:
      "Midea Club 安装管理 APP 积累了埋点和用户数据，但项目运营、生命周期管理与工单管理缺少决策平台支撑。",
    actions: [
      "围绕用户生命周期和核心工单管理设计底层数据结构，覆盖 20+ 指标",
      "建立用户运营体系，梳理销售链路全流程与供销关系管理视角",
      "作为项目经理推动数据应用侧分析看板落地"
    ],
    impact: ["安装商/安装工流失率下降 10%", "海外分公司出库扫码率提升 5%", "条码数据问题同比减少 10%", "集团年度优秀数字化项目"],
    keywords: ["用户生命周期", "埋点分析", "渠道运营", "项目管理"]
  }
];

export const experience = [
  {
    org: "美的集团股份有限公司",
    title: "中级数据分析工程师 / 数据产品经理",
    meta: "家用空调事业部 · 佛山 · 2022.05 - 至今",
    description:
      "负责海外营销经营领域，深度参与数字化平台 HUBBLE PRO 从 0 到 1 搭建，覆盖指标体系、分析方案、经营风险预警、数据治理与跨部门项目落地。"
  }
];

export const education = [
  {
    school: "香港理工大学",
    degree: "运筹学与风险分析 硕士",
    meta: "应用数学系 · 香港 · 2020.09 - 2022.03"
  },
  {
    school: "深圳大学",
    degree: "计算机科学与技术 本科",
    meta: "计算机与软件学院 · 深圳 · 2016.09 - 2020.06",
    note: "获得校级境外访学奖学金、计算机与软件学院院级境外交流奖学金"
  }
];

export const skills = [
  { icon: FileText, title: "产品方案", items: ["Axure", "Xmind", "原型设计", "口径文档"] },
  { icon: Database, title: "数据架构", items: ["数据治理", "指标体系", "底层数据结构", "埋点设计"] },
  { icon: Network, title: "业务协同", items: ["需求调研", "跨部门推进", "项目落地", "经营分析"] },
  { icon: LineChart, title: "分析场景", items: ["KPI 监控", "风险预警", "PSI 链路", "生命周期运营"] }
];

export const methodCards = [
  { icon: Layers3, label: "业务拆解", text: "从角色、流程、决策动作拆出关键场景。" },
  { icon: BarChart3, label: "指标建模", text: "统一口径、颗粒度、维度和指标血缘。" },
  { icon: Boxes, label: "产品落地", text: "用原型、文档和项目节奏推动上线闭环。" },
  { icon: ChartSpline, label: "效果复盘", text: "用覆盖率、效率、风险改善衡量产品价值。" }
];
