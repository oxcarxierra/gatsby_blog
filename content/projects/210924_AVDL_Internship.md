---
title: 'AVDL Internship'
date: '2021-02-24'
template: 'post'
draft: false
slug: 'AVDL Internship'
category: 'Engineering'
tags:
  - '전산유체역학'
  - '회전익기'
description: '회전익 항공기의 Airfoil을 Ansys Fluent 프로그램을 이용하여 해석해보았다'
socialImage: '/ryan.png'
---

20년 2학기, 유체역학을 수강하고 전산유체 분야가 재미있어 보여서 무작정 서울대학교 항공우주 비행체 설계 연구실(AVDL, 지도교수 이관중 교수님)에 인턴으로 지원하게 되었다. 감사하게도, 겨울방학동안 전산유체역학을 공부하고 CFD 프로그램중 하나인 Ansys Fluent를 박사과정 조교님께 배울 수 있었다.

<figure>
  <img src="/media/projects/NACA0012_aoa19.jpeg" />
</figure>

> _Pressure gradient and streamlines around NACA 0012 airfoil at AoA = 19°_

- Pointwise 프로그램을 이용해 NACA 0012 및 그 파생형 Airfoil 주변에 C-grid, O-grid 격자를 생성.
- Ansys Fluent 프로그램을 이용해 두 종류의 에어포일의 AoA를 바꿔가며 Cl, Cd를 계산.
- AoA가 15°가 넘어가면 unsteady flow를 가정한 새로운 조건 하에서 CFD가 필요함.
