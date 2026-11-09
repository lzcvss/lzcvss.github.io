# 科研与职业规划工作台

工作台是现有 `lzcvss.github.io` 网站的 `/workbench/` 子路径，不创建另一站点。原主页保留既有章节和实验数值，增加工作台入口与历史记录核查说明；原论文占位项明确标为写作中，未知链接改为待补充。

## 记录与来源

- 正式数据：`workbench/data/workbench.json`，版本为 `schemaVersion: 1`。
- 包含 `projects`、`experiments`、`papers`、`writing`、`opportunities`、`plans`、`changelog`。
- 未知文本和数值存 `null`，界面显示“待补充”，缺失指标不绘为 0。
- 初始实验只迁入原主页 commit `4b111bbc52a7e19ea19a83902c153b5c09881e78` 的记录。没有复核原日志，因此统一标记“待核查”。Cityscapes 原主页未明确写模块组合，因此 variant 为 null，不擅自认定为联合模型。
- 15 个数据集 / 变体组合只是登记位置，不代表未完成训练。论文条目仅为待核查阅读线索，不认定会议、题名、公式或增益。岗位与招生不预填虚构记录。
- 初始任务阶段、优先级和本周计划是可编辑建议；没有虚构截止日期。

## 日常更新

1. 在相应模块新增或编辑记录，保存到本机 IndexedDB 草稿。
2. 在“数据与同步”导出 JSON 备份，或导入经过校验的同格式数据。导入按 ID 合并；需要确认才更新相同 ID；不会删除未包含的记录。
3. 通过有本仓库 Contents 读写权限的 GitHub fine-grained token 发布。凭证只存在于当次请求的内存中，不保存。另一种方式是导出后通过 GitHub 编辑正式 JSON。
4. 同步进行按记录、按字段的三方合并。冲突时停止；不强制覆盖。GitHub Contents API 使用文件 SHA 乐观锁，再提交到原 main 分支。
5. 正式 JSON 提交触发原 GitHub Pages 发布。其他设备在发布后可读取。草稿只属于当前浏览器，不宣称自动云同步。

仓库和网站是公开的。只有经检查可公开的记录才应同步发布。现有 ChatGPT 定时监测未被本次修改，也尚未自动写入此文件。每周可把核查后的成果手动录入或导入。

## 评测纪律

横向对比只有在同数据集、同非空 protocol ID 且所有结果已核查时显示差值。协议 ID 应代表数据划分、分辨率、单/多尺度、翻转、标签映射、指标实现等完整可比条件。mBIoU、BIoU、F1 独立保存，必须说明边界宽度及聚合定义。图表仅连接同运行 ID 的实际指标。

## 开发与检查

无需依赖安装。`node --test workbench/tests/model.test.mjs` 检查记录校验、未知值、协议保护、筛选、导入和冲突合并；`node build.mjs` 生成用于 Sites 预览的 dist。GitHub Pages 继续从仓库根目录提供原网站，不使用 dist 发布。

前端为 HTML/CSS/原生 ES modules；数据中任何文本渲染均转义，外链只允许 http(s)。CSP 限制代码来源，GitHub 请求只发往 api.github.com。CSV 导出防止电子表格公式注入。
