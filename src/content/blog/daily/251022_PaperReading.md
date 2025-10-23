---
title: "PaperReading"
publishDate: 2025-10-12
updatedDate: 2025-10-22
description: 'Utilize Model'
tags:
  - PaperReading
  - Sequential Recommendation
  - Utilize
---

## TedRec-RUC-Model-Utilize

> 融合文本特征与ID特征

问题：直接融合的方式只在物品级别上进行融合，无法在注意力交互之前，在同一序列的其他位置使用

解决：利用TedRec方法（**Te**xt-I**D**），全局整合上下文，实现序列级语义融合

具体实现：
1. 对 text embeddings 和 ID embeddings 做傅里叶变换，将全局时域序列转换到频域，再简单的进行乘法融合特征即可（频域相乘等效于时域卷积）

2. 使用 mixture-of-experts (MoE) 调制方法给文本位置信息，提升融合性能

## Latent Relation Discovery (LRD)

> 序列推荐建模：
> 传统：项目之间的隐式协同过滤
> 现代：显式地将项目关系加入用户历史序列的建模中，大多关系来自知识图谱
> Relation-aware Recommendation

问题：依赖于人工预定义的关系。存在稀疏性问题。泛化能力差。

解决：关系感知序列推荐框架

不靠预定义，用 LLM 来挖掘关系，用自然语言，描述物品间的关系

具体：
1. LLM 获取物品的语言知识表示
2. 输入基于 DVAE 的潜在关系发现模块
3. 自监督关系发现任务与推荐任务一起优化

详细分析：

关系存储在知识图谱中，知识图谱依赖于人工预定义的关系，稀疏
——关系（边）稀疏，物品数据（点）稀疏

### 两个路径（任务）：

**路径一：** Item Embedding
物品ID → 嵌入层 → 物品嵌入向量 (v_i, v_j) → 知识图谱交互

**路径二：** LLM-based Relation Extraction
物品 → LLM → 语言知识表示 (e_i, e_j) → 关系提取模块 → 潜在关系 r

**Item Reconstruction Module：**

输入：物品嵌入 (v_i, v_j) + 提取的关系 r
基于目标物品和关系来重构历史物品


## LSVCR

> Joint Video and Comment Recommendation

问题：现有推荐系统主要关注用户与视频的交互行为，忽略了评论内容和交互在用户偏好建模中的作用

解决：LSVCR (Large Language Models for Sequential Video and Comment Recommendation)

利用用户与视频和评论的交互历史，联合进行个性化视频和评论推荐

### 架构设计：

**双组件架构：**
1. **序列推荐 (SR) 模型**：作为主要推荐骨干（部署时保留）
2. **补充大语言模型 (LLM) 推荐器**：更好地捕获异构交互行为中的潜在用户偏好（部署时丢弃）

### 两阶段训练范式：

**第一阶段：个性化偏好对齐**
- 目标：对齐两个组件的偏好表示
- 作用：增强SR模型的语义理解能力

**第二阶段：推荐导向微调**
- 目标：根据特定目标微调对齐增强的SR模型
- 作用：优化最终推荐性能

### 技术优势：

1. **异构数据融合**：同时建模视频和评论交互
2. **高效部署**：训练时使用LLM增强，部署时只保留轻量SR模型
3. **语义增强**：通过LLM提升传统推荐模型的语义理解能力

### 实验结果：
- 在快手平台在线A/B测试验证
- 评论观看时间累计提升4.13%



## Tolearn: 

- MoE: https://zhuanlan.zhihu.com/p/542465517
- SASRec
- DVAE: 离散状态变分自编码器
- LSTM, GRU, seq2seq……
- Relation-aware Recommendation, 显式