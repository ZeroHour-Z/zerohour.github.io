---
title: "PaperReading3"
publishDate: 2025-11-19
description: 'Paper Reading on Multi-behavior Recommendation'
tags:
  - PaperReading
  - Multi-behavior
  - Recommender System
---

# Multi-Behavior Recommendation: A Survey

三个步骤：

1. 数据建模：输入层表示多行为，数据结构（如图或序列）来表示多行为交互，捕获多行为的独特特征或协同作用
   - View-Specific Graphs：对每种行为类型进行单独建模
   - View-Unified Graph：多种行为类型统一到一个图中
   - View-Unified Sequences：多种行为类型统一到一个序列中
2. 编码框架
   - 并行，分别或同时处理各个行为，捕捉行为特定的特征
   - 串行序列编码：捕捉动态依赖，行为演变
3. 训练目标：优化的流程，可由目标引导
   - 主要训练目标：提升推荐准确率，通常基于采样策略
   - 辅助训练目标：改善潜在特征的质量，通过辅助任务和自监督学习

![image-20251119120529644](image-20251119120529644.png)

数据建模：

1. 行为特定图：保持不同行为类型的独特特征
   1. 无序
   2. 有序
2. 行为统一图：不同用户行为的交互协同
   1. 考虑边类型
   2. 不考虑边类型
3. 行为统一序列：用户行为动态变化
4. 超图，有向无环图，知识图谱

编码：

1. 并行：
   1. 无序行为特定图：每个特定行为的图单独编码，确保每个行为的单独特征不受到其他行为干扰
   2. 考虑边类型行为统一图：
2. 串行/顺序：
   1. 有序行为特定图：
   2. 不考虑边类型行为统一图：
   3. 行为统一序列：

训练：

1. 主要训练目标：设计损失函数，区分正负样本，确保正样本分数高于负样本。
2. 辅助训练目标：
   1. 辅助排名预测：目标行为和辅助行为联合学习
   2. 对比学习：
   3. 生成式学习：训练推荐系统预测被屏蔽的项目或行为

![image-20251119122733183](image-20251119122733183.png)

## EHCF

[Efficient Heterogeneous Collaborative Filtering without Negative Sampling for Recommendation](http://www.thuir.cn/group/~mzhang/publications/AAAI2020-Chenchong.pdf)

使用多行为异构数据

![image-20251120193830857](image-20251120193830857.png)

**Motivation：**

负采样：从未标记的数据中，抽取一部分作为负采样，高效，但采样有偏

非采样，全量训练，复杂

迁移，关联每个行为的预测，捕捉不同行为之间的复杂关系

**Methods：**

- 输入用户以及该用户的所有项目交互

- 将第一步的embedding加入共享层，为了方便建模所有行为类型

- 一共有k个行为，为每个行为学习一个预测层h(k)。不同行为的预测层应该彼此相关，对行为的预测依赖对其先前行为的预测（捕捉转移）

- 负样本的损失等于总的损失减去正样本的损失，最后多任务学习

## PKEF

[[2308.04807\] Parallel Knowledge Enhancement based Framework for Multi-behavior Recommendation](https://arxiv.org/abs/2308.04807)

**Motivation：**

多行为推荐框架：融合，使用网络建模用户不同行为之间的相关性；然后预测，多任务学习联合优化

- 数据不平衡
- 负迁移问题：多任务训练任务性能受到其他任务负面影响

![image-20251120184006794](image-20251120184006794.png)

## DA-GCN

Multi behavior recommendation with personalized directed acyclic behavior graphs TOIS24

## PO-GCN

Multi-behavior collaborative filtering with partial order graph convo lutional networks KDD24

## MB-STR

Multi-behavior sequential transformer recommender SIGIR22

## MBHT

Multi-behavior hypergraph enhanced transformer for sequential recommendation KDD22 

## BCIPM

Behavior-contextualized item preference modeling for multi-behavior recommendation SIGIR24

## MB-HGCN

A hierarchical graph convolutional network for multi-behavior recommendation arXiv:2306.10679

## MBSSL

Multi-behavior self-supervised learning for recommendation SIGIR23
