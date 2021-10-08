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
    <img src="/media/projects/Airfoil_Cd_Cl_graph.png" />
</figure>

회전익의 경우, 고정익과는 다르게 좌, 우의 블레이드에서 받는 양력이 다르다. 전진하는 블레이드(Advancing blade)는 상대적으로 작은 유속, 후퇴하는 블레이드(retreating blade)는 상대적으로 큰 유속 안에서 양력을 받기 때문이다. 이를 Dissymmetry of lift라고 한다. 이 때문에, 최근의 회전익 항공기들은 블레이드가 tilt운동이 가능하도록 설계하여 회전하면서 받음각(Angle of attack)을 조절한다.

따라서 우리는 aoa가 연속적으로 변하는 에어포일을 연구해 볼 필요가 있다. 위 그래프는 aoa가 5도와 25도 사이를 왕복할 떄 받는 Cd와 Cf를 CFD로 계산하여 도시한 것이다. (1) 이 연구를 따라해 보는 작은 목표를 세우고, 전산유체역학을 심도있게 공부하면서 하나씩 따라해봤다.

연구실 컴퓨터로 나름 열심히 계산을 돌렸고 결과를 얻었는데 ~~이미지는 왜 이것밖에 안남아있는걸까~~

<figure>
  <img src="/media/projects/NACA0012_aoa19.jpeg" />
</figure>

> _Pressure gradient and streamlines around NACA 0012 airfoil at AoA = 19°_

1. Pointwise 프로그램을 이용해 NACA 0012 및 그 파생형 Airfoil 주변에 C-grid, O-grid 격자를 생성.
1. Ansys Fluent 프로그램을 이용해 두 종류의 에어포일의 AoA를 바꿔가며 Cl, Cd를 계산.
1. aoa-Cl, Cd 그레프를 그려 reference data와 비교.

실험 결과를 분석해 보았더니, aoa가 13도 아래일때는 거의 일치했지만, aoa가 15°가 넘어가면서 경향성을 벗어나는 결과를 얻었다. 실험을 잘못 한 줄 알았지만, 사실 그 이유는 다른 곳에 있었다. 그 상황에서는 기존의 steady flow를 가정하고 풀던 방법이 아닌, unsteady flow를 가정한 새로운 조건 하에서 다른 방식의 CFD가 필요했던 것이었다. 아쉽게도 그 부분은 진행하지 못했다.

상당히 오랜 시간이 지나고 나서 기억을 더듬어 쓸려니까 빠진 부분이 너무 많다. CFD의 다양한 방식도 나름 독학했었늗네 다 까먹어버렸다.. ~~k-w인가 뭐였는데~~ 앞으로는 바로바로 기록을 해봐야겠다.

_(1) Al-Jaburi, Khider, and Daniel Feszty. "Passive flow control of dynamic stall via surface-based trapped vortex generators." Journal of the American Helicopter Society 63.3 (2018): 1-14._
