---
title: 'ML Library cheatsheet'
date: '2022-07-09'
template: 'post'
draft: false
slug: 'ml_library_cheatsheet'
category: 'Projects'
tags:
description: 'What I learned in Kaggle Pandas, Seaborn course'
socialImage: '/ryan.png'
---

# Pandas

**A DataFrame** is a table. It contains an array of individual *entries.*

row name을 `index = [’A’,’B’]`로 할당 가능

**A Series** is a sequence of data values, a single column of a DataFrame.

`index=[’A’,’B’],name=”SERIES NAME”`

`pd.read_csv(’’, index_col=0)` : index_col은 가져오지 않음.

`DataFrame.to_csv(’name.csv’)` : name.csv으로 저장

`DataFrame.shape` : 크기 m by n

`DataFrame.describe()` : count, mean, Q1, Q2, Q3…

`DataFrame.iloc[:, 0]` : Index - based selection. row first, column next.

`DataFrame.loc[: , ‘title’]` : Label - based selction.

`DataFrame.set_index[‘title’]` : index열의 이름을 붙여줌.

.loc[] 내에 조건을 주어 접근 가능, & , | 사용 가능

`isin` : `reviews.country.isin(['Italy', 'France'])`

`isnull | notnull` : `reviews.price.notnull()`

`DataFrame[’column_name’]` : 열 접근

`DataFrame.columns` : 칼럼 인덱스만 배열로 보여줌.

### “Summary Functions”

`Series.mean()`

`Series.unique()` : unique value array

`Series.value_counts()` : unique value와 그 빈도

### 열의 각 원소에 접근하는 방법 2가지

`Series.map(lambda p : ~~~ )` : 원소를 P로 매개변수화해서 접근

`DataFrame.apply(method, axis=”columns”)` : row를 변수로 받는 메소드

! 둘 다 새로운 DataFrame이나 Series를 리턴하며, 원래의 것을 변형시키지 않는다.

사실 이런 연산도 가능하다 :

```python
review_points_mean = reviews.points.mean()
reviews.points - review_points_mean
```

`DataFrame.groupby([’columnA,'columnB’])` : column의 value가 같은 데이터를 묶는다.

column이 여러개인 경우 Multi-index가 생성. 말그대로 index를 구성하는 데이터가 두개 이상.

multi-index를 풀려면 `.reset_index()`

`DataFrame.groupby().column.agg(['functionA','functionB']` : multi function

`DataFrame.sort_values(by=[’columnA’,'columnB'], ascending=Boolean)` : 데이터 순서 정렬

`DataFrame.sort_index()` : index순서로 정렬

`Series.dtype` : column의 data type

`Series.astype('type')` : column의 data type을 변환

! NaN은 float64타입으로 취급된다

`pd.isnull(DataFrame.column)` : column의 value = NaN인 row만 추출

`Series.fillna('something')` : 해당 column의 nan값을 something으로 바꿔줌

`Series.replace('value1','value2')` : 해당 column중 value1인 것들을 value2로 바꿈

`DataFrame.rename(columns={'before':'after'})`

`pd.concat([DF1,DF2])` : field(column)이 모두 동일한 두 DF를 합침

`DF1.join(DF2, lsuffix='', rsuffix='')` : index가 동일한 두 DF를 합침. lsuffix, rsuffix는 두 DF의 같은 column이 있을 때 column name 뒤에 추가됨

# Seaborn

`plt.figure(figsize=(14,6))` set size of chart

**Line Charts**

`sns.lineplot(data='', label='')`

**Bar Charts**

`sns.barplot(x=column, y=column)`

**Heatmap**

`sns.heatmap(data=data, annot=Boolean)` annot : cell 위에 숫자 표시 여부

**ScatterPlot**

`sns.scatterplot(x=columnA, y=columnB, hue?=columnC)` : hue에 넣은 column은 색으로 구분

`sns.regplot(x=columnA, y=columnB)` : regression line

`sns.lmplot(x=columnName, y=columnName, hue=columnName, data=data)`

**Histogram** : y축은 항상 count

`sns.histplot(column)`

**kernel density estimate (KDE)** **Plot :** smoothed histogram

`sns.kdeplot(data=column, shade=Boolean)` : 1D

`sns.jointplot(x=column, y=column, kind="kde")`

### Style

`sns.setstyle('option')`

(1)`"darkgrid"`
(2)`"whitegrid"`
(3)`"dark"`
(4)`"white"`
(5)`"ticks"`
